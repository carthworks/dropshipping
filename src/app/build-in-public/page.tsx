import { Button } from '@/components/ui/button'

type Update = {
  date: string
  title: string
  description: string
  type: 'feature' | 'improvement' | 'bugfix'
}

const updates: Update[] = [
  {
    date: '2024-01-17',
    title: 'Initial Project Setup',
    description: 'Set up Next.js project with TypeScript, Tailwind CSS, and shadcn/ui components. Created basic project structure and implemented core UI components.',
    type: 'feature'
  },
  {
    date: '2024-01-17',
    title: 'Database Schema Design',
    description: 'Designed and implemented initial database schema using Prisma ORM with PostgreSQL. Created models for Users, Products, Orders, and Suppliers.',
    type: 'feature'
  },
  {
    date: '2024-01-17',
    title: 'UI Implementation',
    description: 'Implemented responsive navigation, product grid, and shopping cart interface using Tailwind CSS and shadcn/ui components.',
    type: 'feature'
  }
]

export default function BuildInPublicPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Building in Public</h1>
        <p className="text-lg text-gray-600">
          Follow our journey as we build this dropshipping platform. We're sharing our progress,
          learnings, and challenges along the way.
        </p>
      </div>

      <div className="space-y-8">
        {updates.map((update, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-1">{update.title}</h2>
                <p className="text-sm text-gray-500">{update.date}</p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className={{
                  'bg-green-100 text-green-800': update.type === 'feature',
                  'bg-blue-100 text-blue-800': update.type === 'improvement',
                  'bg-red-100 text-red-800': update.type === 'bugfix'
                }[update.type]}
              >
                {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
              </Button>
            </div>
            <p className="text-gray-600">{update.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Authentication</h3>
            <p className="text-sm text-gray-600">Implementing secure user authentication and authorization system.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Payment Integration</h3>
            <p className="text-sm text-gray-600">Setting up Stripe payment processing for secure transactions.</p>
          </div>
          <div className="p-6 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Supplier Integration</h3>
            <p className="text-sm text-gray-600">Building API integrations with dropshipping suppliers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}