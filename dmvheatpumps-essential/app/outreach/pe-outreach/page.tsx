import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PE Fund Manager Outreach',
  description: 'Complete outreach system for institutional investors with Maryland multifamily exposure.',
};

export default function PEOutreachPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            PE Fund Manager Outreach Sequence
          </h1>
          <p className="text-lg text-gray-600">
            Complete outreach system for institutional investors with Maryland multifamily exposure.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Target Profile */}
          <section className="mb-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Target Profile</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Who:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Partners, Principals, or Asset Managers at PE funds with Maryland multifamily exposure</li>
                  <li>Real estate-focused funds, affordable housing specialists, or generalist funds with RE portfolios</li>
                  <li>Firms with 50+ units in Maryland (LIHTC, market-rate MF, or mixed)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Where to find:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>CoStar/Reonomy (filter: MF properties, owner = LLC/LP/Fund, MD geography)</li>
                  <li>SEC 13F filings for real estate holdings</li>
                  <li>LinkedIn Sales Navigator (title filters: Partner, Principal, Asset Manager + Real Estate PE)</li>
                  <li>Industry conferences (NMHC, ULI, Affordable Housing Investors Council)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sequence Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sequence Overview</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Timing</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">1</td>
                    <td className="py-3 px-4 text-gray-700">Day 0</td>
                    <td className="py-3 px-4 text-gray-700">Problem awareness — mandate exposure</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">2</td>
                    <td className="py-3 px-4 text-gray-700">Day 4</td>
                    <td className="py-3 px-4 text-gray-700">Credibility — what the Index contains</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">3</td>
                    <td className="py-3 px-4 text-gray-700">Day 9</td>
                    <td className="py-3 px-4 text-gray-700">Value — illustrative portfolio analysis</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">4</td>
                    <td className="py-3 px-4 text-gray-700">Day 14</td>
                    <td className="py-3 px-4 text-gray-700">Breakup — leave the door open</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Email 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email 1: The Problem Frame</h2>
            <div className="border-l-4 border-primary-600 pl-6">
              <p className="text-sm text-gray-600 mb-3">
                <strong>Subject lines (test):</strong>
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                <li>Maryland's ZEHES mandate — what it means for {'{company_name}'}'s portfolio</li>
                <li>Your Maryland multifamily exposure and the 2029 electrification trigger</li>
                <li>The capex line item you're probably not modeling yet</li>
              </ul>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

Quick question: has {company_name} modeled electrification capex for your Maryland multifamily holdings?

Maryland's ZEHES mandate triggers heat pump replacement when HVAC systems reach end-of-life — likely within 5-8 years for most portfolios. For a 1,000-unit Maryland portfolio, that's $15-20M in gross capex on the horizon.

The complicating factor: right now, incentives cover 50-70% of that cost. But as demand spikes post-2026, program caps and contractor capacity will compress that window.

I've been building a dataset — property-level system age, utility territory, incentive eligibility — that helps funds model this exposure. Happy to share what we're seeing if your team is thinking about this.

