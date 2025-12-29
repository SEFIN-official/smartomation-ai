import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BrandsCarousel from '@/components/BrandsCarousel'
import Testimonials from '@/components/Testimonials'
import SolutionsSection from '@/components/SolutionsSection'
import ProductsAndServices from '@/components/ProductsAndServices'
import WorkflowShowcase from '@/components/WorkflowShowcase'
import FounderSection from '@/components/FounderSection'
import EnterpriseExperience from '@/components/EnterpriseExperience'

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
      <ProductsAndServices />
      <WorkflowShowcase />
      <SolutionsSection />
      <EnterpriseExperience />
      <FounderSection />
      <Testimonials />
    </>
  )
}




