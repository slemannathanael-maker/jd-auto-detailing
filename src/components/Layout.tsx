import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Menu, X, ExternalLink } from 'lucide-react'
import { useScrollNav } from '../hooks/useScrollNav'

interface LayoutProps {
  children: React.ReactNode
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Cars', path: '/cars' },
  { label: 'Super Cars', path: '/supercars' },
]

export default function Layout({ children }: LayoutProps) {
  const scrolled = useScrollNav()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/favicon.svg"
                alt="JD Auto Detailing Logo"
                className="h-10 w-10 rounded-xl shadow-brand transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base text-foreground whitespace-nowrap">
                  JD Auto Detailing
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  LLC
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    pathname === link.path
                      ? 'text-brand-blue'
                      : 'text-foreground hover:text-brand-blue'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-brand-blue transition-all duration-300 ${
                      pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
              <a
                href="tel:8623301276"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl shadow-brand transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-border px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-lg transition-colors ${
                  pathname === link.path
                    ? 'bg-brand-blue/10 text-brand-blue'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:8623301276"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl shadow-brand mt-1"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt="JD Auto Detailing Logo"
                  className="h-10 w-10 rounded-xl"
                />
                <div>
                  <div className="font-display font-bold text-white text-lg">JD Auto Detailing</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">LLC</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                Premium mobile detailing, ceramic coatings, and paint correction delivered directly to you across North NJ.
              </p>
              <a
                href="https://www.instagram.com/jd.autodetailingco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <Instagram className="h-4 w-4" />
                <span>@jd.autodetailingco</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-white text-lg">Contact</h3>
              <div className="space-y-3">
                <a
                  href="tel:8623301276"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/40 transition-colors">
                    <Phone className="h-3.5 w-3.5 text-brand-blue" />
                  </div>
                  (862) 330-1276
                </a>
                <a
                  href="mailto:justdetailingandco@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/40 transition-colors">
                    <Mail className="h-3.5 w-3.5 text-brand-blue" />
                  </div>
                  justdetailingandco@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                  </div>
                  Clifton, NJ 07014
                </div>
                <a
                  href="https://linktr.ee/jd.autodetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/40 transition-colors">
                    <ExternalLink className="h-3.5 w-3.5 text-brand-green" />
                  </div>
                  linktr.ee/jd.autodetailing
                </a>
              </div>
            </div>

            {/* Hours Column */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-white text-lg">Hours</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Monday – Sunday</span>
                  <span className="text-white font-medium">9:00 AM – 7:30 PM</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/30">
                  <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-brand-green text-xs font-medium">Open 7 days a week</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-slate-500 uppercase tracking-[0.2em] mb-2">Service Area</p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Clifton, Nutley, Morris County, Passaic County, Union County, Essex County, Hudson County, Bergen County
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} JD Auto Detailing LLC. All rights reserved.
            </p>
            <p className="text-xs text-slate-600">
              Serving North NJ · Mobile Detailing · Ceramic Coatings · Paint Correction
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
