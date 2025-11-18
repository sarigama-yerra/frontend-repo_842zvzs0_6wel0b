import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MessageSquare, Mail, Globe, Bot, Inbox } from 'lucide-react'

const channelChips = [
  { icon: Phone, label: 'Voice', color: 'from-emerald-400/80 to-emerald-500/40' },
  { icon: MessageSquare, label: 'SMS', color: 'from-cyan-400/80 to-sky-500/40' },
  { icon: Mail, label: 'Email', color: 'from-violet-400/80 to-indigo-500/40' },
  { icon: Globe, label: 'Web', color: 'from-amber-400/80 to-orange-500/40' },
]

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  })

  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* Ambient backdrop tuned for insurance + comms */}
      <div className="absolute inset-0 -z-10">
        {/* Soft aurora wash */}
        <div className="absolute -inset-24">
          <div className="absolute -top-24 left-1/5 h-[60vh] w-[60vh] rounded-full blur-3xl"
               style={{ background: 'radial-gradient(40% 40% at 50% 50%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0) 70%)' }} />
          <div className="absolute bottom-[-10%] right-[-5%] h-[55vh] w-[55vh] rounded-full blur-3xl"
               style={{ background: 'radial-gradient(45% 45% at 50% 50%, rgba(129,140,248,0.22) 0%, rgba(129,140,248,0) 70%)' }} />
        </div>
        {/* Subtle grid for enterprise feel */}
        <div className="absolute inset-0 opacity-[0.22]"
             style={{ backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)', backgroundSize: '36px 36px', maskImage: 'radial-gradient(75% 60% at 50% 40%, black 60%, transparent 100%)' }} />
        {/* Vignette to anchor content */}
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 160px rgba(2,6,23,0.85)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Omnichannel AI Intake for Claims Teams
            </motion.div>
            <motion.h1 {...fadeUp(0.05)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
              Route every claim from any channel into structured FNOL—automatically
            </motion.h1>
            <motion.p {...fadeUp(0.1)} className="mt-6 text-lg text-slate-200/90 max-w-2xl">
              Voice, SMS, email, and web flow into one smart inbox. ClaimFlow AI validates ACORD, extracts entities, and triggers next steps instantly.
            </motion.p>
            <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
                Start free
              </a>
              <a href="#pricing" className="inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20">
                See pricing
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="mt-8 flex items-center gap-6 text-sm text-slate-200/80">
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-emerald-400 rounded-full" /> SOC 2</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-sky-400 rounded-full" /> ACORD</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 bg-violet-400 rounded-full" /> 99.9% uptime</div>
            </motion.div>
          </div>

          {/* Visual: Channel → AI Router → Smart Inbox */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              {/* Animated network lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                {/* Paths from corners to center */}
                {[
                  'M80 120 C 220 180, 320 200, 400 300',
                  'M720 140 C 600 220, 520 260, 400 300',
                  'M120 520 C 260 460, 320 380, 400 300',
                  'M700 500 C 560 420, 480 360, 400 300',
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke={i % 2 === 0 ? 'url(#grad1)' : 'url(#grad2)'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.9 }}
                    transition={{ duration: reduce ? 0.6 : 1.6, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                  />
                ))}
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Channel chips around edges */}
              {channelChips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  className="absolute flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white shadow/50 border border-white/10"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  {...{ className: `absolute bg-gradient-to-br ${chip.color} backdrop-blur border-white/10` }}
                  styleOverride={{}}
                >
                  <chip.icon className="h-4 w-4" />
                  <span>{chip.label}</span>
                </motion.div>
              ))}

              {/* Position chips */}
              <style>{`
                /* top-left */
                .aspect-\[4\/3\] > div:nth-of-type(2) { top: 14%; left: 8%; }
                /* top-right */
                .aspect-\[4\/3\] > div:nth-of-type(3) { top: 10%; right: 10%; }
                /* bottom-left */
                .aspect-\[4\/3\] > div:nth-of-type(4) { bottom: 12%; left: 12%; }
                /* bottom-right */
                .aspect-\[4\/3\] > div:nth-of-type(5) { bottom: 10%; right: 8%; }
              `}</style>

              {/* Central AI router node */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 rounded-full"
                     style={{ background: 'conic-gradient(from 0deg, rgba(34,197,94,0.2), rgba(56,189,248,0.2), rgba(99,102,241,0.2), rgba(34,197,94,0.2))', filter: 'blur(10px)' }} />
                <div className="relative z-10 flex flex-col items-center">
                  <Bot className="h-7 w-7 text-cyan-300" />
                  <div className="mt-2 text-xs text-slate-200/90">AI Router</div>
                </div>
                {/* pulse ring */}
                <motion.span
                  className="absolute inset-0 rounded-full border border-cyan-300/40"
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={reduce ? {} : { scale: [1, 1.08, 1], opacity: [0.6, 0.2, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Smart inbox at bottom center */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 bottom-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur px-4 py-2 text-white flex items-center gap-2 shadow-lg"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Inbox className="h-4 w-4 text-emerald-300" />
                <span className="text-sm">Smart Inbox: FNOL created • Validation passed</span>
              </motion.div>

              {/* Info bubbles flowing in */}
              {!reduce && (
                <>
                  {[0,1,2].map((n) => (
                    <motion.div key={n} className="absolute text-xs text-white/90 px-3 py-2 rounded-lg border border-white/10 bg-white/10 backdrop-blur"
                      initial={{ opacity: 0, x: -10, y: -10 }}
                      animate={{ opacity: [0,1,1,0], x: [0, 10, 20, 30], y: [0, -6, -10, -12] }}
                      transition={{ duration: 4, delay: 0.6 + n * 0.6, repeat: Infinity, repeatDelay: 2 }}
                      style={{ top: `${30 + n*8}%`, left: `${20 + n*10}%` }}
                    >
                      Policy # • Loss date • Photos
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90" />
      {/* Film grain to unify layers */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
           style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")' }}
      />
    </section>
  )
}
