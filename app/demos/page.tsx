import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

// Not ready for search visibility yet — keep this hub and everything it links to out of the index for now.
export const metadata: Metadata = {
  title: 'Demos | Textra',
  robots: {
    index: false,
    follow: false,
  },
};

const demos = [
  {
    slug: 'east-cambs-demo',
    org: 'East Cambridgeshire District Council',
    title: 'Formal Complaints Process',
    excerpt: 'A branded walkthrough video embedded directly into the council\'s complaints page, showing residents how to make a complaint and what happens at each stage.',
    poster: '/east-cambs-complaints-poster.jpg',
    logo: '/east-cambs-icon.png',
    color: C.blue,
  },
  {
    slug: 'camden-demo',
    org: 'London Borough of Camden',
    title: 'Visitor Parking Permits',
    excerpt: 'An explainer video showing Camden residents how to apply for visitor parking permits, with clean branding and intuitive navigation embedded into the council\'s parking page.',
    poster: '/camden-poster.jpg',
    logo: '/camden-logo-user.png',
    color: C.teal,
  },
];

export default function DemosPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff', paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
              Demos
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              See Textra videos embedded in real-world pages, built for the organisations we work with.
            </p>
          </div>
        </section>

        {/* Demos Grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {demos.map((demo) => (
              <a
                key={demo.slug}
                href={`/${demo.slug}`}
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  border: `1px solid ${C.gray200}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'all 300ms ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  cursor: 'pointer',
                }}>
                {/* Preview */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    background: '#000',
                    overflow: 'hidden',
                  }}>
                  <img
                    src={demo.poster}
                    alt={demo.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    flex: 1,
                  }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <img
                      src={demo.logo}
                      alt={`${demo.org} logo`}
                      style={{ width: 22, height: 22, objectFit: 'contain', borderRadius: 4 }}
                    />
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: C.gray500 }}>
                      {demo.org}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: 0 }}>
                    {demo.title}
                  </h2>
                  <p style={{ fontSize: 13, color: C.gray600, lineHeight: 1.5, margin: 0 }}>
                    {demo.excerpt}
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: `1px solid ${C.gray100}` }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: demo.color, pointerEvents: 'none' }}>
                      View Demo →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: C.gray50, padding: '60px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: C.navy, marginBottom: 16 }}>
              Want to see this for your organisation?
            </h2>
            <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, marginBottom: 32 }}>
              We'll build a working demo showing Textra video embedded directly into your own pages.
            </p>
            <a
              href="mailto:sales@textra.video?subject=Book a Demo"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: C.teal,
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 9999,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 15,
                transition: 'all 200ms',
              }}>
              Book a Demo
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
