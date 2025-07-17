import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your One-Stop Dropshipping Solution
          </h1>
          <p className="text-lg text-gray-600">
            Browse quality products, manage inventory, and grow your business with our modern e-commerce platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Browse Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/build-in-public">Our Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards will be dynamically rendered here */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 space-y-4">
                <div className="aspect-square rounded-md bg-gray-100" />
                <h3 className="font-semibold">Product Name</h3>
                <p className="text-sm text-gray-500">Product description goes here...</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$99.99</span>
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
            {/* Repeat for more product cards */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
              <p className="text-gray-600">Curated selection of high-quality products from trusted suppliers.</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Easy Management</h3>
              <p className="text-gray-600">Streamlined inventory and order management system.</p>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">Safe and reliable payment processing with Stripe integration.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
