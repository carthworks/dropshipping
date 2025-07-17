import { Button } from '@/components/ui/button'

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2 space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gray-200" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <button
                key={i}
                className="aspect-square bg-gray-100 rounded-lg overflow-hidden focus:ring-2 focus:ring-primary"
              >
                <div className="w-full h-full bg-gray-200" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Premium Product Name</h1>
            <p className="text-2xl font-bold text-primary">$199.99</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">(150 reviews)</span>
          </div>

          {/* Description */}
          <div className="prose max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="mt-4">
              <li>High-quality materials</li>
              <li>Durable construction</li>
              <li>Premium finish</li>
              <li>Satisfaction guaranteed</li>
            </ul>
          </div>

          {/* Variants */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <Button key={size} variant="outline" className="w-12 h-12">
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex flex-wrap gap-2">
                {['Red', 'Blue', 'Green', 'Black'].map((color) => (
                  <Button key={color} variant="outline" className="min-w-[80px]">
                    {color}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button className="p-2 hover:bg-gray-100">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <input
                  type="number"
                  className="w-16 text-center border-x py-2"
                  defaultValue={1}
                  min={1}
                />
                <button className="p-2 hover:bg-gray-100">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
              <Button className="flex-1" size="lg">
                Add to Cart
              </Button>
            </div>
            <Button variant="outline" className="w-full" size="lg">
              Add to Wishlist
            </Button>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6 space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>In stock and ready to ship</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Ships in 1-2 business days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border-b pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full" />
                <div>
                  <p className="font-medium">John Doe</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg
                          key={j}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">1 month ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                Great product! The quality is excellent and it arrived quickly. Would definitely
                recommend to others.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden group">
              <div className="aspect-square bg-gray-100 relative group-hover:opacity-75">
                <div className="w-full h-full bg-gray-200" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Related Product {i + 1}</h3>
                <p className="text-sm text-gray-500">Brief description</p>
                <p className="font-medium mt-2">$149.99</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}