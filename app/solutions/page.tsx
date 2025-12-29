import { Metadata } from 'next'
import SolutionsDetail from '@/components/SolutionsDetail'

export const metadata: Metadata = {
  title: 'Solutions - Smartomation.ai',
  description: 'Industry-specific AI automation solutions for customer service, employee experience, and more.',
}

export default function SolutionsPage() {
  return <SolutionsDetail />
}




