import Layout from '../components/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

const cars = [
  { name: 'Ford Mustang Mach-E', service: 'Exterior + Interior', gradient: 'from-blue-600 to-blue-900' },
  { name: 'Porsche Macan', service: 'Exterior Detail Service', gradient: 'from-slate-700 to-slate-900' },
  { name: 'BMW 435i', service: 'Exterior Detail Service', gradient: 'from-indigo-600 to-indigo-900' },
  { name: 'Mercedes-Benz E350', service: 'Interior / Exterior', gradient: 'from-zinc-700 to-zinc-900' },
  { name: 'McLaren', service: 'Exterior Showcase', gradient: 'from-orange-600 to-red-900' },
  { name: 'Audi R8', service: 'Foam and Rinse', gradient: 'from-red-700 to-rose-900' },
  { name: 'Porsche 911', service: 'Finished Correction', gradient: 'from-emerald-600 to-teal-900' },
  { name: 'Cadillac CT5', service: 'Paint Correction', gradient: 'from-violet-700 to-purple-900' },
  { name: 'GMC Sierra', service: 'Full Detail', gradient: 'from-sky-700 to-sky-900' },
  { name: 'Toyota 4Runner', service: 'Exterior + Interior', gradient: 'from-green-700 to-green-900' },
]

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Cars() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-foreground to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Our Work</span>
          <h1 className="mt-3 text-5xl lg:text-6xl font-display font-black text-white">
            Cars{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
              Gallery
            </span>
          </h1>
          <p className="mt-4 text-white/60 max-w-md mx-auto">
            A showcase of vehicles we've detailed — from daily drivers to luxury imports.
          </p>
        </div>
      </section>

      {/* Cars grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {cars.map((car, i) => (
              <RevealSection key={i} delay={(i % 4) * 80}>
                <div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${car.gradient} group-hover:scale-110 transition-transform duration-700`} />
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shimmer" />
                  </div>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_white_0%,_transparent_50%)]" />
                  </div>
                  {/* Car icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-24 h-24 text-white/20 group-hover:text-white/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                  </div>
                  {/* Bottom overlay with text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-xs font-medium tracking-[0.2em] uppercase text-brand-green mb-1">
                      {car.service}
                    </div>
                    <div className="font-display font-bold text-white text-lg leading-tight">
                      {car.name}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* More of Our Work section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Instagram</span>
            <h2 className="mt-3 text-4xl font-display font-black text-foreground">
              More of Our{' '}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Real results from our customers across North NJ.</p>
          </RevealSection>

          <RevealSection>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/gallery-2.png"
                alt="More detailing work"
                className="w-full object-cover"
              />
            </div>
          </RevealSection>

          <RevealSection className="text-center mt-10">
            <a
              href="https://www.instagram.com/jd.autodetailingco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Follow on Instagram
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 mesh-bg" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-black text-white mb-4">
            Want Your Car in the Gallery?
          </h2>
          <p className="text-white/70 mb-8">
            Book a detail today and join our growing list of satisfied customers.
          </p>
          <a
            href="tel:8623301276"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-blue font-semibold hover:scale-105 transition-all duration-200"
          >
            Call (862) 330-1276
          </a>
        </div>
      </section>
    </Layout>
  )
}
