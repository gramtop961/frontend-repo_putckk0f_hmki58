import { Code, Shield, Rocket, Star } from 'lucide-react'

const features = [
  {
    title: 'Modern Stack',
    description:
      'Vite + React + Tailwind for blazing fast development and beautiful UIs.',
    Icon: Rocket,
  },
  {
    title: 'Clean Components',
    description:
      'Simple, focused building blocks to help you ship quickly with confidence.',
    Icon: Code,
  },
  {
    title: 'Accessible & Responsive',
    description:
      'Designed mobile-first and accessible out of the box with sensible defaults.',
    Icon: Star,
  },
  {
    title: 'Production Ready',
    description:
      'Semantic markup, scalable structure, and best practices baked in.',
    Icon: Shield,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why you'll love it</h2>
          <p className="mt-3 text-gray-600">
            Everything you need to hit the ground running with a polished, minimal foundation.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-blue-600 ring-1 ring-blue-200">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
