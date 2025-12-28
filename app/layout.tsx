import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatbotWidget from '@/components/ChatbotWidget'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smartomation.ai - Enterprise-grade AI Automation Platform',
  description: 'Build AI agents that think, act, and resolve with voice, chat, and email interfaces. Enterprise-grade AI automation platform.',
  keywords: 'AI automation, AI agents, chatbot, voice AI, enterprise AI, customer service automation',
  authors: [{ name: 'Smartomation.ai' }],
  openGraph: {
    title: 'Smartomation.ai - Enterprise-grade AI Automation Platform',
    description: 'Build AI agents that think, act, and resolve with voice, chat, and email interfaces.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  )
}

