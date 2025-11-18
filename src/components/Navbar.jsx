import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'features', label: 'Features' },
  { id: 'how', label: 'How It Works' },
  { id: 'channels', label: 'Channels' },
  { id: 'benefits', label: 'Benefits' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'integrations', label: 'Integrations' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-white/10' : 'bg-transparent'} `}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-sky-500/30"></div>
            <div className="text-white font-semibold tracking-tight">ClaimFlow AI</div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-slate-200/90 hover:text-white transition text-sm">
                {item.label}
              </button>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <a href="#cta" className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
              Start Free Trial
            </a>
          </div>
          <button aria-label="Open menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left text-slate-200/90 hover:text-white py-2">
                {item.label}
              </button>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow">
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
