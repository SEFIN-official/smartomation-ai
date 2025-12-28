'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/solid'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 1,000 conversations/month',
      'Basic AI agent builder',
      'Email & Chat support',
      'Standard integrations',
      'Community support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For growing businesses',
    features: [
      'Up to 10,000 conversations/month',
      'Advanced AI agent builder',
      'Voice, Chat & Email support',
      '100+ integrations',
      'Priority support',
      'Analytics dashboard',
      'Custom branding',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited conversations',
      'Enterprise AI features',
      'Multi-channel support',
      'All integrations',
      'Dedicated support',
      'Advanced analytics',
      'Custom integrations',
      'SLA guarantee',
      'On-premise deployment',
      'Security compliance',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPlans() {
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
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start free or book a demo to see Smartomation.ai in action.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  plan.popular
                    ? 'border-primary-600 shadow-xl scale-105'
                    : 'border-gray-200 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-600 mb-4">
              Need help choosing? <Link href="/contact" className="text-primary-600 font-semibold hover:underline">Contact our sales team</Link>
            </p>
            <Link href="/pricing" className="btn-secondary inline-block">
              Book a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

