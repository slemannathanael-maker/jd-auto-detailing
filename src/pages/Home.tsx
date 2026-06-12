import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Paint Correction',
    description: 'Multi-stage machine polishing that eliminates swirl marks, fine scratches, and oxidation — restoring your paint to a mirror-like clarity.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: 'Ceramic Coatings',
    description: 'Hydrophobic nano-ceramic protection that bonds to your paint, repelling water, dirt, and UV rays for years of showroom-quality shine.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: 'Full Mobile Detail',
    description: 'Complete interior and exterior reset delivered to your driveway, garage, or office — we bring the professional equipment to you.',
  },
]

const reviews = [
  {
    name: 'Andrew L.',
    time: '6 months ago',
    text: "Absolutely amazing detail! The team went above and beyond, more meticulous than any detailer I've been to before.",
    stars: 5,
  },
  {
    name: 'Joe',
    time: 'A year ago',
    text: 'My car looks brand new inside and out. Professional, efficient, and paid attention to every detail.',
    stars: 5,
  },
  {
    name: 'Danielle H.',
    time: '6 months ago',
    text: 'The only time my car looked this good was when I drove it home from the showroom.',
    stars: 5,
  },
]

const areas = [
  'Clifton', 'Nutley', 'Morris County', 'Passaic County',
  'Union County', 'Essex County', 'Hudson County', 'Bergen County',
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/gallery-2.png"
            alt="JD Auto Detailing work"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/20" />
          {/* Animated mesh overlay */}
          <div className="absolute inset-0 mesh-bg animate-mesh opacity-40" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/60"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/90">
                Mobile Detailing · North NJ
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white leading-[1.05] mb-6">
              Restore the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">
                Gloss.
              </span>
              <br />
              Protect the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-blue">
                Paint.
              </span>
            </h1>

            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-lg">
              Professional mobile detailing, ceramic coatings, and paint correction — delivered to your driveway anywhere in North NJ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="tel:8623301276"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                DM on Instagram
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1.5">
                {['A', 'J', 'D'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white text-xs font-bold border-2 border-white/20"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <StarRating count={5} />
                  <span className="text-white font-semibold text-sm ml-1">5.0</span>
                </div>
                <p className="text-white/60 text-xs">45+ five-star reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== FEATURED ===== */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/gallery-1.png"
                    alt="Our detailing work"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-brand">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-display font-bold text-foreground text-sm">100+</div>
                      <div className="text-xs text-muted-foreground">Cars Detailed</div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={200}>
              <div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Our Work</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
                  Every Car Deserves{' '}
                  <span className="text-gradient">Showroom Quality</span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  From daily drivers to exotics, we treat every vehicle with the same obsessive attention to detail.
                  Our process combines premium products with professional techniques honed across hundreds of details.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Premium Gyeon and IGL ceramic coating products',
                    'Multi-stage machine polishing for paint correction',
                    'Fully mobile — we come to your location',
                    'Serving North NJ, 7 days a week',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/cars"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:scale-105 transition-all duration-200"
                  >
                    View Cars Gallery
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">What We Do</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground">
              Premium{' '}
              <span className="text-gradient">Detailing Services</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Each service is tailored to your vehicle's needs, performed with professional-grade products.
            </p>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="group h-full bg-white/60 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-brand-blue/50 hover:-translate-y-2 transition-all duration-300 hover:shadow-brand">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERAMIC COATING ===== */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection delay={200}>
              <div>
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Protection</span>
                <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground leading-tight">
                  Ceramic Coating{' '}
                  <span className="text-gradient">Done Right</span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Our ceramic coating process starts with a full decontamination wash, clay bar treatment, and paint
                  correction before any coating is applied. The result? A glass-hard, hydrophobic layer that lasts years —
                  not months.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Hydrophobic', desc: 'Water beads & rolls off' },
                    { label: 'UV Protection', desc: 'Resists paint fade' },
                    { label: 'Scratch Resistance', desc: 'Hard 9H coating' },
                    { label: 'Easy Maintenance', desc: 'Dirt slides right off' },
                  ].map((benefit, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted border border-border">
                      <div className="font-semibold text-foreground text-sm">{benefit.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{benefit.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="tel:8623301276"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-green text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200"
                  >
                    Get a Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/gallery-1.png"
                    alt="Ceramic coating"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-brand-blue rounded-2xl p-4 shadow-brand">
                  <div className="text-white">
                    <div className="font-display font-black text-2xl">9H</div>
                    <div className="text-xs text-white/70">Hardness Rating</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ===== GALLERY LINKS ===== */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-12">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Gallery</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground">
              See the{' '}
              <span className="text-gradient">Results</span>
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                to: '/cars',
                label: 'Cars Gallery',
                subtitle: 'Everyday drivers to luxury sedans',
                gradient: 'from-brand-blue to-blue-800',
              },
              {
                to: '/supercars',
                label: 'Super Cars',
                subtitle: 'Exotic and high-performance vehicles',
                gradient: 'from-brand-green to-emerald-800',
              },
            ].map((card) => (
              <RevealSection key={card.to}>
                <Link
                  to={card.to}
                  className={`group block relative overflow-hidden rounded-2xl bg-gradient-to-br ${card.gradient} p-10 aspect-video hover:scale-[1.02] transition-all duration-300 shadow-lg`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.3)_0%,_transparent_70%)]" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display font-black text-white text-3xl mb-2">{card.label}</h3>
                    <p className="text-white/70 text-sm">{card.subtitle}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                      View Gallery
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Reviews</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground">
              What Our{' '}
              <span className="text-gradient">Customers Say</span>
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="h-full bg-white/60 backdrop-blur-sm border border-border rounded-2xl p-7 hover:border-brand-blue/30 hover:-translate-y-1 transition-all duration-300">
                  <StarRating count={review.stars} />
                  <blockquote className="mt-4 text-foreground leading-relaxed">
                    "{review.text}"
                  </blockquote>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-blue to-brand-green flex items-center justify-center text-white text-sm font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{review.name}</div>
                        <div className="text-xs text-muted-foreground">Google Review</div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.time}</span>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="bg-white/60 backdrop-blur-sm border border-border rounded-3xl p-10 lg:p-14">
              <div className="max-w-2xl mx-auto text-center">
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Coverage</span>
                <h2 className="mt-3 text-4xl font-display font-black text-foreground">
                  We Come to{' '}
                  <span className="text-gradient">You</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Serving the entire North NJ region — we bring our professional setup to your driveway.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-2.5">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="tel:8623301276"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue text-white font-semibold shadow-brand hover:opacity-90 hover:scale-105 transition-all duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                    </svg>
                    Book Your Detail
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-brand-green">Get in Touch</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-display font-black text-foreground">
              Ready to{' '}
              <span className="text-gradient">Book?</span>
            </h2>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                ),
                label: 'Phone',
                value: '(862) 330-1276',
                sub: 'Call or text anytime',
                href: 'tel:8623301276',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email',
                value: 'justdetailingandco@gmail.com',
                sub: 'We respond within hours',
                href: 'mailto:justdetailingandco@gmail.com',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                label: 'Location',
                value: 'Clifton, NJ 07014',
                sub: 'Serving all of North NJ',
                href: 'https://maps.google.com/?q=Clifton+NJ+07014',
              },
            ].map((card, i) => (
              <RevealSection key={i} delay={i * 100}>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block h-full bg-white/60 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-brand-blue/40 hover:-translate-y-1 hover:shadow-brand transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-5 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    {card.label}
                  </div>
                  <div className="font-display font-bold text-foreground text-lg leading-tight mb-1">
                    {card.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{card.sub}</div>
                </a>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
