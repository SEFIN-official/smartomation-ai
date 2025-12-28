'use client'

import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: CpuChipIcon,
    title: 'AI Agent Builder',
    description: 'Create intelligent AI agents with no-code builder. Train and deploy in minutes.',
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics Dashboard',
    description: 'Real-time insights and performance metrics to optimize your AI agents.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Multi-modal Channels',
    description: 'Seamlessly connect via voice, chat, and email from a single platform.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Enterprise Integrations',
    description: 'Connect with Zendesk, HubSpot, Freshdesk, Genesys, and 100+ tools.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'ISO 27001, SOC 2 Type II certified with end-to-end encryption.',
  },
  {
    icon: CheckBadgeIcon,
    title: '99.9% Uptime SLA',
    description: 'Reliable infrastructure with guaranteed uptime for mission-critical operations.',
  },
]

const integrations = [
  'Zendesk',
  'HubSpot',
  'Freshdesk',
  'Genesys',
  'Salesforce',
  'ServiceNow',
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to <span className="gradient-text">automate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed for enterprise-scale AI automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Integrate with your favorite tools
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-6 py-3 bg-white rounded-lg shadow-md font-semibold text-gray-700 hover:shadow-lg transition-shadow"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">ISO 27001</div>
            <div className="text-sm text-gray-600">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">SOC 2</div>
            <div className="text-sm text-gray-600">Type II</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">GDPR</div>
            <div className="text-sm text-gray-600">Compliant</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">HIPAA</div>
            <div className="text-sm text-gray-600">Ready</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


