import { Award, Clock, ThumbsUp } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Professional Grade Products',
    description: 'We only use industry-leading products — Gyeon, Chemical Guys, Meguiar\'s — no shortcuts.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most details completed same-day. We respect your time as much as we respect your car.',
  },
  {
    icon: ThumbsUp,
    title: '100% Satisfaction',
    description: "If you're not happy, we make it right. No questions asked.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">About JD Auto Detailing</p>
            <h2 className="section-heading mb-6">
              Passionate About Every<br />
              <span className="text-brand-500">Inch of Your Vehicle</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              JD Auto Detailing was founded with one goal: to give every car the treatment it deserves. With over 7 years of hands-on detailing experience, we bring professional-grade results to every job — whether it's a daily driver or a weekend showcar.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              We're a locally owned operation, which means you deal directly with the detailer, not a middleman. Your car is never handed off — we handle it personally from start to finish.
            </p>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </div>

          <div className="flex flex-col gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-950 border border-brand-900 flex items-center justify-center">
                  <v.icon size={22} className="text-brand-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{v.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
