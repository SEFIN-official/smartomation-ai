import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BrandsCarousel from '@/components/BrandsCarousel'
import Testimonials from '@/components/Testimonials'
import SolutionsSection from '@/components/SolutionsSection'

export const metadata = {
  title: 'Smartomation.ai - Enterprise-grade AI Automation Platform',
  description: 'Build AI agents that think, act, and resolve with voice, chat, and email interfaces.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsCarousel />
      <Features />
      <SolutionsSection />
      <Testimonials />
    </>
  )
}


