import { Button } from '@/components/ui/button'

export default function SupplierDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Supplier Dashboard</h1>
        <div className="flex gap-4">
          <Button variant="outline">Download Reports</Button>
          <Button>Add New Product</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Products', value: '45', change: '+3' },
          { label: 'Active Orders', value: '12', change: '+5' },
          { label: 'Monthly Revenue', value: '$8,456', change: '+15%' },
          { label: 'Avg. Fulfillment Time', value: '1.2 days', change: '-8%' },
        ].map((stat, i) => (
          <div key={i} className="border rounded-lg p-6 bg-card">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <p className={`text-sm mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Product Catalog */}
      <div className="border rounded-lg p-6 bg-card mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Product Catalog</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Import Products</Button>
            <Button variant="outline" size="sm">Export Catalog</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">SKU</th>
                <th className="text-left py-3 px-4">Stock</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded" />
                      <span>Product Name {i + 1}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">SKU-{2000 + i}</td>
                  <td className="py-3 px-4">{100 + i * 10}</td>
                  <td className="py-3 px-4">${(49.99 + i * 10).toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Update Stock</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Orders */}
      <div className="border rounded-lg p-6 bg-card mb-8">
        <h2 className="text-lg font-semibold mb-4">Pending Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Products</th>
                <th className="text-left py-3 px-4">Order Date</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4">#ORD-{1000 + i}</td>
                  <td className="py-3 px-4">{2 + i} items</td>
                  <td className="py-3 px-4">Jan {10 + i}, 2024</td>
                  <td className="py-3 px-4">${(149.99 + i * 50).toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Processing
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm">Ship Order</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Integration Settings */}
      <div className="border rounded-lg p-6 bg-card">
        <h2 className="text-lg font-semibold mb-4">Integration Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">API Integration</h3>
              <p className="text-sm text-gray-500">Connect your inventory system</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Shipping Integration</h3>
              <p className="text-sm text-gray-500">Connect shipping providers</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-medium">Notification Settings</h3>
              <p className="text-sm text-gray-500">Configure order notifications</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
        </div>
      </div>
    </div>
  )
}