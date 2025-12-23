import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Contractors',
  description: 'Market intelligence, training resources, and join our contractor network for HVAC professionals in the DMV area.',
};

const contractorResources = [
  {
    title: 'Market Intelligence',
    slug: 'market-report',
    description: 'Access market data, trends, and insights to grow your heat pump business in the DMV area.',
    category: 'Business',
  },
  {
    title: 'Join Network',
    slug: 'join',
    description: 'Join our network of certified contractors and get access to exclusive resources and leads.',
    category: 'Network',
  },
  {
    title: 'Training Programs',
    slug: '/training',
    description: 'A2L certification, Manual J templates, and AI diagnostics training.',
    category: 'Education',
    external: true,
  },
];

export default function ContractorsPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            For Contractors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Market intelligence, training resources, and join our contractor network for HVAC professionals in the DMV area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contractorResources.map((resource) => {
            const Component = resource.external ? Link : Link;
            const href = resource.external ? resource.slug : `/contractors/${resource.slug}`;
            
            return (
              <Component
                key={resource.slug}
                href={href}
                className="card group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge badge-blue">{resource.category}</span>
                </div>
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                  {resource.title}
                </h2>
                <p className="text-slate-600">{resource.description}</p>
              </Component>
            );
          })}
        </div>

        <div className="bg-primary-50 border border-primary-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Join Our Network?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Exclusive Resources</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Market intelligence reports</li>
                <li>✓ Training materials and templates</li>
                <li>✓ Marketing support and materials</li>
                <li>✓ Technical support and consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Growth</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Listing in installer directory</li>
                <li>✓ Qualified lead referrals</li>
                <li>✓ Networking opportunities</li>
                <li>✓ Industry insights and trends</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <Link href="/contractors/join" className="btn-primary">
              Join Network
            </Link>
            <Link href="/training" className="btn-secondary">
              View Training Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
