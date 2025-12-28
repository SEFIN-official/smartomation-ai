import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Smartomation.ai',
  description: 'Join the Smartomation.ai team and help shape the future of AI automation.',
}

export default function CareersPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re building the future of AI automation. Join us and make an impact.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              We&apos;re currently hiring for multiple positions. Check back soon for open roles, or send us your resume at{' '}
              <a href="mailto:careers@smartomation.ai" className="text-primary-600 font-semibold hover:underline">
                careers@smartomation.ai
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


