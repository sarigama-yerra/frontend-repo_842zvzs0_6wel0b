import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      company: form.get('company'),
      message: form.get('message'),
      source: 'website'
    }
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We\'ll be in touch shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold text-white">Talk to our team</h3>
          <p className="mt-2 text-slate-300/80">Tell us about your claims process and we\'ll tailor a demo for your needs.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input name="name" required placeholder="Full name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
            <input name="email" required type="email" placeholder="Work email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
            <input name="company" placeholder="Company" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
            <textarea name="message" rows="4" required placeholder="How can we help?" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
            <button disabled={loading} className="w-full rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-3 font-semibold text-white">
              {loading ? 'Sending...' : 'Send message'}
            </button>
            {status && <p className="text-sm text-slate-300/90">{status}</p>}
          </form>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-white font-semibold">Stay in the loop</h4>
          <Newsletter />
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    const email = new FormData(e.currentTarget).get('email')
    try {
      const res = await fetch(`${BACKEND_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent: true, source: 'website' })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Subscribed! Check your inbox.')
      e.currentTarget.reset()
    } catch {
      setStatus('Could not subscribe. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="mt-4 flex gap-2">
      <input name="email" required type="email" placeholder="Your email" className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
      <button disabled={loading} className="rounded-lg bg-white/10 border border-white/15 px-4 py-3 text-white">
        {loading ? '...' : 'Subscribe'}
      </button>
      {status && <p className="w-full text-sm text-slate-300/90 mt-3">{status}</p>}
    </form>
  )
}
