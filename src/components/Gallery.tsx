import { Instagram, ExternalLink } from 'lucide-react'

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="section-heading">Every Car We Touch</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Real cars. Real results. From daily drivers to exotics — every vehicle gets the same
            level of care and attention to detail.
          </p>
        </div>

        {/* Main gallery grid using real work photos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Gallery image 1 */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
            <img
              src="/gallery-2.png"
              alt="JD Auto Detailing work — BMWs, Teslas, Jeeps and more"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-white font-bold text-lg">Recent Detailing Work</p>
                <p className="text-teal-300 text-sm">BMW · Tesla · Jeep · Ford Bronco · Interior</p>
              </div>
            </div>
          </div>

          {/* Gallery image 2 */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
            <img
              src="/gallery-1.png"
              alt="JD Auto Detailing work — Porsche, GMC, Toyota, BMW and more"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <p className="text-white font-bold text-lg">Recent Detailing Work</p>
                <p className="text-teal-300 text-sm">Porsche · GMC · Toyota · BMW X5 M · Audi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight cars row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: 'BMW M Series', sub: 'Paint Correction + Ceramic' },
            { label: 'Porsche 911', sub: 'Full Detail + Wax' },
            { label: 'McLaren', sub: 'Exotic Full Detail' },
            { label: 'Toyota 4Runner', sub: 'Exterior + Interior' },
          ].map((car) => (
            <div
              key={car.label}
              className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-xl p-4 text-center"
            >
              <p className="text-slate-800 font-bold text-sm">{car.label}</p>
              <p className="text-teal-600 text-xs mt-0.5">{car.sub}</p>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-100 rounded-2xl p-8">
          <div className="text-center sm:text-left">
            <p className="text-slate-900 font-bold text-lg">See more of our work</p>
            <p className="text-slate-500 text-sm mt-1">
              Follow <span className="text-teal-600 font-medium">@jd.autodetailingco</span> on Instagram for before/afters, super cars, and new work every week.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://www.instagram.com/jd.autodetailingco"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              <Instagram size={16} />
              Follow Us
            </a>
            <a
              href="https://linktr.ee/jd.autodetailing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline whitespace-nowrap"
            >
              <ExternalLink size={16} />
              All Links
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
