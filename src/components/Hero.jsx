import { Rocket, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[80rem] rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
            <Star className="h-3.5 w-3.5 text-yellow-500" />
            A simple, beautiful starter
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Hello, World
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            A clean React + Tailwind template with modular components. Crafted for fast iteration and delightful aesthetics.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white px-5 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition-shadow">
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-white text-gray-800 ring-1 ring-gray-200 px-5 py-3 text-sm font-semibold hover:bg-gray-50">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
