import { ArrowRight, MapPin, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right,#0d9488 1px,transparent 1px),linear-gradient(to bottom,#0d9488 1px,transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Teal/blue orbs */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <MapPin size={14} />
          Mobile Detailing · North NJ
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-6 text-slate-900">
          Restore Gloss.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
            Protect Your Paint.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-500 text-lg sm:text-xl mb-10 leading-relaxed">
          Professional mobile detailing, ceramic coatings & paint correction — we come to you anywhere in North Jersey. Every detail matters.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Book a Detail <ArrowRight size={18} />
          </a>
          <a href="#gallery" className="btn-outline text-base px-8 py-4">
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-slate-900">139+</span>
            <span>Cars Detailed</span>
          </div>
          <div className="w-px h-10 bg-slate-200 hidden sm:block" />
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-0.5 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-teal-500 text-teal-500" />
              ))}
            </div>
            <span>5-Star Rated</span>
          </div>
          <div className="w-px h-10 bg-slate-200 hidden sm:block" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-slate-900">100%</span>
            <span>Mobile — We Come To You</span>
          </div>
        </div>
      </div>
    </section>
  )
}
