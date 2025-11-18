import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import AnimatedCard from './AnimatedCard'

export default function Testimonials() {
  const quotes = [
    { role: 'CEO, National Carrier', text: 'We cut claim cycle time from days to minutes — our teams will never go back.' },
    { role: 'Senior Claims Adjuster', text: 'The intake quality is outstanding and the dashboard keeps everything organized.' },
    { role: 'IT Director', text: 'Security and compliance were must-haves. ClaimFlow met our standards with ease.' },
  ]

  return (
    <section id="testimonials" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader title="Trusted by modern insurance teams" subtitle="Proven in production across carriers and MGAs." />
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <AnimatedCard key={q.role} delay={i * 0.05} className="p-6">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="text-slate-200">
                “{q.text}”
              </motion.p>
              <div className="mt-4 text-sm text-slate-400">— {q.role}</div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
