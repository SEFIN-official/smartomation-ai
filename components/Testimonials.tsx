'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    quote: 'Smartomation.ai transformed our customer service operations. Response times dropped by 70% and customer satisfaction increased significantly.',
    author: 'Sarah Johnson',
    role: 'VP of Customer Experience',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    quote: 'The AI agents handle complex queries with ease. Our team can now focus on strategic initiatives while automation handles the routine.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'InnovateLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    quote: 'Implementation was seamless, and the ROI was evident within the first quarter. Highly recommend Smartomation.ai for any enterprise.',
    author: 'Emily Rodriguez',
    role: 'Director of Operations',
    company: 'GlobalRetail',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    quote: 'The multi-channel capabilities are outstanding. Our customers can reach us via chat, voice, or email, all powered by intelligent AI.',
    author: 'David Kim',
    role: 'Head of Digital',
    company: 'FinanceHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what enterprises are saying about Smartomation.ai
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

