import { Button } from '@/components/ui/button'

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Checkout Forms */}
        <div className="flex-1 space-y-8">
          {/* Shipping Information */}
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">
                  Street address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="postal-code" className="block text-sm font-medium mb-2">
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Payment Information */}
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium mb-2">
                  Card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="1234 1234 1234 1234"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                    Expiry date
                  </label>
                  <input
                    type="text"
                    id="expiry"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm font-medium mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    id="cvc"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80">
          <div className="border rounded-lg p-6 bg-card space-y-4 sticky top-8">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$299.97</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$29.99</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$339.95</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Place Order
            </Button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By placing your order, you agree to our{' '}
              <a href="/terms" className="underline hover:text-primary">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" className="underline hover:text-primary">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}