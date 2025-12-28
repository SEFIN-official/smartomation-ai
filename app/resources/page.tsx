import { Metadata } from 'next'
import ResourcesLibrary from '@/components/ResourcesLibrary'

export const metadata: Metadata = {
  title: 'Resources - Smartomation.ai',
  description: 'Access guides, webinars, API documentation, and more resources to get the most out of Smartomation.ai',
}

export default function ResourcesPage() {
  return <ResourcesLibrary />
}

