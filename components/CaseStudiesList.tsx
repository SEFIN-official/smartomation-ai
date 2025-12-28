'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const caseStudies = [
  {
    id: 1,
    company: 'TechCorp',
    industry: 'Technology',
    title: '70% Reduction in Response Time',
    description: 'TechCorp automated their customer support with Smartomation.ai, reducing average response time from 2 hours to 15 minutes.',
    metrics: [
      { label: 'Response Time', value: '70% ↓' },
      { label: 'Customer Satisfaction', value: '45% ↑' },
      { label: 'Cost Savings', value: '$2M/year' },
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    company: 'GlobalRetail',
    industry: 'Retail',
    title: '24/7 AI-Powered Customer Service',
    description: 'GlobalRetail implemented Smartomation.ai across all channels, handling 80% of customer queries automatically.',
    metrics: [
      { label: 'Automation Rate', value: '80%' },
      { label: 'Resolution Rate', value: '92%' },
      { label: 'Agent Productivity', value: '3x' },
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    company: 'FinanceHub',
    industry: 'BFSI',
    title: 'Secure Banking Automation',
    description: 'FinanceHub deployed Smartomation.ai for secure, compliant customer service automation in the banking sector.',
    metrics: [
      { label: 'Compliance', value: '100%' },
      { label: 'Query Volume', value: '2M+/month' },
      { label: 'Accuracy', value: '98.5%' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    company: 'HealthCare Plus',
    industry: 'Healthcare',
    title: 'HIPAA-Compliant Patient Support',
    description: 'HealthCare Plus implemented Smartomation.ai for patient support while maintaining full HIPAA compliance.',
    metrics: [
      { label: 'HIPAA Compliance', value: '100%' },
      { label: 'Patient Satisfaction', value: '4.8/5' },
      { label: 'Appointment Booking', value: '60% ↑' },
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    company: 'InnovateLabs',
    industry: 'Technology',
    title: 'Employee Experience Transformation',
    description: 'InnovateLabs automated HR and IT support, freeing up teams to focus on strategic initiatives.',
    metrics: [
      { label: 'HR Query Resolution', value: '85%' },
      { label: 'Employee Satisfaction', value: '4.9/5' },
      { label: 'Time Saved', value: '15hrs/week' },
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    company: 'UtilityPro',
    industry: 'Utilities',
    title: 'Automated Utility Support',
    description: 'UtilityPro transformed customer service with AI agents handling billing, outages, and service requests.',
    metrics: [
      { label: 'First Contact Resolution', value: '78%' },
      { label: 'Average Handle Time', value: '2min' },
      { label: 'Customer Retention', value: '12% ↑' },
    ],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop',
  },
]

export default function CaseStudiesList() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how enterprises are transforming their operations with Smartomation.ai
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/case-studies/${study.id}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Read full case study
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

