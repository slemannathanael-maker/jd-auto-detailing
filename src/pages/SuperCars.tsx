import { Phone, Sparkles, Instagram, Star } from 'lucide-react'
import Layout from '../components/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

const featured = [
  { title: 'McLaren', note: 'Exotic exterior detail', gradient: 'from-orange-900 via-orange-700 to-orange-500' },
  { title: 'Porsche 911', note: 'Paint correction finish', gradient: 'from-red-900 via-red-700 to-red-500' },
  { title: 'Porsche Carrera', note: 'Full wash and gloss reset', gradient: 'from-slate-800 via-slate-600 to-slate-400' },
]

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal data-visible="false" className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function SuperCars() {
  return (
    <Layout>
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <img
          src="/gallery-1.png"
          alt="Exotic cars detailed by JD Auto Detailing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/25" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/40 bg-brand-green/10 text-brand-green text-xs uppercase tracking-[0.2em] mb-6">
            <Sparkles className="h-3 w-3" />
            Exotic Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6 max-w-3xl">
            Super Car{' '}
            <span className="text-brand-blue">Detailing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            A look at high-performance vehicles detailed by JD Auto Detailing
            using only real customer work photos.
          </p>
        </div>
      </section>

      {/* ── FEATURED GRID ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((car, i) => (
            <RevealSection key={car.title} delay={i * 100}>
              <div className={`group relative aspect-[4/5] rounded-2xl overflow-hidden border border-border hover:border-brand-green/50 transition-all duration-300 bg-gradient-to-br ${car.gradient}`}>
                {/* Shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
                {/* Car silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                  <svg viewBox="0 0 200 80" className="w-3/4" fill="white">
                    <path d="M20 55 L15 55 L12 42 L38 28 L75 22 L100 18 L125 22 L162 28 L188 42 L185 55 L20 55 Z" />
                    <circle cx="52" cy="55" r="11" />
                    <circle cx="148" cy="55" r="11" />
                  </svg>
                </div>
                {/* Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-3 w-3 fill-brand-green text-brand-green" />
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{car.title}</h3>
                  <p className="text-sm text-white/70">{car.note}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="rounded-2xl bg-card border border-border p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Drive something{' '}
                <span className="text-brand-blue">special?</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Exotics and supercars get our most meticulous treatment.
                Reach out for ceramic and correction packages.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:8623301276"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Phone className="h-4 w-4" />
                  (862) 330-1276
                </a>
                <a
                  href="https://instagram.com/jd.autodetailingco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-brand-green/50 hover:-translate-y-0.5 transition-all duration-200 font-semibold"
                >
                  <Instagram className="h-4 w-4" />
                  @jd.autodetailingco
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  )
}
