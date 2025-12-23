import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outreach Materials',
  description: 'Complete sales and partnership collateral for housing authorities, contractors, PE funds, and property owners.',
};

const outreachResources = [
  {
    title: 'Cold Email Sequences',
    slug: 'cold-email-sequences',
    description: 'Ready-to-send email campaigns for LIHTC owners, nonprofit facility managers, and LinkedIn outreach.',
    category: 'Email Marketing',
    icon: '📧',
  },
  {
    title: 'Housing Authority Pitch Deck',
    slug: 'housing-authority-pitch',
    description: 'Complete 10-slide presentation content for housing authority partnerships and property owner support.',
    category: 'Partnerships',
    icon: '🏛️',
  },
  {
    title: 'Contractor Partnership One-Pager',
    slug: 'contractor-partnership',
    description: 'Printable one-page document covering partnership benefits, requirements, and the referral process.',
    category: 'Partnerships',
    icon: '🔧',
  },
  {
    title: 'PE Fund Manager Outreach',
    slug: 'pe-outreach',
    description: 'Complete outreach system for institutional investors with Maryland multifamily exposure.',
    category: 'Enterprise',
    icon: '💼',
  },
];

export default function OutreachPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Outreach Materials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete sales and partnership collateral for housing authorities, contractors, PE funds, and property owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {outreachResources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/outreach/${resource.slug}`}
              className="card group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{resource.icon}</span>
                <span className="badge badge-blue">{resource.category}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                {resource.title}
              </h2>
              <p className="text-slate-600">{resource.description}</p>
            </Link>
          ))}
        </div>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About These Materials</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              These outreach materials are designed to help you connect with key stakeholders in Maryland's 
              building electrification market. Each resource includes ready-to-use templates, talking points, 
              and deployment guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Housing Authorities</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Pitch deck for property owner support</li>
                  <li>✓ Partnership one-pagers</li>
                  <li>✓ Talking points and objection handling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Contractors</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Partnership program details</li>
                  <li>✓ Referral process overview</li>
                  <li>✓ Requirements and benefits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Property Owners</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Cold email sequences (LIHTC, nonprofits)</li>
                  <li>✓ LinkedIn outreach templates</li>
                  <li>✓ Compliance and tracking guidance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For PE Funds</h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Portfolio exposure analysis</li>
                  <li>✓ Pricing and product tiers</li>
                  <li>✓ Objection handling scripts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
