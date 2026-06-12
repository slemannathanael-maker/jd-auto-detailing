import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-teal-600 tracking-tight">JD</span>
              <span className="hidden sm:block w-px h-6 bg-slate-300 mx-1" />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-slate-900 font-bold text-sm tracking-tight">Auto Detailing</span>
                <span className="text-teal-600 font-medium text-xs tracking-wide">North NJ</span>
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-600 hover:text-teal-600 text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm py-2">
              Book Now
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-500 hover:text-teal-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-slate-700 hover:text-teal-600 font-medium text-base"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
