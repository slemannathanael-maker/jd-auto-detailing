const images = [
  { bg: 'from-zinc-800 to-zinc-700', label: 'Black SUV — Full Detail' },
  { bg: 'from-zinc-700 to-zinc-600', label: 'Sports Car — Paint Correction' },
  { bg: 'from-zinc-800 to-zinc-700', label: 'White Sedan — Ceramic Coat' },
  { bg: 'from-zinc-700 to-zinc-600', label: 'Truck — Interior Restore' },
  { bg: 'from-zinc-800 to-zinc-700', label: 'Luxury Car — Full Gold Package' },
  { bg: 'from-zinc-700 to-zinc-600', label: 'Crossover — Headlight Restore' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="section-heading">Before & After Gallery</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Every car we touch tells a story. Here's a glimpse at the transformations we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${img.bg} overflow-hidden group cursor-pointer border border-zinc-800 hover:border-brand-700 transition-all duration-300`}
            >
              {/* Placeholder car silhouette */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 200 80" className="w-3/4" fill="white">
                  <path d="M30 60 L20 60 L15 45 L35 30 L70 25 L100 20 L130 25 L165 30 L185 45 L180 60 L30 60 Z" />
                  <circle cx="55" cy="60" r="12" />
                  <circle cx="145" cy="60" r="12" />
                </svg>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-semibold">{img.label}</p>
                <p className="text-brand-400 text-xs mt-0.5">JD Auto Detailing</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-zinc-500 text-sm">
          More photos available — follow us on Instagram{' '}
          <a href="#" className="text-brand-400 hover:text-brand-300 transition-colors">@jdautodetailing</a>
        </p>
      </div>
    </section>
  )
}
