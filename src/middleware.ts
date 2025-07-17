import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'

export default withAuth(
  async function middleware(req) {
    const token = await getToken({ req })
    const isAuth = !!token
    const isAuthPage =
      req.nextUrl.pathname.startsWith('/login') ||
      req.nextUrl.pathname.startsWith('/register')

    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL('/profile', req.url))
      }
      return null
    }

    if (!isAuth) {
      let from = req.nextUrl.pathname
      if (req.nextUrl.search) {
        from += req.nextUrl.search
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      )
    }

    // Handle role-based access
    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (token?.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }

    if (req.nextUrl.pathname.startsWith('/supplier')) {
      if (token?.role !== 'SUPPLIER') {
        return NextResponse.redirect(new URL('/', req.url))
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    '/profile/:path*',
    '/admin/:path*',
    '/supplier/:path*',
    '/cart/:path*',
    '/checkout/:path*',
    '/login',
    '/register',
  ],
}