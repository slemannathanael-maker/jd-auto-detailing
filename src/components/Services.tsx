import { Droplets, Sparkles, Shield, Zap, Wind, Car } from 'lucide-react'

const services = [
  {
    icon: Droplets,
    title: 'Exterior Wash & Wax',
    description: 'Hand wash, clay bar treatment, and carnauba wax application for a deep, lasting shine.',
  },
  {
    icon: Sparkles,
    title: 'Interior Detail',
    description: 'Full vacuum, steam clean, leather conditioning, and odor elimination for a fresh cabin.',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-term paint protection with hydrophobic ceramic coating — up to 5 years of defense.',
  },
  {
    icon: Zap,
    title: 'Paint Correction',
    description: 'Multi-stage machine polishing to remove swirl marks, scratches, and oxidation.',
  },
  {
    icon: Wind,
    title: 'Headlight Restoration',
    description: 'Restore faded, yellowed headlights to crystal clarity, improving both looks and safety.',
  },
  {
    icon: Car,
    title: 'Engine Bay Cleaning',
    description: 'Safe degreasing and detailing of the engine bay for a clean, well-maintained look.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="section-heading">Premium Detailing Services</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            From a quick refresh to a full restoration, we have a service for every need and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card group">
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-900 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:border-brand-500 transition-colors">
                <s.icon size={22} className="text-brand-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
