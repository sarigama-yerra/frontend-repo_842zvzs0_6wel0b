import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MessageSquare, Mail, Globe, Bot } from 'lucide-react'

const channelChips = [
  { icon: Phone, label: 'Voice', color: 'from-emerald-400/70 to-emerald-500/30' },
  { icon: MessageSquare, label: 'SMS', color: 'from-cyan-400/70 to-sky-500/30' },
  { icon: Mail, label: 'Email', color: 'from-violet-400/70 to-indigo-500/30' },
  { icon: Globe, label: 'Web', color: 'from-amber-400/70 to-orange-500/30' },
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
      {/* Ambient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-24">
          <div
            className="absolute -top-24 left-1/5 h-[60vh] w-[60vh] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(40% 40% at 50% 50%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0) 70%)',
            }}
          />
          <div
            className="absolute bottom-[-10%] right-[-5%] h-[55vh] w-[55vh] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(45% 45% at 50% 50%, rgba(129,140,248,0.22) 0%, rgba(129,140,248,0) 70%)',
            }}
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            maskImage:
              'radial-gradient(75% 60% at 50% 40%, black 60%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 160px rgba(2,6,23,0.85)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Copy only */}
          <div className="lg:col-span-6">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-5 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI-powered omnichannel intake for FNOL
            </motion.div>
            <motion.h1
              {...fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Connect every channel. Create structured claims instantly.
            </motion.h1>
            <motion.p
              {...fadeUp(0.1)}
              className="mt-6 text-lg text-slate-200/90 max-w-2xl"
            >
              Voice, SMS, email, and web flow through one AI router that validates ACORD, extracts entities, and routes action—no manual triage.
            </motion.p>
            <motion.div
              {...fadeUp(0.15)}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                Get started
              </a>
              <a
                href="#pricing"
                className="inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                See pricing
              </a>
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="mt-6 flex items-center gap-6 text-sm text-slate-200/80"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-emerald-400 rounded-full" /> SOC 2
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-sky-400 rounded-full" /> ACORD
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-violet-400 rounded-full" /> 99.9% uptime
              </div>
            </motion.div>
          </div>

          {/* Visual: Connection Network */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              {/* Soft aurora */}
              <div className="absolute inset-0 opacity-60">
                <div
                  className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full blur-3xl"
                  style={{
                    background:
                      'radial-gradient(35% 35% at 50% 50%, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0) 70%)',
                  }}
                />
                <div
                  className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl"
                  style={{
                    background:
                      'radial-gradient(35% 35% at 50% 50%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 70%)',
                  }}
                />
              </div>

              {/* Network lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                {/* Core radial connections to center */}
                {[
                  'M90 120 C 240 180, 320 220, 400 300',
                  'M710 130 C 600 220, 520 260, 400 300',
                  'M120 520 C 260 460, 320 380, 400 300',
                  'M690 500 C 560 420, 480 360, 400 300',
                ].map((d, i) => (
                  <motion.path
                    key={`core-${i}`}
                    d={d}
                    stroke={i % 2 === 0 ? 'url(#g1)' : 'url(#g2)'}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.9 }}
                    transition={{ duration: reduce ? 0.6 : 1.6, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
                  />
                ))}

                {/* Subtle mesh between peripheral nodes */}
                {[
                  'M180 200 Q 260 160 340 220',
                  'M620 200 Q 540 160 460 220',
                  'M200 420 Q 300 460 360 380',
                  'M600 420 Q 500 460 440 380',
                  'M200 300 Q 400 260 600 300',
                ].map((d, i) => (
                  <motion.path
                    key={`mesh-${i}`}
                    d={d}
                    stroke="rgba(148,163,184,0.35)"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                  />
                ))}

                {/* Constellation nodes */}
                {[
                  [180, 200], [340, 220], [460, 220], [620, 200],
                  [200, 300], [600, 300], [360, 380], [440, 380],
                  [220, 420], [580, 420], [260, 160], [540, 160],
                ].map(([x, y], i) => (
                  <motion.circle
                    key={`node-${i}`}
                    cx={x}
                    cy={y}
                    r={3}
                    fill={i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#34d399' : '#6366f1'}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={reduce ? { opacity: 0.9, scale: 1 } : { opacity: [0.6, 0.95, 0.6], scale: [0.95, 1, 0.95] }}
                    transition={{ duration: 3 + (i % 4) * 0.5, repeat: Infinity, delay: i * 0.05 }}
                  />
                ))}

                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Channel chips around the edges (static) */}
              {channelChips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  className={`absolute flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white border border-white/10 bg-gradient-to-br ${chip.color} backdrop-blur`}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <chip.icon className="h-4 w-4" />
                  <span>{chip.label}</span>
                </motion.div>
              ))}

              {/* Place chips */}
              <style>{`
                .aspect-[4/3] > div:nth-of-type(2) { top: 14%; left: 8%; }
                .aspect-[4/3] > div:nth-of-type(3) { top: 10%; right: 10%; }
                .aspect-[4/3] > div:nth-of-type(4) { bottom: 12%; left: 12%; }
                .aspect-[4/3] > div:nth-of-type(5) { bottom: 10%; right: 8%; }
              `}</style>

              {/* Central router badge */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-44 w-44 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(34,197,94,0.18), rgba(56,189,248,0.18), rgba(99,102,241,0.18), rgba(34,197,94,0.18))',
                    filter: 'blur(10px)',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center">
                  <Bot className="h-7 w-7 text-cyan-300" />
                  <div className="mt-2 text-xs text-slate-200/90">AI Router</div>
                </div>
                {/* slow pulse ring */}
                <motion.span
                  className="absolute inset-0 rounded-full border border-cyan-300/40"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={reduce ? {} : { scale: [1, 1.06, 1], opacity: [0.5, 0.25, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>

              {/* Halo rings */}
              {!reduce && (
                <>
                  {[1, 1.5, 2].map((s, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                      style={{ width: `${s * 280}px`, height: `${s * 280}px` }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.12, 0.2, 0.12] }}
                      transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.4 }}
                    />
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
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%\' height=\'100%\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.6\'/></svg>")',
        }}
      />
    </section>
  )
}
