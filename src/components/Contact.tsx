import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all'

  return (
    <section id="contact" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="section-heading">Book Your Detail Today</h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Fill out the form and we'll get back to you within a few hours to confirm your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-900 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Phone / Text</p>
                  <a href="tel:+15550001234" className="text-zinc-400 text-sm hover:text-brand-400 transition-colors">
                    (555) 000-1234
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-900 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Email</p>
                  <a href="mailto:hello@jdautodetailing.com" className="text-zinc-400 text-sm hover:text-brand-400 transition-colors">
                    hello@jdautodetailing.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-900 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">Location</p>
                  <p className="text-zinc-400 text-sm">Mobile service — we come to you!</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Serving the greater metro area</p>
                </div>
              </div>
            </div>

            <div className="card bg-brand-950/40 border-brand-900">
              <p className="text-brand-300 font-semibold text-sm mb-1">Hours</p>
              <div className="text-zinc-400 text-sm space-y-1">
                <div className="flex justify-between"><span>Mon – Fri</span><span className="text-white">8am – 6pm</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-white">9am – 5pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-zinc-600">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 rounded-full bg-brand-950 border border-brand-700 flex items-center justify-center">
                  <Send size={28} className="text-brand-400" />
                </div>
                <h3 className="text-white font-bold text-xl">Request Sent!</h3>
                <p className="text-zinc-400 max-w-sm">
                  Thanks, {form.name}! We'll reach out to{' '}
                  <span className="text-white">{form.email}</span> within a few hours to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 text-xs font-medium mb-1.5">Vehicle (Year/Make/Model) *</label>
                    <input
                      required
                      name="vehicle"
                      value={form.vehicle}
                      onChange={handleChange}
                      placeholder="2020 Toyota Camry"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-medium mb-1.5">Service *</label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    <option value="bronze">Bronze Package — $99</option>
                    <option value="silver">Silver Package — $199</option>
                    <option value="gold">Gold Package — $349</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="correction">Paint Correction</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 text-xs font-medium mb-1.5">Additional Notes</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific concerns, preferred dates, or questions..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-primary justify-center py-3.5">
                  <Send size={16} />
                  Send Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
