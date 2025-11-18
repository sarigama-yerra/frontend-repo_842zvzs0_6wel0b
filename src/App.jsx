import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Channels from './components/Channels'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Integrations from './components/Integrations'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Channels />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Integrations />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
