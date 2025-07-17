import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db } from '@/lib/db';

if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('Required Stripe environment variables are not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

async function updateOrderStatus(paymentIntentId: string, status: string) {
  const order = await db.order.findFirst({
    where: { paymentId: paymentIntentId }
  });

  if (!order) {
    console.error(`Order not found for payment: ${paymentIntentId}`);
    return;
  }

  let orderStatus: string;
  switch (status) {
    case 'succeeded':
      orderStatus = 'PAID';
      break;
    case 'canceled':
      orderStatus = 'CANCELLED';
      break;
    case 'processing':
      orderStatus = 'PROCESSING';
      break;
    default:
      orderStatus = 'PENDING';
  }

  await db.order.update({
    where: { id: order.id },
    data: { status: orderStatus }
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await updateOrderStatus(paymentIntent.id, 'succeeded');
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        await updateOrderStatus(failedPayment.id, 'canceled');
        break;

      case 'payment_intent.processing':
        const processingPayment = event.data.object as Stripe.PaymentIntent;
        await updateOrderStatus(processingPayment.id, 'processing');
        break;

      case 'payment_intent.canceled':
        const canceledPayment = event.data.object as Stripe.PaymentIntent;
        await updateOrderStatus(canceledPayment.id, 'canceled');
        break;

      case 'charge.refunded':
        const charge = event.data.object as Stripe.Charge;
        if (charge.payment_intent) {
          await updateOrderStatus(charge.payment_intent.toString(), 'refunded');
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}