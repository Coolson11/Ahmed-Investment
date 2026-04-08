import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import ServicesPreview from '@/components/ServicesPreview'
import PortfolioHighlights from '@/components/PortfolioHighlights'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ServicesPreview />
      <PortfolioHighlights />
      <Testimonials />
    </main>
  )
}