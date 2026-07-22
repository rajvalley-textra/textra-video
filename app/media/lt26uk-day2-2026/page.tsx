'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function LT26UKDay2Post() {
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
              LT26 Recap: Day Two Highlights
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Closing out Learning Technologies 2026 with momentum, insights, and connections from across the L&D industry
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              April 30, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Day Two is officially over, and the momentum hasn't stopped. We've spent the last 48 hours connecting with the heavy hitters of the L&D space—from major financial institutions and global universities to retail giants and everything in between.
            </p>

            {/* Image 1 */}
            <img
              src="/media/lt26uk-day2-2026/image1.jpg"
              alt="Learning Technologies 2026 Day Two"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What L&D Leaders Are Asking For
            </h2>

            <p style={{ marginBottom: 32 }}>
              The feedback from the conference was loud and clear. L&D leaders don't just want "AI video."
            </p>

            <p style={{ marginBottom: 32 }}>
              They want content that is:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>On-Brand</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Bespoke templates that respect corporate identity
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Scalable</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    The ability to produce at volume without the "hero effort"
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Easy to Deploy</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Simple workflows that don't require software training
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Cost-Effective</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Professional results without the traditional agency price tag
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <img
              src="/media/lt26uk-day2-2026/image2.jpg"
              alt="Textra at Learning Technologies"
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
                At Textra, we don't just talk about these goals—we tick every single one of those boxes.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              From Static to Broadcast Quality
            </h2>

            <p style={{ marginBottom: 32 }}>
              Whether you're struggling to keep up with e-learning backlogs, onboarding updates, or product learning, we're here to help you turn that static text into <strong>broadcast-quality animation in 24 hours</strong>.
            </p>

            {/* Image 3 */}
            <img
              src="/media/lt26uk-day2-2026/image3.jpg"
              alt="Textra Video solutions"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              See You in 2027
            </h2>

            <p style={{ marginBottom: 32 }}>
              It was truly inspiring to see so many familiar faces and meet so many new ones. We're heading home to start working on all the amazing projects we discussed, but we're already counting down the days until we're back next year!
            </p>

            {/* Image 4 */}
            <img
              src="/media/lt26uk-day2-2026/image4.jpg"
              alt="Textra team at LT26"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Let's Keep the Momentum Going
            </h2>

            <p style={{ marginBottom: 32 }}>
              Missed us at the stand? No worries—let's keep the conversation going. To hear more about Textra and how we can help your organisation scale your e-learning content, get in touch with Steve Godman, our Chief Revenue Officer.
            </p>

            <p style={{ marginBottom: 32 }}>
              Visit us at <strong>www.textra.video</strong> to learn more about our solutions and see what we can do for your team.
            </p>

            {/* Image 5 */}
            <img
              src="/media/lt26uk-day2-2026/image5.jpg"
              alt="Learning Technologies experience"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7455673061162545152"
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
