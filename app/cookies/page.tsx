import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Smartomation.ai',
  description: 'Cookie Policy for Smartomation.ai',
}

export default function CookiesPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how Smartomation.ai uses cookies and similar technologies.
            </p>
            {/* Add full cookie policy content here */}
          </div>
        </div>
      </section>
    </div>
  )
}




