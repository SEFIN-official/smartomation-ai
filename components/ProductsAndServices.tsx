'use client'

import { motion } from 'framer-motion'
import {
  CpuChipIcon,
  CurrencyDollarIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: CpuChipIcon,
    title: 'AI Automation Services',
    description:
      'We design, deploy, and maintain AI-powered automation systems. Automate business operations, decision flows, and internal processes.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cost-Optimized LLM & Model Usage',
    description:
      'Optimize LLM selection and token usage. Smart routing across multiple AI models. Reduce AI operational costs without performance loss.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'AI Automation Platforms',
    description:
      'n8n.io for workflow orchestration. Google Studio for data-driven automation. Future-ready integration with upcoming AI tools.',
  },
  {
    icon: ChartBarIcon,
    title: 'Continuous AI Cost Monitoring',
    description:
      'Ongoing tracking of AI usage. Cost optimization strategies for clients. Transparent reporting and improvement cycles.',
  },
  {
    icon: LinkIcon,
    title: 'App & Ecosystem Integrations',
    description:
      'Gmail, Google Sheets, Docs. Slack, CRMs, internal tools. Support for most popular SaaS platforms.',
  },
]

export default function ProductsAndServices() {
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
            AI Automation Services <span className="gradient-text">Built for Scale</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to transform your business operations with intelligent automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

