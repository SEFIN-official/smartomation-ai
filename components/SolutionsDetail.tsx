'use client'

import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  HeartIcon,
  ShoppingBagIcon,
  BoltIcon,
} from '@heroicons/react/24/outline'

const solutions = [
  {
    id: 'customer-service',
    icon: UserGroupIcon,
    title: 'Customer Service',
    description: 'Transform your customer support with AI-powered agents that deliver exceptional experiences.',
    features: [
      '24/7 automated customer support',
      'Multi-channel integration (chat, voice, email)',
      'Intelligent ticket routing',
      'Real-time analytics and insights',
      'Seamless handoff to human agents',
    ],
  },
  {
    id: 'employee-experience',
    icon: BriefcaseIcon,
    title: 'Employee Experience',
    description: 'Streamline HR operations and empower employees with intelligent self-service automation.',
    features: [
      'HR query automation',
      'Employee onboarding assistance',
      'IT support automation',
      'Internal knowledge base',
      'Workflow automation',
    ],
  },
  {
    id: 'bfsi',
    icon: BuildingLibraryIcon,
    title: 'BFSI',
    description: 'Secure, compliant AI solutions for banking, financial services, and insurance.',
    features: [
      'Regulatory compliance (PCI-DSS, GDPR)',
      'Secure transaction support',
      'Account inquiry automation',
      'Loan application assistance',
      'Fraud detection integration',
    ],
  },
  {
    id: 'healthcare',
    icon: HeartIcon,
    title: 'Healthcare',
    description: 'HIPAA-compliant AI agents for patient support and healthcare operations.',
    features: [
      'HIPAA-compliant infrastructure',
      'Appointment scheduling',
      'Patient query handling',
      'Prescription reminders',
      'Telehealth support',
    ],
  },
  {
    id: 'retail',
    icon: ShoppingBagIcon,
    title: 'Retail',
    description: 'Enhance customer experience and automate retail operations with intelligent AI.',
    features: [
      'Product recommendations',
      'Order tracking automation',
      'Returns and exchanges',
      'Inventory inquiries',
      'Personalized shopping assistance',
    ],
  },
  {
    id: 'utilities',
    icon: BoltIcon,
    title: 'Utilities',
    description: 'Automate customer service and support for utility providers.',
    features: [
      'Bill inquiry automation',
      'Service request handling',
      'Outage reporting',
      'Payment processing support',
      'Account management',
    ],
  },
]

export default function SolutionsDetail() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Solutions for <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Smartomation.ai can transform your business operations with industry-specific AI automation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{solution.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 h-64 md:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-600 font-medium">Solution Visualization</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

