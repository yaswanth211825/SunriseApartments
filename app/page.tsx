import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import EducationalAuthority from '@/components/sections/EducationalAuthority'
import Services from '@/components/sections/Services'
import MaterialIntelligence from '@/components/sections/MaterialIntelligence'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import StickyMobileCTA from '@/components/ui/StickyMobileCTA'

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <EducationalAuthority />
        <Services />
        <MaterialIntelligence />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
