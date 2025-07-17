import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                All Categories
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Electronics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Fashion
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Home & Garden
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Under $25
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                $25 - $50
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                $50 - $100
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Over $100
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Supplier</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                All Suppliers
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Supplier A
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Supplier B
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">All Products</h2>
            <div className="flex items-center space-x-4">
              <select className="border rounded-md px-3 py-2">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card */}
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden bg-card">
                <div className="aspect-square bg-gray-100" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <p className="text-sm text-gray-500 mb-4">Short product description goes here...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">$99.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center space-x-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}