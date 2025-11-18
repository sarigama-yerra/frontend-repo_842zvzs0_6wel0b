import { UploadCloud, Cog, LayoutDashboard } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

export default function HowItWorks() {
  const steps = [
    { title: 'Claimant Reports', desc: 'File via voice call, text, email, or web', icon: UploadCloud },
    { title: 'AI Processes', desc: 'Extract data, validate, detect fraud, generate forms', icon: Cog },
    { title: 'You Review', desc: 'Clean dashboard with all claims organized and searchable', icon: LayoutDashboard },
  ]

  return (
    <section id="how" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader eyebrow="Workflow" title="How it works" subtitle="From report to resolution in minutes, not days." />
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <AnimatedCard key={title} delay={idx * 0.05} className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-white font-semibold">Step {idx + 1}</div>
              </div>
              <h3 className="text-white font-semibold mt-4 tracking-tight">{title}</h3>
              <p className="text-slate-300/85 text-sm mt-2 leading-relaxed">{desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
