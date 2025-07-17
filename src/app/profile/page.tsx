import { Button } from '@/components/ui/button'

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-8">My Account</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 space-y-2">
          <Button variant="ghost" className="w-full justify-start" size="lg">
            Profile Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="lg">
            Order History
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="lg">
            Saved Addresses
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="lg">
            Payment Methods
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          {/* Profile Settings */}
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    defaultValue="John"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    defaultValue="Doe"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="john@example.com"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <Button type="submit">Save Changes</Button>
            </form>
          </div>

          {/* Order History */}
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium">Order #{123456 + i}</p>
                      <p className="text-sm text-gray-500">Placed on January 1, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-md" />
                    <div>
                      <p className="font-medium">Product Name</p>
                      <p className="text-sm text-gray-500">Quantity: 1</p>
                    </div>
                    <div className="ml-auto">
                      <p className="font-medium">$99.99</p>
                      <p className="text-sm text-green-600">Delivered</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Change Password */}
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="current-password" className="block text-sm font-medium mb-2">
                  Current password
                </label>
                <input
                  type="password"
                  id="current-password"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="new-password" className="block text-sm font-medium mb-2">
                  New password
                </label>
                <input
                  type="password"
                  id="new-password"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                  Confirm new password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <Button type="submit">Update Password</Button>
            </form>
          </div>

          {/* Delete Account */}
          <div className="border rounded-lg p-6 bg-card">
            <h2 className="text-lg font-semibold mb-4">Delete Account</h2>
            <p className="text-gray-600 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}