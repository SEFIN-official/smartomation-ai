import { Metadata } from 'next'
import CaseStudiesList from '@/components/CaseStudiesList'

export const metadata: Metadata = {
  title: 'Case Studies - Smartomation.ai',
  description: 'See how enterprises are transforming their operations with Smartomation.ai AI automation platform.',
}

export default function CaseStudiesPage() {
  return <CaseStudiesList />
}

