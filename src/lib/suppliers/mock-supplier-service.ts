import { SupplierService, SupplierProduct, SupplierOrder } from './supplier-service';

export class MockSupplierService implements SupplierService {
  private products: SupplierProduct[] = [
    {
      id: '1',
      name: 'Sample Product 1',
      description: 'A high-quality sample product',
      price: 29.99,
      stock: 100,
      images: ['https://example.com/sample1.jpg'],
      supplier_id: 'supplier_1'
    },
    {
      id: '2',
      name: 'Sample Product 2',
      description: 'Another excellent product',
      price: 39.99,
      stock: 50,
      images: ['https://example.com/sample2.jpg'],
      supplier_id: 'supplier_1'
    }
  ];

  private orders: SupplierOrder[] = [];

  async getProducts(): Promise<SupplierProduct[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.products;
  }

  async getProduct(id: string): Promise<SupplierProduct | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const product = this.products.find(p => p.id === id);
    return product || null;
  }

  async createOrder(orderData: Omit<SupplierOrder, 'id' | 'status'>): Promise<SupplierOrder> {
    await new Promise(resolve => setTimeout(resolve, 700));
    
    // Validate products exist and have sufficient stock
    for (const item of orderData.products) {
      const product = await this.getProduct(item.product_id);
      if (!product) {
        throw new Error(`Product ${item.product_id} not found`);
      }
      if (product.stock < item.quantity) {
        throw new Error(`Insufficient stock for product ${item.product_id}`);
      }
    }

    const order: SupplierOrder = {
      id: `order_${Date.now()}`,
      ...orderData,
      status: 'pending'
    };

    this.orders.push(order);

    // Update stock levels
    for (const item of order.products) {
      const productIndex = this.products.findIndex(p => p.id === item.product_id);
      if (productIndex !== -1) {
        this.products[productIndex] = {
          ...this.products[productIndex],
          stock: this.products[productIndex].stock - item.quantity
        };
      }
    }

    return order;
  }

  async getOrder(id: string): Promise<SupplierOrder | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    const order = this.orders.find(o => o.id === id);
    return order || null;
  }

  async updateOrder(id: string, updates: Partial<SupplierOrder>): Promise<SupplierOrder> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const orderIndex = this.orders.findIndex(o => o.id === id);
    if (orderIndex === -1) {
      throw new Error(`Order ${id} not found`);
    }

    const updatedOrder = {
      ...this.orders[orderIndex],
      ...updates,
      id // Ensure ID cannot be changed
    };

    this.orders[orderIndex] = updatedOrder;
    return updatedOrder;
  }

  async cancelOrder(id: string): Promise<SupplierOrder> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const order = await this.getOrder(id);
    if (!order) {
      throw new Error(`Order ${id} not found`);
    }

    if (order.status === 'shipped' || order.status === 'delivered') {
      throw new Error(`Cannot cancel order ${id} in status ${order.status}`);
    }

    // Restore stock levels
    for (const item of order.products) {
      const productIndex = this.products.findIndex(p => p.id === item.product_id);
      if (productIndex !== -1) {
        this.products[productIndex] = {
          ...this.products[productIndex],
          stock: this.products[productIndex].stock + item.quantity
        };
      }
    }

    return this.updateOrder(id, { status: 'cancelled' });
  }
}