export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Transform Your Claims Process?</h2>
        <p className="mt-3 text-slate-300/80">No credit card required. Setup in 5 minutes.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/30">Start Free Trial</a>
          <a href="#contact" className="inline-flex justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white">Schedule Demo</a>
        </div>
      </div>
    </section>
  )
}
