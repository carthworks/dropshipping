'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary navigation */}
          <div className="flex">
            <Link href="/" className="flex items-center font-bold text-xl">
              Dropshipping
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <Link
                href="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Products
              </Link>
              <Link
                href="/build-in-public"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Build in Public
              </Link>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link href="/cart" className="p-2">
              Cart
            </Link>

            {session ? (
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {session.user?.name || 'Account'}
                </Button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-background border ring-1 ring-black ring-opacity-5">
                    {session.user?.role === 'ADMIN' && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 text-sm hover:bg-muted"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    {session.user?.role === 'SUPPLIER' && (
                      <Link
                        href="/supplier"
                        className="block px-4 py-2 text-sm hover:bg-muted"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Supplier Dashboard
                      </Link>
                    )}
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false)
                        signOut()
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-muted"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link href="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-muted"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/products"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/build-in-public"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Build in Public
            </Link>
            <Link
              href="/cart"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>

            {session ? (
              <>
                {session.user?.role === 'ADMIN' && (
                  <Link
                    href="/admin"
                    className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                {session.user?.role === 'SUPPLIER' && (
                  <Link
                    href="/supplier"
                    className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Supplier Dashboard
                  </Link>
                )}
                <Link
                  href="/profile"
                  className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    signOut()
                  }}
                  className="block w-full text-left pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}