Best,
Max
MBRACE Intelligence`}
                </pre>
              </div>
            </div>
          </section>

          {/* Email 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email 2: The Credibility Play</h2>
            <div className="border-l-4 border-primary-600 pl-6">
              <p className="text-sm text-gray-600 mb-3">
                <strong>Subject:</strong> Re: Maryland's ZEHES mandate
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

Following up on my note about Maryland electrification exposure.

To give you a sense of what we track:

**Maryland Electrification Index**
- Property-level HVAC system age and fuel type
- Utility territory mapping (BGE, Pepco, Potomac Edison, SMECO)
- Incentive eligibility by program (EmPOWER, IRA HEEHR, DHCD/MEEHA)
- Compliance timeline risk scoring (0-100)
- Contractor capacity by geography

We've compiled this for 500+ Maryland properties through direct owner engagement — data that doesn't exist in CoStar or public records.

For funds with Maryland MF exposure, we offer portfolio-level assessments: asset-by-asset risk stratification, incentive capture modeling, and phased execution roadmaps.

Would a sample analysis for one of your Maryland properties be useful? Just reply with an address and I'll run it.

Max`}
                </pre>
              </div>
            </div>
          </section>

          {/* Email 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email 3: The Illustrative Analysis</h2>
            <div className="border-l-4 border-primary-600 pl-6">
              <p className="text-sm text-gray-600 mb-3">
                <strong>Subject:</strong> What electrification looks like for a 500-unit Maryland portfolio
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

Wanted to share a quick illustrative analysis — the kind of output we produce for funds with Maryland exposure.

**Sample: 500-Unit Maryland MF Portfolio**

| Metric | Value |
|--------|-------|
| Gross electrification capex | ~$10M ($20K/unit) |
| Incentive capture (stacked) | ~$6.5M (65%) |
| Net owner investment | ~$3.5M ($7K/unit) |
| Annual energy savings | ~$350K |
| Simple payback (net) | ~10 years |
| 15-year net benefit vs. waiting | ~$2.8M |

**Risk stratification:**
- 18% of units (90) have systems likely to fail before 2029 — HIGH priority
- 52% of units (260) are 10-15 years old — MODERATE priority
- 30% of units (150) are <10 years old — MONITOR

This is the level of detail we provide for each property in a portfolio assessment.

If {company_name} has Maryland exposure, I'd be happy to run a real analysis on your holdings. Takes about 2 weeks to deliver, starts at $15K for portfolios under 50 assets.

Worth a 15-minute call to discuss?

Max

P.S. We also offer deal-level electrification memos for acquisitions — $2,500/asset, 48-hour turnaround.`}
                </pre>
              </div>
            </div>
          </section>

          {/* Email 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email 4: The Breakup</h2>
            <div className="border-l-4 border-primary-600 pl-6">
              <p className="text-sm text-gray-600 mb-3">
                <strong>Subject:</strong> Should I close the loop?
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

I've sent a few notes about Maryland electrification exposure for PE portfolios — wanted to make sure I'm not cluttering your inbox.

If this isn't relevant to {company_name} right now, no worries. I'll close the loop here.

If you'd like to revisit later, or if you have a colleague who handles asset management or capex planning, feel free to forward this thread.

Either way, thanks for your time.

Best,
Max
MBRACE Intelligence

P.S. If you'd prefer I reach out again in 6 months when more mandate details are finalized, just reply "later" and I'll set a reminder.`}
                </pre>
              </div>
            </div>
          </section>

          {/* Follow-Up Sequences */}
          <section className="mb-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Follow-Up Sequences</h2>
            
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If They Reply Positively (Interested)</h3>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Great to hear from you, {first_name}.

A few options depending on where you are:

1. **Free sample**: I can run one of your Maryland properties through our Index and send you a sample asset-level report. Just reply with an address.

2. **Portfolio assessment call**: If you want to discuss your full Maryland exposure, I can walk you through our methodology and pricing on a 20-minute call. [CALENDLY LINK]

3. **Deal-level memo**: If you have an acquisition in diligence, we can turn around an electrification risk/opportunity analysis in 48 hours. $2,500/asset.

Which sounds most useful?

Max`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If They Reply "Not Now" / "Bad Timing"</h3>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Totally understand, {first_name}. Happy to reconnect when timing is better.

I'll set a reminder to follow up in [3/6] months — or feel free to reach out directly if something comes up before then.

In the meantime, if you want to keep tabs on Maryland's electrification landscape, our quarterly regulatory briefings are free to subscribe: [LINK]

Best,
Max`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">If They Reply "Who Are You?"</h3>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Fair question, {first_name}.

MBRACE Intelligence is a data and intelligence service focused on Maryland's building electrification market. We help PE funds, asset managers, and housing authorities understand:

- Which properties face mandate compliance risk
- What incentive programs apply (and how to capture them)
- How to sequence and prioritize electrification capex

We're not contractors — we don't install equipment or sell hardware. We provide data and analysis.

I reached out because {company_name} appears to have Maryland multifamily exposure, and this is the kind of regulatory shift that often gets missed until it's too late to capture incentives.

Happy to share more context if useful. Or if I have the wrong read on your portfolio, just let me know and I'll update my records.

Max`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* LinkedIn Outreach */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">LinkedIn Outreach (Supplement)</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connection Request</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Hi {first_name} — I focus on regulatory capex exposure for PE funds with Maryland real estate. Thought we might have some overlap given {company_name}'s portfolio. Happy to connect.`}
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">First Message (After Connection)</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Thanks for connecting, {first_name}.

