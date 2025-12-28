import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security - Smartomation.ai',
  description: 'Security and compliance information for Smartomation.ai',
}

export default function SecurityPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Security & Compliance</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              At Smartomation.ai, security is our top priority. We maintain the highest standards of data protection and compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">ISO 27001</h3>
                <p className="text-gray-600">Certified information security management</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600">Audited security controls</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">GDPR</h3>
                <p className="text-gray-600">Full compliance with EU data protection</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">HIPAA</h3>
                <p className="text-gray-600">Healthcare data protection ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

