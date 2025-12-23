import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cold Email Sequences',
  description: 'Ready-to-send email campaigns for LIHTC owners, nonprofit facility managers, and LinkedIn outreach.',
};

export default function ColdEmailSequencesPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Cold Email Sequences
          </h1>
          <p className="text-lg text-gray-600">
            Ready-to-send email campaigns for LIHTC owners, nonprofit facility managers, and LinkedIn outreach.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Sequence 1: LIHTC */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Sequence 1: LIHTC / Affordable Housing Owners</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Target</h3>
              <p className="text-sm text-gray-700">
                Property owners, asset managers, or principals at firms with LIHTC, Section 8, or affordable housing in Maryland.
                List source: HUD LIHTC Database, state housing finance agency records, CoStar (filter: MF + LLC/Fund owner).
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 1: The Opener</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject lines (test 2-3):</strong>
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                  <li>Maryland's forcing heat pump conversions — here's what that means for {'{company_name}'}</li>
                  <li>Your {'{property_count}'} Maryland properties qualify for ~$20K/unit in incentives</li>
                  <li>The math on Maryland's electrification mandate (for {'{company_name}'})</li>
                </ul>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

Maryland's ZEHES mandate will require heat pump replacement when your HVAC systems reach end-of-life — likely within the next 5-8 years for most affordable housing portfolios.

The good news: right now, EmPOWER + IRA HEEHR + DHCD programs stack to cover 50-100% of conversion costs for income-qualified properties. That window won't stay open.

I built a calculator that shows property-level incentive eligibility for Maryland multifamily. Happy to run your portfolio through it — takes about 2 minutes on your end, no cost.

Here's the link if you want to try it yourself: [CALCULATOR LINK]

Or just reply and I'll send a sample report for one of your properties.

Best,
Max

P.S. We're an intelligence service, not a contractor. No sales pitch, no one calling to sell you equipment.`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Reply or click calculator link</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 2: The Follow-Up (Day 3)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject:</strong> Re: Maryland's forcing heat pump conversions
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

Quick follow-up — did my last note land?

The short version: Maryland affordable housing portfolios are sitting on $15,000-$25,000/unit in stackable incentives that most owners don't claim because the application sequence is confusing.

I've mapped out the exact order (EmPOWER pre-approval → IRA HEEHR → DHCD/MEEHA) that maximizes capture.

If you have even 50 units in Maryland, that's $750K-$1.25M in potential offsets to your electrification capex.

Worth a 10-minute call to see if it applies to your portfolio?