Quick question: is {company_name} tracking Maryland's ZEHES mandate? It triggers heat pump replacement when HVAC systems reach end-of-life — could be $15-20K/unit in capex for multifamily portfolios.

I've been building a dataset on property-level exposure. Happy to share what we're seeing if your team is thinking about this.`}
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-Up (If No Response After 5 Days)</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name} — didn't want to leave you hanging.

If Maryland electrification isn't on your radar yet, no worries. But if you'd find a sample asset-level analysis useful, just reply with a property address and I'll run it through our Index.

Either way, appreciate you connecting.`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Reference */}
          <section className="mb-12 bg-primary-50 border border-primary-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing Reference (For Conversations)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Product</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Price</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Turnaround</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Deliverable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-100">
                    <td className="py-3 px-4 text-gray-700">Acquisition Memo</td>
                    <td className="py-3 px-4 text-gray-700">$2,500/asset</td>
                    <td className="py-3 px-4 text-gray-700">48 hours</td>
                    <td className="py-3 px-4 text-gray-700">3-5 page risk/opportunity analysis</td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="py-3 px-4 text-gray-700">Standard Index</td>
                    <td className="py-3 px-4 text-gray-700">$15,000</td>
                    <td className="py-3 px-4 text-gray-700">2-3 weeks</td>
                    <td className="py-3 px-4 text-gray-700">Portfolio score, heat maps, timeline dashboard</td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="py-3 px-4 text-gray-700">Portfolio Deep Dive</td>
                    <td className="py-3 px-4 text-gray-700">$35,000</td>
                    <td className="py-3 px-4 text-gray-700">3-4 weeks</td>
                    <td className="py-3 px-4 text-gray-700">Asset-level stratification, roadmap, 2 calls</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Enterprise Intelligence</td>
                    <td className="py-3 px-4 text-gray-700">$75,000+</td>
                    <td className="py-3 px-4 text-gray-700">Ongoing</td>
                    <td className="py-3 px-4 text-gray-700">API, deal memos, analyst support, board materials</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Objection Handling */}
          <section className="mb-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Objection Handling</h2>
            
            <div className="space-y-6 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">"We already have consultants for this."</h3>
                <p className="text-gray-700 italic">
                  Totally fair. The difference is our data source — we capture property-level system age and incentive 
                  eligibility through direct owner engagement, not public records or estimates. If your consultants are 
                  working off CoStar data, they're missing the ground-truth inputs that drive accuracy. Happy to compare 
                  methodologies if you'd find that useful.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">"We're not focused on Maryland."</h3>
                <p className="text-gray-700 italic">
                  Makes sense. We're starting with Maryland because the mandate is most advanced here, but the playbook 
                  applies to any state adopting building performance standards. If you have exposure in DC, Virginia, New York, 
                  or California, the regulatory pattern is similar — just on different timelines. Let me know if those 
                  geographies are more relevant.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">"This feels premature — the mandate isn't enforced yet."</h3>
                <p className="text-gray-700 italic">
                  That's exactly the window we're focused on. Right now, incentives cover 50-70% of costs and contractor 
                  capacity is available. Post-2026, as demand spikes, those economics compress. The funds positioning now 
                  are locking in favorable execution costs. The question is whether you want to model this proactively or react 
                  when systems fail.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">"What's your data source?"</h3>
                <p className="text-gray-700 italic">
                  We capture data through a public calculator that property owners use to check their incentive eligibility. 
                  They provide address, building type, utility territory, system age, and income classification. We've compiled 
                  500+ Maryland properties this way — data that doesn't exist in any commercial database because it comes from 
                  direct owner engagement.
                </p>
              </div>
            </div>
          </section>

          {/* Tracking & Metrics */}
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tracking & Metrics</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Metric</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Target</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Open rate</td>
                    <td className="py-3 px-4 text-gray-700">50-70% (PE is highly targeted)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Reply rate</td>
                    <td className="py-3 px-4 text-gray-700">10-20%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-gray-700">Meeting rate</td>
                    <td className="py-3 px-4 text-gray-700">5-10%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sample request rate</td>
                    <td className="py-3 px-4 text-gray-700">3-5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-700">
              <p className="font-semibold mb-2">CRM Notes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Tag by fund type (LIHTC, market-rate MF, mixed)</li>
                <li>Track estimated Maryland unit count</li>
                <li>Note any specific properties mentioned</li>
                <li>Record objections for pattern analysis</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
