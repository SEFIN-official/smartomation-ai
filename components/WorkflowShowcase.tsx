'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const workflows = [
  {
    platform: 'n8n.io',
    title: 'Advanced AI Workflows',
    description: 'Complex, multi-step automation workflows that orchestrate AI models, APIs, and business logic.',
    images: [
      '/workflows/n8n/workflow-1.png',
      '/workflows/n8n/workflow-2.png',
      '/workflows/n8n/workflow-3.png',
    ],
  },
  {
    platform: 'Google Studio',
    title: 'Automation Pipelines',
    description: 'Data-driven automation pipelines that connect your systems and scale with your business needs.',
    images: [
      '/workflows/google-studio/pipeline-1.png',
      '/workflows/google-studio/pipeline-2.png',
      '/workflows/google-studio/pipeline-3.png',
    ],
  },
]

export default function WorkflowShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Real-World AI Automation <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we orchestrate complex workflows using industry-leading automation platforms
          </p>
        </motion.div>

        <div className="space-y-16">
          {workflows.map((workflow, workflowIndex) => (
            <motion.div
              key={workflow.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: workflowIndex * 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{workflow.platform}</h3>
                <p className="text-lg text-gray-600 mb-4">{workflow.title}</p>
                <p className="text-gray-700">{workflow.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {workflow.images.map((imagePath, imageIndex) => (
                  <motion.div
                    key={imagePath}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: workflowIndex * 0.2 + imageIndex * 0.1 }}
                    className="relative aspect-video bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedImage(imagePath)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                      <span className="text-gray-400 text-sm">
                        {workflow.platform} Workflow {imageIndex + 1}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400">Workflow Image Preview</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

