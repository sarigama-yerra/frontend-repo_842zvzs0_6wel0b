import { Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const sections = [
    { title: 'Product', links: ['Features', 'Pricing', 'How It Works', 'Integrations'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security'] },
  ]

  return (
    <footer className="relative border-t border-white/10 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400"></div>
            <div className="text-white font-semibold">ClaimFlow AI</div>
          </div>
          <p className="mt-3 text-slate-400 text-sm">AI-powered, multi-channel claims intake platform for modern insurance carriers.</p>
          <div className="mt-4 flex items-center gap-4 text-slate-300">
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18}/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18}/></a>
            <a href="#" aria-label="GitHub" className="hover:text-white"><Github size={18}/></a>
          </div>
        </div>
        {sections.map(({ title, links }) => (
          <div key={title}>
            <div className="text-white font-semibold mb-3">{title}</div>
            <ul className="space-y-2 text-slate-300 text-sm">
              {links.map(l => <li key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} ClaimFlow AI. All rights reserved.</div>
    </footer>
  )
}
