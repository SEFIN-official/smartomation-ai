'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const integrations = [
  { name: 'Zendesk', category: 'Support' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Freshdesk', category: 'Support' },
  { name: 'Genesys', category: 'Contact Center' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'ServiceNow', category: 'ITSM' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Microsoft Teams', category: 'Communication' },
  { name: 'WhatsApp', category: 'Messaging' },
  { name: 'Facebook Messenger', category: 'Messaging' },
  { name: 'Twitter', category: 'Social' },
  { name: 'Instagram', category: 'Social' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Stripe', category: 'Payment' },
  { name: 'PayPal', category: 'Payment' },
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Mixpanel', category: 'Analytics' },
  { name: 'Intercom', category: 'Support' },
  { name: 'Drift', category: 'Support' },
  { name: 'LiveChat', category: 'Support' },
  { name: 'Twilio', category: 'Communication' },
  { name: 'SendGrid', category: 'Email' },
  { name: 'Mailchimp', category: 'Email' },
]

const categories = ['All', 'Support', 'CRM', 'Communication', 'Messaging', 'E-commerce', 'Payment', 'Analytics', 'Email']

export default function IntegrationsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredIntegrations =
    selectedCategory === 'All'
      ? integrations
      : integrations.filter((int) => int.category === selectedCategory)

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
              <span className="gradient-text">100+ Integrations</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect Smartomation.ai with your favorite tools and platforms. Seamless integration in minutes.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-500">{integration.category}</p>
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
              Don't see your integration? We're adding new ones every week.
            </p>
            <button className="btn-primary">Request an Integration</button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

