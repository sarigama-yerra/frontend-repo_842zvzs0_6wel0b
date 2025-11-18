import { useState, useMemo, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MessageSquare, Mail, Globe, Bot, Inbox, Loader2, CheckCircle2, Play, Pause } from 'lucide-react'

const channelChips = [
  { icon: Phone, label: 'Voice', key: 'voice', color: 'from-emerald-400/80 to-emerald-500/40' },
  { icon: MessageSquare, label: 'SMS', key: 'sms', color: 'from-cyan-400/80 to-sky-500/40' },
  { icon: Mail, label: 'Email', key: 'email', color: 'from-violet-400/80 to-indigo-500/40' },
  { icon: Globe, label: 'Web', key: 'web', color: 'from-amber-400/80 to-orange-500/40' },
]

const presets = [
  {
    label: 'Rear‑end, photos',
    text:
      'Policy #ABCD-1234. Rear-end collision on 2024-06-01 in Austin, TX. Photos attached of the rear bumper on a Honda Civic.',
  },
  {
    label: 'Storm loss',
    text:
      'Policy number ZX-9988. Hail damage on 05/12/2024 in Denver, CO. Attached images of broken skylight.',
  },
  {
    label: 'Injury + claim #',
    text:
      'Claim #CLM-7777. Slip and fall on 2024-03-14 in Seattle, WA. Witness statements and pictures included.',
  },
]

