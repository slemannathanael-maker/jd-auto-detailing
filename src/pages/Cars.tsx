import Layout from '../components/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

const gallery = [
  { title: 'Ford Mustang Mach-E', note: 'Exterior + interior service', gradient: 'from-blue-900 to-blue-700' },
  { title: 'Porsche Macan', note: 'Exterior detail service', gradient: 'from-slate-800 to-slate-600' },
  { title: 'BMW 435i', note: 'Exterior detail service', gradient: 'from-zinc-800 to-zinc-600' },
  { title: 'Mercedes-Benz E350', note: 'Standard interior/exterior service', gradient: 'from-neutral-800 to-neutral-600' },
  { title: 'McLaren', note: 'Exterior showcase', gradient: 'from-orange-800 to-orange-600' },
  { title: 'Detail Sign', note: 'Client location service', gradient: 'from-teal-800 to-teal-600' },
  { title: 'Porsche 911', note: 'Finished correction', gradient: 'from-red-900 to-red-700' },
  { title: 'Audi R8', note: 'Foam and rinse', gradient: 'from-indigo-900 to-indigo-700' },
  { title: 'Porsche Carrera', note: 'Wash + gloss reset', gradient: 'from-stone-700 to-stone-500' },
  { title: 'Audi R8 Front', note: 'Pre-rinse stage', gradient: 'from-gray-800 to-gray-600' },
]

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal data-visible="false" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Cars() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-12 px-6 max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Portfolio</p>
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
          Cars <span className="text-brand-blue">Gallery</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Real customer work. Every vehicle detailed with professional-grade products and meticulous care.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <RevealCard key={item.title} delay={(i % 3) * 80}>
              <article className="group rounded-2xl overflow-hidden border border-border bg-card hover:-translate-y-1 hover:border-brand-blue/40 transition-all duration-300">
                <div className={`aspect-[4/5] bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                  {/* Car silhouette placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <svg viewBox="0 0 200 80" className="w-3/4" fill="white">
                      <path d="M20 55 L15 55 L12 42 L38 28 L75 22 L100 18 L125 22 L162 28 L188 42 L185 55 L20 55 Z" />
                      <circle cx="52" cy="55" r="11" />
                      <circle cx="148" cy="55" r="11" />
                    </svg>
                  </div>
                  {/* Label at bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-brand-green">{item.note}</p>
                    <h2 className="font-display font-semibold text-white text-lg mt-0.5">{item.title}</h2>
                  </div>
                </div>
              </article>
            </RevealCard>
          ))}
        </div>
      </section>

      {/* Real work photos */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-2">More of Our Work</p>
            <h2 className="text-3xl font-display font-bold text-foreground">
              From the <span className="text-brand-blue">Feed</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-border group">
              <img
                src="/gallery-2.png"
                alt="JD Auto Detailing recent work"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-display font-semibold">BMW · Tesla · Jeep · Ford Bronco</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-border group">
              <img
                src="/gallery-1.png"
                alt="JD Auto Detailing recent work"
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-display font-semibold">Porsche · GMC · Toyota · BMW X5 M · Audi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
