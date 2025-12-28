import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Smartomation.ai',
  description: 'Privacy Policy for Smartomation.ai',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how Smartomation.ai collects, uses, and protects your information.
            </p>
            {/* Add full privacy policy content here */}
          </div>
        </div>
      </section>
    </div>
  )
}


