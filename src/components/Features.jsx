import { Globe, Bot, FileText, Activity, Mic, ShieldCheck, Bell, Lock } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

export default function Features() {
  const features = [
    { title: 'Multi-Channel Intake', desc: 'Voice AI, SMS, Email, Web Forms, Live Chat', icon: Globe },
    { title: 'AI-Powered FNOL', desc: 'First Notice of Loss collection with GPT-4', icon: Bot },
    { title: 'Automated ACORD Forms', desc: 'Generate Forms 1, 2, 3, 25 and more', icon: FileText },
    { title: 'Real-time Fraud Detection', desc: 'ML-based scoring to flag anomalies', icon: Activity },
    { title: 'Voice-to-Claim in 90s', desc: 'Powered by ElevenLabs voice AI', icon: Mic },
    { title: 'Intelligent Document OCR', desc: 'Google Vision AI for documents', icon: ShieldCheck },
    { title: 'Built-in Notifications', desc: 'SMS/Email updates to claimants', icon: Bell },
    { title: 'Enterprise Security', desc: 'Row-level data isolation & SSO', icon: Lock },
  ]

  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader
            eyebrow="Platform"
            title="Everything you need for modern claims intake"
            subtitle="Purpose-built for insurance carriers. Fast, secure, ACORD-compliant."
          />
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }, idx) => (
            <AnimatedCard key={title} delay={idx * 0.03} className="p-6 hover:bg-white/10 transition shadow-lg shadow-sky-500/5">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white flex items-center justify-center mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold tracking-tight">{title}</h3>
              <p className="text-slate-300/85 text-sm mt-2 leading-relaxed">{desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
