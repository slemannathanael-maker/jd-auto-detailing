import { Award, Clock, ThumbsUp, Instagram } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Professional-Grade Products',
    description: "Gyeon, Chemical Guys, Meguiar's — only top-shelf products on every car.",
    color: 'teal',
  },
  {
    icon: Clock,
    title: 'We Come To You',
    description: 'Mobile service across North NJ. Your home, your office, your schedule.',
    color: 'blue',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    description: "Not happy? We make it right — no questions, no hassle.",
    color: 'teal',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">About JD Auto Detailing</p>
            <h2 className="section-heading mb-6">
              Passionate About Every{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                Inch of Your Vehicle
              </span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              JD Auto Detailing LLC is a North New Jersey based mobile detailing operation. We specialize in ceramic coatings, paint correction, and full interior/exterior restoration — bringing showroom results directly to your driveway.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Every car we touch is handled personally from start to finish. No middle men, no hand-offs — just meticulous detail work and a passion for making every vehicle look its absolute best.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-primary">
                Book a Detail
              </a>
              <a
                href="https://www.instagram.com/jd.autodetailingco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Instagram size={16} />
                @jd.autodetailingco
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 items-start">
                <div
                  className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${
                    v.color === 'teal'
                      ? 'bg-teal-50 border border-teal-200'
                      : 'bg-blue-50 border border-blue-200'
                  }`}
                >
                  <v.icon
                    size={22}
                    className={v.color === 'teal' ? 'text-teal-600' : 'text-blue-600'}
                  />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold mb-1">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
