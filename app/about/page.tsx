import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Us - Smartomation.ai',
  description: 'Learn about Smartomation.ai and our mission to democratize AI automation for enterprises.',
}

export default function AboutPage() {
  return <AboutContent />
}

