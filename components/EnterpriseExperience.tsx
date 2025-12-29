'use client'

import { motion } from 'framer-motion'

const industryGroups = [
  {
    name: 'Technology, AI & Platforms',
    companies: ['Google', 'LinkedIn', 'Yahoo', 'HP', 'Garmin', 'ADP', 'onsemi', 'Lantronix'],
  },
  {
    name: 'Telecom, Payments & Infrastructure',
    companies: ['AT&T', 'Verifone', 'Cricket Wireless'],
  },
  {
    name: 'Media, Advertising & Communications',
    companies: ['NBCUniversal', 'Comcast', 'WPP'],
  },
  {
    name: 'Retail, Consumer & Lifestyle',
    companies: ['Nike', 'GAP', 'Columbia Sportswear', 'Overstock'],
  },
  {
    name: 'Healthcare & Enterprise Systems',
    companies: ['Cerner'],
  },
  {
    name: 'Defense, Government & Consulting',
    companies: ['U.S. Air Force', 'PwC', 'CSC', 'W. L. Gore & Associates'],
  },
]

export default function EnterpriseExperience() {
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
            Enterprise Experience Across <span className="gradient-text">Industries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations worldwide
          </p>
        </motion.div>

        <div className="space-y-12">
          {industryGroups.map((group, groupIndex) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-white rounded-xl p-8 border border-gray-200"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">{group.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {group.companies.map((company, companyIndex) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: groupIndex * 0.1 + companyIndex * 0.05 }}
                    className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="relative w-full h-12 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                      <span className="text-sm font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                        {company}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