Max`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Reply to schedule call</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 3: The Case Study (Day 7)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject:</strong> How a 200-unit Baltimore portfolio captured $4.2M in incentives
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

Wanted to share a quick case study relevant to your Maryland holdings.

A 200-unit LIHTC portfolio in Baltimore County:
- Gross electrification cost: ~$4M ($20K/unit)
- EmPOWER rebates: $1.2M
- IRA HEEHR (100% AMI-qualified): $2.4M
- DHCD/MEA grants: $600K
- **Net owner cost: ~$800K ($4K/unit)**
- Annual energy savings: $140K

The key was application sequencing — wrong order and they would have left ~$1M on the table.

I can run a similar analysis for {company_name}'s Maryland properties. Just reply with a property address and I'll send a sample report.

Max`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Reply with address</p>
              </div>

              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 4: The Breakup (Day 14)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject:</strong> Closing the loop
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`{first_name},

I've sent a few notes about Maryland's heat pump incentives for affordable housing — wanted to close the loop.

If the timing isn't right, no worries. I'll keep your info on file and reach out if program rules change significantly.

If you'd rather I not follow up, just reply "remove" and I'll take you off my list.

Otherwise, the calculator is here whenever you're ready: [CALCULATOR LINK]

Best,
Max`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Remove or click calculator</p>
              </div>
            </div>
          </section>

          {/* Sequence 2: Nonprofits */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Sequence 2: Nonprofit Facility Managers</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Target</h3>
              <p className="text-sm text-gray-700">
                Executive directors, facility managers, or operations staff at Maryland 501(c)(3) organizations.
                List source: IRS Form 990 filings (filter by MD address, NTEE code for churches/schools/clinics/community orgs).
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 1: The Opener</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject lines (test 2-3):</strong>
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">
                  <li>{'{org_name}'} may qualify for $25,000-$100,000 in building grants</li>
                  <li>Maryland is paying nonprofits to upgrade HVAC — here's how</li>
                  <li>Free money for {'{org_name}'}'s building (seriously)</li>
                </ul>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Hi {first_name},

I came across {org_name} while researching Maryland nonprofits that might qualify for the state's building electrification grants.

The short version: MEA's ECB and EEE grant programs can cover 70-100% of heat pump and insulation costs for 501(c)(3) community-serving facilities. Churches, schools, clinics, and community centers are all eligible.

Most nonprofits don't know these programs exist, or assume the application is too complicated. It's actually straightforward if you follow the right sequence.

I built a free eligibility scanner that shows which programs apply to your building: [CALCULATOR LINK]

Takes 2 minutes. No contractors, no sales calls — just your grant eligibility breakdown.

Let me know if you have questions.

Best,
Max

MBRACE Intelligence`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Click calculator link</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 2: The Follow-Up (Day 4)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject:</strong> Re: {'{org_name}'} may qualify for building grants
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Hi {first_name},

Following up on my note about Maryland's nonprofit building grants.

Here's what {org_name} might be looking at:
- **MEA ECB Grant:** Up to $50K for heat pumps and electrical upgrades
- **MEA EEE Grant:** Additional funding for insulation and air sealing
- **EmPOWER Rebates:** $3K-$15K from your utility (BGE, Pepco, etc.)

These programs are first-come, first-served. Organizations that apply early in the grant cycle capture the most funding.

Would it help if I sent you a one-page checklist of what's required? Just reply "checklist" and I'll send it over.

Max`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Reply "checklist"</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 3: The Urgency Frame (Day 8)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject:</strong> Before Maryland's rules change
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Hi {first_name},

Quick note — Maryland's Clean Heat Rules begin phasing in 2025-2026. After that, grant programs will see higher demand and faster cap-outs.

The organizations applying now are locking in 70-100% coverage. The organizations waiting will face stiffer competition and potentially lower funding levels.

If {org_name} has any plans to upgrade HVAC, insulation, or water heating in the next 3-5 years, now is the time to explore grant eligibility.

Here's the free scanner: [CALCULATOR LINK]

Or just reply and I'll run your building address manually.

Max`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Click or reply</p>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email 4: The Breakup (Day 14)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Subject:</strong> Should I stop reaching out?
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Hi {first_name},

I've sent a few notes about Maryland's building grants for nonprofits — wanted to make sure I'm not cluttering your inbox.

If this isn't relevant for {org_name} right now, just reply "remove" and I'll take you off my list.

If the timing just isn't right, no worries — the scanner will be here when you're ready: [CALCULATOR LINK]

Thanks for your time either way.

Max`}
                  </pre>
                </div>
                <p className="text-sm text-gray-600"><strong>CTA:</strong> Remove or bookmark</p>
              </div>
            </div>
          </section>

          {/* Sequence 3: LinkedIn */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Sequence 3: Cold LinkedIn Messages (Both Segments)</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connection Request</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Hi {first_name} — I focus on Maryland building electrification incentives for [affordable housing owners / nonprofits]. Thought we might have some overlap. Happy to connect.`}
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Follow-Up Message (after connection)</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Thanks for connecting, {first_name}.

Quick question: does {company_name} have any Maryland properties you're thinking about electrifying in the next few years?

I've been mapping the incentive landscape — EmPOWER + IRA + state grants stack to 50-100% coverage for qualifying buildings. Happy to share what I've learned if it's relevant.`}
                  </pre>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">If They Respond Positively</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <pre className="whitespace-pre-wrap text-sm text-gray-800 font-mono">
{`Great — easiest thing is probably this calculator I built: [LINK]

Takes 2 minutes, shows property-level eligibility. No contractors involved, just the incentive breakdown.

Or if you prefer, I can run an address manually and send you a sample report.`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Infrastructure & Metrics */}
          <section className="mb-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Outreach Infrastructure</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Sending Tools</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Cold email:</strong> Instantly, Smartlead, or Apollo</li>
                  <li><strong>LinkedIn automation:</strong> Dripify, Expandi, or manual</li>
                  <li><strong>Email warmup:</strong> Required for new domains — use Instantly warmup or similar</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">List Building</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>LIHTC owners:</strong> HUD LIHTC Database → filter MD → enrich with Apollo/Hunter</li>
                  <li><strong>Nonprofits:</strong> IRS 990 search (propublica.org/nonprofits) → filter MD + relevant NTEE codes → enrich</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Domain Setup</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Use separate domain for cold outreach (e.g., mbrace-intel.com)</li>
                  <li>Set up SPF, DKIM, DMARC</li>
                  <li>Warm for 2-3 weeks before sending volume</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-primary-50 border border-primary-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Metrics to Target</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-primary-200">
                    <th className="text-left py-2 px-4 font-semibold text-gray-900">Metric</th>
                    <th className="text-left py-2 px-4 font-semibold text-gray-900">Target</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-primary-100">
                    <td className="py-2 px-4">Open rate</td>
                    <td className="py-2 px-4">40-60%</td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="py-2 px-4">Reply rate</td>
                    <td className="py-2 px-4">5-15%</td>
                  </tr>
                  <tr className="border-b border-primary-100">
                    <td className="py-2 px-4">Positive reply rate</td>
                    <td className="py-2 px-4">2-8%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Calculator submissions per 100 emails</td>
                    <td className="py-2 px-4">3-10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Notes</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Include physical address in email footer</li>
              <li>Honor removal requests within 24 hours</li>
              <li>Don't email personal addresses (stick to work emails)</li>
              <li>CAN-SPAM compliant: clear sender, honest subject, easy unsubscribe</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
