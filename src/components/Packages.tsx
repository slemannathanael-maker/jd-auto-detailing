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
    accent: 'teal',
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
      'Odor elimination',
    ],
    popular: true,
    accent: 'teal',
  },
  {
    name: 'Gold',
    price: '$349',
    description: 'The full restoration — inside and out.',
    features: [
      'Everything in Silver',
      'Machine paint correction',
      'Ceramic sealant (1-year)',
      'Full steam interior clean',
      'Headlight restoration',
      'Before & after photos',
    ],
    popular: false,
    accent: 'blue',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="section-heading">Simple, Transparent Packages</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            No hidden fees. Choose the package that fits your vehicle's needs, or DM us for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-8 border transition-all duration-200 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-teal-600 to-teal-700 border-teal-500 shadow-2xl shadow-teal-200 scale-105'
                  : 'bg-white border-slate-200 hover:border-teal-300 shadow-sm hover:shadow-md'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              )}

              <h3 className={`text-xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-4 ${pkg.popular ? 'text-teal-100' : 'text-slate-500'}`}>
                {pkg.description}
              </p>
              <div className={`text-4xl font-black mb-6 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                {pkg.price}
                <span className={`text-base font-medium ml-1 ${pkg.popular ? 'text-teal-200' : 'text-slate-400'}`}>
                  / vehicle
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${pkg.popular ? 'text-teal-200' : 'text-teal-600'}`}
                    />
                    <span className={pkg.popular ? 'text-teal-50' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-xl transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-white text-teal-700 hover:bg-teal-50'
                    : 'bg-teal-600 hover:bg-teal-500 text-white'
                }`}
              >
                Book This Package
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-slate-500 text-sm">
          Need a custom quote?{' '}
          <a href="https://www.instagram.com/jd.autodetailingco" className="text-teal-600 hover:text-teal-700 font-medium">
            DM "DETAIL" on Instagram
          </a>{' '}
          and we'll get back to you.
        </p>
      </div>
    </section>
  )
}
