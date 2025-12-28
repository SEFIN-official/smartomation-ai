'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
    icon: UserGroupIcon,
    title: 'Customer Service',
    description: 'Automate customer support with AI agents that handle queries 24/7 across all channels.',
    href: '/solutions#customer-service',
  },
  {
    icon: BriefcaseIcon,
    title: 'Employee Experience',
    description: 'Streamline HR operations and employee support with intelligent automation.',
    href: '/solutions#employee-experience',
  },
  {
    icon: BuildingLibraryIcon,
    title: 'BFSI',
    description: 'Secure AI solutions for banking, financial services, and insurance industries.',
    href: '/solutions#bfsi',
  },
  {
    icon: HeartIcon,
    title: 'Healthcare',
    description: 'HIPAA-compliant AI agents for patient support and healthcare operations.',
    href: '/solutions#healthcare',
  },
  {
    icon: ShoppingBagIcon,
    title: 'Retail',
    description: 'Enhance customer experience and automate retail operations with AI.',
    href: '/solutions#retail',
  },
  {
    icon: BoltIcon,
    title: 'Utilities',
    description: 'Automate customer service and support for utility providers.',
    href: '/solutions#utilities',
  },
]

export default function SolutionsSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solutions by <span className="gradient-text">use case</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-specific AI automation solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <solution.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <Link
                href={solution.href}
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

