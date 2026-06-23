import { C } from '@/lib/theme';

export const metadata = {
  title: 'About Textra Video | Enterprise Video Platform',
  description: 'Learn about Textra Video and our team of experienced leaders transforming enterprise video production.',
};

export default function AboutPage() {
  const team = [
    {
      name: 'Matt Cooper',
      title: 'CEO',
      bio: 'Founder and product-led CEO with 14+ years\' experience across animation, video, and technology. Leads product vision, strategy, and commercial direction.',
      linkedin: 'https://www.linkedin.com/in/matthewjamescooper/',
    },
    {
      name: 'Raj Valley',
      title: 'COO',
      bio: '30+ years in operations, media, and creative automation. Expert in scaling delivery, operations, and investment planning.',
      linkedin: 'https://www.linkedin.com/in/rajvalley/',
    },
    {
      name: 'Steven Godman',
      title: 'CRO',
      bio: 'SaaS commercial leader with a 25-year track record of building and scaling B2B ventures to £5m+ ARR.',
      linkedin: 'https://www.linkedin.com/in/stevegodman/',
    },
    {
      name: 'Stuart Jeffrey',
      title: 'CFO',
      bio: 'Startup finance and fundraising specialist with deep experience in scaling early-stage businesses and managing investor relations.',
      linkedin: 'https://www.linkedin.com/in/stuart-jeffrey-9a3739/',
    },
    {
      name: 'Alexis Cheshire',
      title: 'CTO',
      bio: '25+ years building B2B and D2C digital products and leading engineering teams. Responsible for platform scalability, security, and automation.',
      linkedin: 'https://www.linkedin.com/in/alexischeshire/',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: C.navy, lineHeight: 1.15, margin: '0 0 32px 0' }}>
            About Textra Video
          </h1>
          <p style={{ fontSize: 18, color: C.gray600, lineHeight: 1.8, maxWidth: 800, margin: 0 }}>
            Textra Video is a high-growth technology platform positioned as the "default video layer" for enterprise
            learning and communications. We solve a critical bottleneck for large organizations: the massive volume of
            text-heavy documentation—such as training manuals, policies, and internal communications—that remains unread
            and unengaged by employees.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: '#f8f9fb' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: C.navy, margin: '0 0 40px 0' }}>The Challenge We Solve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
            <div>
              <div style={{ fontSize: 56, fontWeight: 900, color: C.teal, marginBottom: 16 }}>75%</div>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.7 }}>
                Of viewers prefer video as their learning medium, yet most enterprise content remains text-based.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.teal, marginBottom: 16 }}>Too Slow & Expensive</div>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.7 }}>
                Traditional video production is too slow and expensive for the volume of content enterprises need.
              </p>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 800, color: C.teal, marginBottom: 16 }}>Brand Safety Matters</div>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.7 }}>
                DIY AI tools often lack the brand safety and quality required for corporate governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ paddingTop: 80, paddingBottom: 80, background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: C.navy, margin: '0 0 56px 0' }}>Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48 }}>
            {team.map((member) => (
              <div
                key={member.name}
                style={{
                  padding: 32,
                  background: '#f8f9fb',
                  borderRadius: 16,
                  border: '1px solid #e2e6ec',
                }}
              >
                <h3 style={{ fontSize: 20, fontWeight: 800, color: C.navy, margin: '0 0 8px 0' }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.teal, marginBottom: 16 }}>
                  {member.title}
                </div>
                <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.7, margin: '0 0 20px 0' }}>
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: C.teal,
                    textDecoration: 'none',
                  }}
                >
                  View on LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
