import Layout from '../components/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

const supercars = [
  {
    name: 'McLaren',
    service: 'Exotic Exterior Detail',
    description: 'Full exterior decontamination and gloss enhancement on this stunning supercar.',
    gradient: 'from-orange-500 via-red-600 to-red-900',
  },
  {
    name: 'Porsche 911',
    service: 'Paint Correction Finish',
    description: 'Multi-stage paint correction bringing back that factory-fresh clarity and depth.',
    gradient: 'from-slate-600 via-slate-700 to-slate-900',
  },
  {
    name: 'Porsche Carrera',
    service: 'Full Wash & Gloss Reset',
    description: 'Complete exterior reset with foam wash, clay bar, and gloss-enhancing detail spray.',
    gradient: 'from-emerald-600 via-teal-700 to-teal-900',
  },
]

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function SuperCars() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/gallery-1.png"
            alt="Super cars"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/30" />
          <div className="absolute inset-0 mesh-bg animate-mesh opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/90">
                Exotic Showcase
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.05] mb-6">
              Super Car{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                Detailing
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-lg">
              Exotic vehicles demand a different level of care. From McLarens to Porsches,
              we have the expertise and products to match the machine.
            </p>
          </div>
        </div>
      </section>

      {/* Supercars grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Exotics</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground">
              The{' '}
              <span className="text-gradient">Exotic Fleet</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              High-performance vehicles we have had the privilege of detailing.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {supercars.map((car, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div className="group relative rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-lg hover:shadow-2xl">
                  <div className={`aspect-[3/4] bg-gradient-to-br ${car.gradient} relative`}>
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-32 translate-x-32" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/20 translate-y-24 -translate-x-24" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-40 h-40 text-white/15 group-hover:text-white/25 transition-colors duration-500" fill="currentColor" viewBox="0 0 100 60">
                        <path d="M85,35 L80,20 C78,14 72,10 66,10 L34,10 C28,10 22,14 20,20 L15,35 L10,35 C8,35 6,37 6,39 L6,45 C6,47 8,49 10,49 L15,49 C15,53 18,56 22,56 C26,56 29,53 29,49 L71,49 C71,53 74,56 78,56 C82,56 85,53 85,49 L90,49 C92,49 94,47 94,45 L94,39 C94,37 92,35 90,35 Z M22,52 C20,52 18,50 18,48 C18,46 20,44 22,44 C24,44 26,46 26,48 C26,50 24,52 22,52 Z M78,52 C76,52 74,50 74,48 C74,46 76,44 78,44 C80,44 82,46 82,48 C82,50 80,52 78,52 Z M19,33 L24,19 C25,17 27,16 29,16 L71,16 C73,16 75,17 76,19 L81,33 Z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                      <div className="text-xs font-medium tracking-[0.25em] uppercase text-brand-green mb-2">
                        {car.service}
                      </div>
                      <h3 className="font-display font-black text-white text-3xl mb-3">
                        {car.name}
                      </h3>
                      <p className="text-white/65 text-sm leading-relaxed">
                        {car.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery image */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <h2 className="text-4xl font-display font-black text-foreground">
              Real{' '}
              <span className="text-gradient">Results</span>
            </h2>
          </RevealSection>
          <RevealSection>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/gallery-1.png" alt="Supercar detailing results" className="w-full object-cover" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-foreground relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <RevealSection>
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Book Now</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-white mb-4">
              Drive Something{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                Special?
              </span>
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Your exotic deserves exotic-level care. Let us talk about what your vehicle needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8623301276"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:scale-105 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                </svg>
                Call (862) 330-1276
              </a>
              <a
                href="https://www.instagram.com/jd.autodetailingco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                DM on Instagram
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  )
}
