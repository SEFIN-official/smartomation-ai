'use client'

import { motion } from 'framer-motion'
import {
  DocumentTextIcon,
  VideoCameraIcon,
  BookOpenIcon,
  ChartBarIcon,
  CodeBracketIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline'

const resources = {
  guides: [
    {
      title: 'Getting Started with AI Agents',
      description: 'Learn how to build your first AI agent in 10 minutes',
      type: 'Guide',
      readTime: '5 min read',
    },
    {
      title: 'Best Practices for Customer Service Automation',
      description: 'Expert tips for implementing AI automation in customer service',
      type: 'Guide',
      readTime: '8 min read',
    },
    {
      title: 'Integration Guide: Zendesk',
      description: 'Step-by-step guide to integrating Smartomation.ai with Zendesk',
      type: 'Guide',
      readTime: '6 min read',
    },
  ],
  webinars: [
    {
      title: 'AI Automation for Enterprise',
      description: 'Learn how leading enterprises are using AI automation',
      type: 'Webinar',
      duration: '45 min',
    },
    {
      title: 'Multi-channel AI Strategy',
      description: 'Best practices for deploying AI across voice, chat, and email',
      type: 'Webinar',
      duration: '30 min',
    },
  ],
  reports: [
    {
      title: 'State of AI Automation 2024',
      description: 'Industry report on AI automation trends and adoption',
      type: 'Report',
      pages: '24 pages',
    },
    {
      title: 'ROI of AI Customer Service',
      description: 'Quantifying the business impact of AI-powered customer service',
      type: 'Report',
      pages: '18 pages',
    },
  ],
  api: [
    {
      title: 'API Reference',
      description: 'Complete API documentation for developers',
      type: 'API',
      version: 'v2.0',
    },
    {
      title: 'SDK Documentation',
      description: 'SDKs for Python, Node.js, and more',
      type: 'API',
      version: 'Latest',
    },
  ],
}

export default function ResourcesLibrary() {
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
              Resource <span className="gradient-text">Library</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access guides, webinars, API documentation, and more to get the most out of Smartomation.ai
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          {/* Guides */}
          <div>
            <div className="flex items-center mb-6">
              <BookOpenIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Guides & Tutorials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.guides.map((guide, index) => (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <DocumentTextIcon className="h-8 w-8 text-primary-600 mb-4" />
                  <span className="text-sm text-primary-600 font-semibold">{guide.type}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                    <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                      Read →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Webinars */}
          <div>
            <div className="flex items-center mb-6">
              <VideoCameraIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Webinars</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.webinars.map((webinar, index) => (
                <motion.div
                  key={webinar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <VideoCameraIcon className="h-8 w-8 text-primary-600 mb-4" />
                  <span className="text-sm text-primary-600 font-semibold">{webinar.type}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{webinar.duration}</span>
                    <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                      Watch →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reports */}
          <div>
            <div className="flex items-center mb-6">
              <ChartBarIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">Reports & Research</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.reports.map((report, index) => (
                <motion.div
                  key={report.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <ChartBarIcon className="h-8 w-8 text-primary-600 mb-4" />
                  <span className="text-sm text-primary-600 font-semibold">{report.type}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{report.title}</h3>
                  <p className="text-gray-600 mb-4">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{report.pages}</span>
                    <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                      Download →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* API Documentation */}
          <div>
            <div className="flex items-center mb-6">
              <CodeBracketIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-3xl font-bold">API & Developer Resources</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.api.map((api, index) => (
                <motion.div
                  key={api.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <CodeBracketIcon className="h-8 w-8 text-primary-600 mb-4" />
                  <span className="text-sm text-primary-600 font-semibold">{api.type}</span>
                  <h3 className="text-xl font-bold mt-2 mb-2">{api.title}</h3>
                  <p className="text-gray-600 mb-4">{api.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">v{api.version}</span>
                    <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                      View Docs →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}




