import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Intelligence',
  description: 'Access market data, trends, and insights to grow your heat pump business in the DMV area.',
};

export default function MarketReportPage() {
  return (
    <article className="container-custom py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1>Market Intelligence</h1>
        <p className="lead">
          Access market data, trends, and insights to grow your heat pump business in the DMV area.
        </p>

        <h2>What We Provide</h2>
        <p>
          Our market intelligence reports give contractors valuable insights into the heat pump market
          in Maryland, DC, and Northern Virginia:
        </p>
        <ul>
          <li>Market size and growth trends</li>
          <li>Consumer demand patterns</li>
          <li>Rebate program impacts</li>
          <li>Competitive landscape analysis</li>
          <li>Pricing trends and benchmarks</li>
          <li>Technology adoption rates</li>
        </ul>

        <h2>Quarterly Reports</h2>
        <p>
          We publish quarterly market intelligence reports covering:
        </p>
        <ul>
          <li>Installation volume and trends</li>
          <li>Popular system types and brands</li>
          <li>Average project costs and margins</li>
          <li>Consumer preferences and concerns</li>
          <li>Regulatory and policy updates</li>
          <li>Forecasts and predictions</li>
        </ul>

        <h2>Regional Insights</h2>
        <p>
          Our reports break down data by region:
        </p>
        <ul>
          <li><strong>Maryland:</strong> State-wide trends and county-level data</li>
          <li><strong>Washington DC:</strong> District-specific insights</li>
          <li><strong>Northern Virginia:</strong> Regional analysis and trends</li>
        </ul>

        <h2>How to Access</h2>
        <p>
          Market intelligence reports are available to:
        </p>
        <ul>
          <li>Members of our contractor network</li>
          <li>Certified A2L installers</li>
          <li>Contractors enrolled in our training programs</li>
        </ul>

        <h2>Custom Reports</h2>
        <p>
          Need specific data for your business? We can create custom market intelligence reports tailored
          to your needs, including:
        </p>
        <ul>
          <li>Target market analysis</li>
          <li>Competitive positioning</li>
          <li>Pricing strategy insights</li>
          <li>Marketing opportunity identification</li>
        </ul>

        <h2>Next Steps</h2>
        <p>
          To access our market intelligence reports, <a href="/contractors/join">join our contractor network</a>
          or <a href="/contact">contact us</a> for more information about custom reports.
        </p>
      </div>
    </article>
  );
}
