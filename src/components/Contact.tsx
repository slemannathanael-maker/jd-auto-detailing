import { useState, type FormEvent } from 'react'
import { Phone, MapPin, Send, Instagram } from 'lucide-react'

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
    'w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all'

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="section-heading">Book Your Detail Today</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Fill out the form and we'll get back to you within a few hours to confirm your appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm mb-0.5">Phone / Text</p>
                  <a href="tel:+19733605507" className="text-slate-500 text-sm hover:text-teal-600 transition-colors">
                    (973) 360-5507
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                  <Instagram size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm mb-0.5">Instagram</p>
                  <a
                    href="https://www.instagram.com/jd.autodetailingco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 text-sm hover:text-blue-600 transition-colors"
                  >
                    @jd.autodetailingco
                  </a>
                  <p className="text-slate-400 text-xs mt-0.5">DM "DETAIL" to book</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-800 font-semibold text-sm mb-0.5">Service Area</p>
                  <p className="text-slate-500 text-sm">North New Jersey</p>
                  <p className="text-slate-400 text-xs mt-0.5">Mobile — we come to you</p>
                </div>
              </div>
            </div>

            <div className="card border-teal-200 bg-gradient-to-br from-teal-50 to-white">
              <p className="text-teal-700 font-semibold text-sm mb-2">Hours</p>
              <div className="text-sm space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Mon – Fri</span>
                  <span className="text-slate-800 font-medium">8am – 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Saturday</span>
                  <span className="text-slate-800 font-medium">9am – 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card h-full flex flex-col items-center justify-center text-center gap-4 py-16">
                <div className="w-16 h-16 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center">
                  <Send size={28} className="text-teal-600" />
                </div>
                <h3 className="text-slate-900 font-bold text-xl">Request Sent!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thanks, {form.name}! We'll reach out to{' '}
                  <span className="text-slate-800 font-medium">{form.email}</span> within a few hours to confirm your booking.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 text-xs font-medium mb-1.5">Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-medium mb-1.5">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 text-xs font-medium mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-medium mb-1.5">Vehicle (Year/Make/Model) *</label>
                    <input required name="vehicle" value={form.vehicle} onChange={handleChange} placeholder="2020 BMW M3" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-medium mb-1.5">Service *</label>
                  <select required name="service" value={form.service} onChange={handleChange} className={inputClass}>
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
                  <label className="block text-slate-600 text-xs font-medium mb-1.5">Additional Notes</label>
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
