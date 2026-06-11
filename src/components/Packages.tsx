import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Bronze',
    price: '$99',
    description: 'Perfect for a quick refresh and basic clean.',
    features: [
      'Exterior hand wash',
      'Tire & rim clean',
      'Interior vacuum',
      'Window clean (interior)',
      'Air freshener',
    ],
    popular: false,
  },
  {
    name: 'Silver',
    price: '$199',
    description: 'Our most popular package for a thorough detail.',
    features: [
      'Everything in Bronze',
      'Clay bar treatment',
      'Hand wax & polish',
      'Interior wipe-down',
      'Leather conditioning',
      'Engine bay rinse',
    ],
    popular: true,
  },
  {
    name: 'Gold',
    price: '$349',
    description: 'The full restoration experience — inside and out.',
    features: [
      'Everything in Silver',
      'Machine paint correction',
      'Ceramic sealant (1-year)',
      'Full steam interior clean',
      'Headlight restoration',
      'Odor elimination treatment',
      'Before & after photos',
    ],
    popular: false,
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="section-heading">Simple, Transparent Packages</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            No hidden fees. Choose the package that fits your vehicle's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border transition-all duration-200 ${
                pkg.popular
                  ? 'bg-brand-950/60 border-brand-700 shadow-2xl shadow-brand-950/60 scale-105'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{pkg.description}</p>
              <div className="text-4xl font-black text-white mb-6">
                {pkg.price}
                <span className="text-zinc-500 text-base font-medium ml-1">/ vehicle</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                    <Check size={16} className="text-brand-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-900/50'
                    : 'border border-zinc-700 hover:border-brand-600 text-zinc-300 hover:text-white'
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
