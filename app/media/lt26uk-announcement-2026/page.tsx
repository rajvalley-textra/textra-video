'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function LT26AnnouncementPost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Company News
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              One Day to Go: LT26 is Here
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Tomorrow at ExCeL London: See how we're moving the goalposts to 24-hour video delivery
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              April 28, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              If you finish a training script on Monday morning, when do you actually expect to see the finished video?
            </p>

            <p style={{ marginBottom: 32 }}>
              If the answer is "next month," your business is moving faster than your content. In L&D, <strong>speed isn't just a metric—it's about relevance</strong>. Training that arrives 4 weeks late is often training that's no longer needed. The window for impact has closed.
            </p>

            {/* Image 1 */}
            <img
              src="/media/lt26uk-announcement-2026/image1.jpg"
              alt="Learning Technologies 2026"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Tomorrow at ExCeL London
            </h2>

            <p style={{ marginBottom: 32 }}>
              Tomorrow morning, the doors open at <strong>ExCeL London, Learning Technologies Exhibition & Conference</strong>.
            </p>

            <p style={{ marginBottom: 32 }}>
              We'll be at Stand LP10 showing how we've moved the goalposts to a <strong>24-hour delivery model</strong>. We're helping L&D teams move away from the "creative bottleneck" and toward a high-speed video utility layer.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why We're Different
            </h2>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Zero Software to Learn</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    You provide the text; we provide the broadcast-quality video.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Human-in-the-Loop</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    We combine AI speed with human QA to ensure the brand safety and nuance that enterprises like Amazon and the Department for Education demand.
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <img
              src="/media/lt26uk-announcement-2026/image2.jpg"
              alt="Textra at Learning Technologies"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Clear Your Backlog
            </h2>

            <p style={{ marginBottom: 32 }}>
              Finally clear your backlog of static PDFs and Word docs by turning them into engaging animation in <strong>hours, not weeks</strong>.
            </p>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                📍 Stand: LP10 — The Enterprise Video Layer for L&D 🚀
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              See You at ExCeL
            </h2>

            <p style={{ marginBottom: 32 }}>
              Tomorrow morning, we'll be ready to show you how we're transforming L&D video production. Whether you're struggling with content backlogs, training that arrives too late, or production teams that can't keep pace with demand, we've got the solution.
            </p>

            <p style={{ marginBottom: 32 }}>
              Stop by Stand LP10, grab a coffee, and let's talk about how Textra can help your organization finally move past the creative bottleneck.
            </p>

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7454819213652930560"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: C.teal,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'opacity 200ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
                Read on LinkedIn →
              </a>
            </div>

            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${C.gray200}` }}>
              <a
                href="/media"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: C.teal,
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'opacity 200ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
                ← Back to Media
              </a>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
