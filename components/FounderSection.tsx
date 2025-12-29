'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FounderSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meet the <span className="gradient-text">Founder</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
          >
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
                <Image
                  src="/founder/kumar-sundaresan.avif"
                  alt="Kumar Sundaresan, Founder of Smartomation.ai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 192px, 224px"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Kumar Sundaresan</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kumar Sundaresan has worked hands-on across multiple global technology companies,
                architecting demanding, high-scale technology and automation solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

