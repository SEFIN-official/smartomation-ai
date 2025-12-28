'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const values = [
  {
    title: 'Innovation',
    description: 'We push the boundaries of what AI automation can achieve, constantly innovating to deliver cutting-edge solutions.',
  },
  {
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. We build products that solve real business problems.',
  },
  {
    title: 'Security & Trust',
    description: 'Enterprise-grade security and compliance are non-negotiable. We protect your data with the highest standards.',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every interaction, from product development to customer support.',
  },
]

const team = [
  {
    name: 'Alex Johnson',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  },
  {
    name: 'Emily Kim',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
  },
]

export default function AboutContent() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Smartomation.ai</span>
            </h1>
            <p className="text-xl text-gray-600">
              We&apos;re on a mission to democratize AI automation, making enterprise-grade AI agents accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Smartomation.ai, we believe that AI automation should be accessible to every business, regardless of size. 
                Our platform empowers organizations to build intelligent AI agents that think, act, and resolve customer 
                queries across voice, chat, and email channels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2020, we&apos;ve helped hundreds of enterprises transform their customer service operations, 
                reduce costs, and improve customer satisfaction. With a team of AI experts, engineers, and customer 
                success professionals, we&apos;re committed to delivering the most advanced and user-friendly AI automation platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">Meet the people building the future of AI automation</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Us on Our Mission
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals to join our team. Check out our open positions.
            </p>
            <Link href="/careers" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              View Careers
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


