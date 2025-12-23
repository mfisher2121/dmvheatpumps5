import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contractor Partnership Program',
  description: 'Pre-qualified heat pump projects. No ad spend required. Partnership details for EmPOWER-certified contractors.',
};

export default function ContractorPartnershipPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Contractor Partnership Program
          </h1>
          <p className="text-lg text-gray-600">
            Pre-qualified heat pump projects. No ad spend required.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="border-b-4 border-primary-600 pb-4 mb-8 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">MBRACE <span className="text-primary-600">INTELLIGENCE</span></h2>
              <p className="text-sm text-gray-600 mt-1">Maryland Building Electrification Data</p>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>mbrace.io</p>
            </div>
          </div>

          {/* Two Column: What You Get / What We Ask */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What You Get</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Pre-qualified project leads (address, system, incentive eligibility)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Property owners who've already seen their incentive breakdown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>No bidding against 5 other contractors per job</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Incentive paperwork guidance (EmPOWER, IRA, MEA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Access to our project SOP checklists</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2 font-bold">✓</span>
                  <span>Priority referrals in your service territory</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Ask</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>EmPOWER certification (or in process)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Cold-climate heat pump installation experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Commitment to quality (AHRI-matched systems)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Share our calculator with your existing leads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Report project outcomes (helps us improve)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">✓</span>
                  <span>Maintain professional communication standards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Opportunity */}
          <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-primary-400 mb-6">The Opportunity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">$80B</div>
                <div className="text-sm text-gray-400">Maryland electrification market (2024-2040)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">65%</div>
                <div className="text-sm text-gray-400">Heat pump sales target by 2030</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-2">18mo</div>
                <div className="text-sm text-gray-400">Window before competency is table stakes</div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">1</div>
                <div className="font-semibold text-gray-900 mb-1">Property Owner Finds Us</div>
                <div className="text-sm text-gray-600">Through search, referral, or housing authority</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">2</div>
                <div className="font-semibold text-gray-900 mb-1">They Complete Calculator</div>
                <div className="text-sm text-gray-600">We capture property details & incentive eligibility</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">3</div>
                <div className="font-semibold text-gray-900 mb-1">We Qualify the Lead</div>
                <div className="text-sm text-gray-600">Verify intent, timeline, and budget alignment</div>
              </div>
              <div className="text-center bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">4</div>
                <div className="font-semibold text-gray-900 mb-1">You Get the Referral</div>
                <div className="text-sm text-gray-600">Warm intro with full project context</div>
              </div>
            </div>
          </section>

          {/* Partner Requirements */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">⚡ Partner Requirements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li><strong>EmPOWER Participating Contractor</strong> (BGE, Pepco, Potomac Edison, or SMECO)</li>
              <li><strong>Cold-climate heat pump experience</strong> (Mitsubishi Hyper-Heat, Daikin, Fujitsu, or equivalent)</li>
              <li><strong>Manual J/S/D capability</strong> (proper load calculations, not rule-of-thumb sizing)</li>
              <li><strong>Insurance and licensing</strong> (Maryland HVACR license, general liability, workers comp)</li>
            </ul>
          </div>

          {/* Why Partner vs. Find Your Own Leads */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Why Partner vs. Find Your Own Leads?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900 mb-3">Traditional lead gen:</p>
                <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                  <li>$50-150 per lead</li>
                  <li>Shared with 3-5 other contractors</li>
                  <li>Cold — they just filled out a form</li>
                  <li>No incentive pre-qualification</li>
                  <li>You handle all education</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-primary-600 mb-3">MBRACE referrals:</p>
                <ul className="space-y-2 text-sm text-primary-700 list-disc list-inside">
                  <li>Performance-based (we succeed when you do)</li>
                  <li>Exclusive to your territory</li>
                  <li>Warm — they've seen their incentive report</li>
                  <li>Pre-qualified for programs</li>
                  <li>Educated on timeline and process</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3">Ready to Partner?</h3>
            <p className="text-gray-300 mb-6">
              We're building a network of certified contractors across Maryland. Limited spots per territory.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
              <div>
                <span className="text-primary-400">📧</span> <span className="text-primary-400 font-semibold">partners@mbrace.io</span>
              </div>
              <div>
                <span className="text-primary-400">📞</span> <span className="text-primary-400 font-semibold">(XXX) XXX-XXXX</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-8 pt-6 border-t border-gray-200">
            <p>MBRACE Intelligence • Maryland Building Electrification Data • mbrace.io</p>
            <p className="mt-2">
              We're an intelligence service, not a contractor. We help property owners navigate incentives and connect them with qualified installers.
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/contractors/join" className="btn-primary">
              Join Contractor Network
            </Link>
            <Link href="/contractors" className="btn-secondary">
              View All Contractor Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
