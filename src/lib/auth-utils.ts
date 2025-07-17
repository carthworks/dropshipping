import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function isAuthenticated() {
  const session = await getServerSession(authOptions)
  return !!session
}

export async function isAdmin() {
  const session = await getServerSession(authOptions)
  return session?.user?.role === 'ADMIN'
}

export async function isSupplier() {
  const session = await getServerSession(authOptions)
  return session?.user?.role === 'SUPPLIER'
}