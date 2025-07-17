import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4">
          <Button variant="outline">Export Data</Button>
          <Button>Add New Product</Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Orders', value: '156', change: '+12%' },
          { label: 'Total Revenue', value: '$12,345', change: '+8%' },
          { label: 'Active Products', value: '89', change: '+5%' },
          { label: 'Pending Orders', value: '23', change: '-2%' },
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

      {/* Recent Orders */}
      <div className="border rounded-lg p-6 bg-card mb-8">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Products</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4">#123{i}</td>
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">2 items</td>
                  <td className="py-3 px-4">$199.99</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Pending
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Management */}
      <div className="border rounded-lg p-6 bg-card mb-8">
        <h2 className="text-lg font-semibold mb-4">Product Management</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Product</th>
                <th className="text-left py-3 px-4">SKU</th>
                <th className="text-left py-3 px-4">Price</th>
                <th className="text-left py-3 px-4">Stock</th>
                <th className="text-left py-3 px-4">Supplier</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded" />
                      <span>Product Name</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">SKU-{1000 + i}</td>
                  <td className="py-3 px-4">$99.99</td>
                  <td className="py-3 px-4">150</td>
                  <td className="py-3 px-4">Supplier Co.</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supplier Management */}
      <div className="border rounded-lg p-6 bg-card">
        <h2 className="text-lg font-semibold mb-4">Supplier Management</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Supplier</th>
                <th className="text-left py-3 px-4">Products</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Last Sync</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3 px-4">Supplier {i + 1}</td>
                  <td className="py-3 px-4">{30 + i} products</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      Active
                    </span>
                  </td>
                  <td className="py-3 px-4">2 hours ago</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Sync Now</Button>
                      <Button variant="outline" size="sm">Settings</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}