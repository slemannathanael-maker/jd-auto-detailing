import { Instagram, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-black text-teal-400 tracking-tight">JD</span>
              <span className="text-white font-bold text-lg">Auto Detailing</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Professional mobile detailing, ceramic coatings & paint correction. North NJ — we come to you.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/jd.autodetailingco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-teal-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linktr.ee/jd.autodetailing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Linktree"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Packages & Pricing', href: '#packages' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'About', href: '#about' },
                { label: 'Book Now', href: '#contact' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-slate-400 hover:text-teal-400 text-sm transition-colors w-fit">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Services</p>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <span>Mobile Detailing</span>
              <span>Ceramic Coatings</span>
              <span>Paint Correction</span>
              <span>Interior Detail</span>
              <span>Headlight Restoration</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} JD Auto Detailing LLC. All rights reserved.</p>
          <p className="text-slate-600">North New Jersey · Mobile Detailing</p>
        </div>
      </div>
    </footer>
  )
}
