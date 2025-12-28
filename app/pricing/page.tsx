import { Metadata } from 'next'
import PricingPlans from '@/components/PricingPlans'

export const metadata: Metadata = {
  title: 'Pricing - Smartomation.ai',
  description: 'Choose the perfect plan for your business. Start free or book a demo to see Smartomation.ai in action.',
}

export default function PricingPage() {
  return <PricingPlans />
}

