export default function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$299/mo', features: ['100 claims/month', '2 channels', 'Basic features'] },
    { name: 'Professional', price: '$799/mo', features: ['500 claims/month', 'All channels', 'Fraud detection'] },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited claims', 'White-label', 'Dedicated support'] },
  ]

  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Simple, transparent pricing</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t, idx) => (
            <div key={t.name} className={`rounded-2xl border border-white/10 bg-white/5 p-6 ${idx===1 ? 'ring-1 ring-cyan-400/40' : ''}`}>
              <div className="text-white font-semibold text-lg">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">{t.price}</div>
              <ul className="mt-4 text-slate-300/80 text-sm space-y-2">
                {t.features.map(f => <li key={f}>• {f}</li>)}
              </ul>
              <a href="#cta" className="mt-6 inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white w-full">{t.name === 'Enterprise' ? 'Talk to Sales' : 'Start Free'}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
