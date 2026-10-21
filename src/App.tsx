import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Agence from './components/Agence'
import Services from './components/Services'
import CoupsDeCoeur from './components/CoupsDeCoeur'
import Methode from './components/Methode'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Marquee />
        <Agence />
        <Services />
        <CoupsDeCoeur />
        <Methode />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
