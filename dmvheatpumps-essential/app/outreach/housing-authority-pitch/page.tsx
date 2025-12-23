import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Housing Authority Pitch Deck',
  description: 'Complete 10-slide presentation content for housing authority partnerships and property owner support.',
};

export default function HousingAuthorityPitchPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Housing Authority Partnership Pitch
          </h1>
          <p className="text-lg text-gray-600">
            Complete slide-by-slide content for a 10-slide presentation. Use this content to build your presentation 
            in PowerPoint, Google Slides, or Canva.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-12">
          {/* Slide 1 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 1</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-2 text-center">
              Helping Your Property Owners Navigate Maryland's Electrification Mandate
            </h2>
            <p className="text-center text-gray-600 mb-4">
              A neutral resource for affordable housing owners — no contractors, no sales
            </p>
            <p className="text-center text-sm text-gray-500">
              MBRACE Intelligence | Maryland Building Electrification Data
            </p>
          </section>

          {/* Slide 2 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 2</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              Your Property Owners Are Confused
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">They Don't Know</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">They're Worried About</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">They Don't Have Time For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">What programs exist</td>
                    <td className="py-3 px-4 text-gray-700">Emergency HVAC replacements</td>
                    <td className="py-3 px-4 text-gray-700">Researching 5 different programs</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">How much they qualify for</td>
                    <td className="py-3 px-4 text-gray-700">Contractor pressure tactics</td>
                    <td className="py-3 px-4 text-gray-700">Application paperwork</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">When to act</td>
                    <td className="py-3 px-4 text-gray-700">Rising compliance costs</td>
                    <td className="py-3 px-4 text-gray-700">Figuring out the right sequence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              You're fielding these questions. We can help answer them at scale.
            </p>
          </section>

          {/* Slide 3 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 3</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              Maryland's Electrification Timeline
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="text-sm font-mono text-gray-800 space-y-2">
                <div className="flex justify-between items-center">
                  <span>2024</span>
                  <span className="text-primary-600 font-semibold">Zero-Emission Buildings MOU Signed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2025-26</span>
                  <span className="text-primary-600 font-semibold">Clean Heat Rules Begin Phasing In</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>~2029</span>
                  <span className="text-primary-600 font-semibold">ZEHES EOL Trigger Starts</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2030</span>
                  <span className="text-primary-600 font-semibold">95% Heat Pump Sales Target</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2035+</span>
                  <span className="text-primary-600 font-semibold">Near-total Transition</span>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-700">
              Property owners who act now capture maximum incentives. Those who wait face emergency pricing and program caps.
            </p>
          </section>

          {/* Slide 4 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 4</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              What's Available Right Now
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Program</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount per Unit</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Source</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">EmPOWER Maryland</td>
                    <td className="py-3 px-4 text-gray-700">$4,000 - $8,000</td>
                    <td className="py-3 px-4 text-gray-700">Utility (BGE, Pepco, etc.)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">IRA HEEHR</td>
                    <td className="py-3 px-4 text-gray-700">$8,000 - $14,000</td>
                    <td className="py-3 px-4 text-gray-700">Federal (100% for ≤80% AMI)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">DHCD / MEEHA</td>
                    <td className="py-3 px-4 text-gray-700">$3,000 - $8,000</td>
                    <td className="py-3 px-4 text-gray-700">State</td>
                  </tr>
                  <tr className="bg-primary-50">
                    <td className="py-3 px-4 font-semibold text-gray-900">Total Stackable</td>
                    <td className="py-3 px-4 font-semibold text-gray-900">$15,000 - $30,000</td>
                    <td className="py-3 px-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              Most property owners don't know these stack, or apply in the wrong order.
            </p>
          </section>

          {/* Slide 5 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 5</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              A Neutral Tool for Your Property Owners
            </h2>
            <div className="bg-gray-100 rounded-lg p-6 mb-4 text-center">
              <p className="text-gray-600 italic">[Screenshot or mockup of calculator]</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">1️⃣</div>
                <h3 className="font-semibold text-gray-900 mb-1">Simple</h3>
                <p className="text-sm text-gray-600">6 questions, 2 minutes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">2️⃣</div>
                <h3 className="font-semibold text-gray-900 mb-1">Personalized</h3>
                <p className="text-sm text-gray-600">Shows programs they qualify for</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">3️⃣</div>
                <h3 className="font-semibold text-gray-900 mb-1">No contractors</h3>
                <p className="text-sm text-gray-600">We don't sell equipment</p>
              </div>
            </div>
            <p className="text-center text-sm text-primary-600 font-semibold mt-4">
              [Your Calculator URL]
            </p>
          </section>

          {/* Slide 6 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 6</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              The Incentive Scan Report
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Property-specific incentive eligibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Program breakdown with amounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Application sequence guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>Compliance timeline context</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✅</span>
                <span>One-page checklist for next steps</span>
              </li>
            </ul>
            <p className="text-center text-sm text-gray-600 mt-6">
              SMS confirmation within minutes, full PDF report within 2 hours
            </p>
          </section>

          {/* Slide 7 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 7</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              How This Helps You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Fewer confused calls</h3>
                <p className="text-sm text-gray-600">Property owners get answers without calling you</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Better outcomes</h3>
                <p className="text-sm text-gray-600">Owners who use the tool capture more incentives</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Zero cost</h3>
                <p className="text-sm text-gray-600">Free for you to share, free for them to use</p>
              </div>
            </div>
            <div className="mt-6 bg-primary-50 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>What we ask:</strong> Share the link with your property owner network
              </p>
            </div>
          </section>

          {/* Slide 8 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 8</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              You're Not the First
            </h2>
            <ul className="space-y-3 text-gray-700 mb-4">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Housing authorities across Maryland have shared this with their property owner networks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>PE funds and institutional owners use the same tool for portfolio analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Data powers the Maryland Electrification Readiness Index</span>
              </li>
            </ul>
            <p className="text-center text-sm text-gray-600">
              We track aggregate data (no PII) to understand market readiness — this helps everyone plan.
            </p>
          </section>

          {/* Slide 9 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 9</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              Clear Boundaries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">We Are</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Intelligence service</li>
                  <li>✓ Neutral tool provider</li>
                  <li>✓ Data analysts</li>
                  <li>✓ Educational resource</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">We Are NOT</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✗ Contractor</li>
                  <li>✗ Equipment seller</li>
                  <li>✗ Program administrators</li>
                  <li>✗ Financial/legal advisors</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-700 mt-6">
              We help property owners understand their options. What they do next is their choice.
            </p>
          </section>

          {/* Slide 10 */}
          <section className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="text-center mb-4">
              <span className="badge badge-blue">Slide 10</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
              Easy to Get Started
            </h2>
            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">1. Share the link</h3>
                <p className="text-sm text-gray-600">We'll give you a custom URL to track your referrals</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">2. Co-brand a one-pager</h3>
                <p className="text-sm text-gray-600">We can create a flyer with your logo for distribution</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-1">3. Host a webinar</h3>
                <p className="text-sm text-gray-600">We can present to your property owner network directly</p>
              </div>
            </div>
            <div className="text-center border-t border-gray-200 pt-6">
              <p className="font-semibold text-gray-900">Max | MBRACE Intelligence</p>
              <p className="text-sm text-gray-600">max@mbrace.io | (XXX) XXX-XXXX</p>
              <p className="text-sm text-gray-500 mt-2">Questions? Happy to jump on a call and walk through the tool.</p>
            </div>
          </section>

          {/* Appendix: Talking Points */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Appendix: Talking Points</h2>
            
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If they ask: "What's in it for you?"</h3>
                <p className="text-gray-700 italic">
                  We're building a dataset to help PE funds and policymakers understand Maryland's electrification readiness. 
                  The more property owners use the tool, the better our data. We monetize through enterprise intelligence 
                  products, not through the free calculator.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If they ask: "How do I know you won't spam my owners?"</h3>
                <p className="text-gray-700 italic">
                  The property owner gives us their contact info voluntarily. We send exactly three things: an instant SMS 
                  confirmation, a PDF report, and one follow-up if they haven't opened it. No sales calls, no contractor 
                  referrals, no sharing their info with third parties. They can opt out anytime.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If they ask: "Can you customize this for our portfolio?"</h3>
                <p className="text-gray-700 italic">
                  Yes. For housing authorities with 500+ units in their network, we can create a custom landing page with 
                  your branding and track submissions from your referrals. We can also run aggregate analysis on your portfolio's 
                  electrification readiness.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If they ask: "What happens to the data?"</h3>
                <p className="text-gray-700 italic">
                  Individual data is used only to generate their report. We aggregate anonymized data (utility territory, system 
                  age, building type) to track market trends. We never sell individual property owner data or share it with contractors.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
