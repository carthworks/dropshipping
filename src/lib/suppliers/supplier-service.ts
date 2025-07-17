import { z } from 'zod';

export interface SupplierProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  supplier_id: string;
}

export interface SupplierOrder {
  id: string;
  products: Array<{
    product_id: string;
    quantity: number;
  }>;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  tracking_number?: string;
  shipping_address: {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
}

export const supplierProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().int().min(0),
  images: z.array(z.string().url()),
  supplier_id: z.string()
});

export const supplierOrderSchema = z.object({
  id: z.string(),
  products: z.array(z.object({
    product_id: z.string(),
    quantity: z.number().int().positive()
  })),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  tracking_number: z.string().optional(),
  shipping_address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postal_code: z.string(),
    country: z.string()
  })
});

export interface SupplierService {
  getProducts(): Promise<SupplierProduct[]>;
  getProduct(id: string): Promise<SupplierProduct | null>;
  createOrder(order: Omit<SupplierOrder, 'id' | 'status'>): Promise<SupplierOrder>;
  getOrder(id: string): Promise<SupplierOrder | null>;
  updateOrder(id: string, updates: Partial<SupplierOrder>): Promise<SupplierOrder>;
  cancelOrder(id: string): Promise<SupplierOrder>;
}