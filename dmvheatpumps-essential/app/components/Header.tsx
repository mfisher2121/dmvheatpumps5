import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              DMV Heat Pumps
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/guides"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/rebates"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Rebates
            </Link>
            <Link
              href="/training"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Training
            </Link>
            <Link
              href="/contractors"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              For Contractors
            </Link>
            <Link
              href="/tools"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/outreach"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Outreach
            </Link>
            <Link
              href="/blog"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link href="/find-installer" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
              Find Installer
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
