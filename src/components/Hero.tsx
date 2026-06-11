import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(234,88,12,0.15),transparent)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-950/60 border border-brand-800 text-brand-400 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <Star size={14} className="fill-brand-400" />
          Rated #1 Detailing in the Area
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6">
          Your Car Deserves{' '}
          <span className="text-brand-500">The Best</span>
        </h1>

        <p className="max-w-2xl mx-auto text-zinc-400 text-lg sm:text-xl mb-10 leading-relaxed">
          Professional auto detailing that restores your vehicle to showroom condition. Interior, exterior, ceramic coatings, and paint correction — done right, every time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Book a Detail <ArrowRight size={18} />
          </a>
          <a href="#packages" className="btn-outline text-base px-8 py-4">
            View Packages
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-500">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-white">500+</span>
            <span>Cars Detailed</span>
          </div>
          <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-white">5★</span>
            <span>Average Rating</span>
          </div>
          <div className="w-px h-10 bg-zinc-800 hidden sm:block" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-white">100%</span>
            <span>Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
