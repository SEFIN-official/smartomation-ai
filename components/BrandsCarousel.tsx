'use client'

import { motion } from 'framer-motion'

const brands = [
  'Microsoft',
  'Amazon',
  'Google',
  'IBM',
  'Oracle',
  'Salesforce',
  'Adobe',
  'SAP',
  'Accenture',
  'Deloitte',
]

export default function BrandsCarousel() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">leading brands</span>
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of enterprises automating with Smartomation.ai
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                className="flex-shrink-0 mx-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-xl font-bold text-gray-700">{brand}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
            display: flex;
            width: fit-content;
          }
        `}</style>
      </div>
    </section>
  )
}

