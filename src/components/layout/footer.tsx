import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/products" className="hover:text-primary">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-primary">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="hover:text-primary">
                    Deals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/profile" className="hover:text-primary">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:text-primary">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="hover:text-primary">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/build-in-public" className="hover:text-primary">
                    Build in Public
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-primary">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DropShop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}