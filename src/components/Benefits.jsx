import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

export default function Benefits() {
  const benefits = [
    '70% reduction in claim processing time',
    '50% cost savings on manual data entry',
    '95%+ fraud detection accuracy',
    '24/7 availability across all channels',
    'ACORD-compliant XML/PDF exports',
    'Zero training required for claimants',
  ]

  return (
    <section id="benefits" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader title="Proven outcomes that matter" subtitle="Quantifiable improvements carriers can take to the board." />
        </div>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedCard key={b} delay={i * 0.04} className="p-6 text-white/90">
              {b}
            </AnimatedCard>
          ))}
        </ul>
      </div>
    </section>
  )
}
