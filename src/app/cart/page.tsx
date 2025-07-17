import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {/* Empty Cart State */}
          {true && (
            <div className="text-center py-12 border rounded-lg bg-gray-50">
              <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Add some products to your cart to continue shopping</p>
              <Button asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          )}

          {/* Cart Items List */}
          {false && Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center border rounded-lg p-4 bg-card">
              <div className="w-24 h-24 bg-gray-100 rounded-md" />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-sm text-gray-500">Short description</p>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="sm">-</Button>
                    <span className="px-4">1</span>
                    <Button variant="ghost" size="sm">+</Button>
                  </div>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                    Remove
                  </Button>
                </div>
              </div>
              <div className="ml-4">
                <span className="font-bold">$99.99</span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="border rounded-lg p-6 bg-card space-y-4">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$299.97</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$299.97</span>
              </div>
            </div>

            <Button className="w-full" size="lg" asChild>
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}