import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { StripePaymentService } from '@/lib/payment/stripe-payment-service';
import { paymentRequestSchema } from '@/lib/payment/payment-service';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined');
}

const stripeService = new StripePaymentService(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validatedData = paymentRequestSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Invalid request data', details: validatedData.error.errors },
        { status: 400 }
      );
    }

    // Verify order exists and belongs to user
    const order = await db.order.findUnique({
      where: {
        id: validatedData.data.order_id,
        userId: session.user.id
      }
    });

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found or unauthorized' },
        { status: 404 }
      );
    }

    const payment = await stripeService.createPayment({
      ...validatedData.data,
      customer_id: session.user.id
    });

    // Update order with payment information
    await db.order.update({
      where: { id: order.id },
      data: {
        paymentId: payment.id,
        status: 'PROCESSING'
      }
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error('Payment processing error:', error);
    return NextResponse.json(
      { error: 'Payment processing failed' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const paymentId = searchParams.get('id');

    if (paymentId) {
      const payment = await stripeService.getPayment(paymentId);
      if (!payment) {
        return NextResponse.json(
          { error: 'Payment not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(payment);
    }

    const payments = await stripeService.listPayments(session.user.id);
    return NextResponse.json(payments);
  } catch (error) {
    console.error('Payment retrieval error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve payment information' },
      { status: 500 }
    );
  }
}