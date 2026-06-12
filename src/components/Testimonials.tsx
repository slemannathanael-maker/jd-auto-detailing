import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcus T.',
    vehicle: '2021 BMW M3',
    rating: 5,
    text: "Took my M3 in for the Gold package and I honestly couldn't believe the results. The paint looks better than when I bought it. JD is a real pro — won't go anywhere else.",
  },
  {
    name: 'Sarah K.',
    vehicle: '2019 Honda CR-V',
    rating: 5,
    text: "My CR-V had years of dog hair, coffee spills, and road grime. One appointment with JD and it looks brand new inside. Seriously impressive work for the price.",
  },
  {
    name: 'James R.',
    vehicle: '2023 Ford F-150',
    rating: 5,
    text: "Had the ceramic coating done on my new truck. The water just beads right off, and it's been 8 months and still looks amazing. Worth every penny.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-teal-500 fill-teal-500" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card flex flex-col gap-4">
              <Stars count={t.rating} />
              <p className="text-slate-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="border-t border-slate-100 pt-4">
                <p className="text-slate-900 font-semibold text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
