'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function OnstageTop100() {
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
              Textra Video Makes Onstage Top 100
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Officially in the top 5% of 1,600+ global applicants for Onstage S26 Demo Day
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              May 21, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              We are thrilled to announce that Textra Video has been shortlisted for <strong>The Onstage Top 100</strong>—the next stage of Onstage S26 Demo Day. Out of 1,600 global applicants, we've made it to the top 5%.
            </p>

            {/* Screenshot */}
            <img
              src="/media/onstage-top-100-2026/screenshot.png"
              alt="Onstage Top 100 announcement"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                We're honoured to be recognized as one of the standout companies in the May cohort.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why the Buzz?
            </h2>

            <p style={{ marginBottom: 32 }}>
              Enterprises are drowning in "dead content"—critical information locked in text that 80% of people ignore. Textra Video is fixing that.
            </p>

            <p style={{ marginBottom: 32 }}>
              Our platform delivers <strong>bespoke, on-brand animated video at the speed and price point of AI</strong>. We've removed the learning curve entirely:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>Upload a document</strong> — Any training material, policy update, or internal communication
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>We deliver in 24 hours</strong> — A polished, high-end video ready to deploy
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>Scaleable, effortless, effective</strong> — No production teams, no editing, no delays
                  </p>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              VC Community Recognition
            </h2>

            <p style={{ marginBottom: 32 }}>
              This recognition reflects the significant attention Textra has received from the venture capital community. Onstage's stringent selection process identifies founders and companies with the potential to reshape their industries—and we're proud to be counted among them.
            </p>

            <p style={{ marginBottom: 32 }}>
              See the full Onstage Top 100 shortlist:
            </p>

            <a
              href="https://onstage-shortlist.com/"
              target="_blank"
              rel="noopener noreferrer"
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
                marginBottom: 32,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(102,188,173,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              View Onstage Shortlist →
            </a>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What's Next?
            </h2>

            <p style={{ marginBottom: 32 }}>
              We're excited to present Textra Video on the virtual stage and connect with investors, founders, and innovators who see the potential in transforming how enterprises communicate.
            </p>

            <p style={{ marginBottom: 32 }}>
              Thank you to everyone who's supported us on this journey. See you on the (virtual) stage! 🚀
            </p>

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/posts/textra-video_s26-top-100-onstage-activity-7463179767199227904-UkWC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAASqaYBawf_adnyzq74HUA1GPRD8uiCXKI"
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
