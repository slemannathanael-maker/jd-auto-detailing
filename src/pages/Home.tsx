import { Phone, Sparkles, Shield, Droplets, Star, ArrowRight, Instagram, Check, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: Sparkles,
    title: 'Paint Correction',
    desc: 'Multi-stage polishing that removes swirls, scratches, and oxidation while restoring deep mirror gloss.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Ceramic Coatings',
    desc: 'Hydrophobic, long-term paint protection that keeps your finish cleaner, glossier, and easier to maintain.',
    color: 'green',
  },
  {
    icon: Droplets,
    title: 'Full Mobile Detail',
    desc: 'Complete interior and exterior reset done right at your location — driveway, office, or garage.',
    color: 'blue',
  },
]

const reviews = [
  { name: 'Andrew L.', text: 'Absolutely amazing detail! The team went above and beyond, more meticulous than any detailer I\'ve been to before.', time: '6 months ago' },
  { name: 'Joe', text: 'My car looks brand new inside and out. Professional, efficient, and paid attention to every detail.', time: 'a year ago' },
  { name: 'Danielle H.', text: 'The only time my car looked this good was when I drove it home from the showroom.', time: '6 months ago' },
]

const areas = ['Clifton', 'Nutley', 'Morris County', 'Passaic County', 'Union County', 'Essex County', 'Hudson County', 'Bergen County']

const ceramicBenefits = [
  'Designed for matte and gloss finishes',
  'UV exposure & water spot protection',
  'Dirt and contaminant resistance',
  'Long-term paint preservation',
]

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} data-reveal data-visible="false" className={className} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="/gallery-2.png"
          alt="JD Auto Detailing customer vehicles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/15" />
        {/* Animated shimmer bar */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/40 bg-brand-green/10 text-brand-green text-xs uppercase tracking-[0.2em] mb-6">
              <Sparkles className="h-3 w-3" />
              Mobile Detailing · North NJ
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6">
              Restore the{' '}
              <span className="text-brand-blue">Gloss.</span>
              <br />
              Protect the{' '}
              <span className="text-brand-green">Paint.</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Ceramic coatings and paint correction performed at your location with meticulous, professional care.
            </p>

            <div className="flex flex-wrap gap-4">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
                DM "DETAIL" to Book
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-green text-brand-green" />
                ))}
              </div>
              <span>45+ five-star reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ──────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <img
                src="/gallery-1.png"
                alt="Customer vehicles detailed by JD Auto Detailing"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
            </div>
          </RevealSection>

          <RevealSection delay={150}>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Real Cars.{' '}
              <span className="text-brand-blue">Real Results.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From daily drivers to exotics — every car we touch gets the same level of precision and care.
              We only use professional-grade products: Gyeon, Chemical Guys, and Meguiar's.
            </p>
            <p className="text-lg font-display italic text-foreground mb-8">
              "Cars at this level don't get average work."
            </p>
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              See our work <ArrowRight className="h-4 w-4" />
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Showroom-grade <span className="text-brand-blue">care</span>
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <RevealSection key={s.title} delay={i * 100}>
                <div className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-border hover:border-brand-blue/40 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                  {/* shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color === 'blue' ? 'bg-brand-blue/10 group-hover:bg-brand-blue/20' : 'bg-brand-green/10 group-hover:bg-brand-green/20'} transition-colors`}>
                    <s.icon className={`h-6 w-6 ${s.color === 'blue' ? 'text-brand-blue' : 'text-brand-green'}`} />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERAMIC COATING ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <RevealSection>
          <div className="rounded-2xl overflow-hidden bg-card border border-border grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src="/gallery-1.png"
                alt="Ceramic coating example"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
            </div>
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Ceramic Coating · Example</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Matte Finish <span className="text-brand-blue">Protection</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ceramic coating designed specifically for matte finishes — protecting your paint from UV
                exposure, water spots, and dirt without adding unwanted gloss.
              </p>
              <ul className="space-y-2 mb-8">
                {ceramicBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:8623301276"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 transition-opacity self-start"
              >
                <Phone className="h-4 w-4" />
                Book a Coating
              </a>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── GALLERY LINKS ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <RevealSection>
              <Link
                to="/cars"
                className="group block rounded-2xl overflow-hidden border border-border hover:border-brand-blue/50 transition-all duration-300 bg-card hover:-translate-y-1"
              >
                <div className="p-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Portfolio</p>
                  <h2 className="text-4xl font-display font-bold mb-3">
                    Cars <span className="text-brand-blue">Gallery</span>
                  </h2>
                  <p className="text-muted-foreground mb-5">All recent customer work in one place.</p>
                  <span className="inline-flex items-center gap-2 text-brand-blue font-semibold">
                    View Cars{' '}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </RevealSection>

            <RevealSection delay={100}>
              <Link
                to="/supercars"
                className="group block rounded-2xl overflow-hidden border border-border hover:border-brand-green/50 transition-all duration-300 bg-card hover:-translate-y-1"
              >
                <div className="p-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-blue mb-3">Featured</p>
                  <h2 className="text-4xl font-display font-bold mb-3">
                    Super Cars <span className="text-brand-green">Showcase</span>
                  </h2>
                  <p className="text-muted-foreground mb-5">Exotics and high-performance details.</p>
                  <span className="inline-flex items-center gap-2 text-brand-green font-semibold">
                    View Super Cars{' '}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <RevealSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Five-star service</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            What clients <span className="text-brand-blue">say</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <RevealSection key={r.name} delay={i * 100}>
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed text-sm mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold">{r.name}</span>
                  <span className="text-muted-foreground">{r.time}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ── SERVICE AREA ──────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection>
            <div className="rounded-2xl bg-card border border-border p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Service Area</p>
                  <h2 className="text-4xl font-display font-bold mb-4">
                    We come to <span className="text-brand-blue">you</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Fully mobile across North New Jersey. Driveway, office, or storage unit —
                    we bring the studio to your car.
                  </p>
                  <a
                    href="tel:8623301276"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 transition-opacity"
                  >
                    <Phone className="h-4 w-4" />
                    Schedule a Detail
                  </a>
                </div>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background text-sm hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-colors cursor-default"
                    >
                      <MapPin className="h-3 w-3 text-brand-green" />
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <RevealSection className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready when <span className="text-brand-blue">you are</span>
          </h2>
        </RevealSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { href: 'tel:8623301276', icon: Phone, label: 'Call', value: '(862) 330-1276', color: 'blue' },
            { href: 'mailto:justdetailingandco@gmail.com', icon: Phone, label: 'Email', value: 'justdetailingandco@gmail.com', color: 'green' },
          ].map((c, i) => (
            <RevealSection key={c.label} delay={i * 100}>
              <a
                href={c.href}
                className="block p-8 rounded-2xl bg-card border border-border hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <c.icon className={`h-8 w-8 mx-auto mb-3 ${c.color === 'blue' ? 'text-brand-blue' : 'text-brand-green'}`} />
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{c.label}</p>
                <p className="font-display text-sm break-all">{c.value}</p>
              </a>
            </RevealSection>
          ))}
          <RevealSection delay={200}>
            <div className="p-8 rounded-2xl bg-card border border-border text-center">
              <MapPin className="h-8 w-8 text-brand-green mx-auto mb-3" />
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Based In</p>
              <p className="font-display text-lg">Clifton, NJ 07014</p>
            </div>
          </RevealSection>
        </div>
      </section>
    </Layout>
  )
}
