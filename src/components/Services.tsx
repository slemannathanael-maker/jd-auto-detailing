import { Droplets, Sparkles, Shield, Zap, Wind, Car } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Wash & Wax',
    description: 'Hand wash, clay bar treatment, and carnauba wax for a deep, mirror-like shine on every panel.',
    color: 'teal',
  },
  {
    icon: Sparkles,
    title: 'Interior Detail',
    description: 'Full vacuum, steam clean, leather conditioning, and odor elimination — a showroom-fresh cabin.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Hydrophobic ceramic protection that lasts years, not weeks. Preserve your paint from the elements.',
    color: 'teal',
  },
  {
    icon: Zap,
    title: 'Paint Correction',
    description: 'Multi-stage machine polishing to remove swirl marks, scratches, and oxidation for a flawless finish.',
    color: 'blue',
  },
  {
    icon: Wind,
    title: 'Headlight Restoration',
    description: 'Crystal-clear headlights restored from yellowed and faded — safer at night and sharper overall.',
    color: 'teal',
  },
  {
    icon: Car,
    title: 'Mobile Service',
    description: 'We come directly to your home, office, or anywhere in North NJ. No drop-off needed.',
    color: 'blue',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="section-heading">Premium Detailing Services</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            From a quick refresh to a full ceramic restoration — every service performed with professional-grade products and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card group">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  s.color === 'teal'
                    ? 'bg-teal-50 border border-teal-200 group-hover:bg-teal-600'
                    : 'bg-blue-50 border border-blue-200 group-hover:bg-blue-600'
                }`}
              >
                <s.icon
                  size={22}
                  className={`transition-colors ${
                    s.color === 'teal'
                      ? 'text-teal-600 group-hover:text-white'
                      : 'text-blue-600 group-hover:text-white'
                  }`}
                />
              </div>
              <h3 className="text-slate-900 font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
