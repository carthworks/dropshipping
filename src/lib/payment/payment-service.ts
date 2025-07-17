import { z } from 'zod';

export interface PaymentDetails {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded';
  payment_method: 'credit_card' | 'paypal' | 'stripe';
  created_at: Date;
  updated_at: Date;
  metadata?: Record<string, unknown>;
}

export const paymentDetailsSchema = z.object({
  id: z.string(),
  amount: z.number().positive(),
  currency: z.string().length(3), // ISO 4217 currency code
  status: z.enum(['pending', 'processing', 'completed', 'failed', 'refunded']),
  payment_method: z.enum(['credit_card', 'paypal', 'stripe']),
  created_at: z.date(),
  updated_at: z.date(),
  metadata: z.record(z.string(), z.unknown()).optional()
});

export interface PaymentRequest {
  amount: number;
  currency: string;
  payment_method: 'credit_card' | 'paypal' | 'stripe';
  order_id: string;
  customer_id: string;
  billing_address?: {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  metadata?: Record<string, unknown>;
}

export const paymentRequestSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().length(3),
  payment_method: z.enum(['credit_card', 'paypal', 'stripe']),
  order_id: z.string(),
  customer_id: z.string(),
  billing_address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postal_code: z.string(),
    country: z.string()
  }).optional(),
  metadata: z.record(z.string(), z.unknown()).optional()
});

export interface PaymentService {
  createPayment(request: PaymentRequest): Promise<PaymentDetails>;
  getPayment(id: string): Promise<PaymentDetails | null>;
  refundPayment(id: string, amount?: number): Promise<PaymentDetails>;
  listPayments(customerId: string): Promise<PaymentDetails[]>;
}