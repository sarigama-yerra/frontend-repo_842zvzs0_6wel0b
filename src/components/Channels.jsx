import { Phone, MessageSquare, Mail, Globe, MessageCircle } from 'lucide-react'
import AnimatedCard from './AnimatedCard'
import SectionHeader from './SectionHeader'

export default function Channels() {
  const items = [
    { title: 'Voice', desc: 'AI voice agent answers 24/7, asks smart questions', icon: Phone },
    { title: 'SMS', desc: 'Text-to-claim with guided conversation', icon: MessageSquare },
    { title: 'Email', desc: 'Forward emails to auto-create claims', icon: Mail },
    { title: 'Web Forms', desc: 'White-labeled embeddable forms', icon: Globe },
    { title: 'Chat', desc: 'Live chat widget for websites', icon: MessageCircle },
  ]

  return (
    <section id="channels" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeader title="Multiple channels. One streamlined flow." subtitle="Meet customers where they are — voice, text, email, web, or chat." />
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map(({ title, desc, icon: Icon }, i) => (
            <AnimatedCard key={title} delay={i * 0.04} className="p-6 text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
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