function extractEntities(text) {
  const policyMatch = text.match(/policy\s*(#:|number|no\.?|)\s*([A-Z0-9-]{4,})/i)
  const claimMatch = text.match(/claim\s*(#:|number|no\.?|)\s*([A-Z0-9-]{4,})/i)
  const dateMatch = text.match(/(loss|accident|hail|storm|fall|on)\s*(date|on)?\s*(:)?\s*(\d{4}-\d{2}-\d{2}|\d{1,2}\/(\d{1,2})\/(\d{2,4}))/i)
  const cityState = text.match(/in\s+([A-Za-z\s]+),?\s*([A-Z]{2})/i)
  const vehicleMatch = text.match(/(honda|toyota|ford|chevy|bmw|audi|mercedes|tesla)\s*([a-z0-9-]+)/i)
  const photosMatch = text.match(/photos?|pictures?|images?|attached|attachments?/i)

  return {
    policy: policyMatch ? policyMatch[2] : undefined,
    claim: claimMatch ? claimMatch[2] : undefined,
    lossDate: dateMatch ? dateMatch[4] : undefined,
    location: cityState ? `${cityState[1].trim()}, ${cityState[2]}` : undefined,
    vehicle: vehicleMatch ? `${vehicleMatch[1]} ${vehicleMatch[2]}` : undefined,
    attachments: photosMatch ? 'Attachments detected' : undefined,
  }
}

export default function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  })

  // Demo state
  const [text, setText] = useState(
    'Policy #ABCD-1234. Rear-end collision on 2024-06-01 in Austin, TX. Photos attached of the rear bumper on a Honda Civic.'
  )
  const [channel, setChannel] = useState('sms')
  const [processing, setProcessing] = useState(false)
  const [step, setStep] = useState(0)
  const steps = ['Ingesting', 'Validating', 'Extracting', 'Creating FNOL']

  const entities = useMemo(() => extractEntities(text), [text])

  useEffect(() => {
    let timers = []
    if (processing) {
      steps.forEach((_, i) => {
        timers.push(
          setTimeout(() => setStep(i + 1), (i + 1) * (reduce ? 200 : 500))
        )
      })
      timers.push(
        setTimeout(() => setProcessing(false), steps.length * (reduce ? 200 : 500) + (reduce ? 100 : 300))
      )
    } else {
      setStep(0)
    }
    return () => timers.forEach(clearTimeout)
  }, [processing, reduce])

  const handlePlay = () => {
    setProcessing(true)
  }

  const ChannelIcon = channelChips.find((c) => c.key === channel)?.icon || MessageSquare

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
          {/* Copy + Micro Demo */}
          <div className="lg:col-span-6">
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-5 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI-powered intake from all channels for FNOL
            </motion.div>
            <motion.h1
              {...fadeUp(0.05)}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              FNOL from any channel — structured, validated, and routed by AI
            </motion.h1>
            <motion.p
              {...fadeUp(0.1)}
              className="mt-6 text-lg text-slate-200/90 max-w-2xl"
            >
              Turn voice, SMS, email, and web into structured First Notice of Loss. Validate ACORD, extract entities, and route next steps automatically.
            </motion.p>
            <motion.div
              {...fadeUp(0.15)}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                Start free
              </a>
              <a
                href="#pricing"
                className="inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                See pricing
              </a>
            </motion.div>

            {/* Micro demo: preset → play → assemble */}
            <motion.div
              {...fadeUp(0.2)}
              className="mt-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 text-sm font-medium text-white">
                  <ChannelIcon className="h-4 w-4" /> Try the flow
                </div>
                <div className="flex items-center gap-2">
                  {channelChips.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => setChannel(c.key)}
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs backdrop-blur transition ${
                        channel === c.key
                          ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-100'
                          : 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
                      }`}
                      aria-pressed={channel === c.key}
                    >
                      <c.icon className="h-3.5 w-3.5" /> {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <label htmlFor="micro-demo" className="sr-only">
                Describe the incident
              </label>
              <textarea
                id="micro-demo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-lg bg-slate-900/60 text-slate-100 placeholder-slate-400 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                placeholder="e.g., Policy #12345. Rear-end collision on 2024-06-01 in Austin, TX. Photos attached."
              />

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {presets.map((p) => (
                  <button
                    key={p.label}
                    onClick={() => setText(p.text)}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200 hover:bg-white/10"
                  >
                    {p.label}
                  </button>
                ))}
                <span className="mx-1 h-4 w-px bg-white/10" />
                <button
                  onClick={processing ? undefined : handlePlay}
                  disabled={processing}
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  {processing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Processing
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" /> Create FNOL
                    </>
                  )}
                </button>
                {!reduce && (
                  <div className="ml-auto min-w-[120px] h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all"
                      style={{ width: `${(step / steps.length) * 100}%` }}
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-xs uppercase tracking-wide text-slate-300/80 mb-2">
                    Entities
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(entities).filter(([, v]) => v).length === 0 && (
                      <span className="text-xs text-slate-400">None yet</span>
                    )}
                    {entities.policy && (
                      <span className="text-xs px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">
                        Policy: {entities.policy}
                      </span>
                    )}
                    {entities.claim && (
                      <span className="text-xs px-2 py-1 rounded-md bg-sky-500/20 text-sky-200 border border-sky-400/30">
                        Claim: {entities.claim}
                      </span>
                    )}
                    {entities.lossDate && (
                      <span className="text-xs px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                        Loss: {entities.lossDate}
                      </span>
                    )}
                    {entities.vehicle && (
                      <span className="text-xs px-2 py-1 rounded-md bg-violet-500/20 text-violet-200 border border-violet-400/30">
                        Vehicle: {entities.vehicle}
                      </span>
                    )}
                    {entities.location && (
                      <span className="text-xs px-2 py-1 rounded-md bg-amber-500/20 text-amber-200 border border-amber-400/30">
                        Location: {entities.location}
                      </span>
                    )}
                    {entities.attachments && (
                      <span className="text-xs px-2 py-1 rounded-md bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">
                        {entities.attachments}
                      </span>
                    )}
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs uppercase tracking-wide text-slate-300/80">
                      FNOL Preview
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {processing ? steps[Math.max(0, step - 1)] : 'Ready'}
                    </div>
                  </div>
                  {/* Card body */}
                  {processing ? (
                    <div className="animate-pulse space-y-2">
                      <div className="h-3 w-1/2 rounded bg-white/10" />
                      <div className="h-3 w-2/3 rounded bg-white/10" />
                      <div className="h-3 w-1/3 rounded bg-white/10" />
                      <div className="h-3 w-3/4 rounded bg-white/10" />
                    </div>
                  ) : (
                    <ul className="text-xs text-slate-200/90 space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                        Policy {entities.policy ? `#${entities.policy}` : '— add a policy #'}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                        Loss date {entities.lossDate ? entities.lossDate : '— add a date'}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                        Location {entities.location ? entities.location : '— add city, ST'}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                        Routing: Smart Inbox → Triage
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.25)}
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

          {/* Visual: Channel → AI Router → Smart Inbox */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              {/* Animated network lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
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
                    transition={{
                      duration: reduce ? 0.6 : 1.6,
                      delay: 0.2 + i * 0.1,
                      ease: 'easeOut',
                    }}
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

              {/* Moving payload orbs along the paths */}
              {!reduce && (
                <>
                  {[0, 1, 2, 3].map((i) => (
                    <motion.span
                      key={i}
                      className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
                      style={{
                        top: i % 2 === 0 ? `${12 + i * 6}%` : `${80 - i * 6}%`,
                        left: i < 2 ? `${12 + i * 4}%` : `${80 - i * 4}%`,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Channel chips around edges */}
              {channelChips.map((chip, i) => (
                <motion.div
                  key={chip.label}
                  className="absolute flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white shadow/50 border border-white/10"
                  style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  {...{ className: `absolute bg-gradient-to-br ${chip.color} backdrop-blur border-white/10` }}
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
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(34,197,94,0.2), rgba(56,189,248,0.2), rgba(99,102,241,0.2), rgba(34,197,94,0.2))',
                    filter: 'blur(10px)',
                  }}
                />
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

              {/* Incoming message bubbles that travel toward center */}
              {!reduce && (
                <>
                  {[0, 1, 2].map((n) => (
                    <motion.div
                      key={n}
                      className="absolute text-xs text-white/90 px-3 py-2 rounded-lg border border-white/10 bg-white/10 backdrop-blur"
                      initial={{ opacity: 0, x: n % 2 ? 20 : -20, y: n * 10 }}
                      animate={{ opacity: [0, 1, 1, 0], x: [0, (n % 2 ? -30 : 30), (n % 2 ? -60 : 60)], y: [0, -6, -12] }}
                      transition={{ duration: 5, delay: 0.8 + n * 0.7, repeat: Infinity, repeatDelay: 1.5 }}
                      style={{ top: `${20 + n * 16}%`, left: `${n % 2 ? 70 - n * 5 : 15 + n * 5}%` }}
                    >
                      {n === 0 && 'Policy # • Loss date'}
                      {n === 1 && 'Attachments • Location'}
                      {n === 2 && 'Driver • Vehicle'}
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
