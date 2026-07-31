import HeroSection from '../components/HeroSection'
import TechnologySection from '../components/TechnologySection'
import ProductsSection from '../components/ProductsSection'
import GlobalSection from '../components/GlobalSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechnologySection />
      <ProductsSection />
      <GlobalSection />
      <ContactSection />
    </main>
  )
}