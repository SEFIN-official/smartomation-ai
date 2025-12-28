import { Metadata } from 'next'
import IntegrationsGrid from '@/components/IntegrationsGrid'

export const metadata: Metadata = {
  title: 'Integrations - Smartomation.ai',
  description: 'Connect Smartomation.ai with your favorite tools and platforms. 100+ integrations available.',
}

export default function IntegrationsPage() {
  return <IntegrationsGrid />
}

