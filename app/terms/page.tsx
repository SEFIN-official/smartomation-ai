import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Smartomation.ai',
  description: 'Terms of Service for Smartomation.ai',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read these Terms of Service carefully before using Smartomation.ai.
            </p>
            {/* Add full terms content here */}
          </div>
        </div>
      </section>
    </div>
  )
}




