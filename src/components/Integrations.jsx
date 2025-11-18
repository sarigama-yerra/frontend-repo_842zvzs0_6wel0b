import { Waves, MessageSquare, Mail, CreditCard, ScanText, Sparkles, Database } from 'lucide-react'

export default function Integrations() {
  const items = [
    { name: 'ElevenLabs', icon: Waves },
    { name: 'Twilio', icon: MessageSquare },
    { name: 'Postmark', icon: Mail },
    { name: 'Stripe', icon: CreditCard },
    { name: 'Google Vision', icon: ScanText },
    { name: 'OpenAI', icon: Sparkles },
    { name: 'Supabase', icon: Database },
  ]

  return (
    <section id="integrations" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Works with your stack</h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {items.map(({ name, icon: Icon }) => (
            <div key={name} className="rounded-xl border border-white/10 bg-white/5 px-4 py-6 text-center text-slate-200">
              <div className="mx-auto h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 text-white flex items-center justify-center mb-3">
                <Icon className="h-5 w-5" />
              </div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
