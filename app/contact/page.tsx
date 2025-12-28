import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us - Smartomation.ai',
  description: 'Get in touch with the Smartomation.ai team. We're here to help.',
}

export default function ContactPage() {
  return <ContactForm />
}

