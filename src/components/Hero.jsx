import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 opacity-100">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              SOC 2 • ACORD Certified • 99.9% Uptime
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Automate Insurance Claims with AI-Powered Intake
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg text-slate-200/90 max-w-2xl"
            >
              File claims via voice, SMS, email, or web in minutes. AI-powered, ACORD-compliant, and trusted by modern insurance carriers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#cta" className="inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                Get Started Free
              </a>
              <a href="#pricing" className="inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                Book a Demo
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex items-center gap-6 text-sm text-slate-200/80"
            >
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-400 rounded-full"></span> SOC 2 Compliant</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-sky-400 rounded-full"></span> ACORD Certified</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-violet-400 rounded-full"></span> 99.9% Uptime</div>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-2xl overflow-hidden"
            >
              <div className="aspect-video w-full bg-gradient-to-tr from-indigo-500/30 via-sky-500/20 to-cyan-400/30" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(129,140,248,0.18),transparent_40%)]" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/40 to-slate-950/90" />
    </section>
  )
}
