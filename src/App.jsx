import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="about" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">About this starter</h2>
              <p className="mt-3 text-gray-600">
                This minimal template is built with Vite, React, and Tailwind CSS. It emphasizes clean structure and small, composable components so you can scale your UI without the bloat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
