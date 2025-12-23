import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Contractor Network',
  description: 'Join our network of certified contractors and get access to exclusive resources and leads.',
};

export default function JoinNetworkPage() {
  return (
    <article className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
          Join Our Contractor Network
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join our network of certified contractors and get access to exclusive resources, training, and qualified leads.
        </p>

        <div className="prose prose-lg max-w-none mb-12">
          <h2>Benefits of Membership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Resources & Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Manual J templates</li>
                <li>✓ Marketing materials</li>
                <li>✓ Technical documentation</li>
                <li>✓ Training resources</li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Business Growth</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Installer directory listing</li>
                <li>✓ Qualified lead referrals</li>
                <li>✓ Market intelligence reports</li>
                <li>✓ Networking opportunities</li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Training & Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ A2L certification programs</li>
                <li>✓ AI diagnostics training</li>
                <li>✓ Technical support</li>
                <li>✓ Continuing education</li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Credibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Certification badges</li>
                <li>✓ Verified credentials</li>
                <li>✓ Customer trust</li>
                <li>✓ Industry recognition</li>
              </ul>
            </div>
          </div>

          <h2>Membership Requirements</h2>
          <ul>
            <li>Valid HVAC contractor license</li>
            <li>Insurance coverage (liability and workers' compensation)</li>
            <li>A2L certification (or commitment to obtain)</li>
            <li>Commitment to quality installation standards</li>
            <li>Agreement to our code of conduct</li>
          </ul>

          <h2>How to Apply</h2>
          <ol>
            <li>Review membership requirements and benefits</li>
            <li>Complete the online application form</li>
            <li>Submit required documentation (license, insurance, certifications)</li>
            <li>Attend orientation session (virtual or in-person)</li>
            <li>Get approved and start accessing resources</li>
          </ol>

          <h2>Application Process</h2>
          <p>
            The application process typically takes 1-2 weeks. We review each application carefully to ensure
            our network maintains high standards of quality and professionalism.
          </p>

          <h2>Ready to Join?</h2>
          <p>
            <a href="/contact" className="btn-primary inline-block">
              Contact Us to Apply
            </a>
          </p>
          <p>
            Have questions? Check out our <a href="/training">training programs</a> or
            <a href="/contractors/market-report">market intelligence</a> to learn more about what we offer.
          </p>
        </div>
      </div>
    </article>
  );
}
