import { PaymentService, PaymentDetails, PaymentRequest } from './payment-service';
import Stripe from 'stripe';

export class StripePaymentService implements PaymentService {
  private stripe: Stripe;

  constructor(apiKey: string) {
    this.stripe = new Stripe(apiKey, {
      apiVersion: '2023-10-16'
    });
  }

  private mapStripePaymentToPaymentDetails(payment: Stripe.PaymentIntent): PaymentDetails {
    return {
      id: payment.id,
      amount: payment.amount / 100, // Convert from cents to dollars
      currency: payment.currency,
      status: this.mapStripeStatus(payment.status),
      payment_method: 'stripe',
      created_at: new Date(payment.created * 1000),
      updated_at: new Date(),
      metadata: payment.metadata
    };
  }

  private mapStripeStatus(status: Stripe.PaymentIntent.Status): PaymentDetails['status'] {
    switch (status) {
      case 'requires_payment_method':
      case 'requires_confirmation':
      case 'requires_action':
        return 'pending';
      case 'processing':
        return 'processing';
      case 'succeeded':
        return 'completed';
      case 'canceled':
        return 'failed';
      default:
        return 'failed';
    }
  }

  async createPayment(request: PaymentRequest): Promise<PaymentDetails> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(request.amount * 100), // Convert to cents
        currency: request.currency.toLowerCase(),
        metadata: {
          order_id: request.order_id,
          customer_id: request.customer_id,
          ...request.metadata
        },
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return this.mapStripePaymentToPaymentDetails(paymentIntent);
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new Error(`Stripe payment failed: ${error.message}`);
      }
      throw error;
    }
  }

  async getPayment(id: string): Promise<PaymentDetails | null> {
    try {
      const paymentIntent = await this.stripe.paymentIntents.retrieve(id);
      return this.mapStripePaymentToPaymentDetails(paymentIntent);
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        if (error.type === 'StripeInvalidRequestError') {
          return null;
        }
        throw new Error(`Stripe payment retrieval failed: ${error.message}`);
      }
      throw error;
    }
  }

  async refundPayment(id: string, amount?: number): Promise<PaymentDetails> {
    try {
      const refund = await this.stripe.refunds.create({
        payment_intent: id,
        amount: amount ? Math.round(amount * 100) : undefined,
      });

      const paymentIntent = await this.stripe.paymentIntents.retrieve(id);
      return this.mapStripePaymentToPaymentDetails(paymentIntent);
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new Error(`Stripe refund failed: ${error.message}`);
      }
      throw error;
    }
  }

  async listPayments(customerId: string): Promise<PaymentDetails[]> {
    try {
      const paymentIntents = await this.stripe.paymentIntents.list({
        customer: customerId,
        limit: 100,
      });

      return paymentIntents.data.map(payment => 
        this.mapStripePaymentToPaymentDetails(payment)
      );
    } catch (error) {
      if (error instanceof Stripe.errors.StripeError) {
        throw new Error(`Stripe payment listing failed: ${error.message}`);
      }
      throw error;
    }
  }
}