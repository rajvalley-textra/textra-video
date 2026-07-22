'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function LocalizationAtScalePost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Articles & Interviews
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Localization at Scale: From Project to Configuration
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              How video-as-data transforms global workforce training from a budget killer to a configuration challenge
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              April 27, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              You've built a masterpiece of a training module. Now you need it in 15 languages. This is usually where the budget (and the momentum) dies.
            </p>

            {/* Image */}
            <img
              src="/media/localization-at-scale-2026/image.jpg"
              alt="Global localization at scale"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Traditional Localization Nightmare
            </h2>

            <p style={{ marginBottom: 32 }}>
              Traditional localisation is a project management nightmare. You're typically looking at:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Multiple vendors</strong> — one for each language, all with different processes
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Lengthy timelines</strong> — weeks to months per language variant
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Budget sprawl</strong> — costs multiply with each language added
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Brand inconsistency</strong> — regional teams interpret guidelines differently
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Video as Data, Not Footage
            </h2>

            <p style={{ marginBottom: 32 }}>
              But when video is built as <strong>"data" rather than "footage,"</strong> global scale becomes a configuration, not a project.
            </p>

            <p style={{ marginBottom: 32 }}>
              Here's the difference:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Traditional Video</h3>
                  <div style={{ background: 'rgba(0,0,0,0.05)', padding: 16, borderRadius: 8 }}>
                    <p style={{ margin: 0, fontSize: 14, color: C.gray600 }}>
                      Once a video is shot and edited, it's locked in that language. Localisation means re-shooting, re-editing, starting over.
                    </p>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Video as Data</h3>
                  <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 16, borderRadius: 8, borderLeft: `4px solid ${C.teal}` }}>
                    <p style={{ margin: 0, fontSize: 14, color: C.gray600 }}>
                      The script, pacing, and visual data are separate. Change the language, and the animation, timing, and branding stay consistent. It's a config change, not a rebuild.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Human-in-the-Loop at Global Scale
            </h2>

            <p style={{ marginBottom: 32 }}>
              At Textra Video, we use a <strong>Human-in-the-Loop model</strong> to ensure that as you scale globally, your brand nuance stays intact. <strong>AI speed, human verification.</strong>
            </p>

            <p style={{ marginBottom: 32 }}>
              This means:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>AI generates the base</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Instant localization in your target language with consistent animations and pacing
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Humans verify nuance</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Native speakers ensure cultural relevance and brand voice are preserved
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>One master, many languages</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Update the source once, and all localized versions sync automatically
                  </p>
                </div>
              </div>
            </div>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Global scale stops being a budget problem when you stop re-shooting and start configuring.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              For Global L&D Teams
            </h2>

            <p style={{ marginBottom: 32 }}>
              If you're managing global workforces across multiple regions and languages, this is the shift that changes everything. No more waiting months for localized content. No more budgets that balloon with each new market.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>Let's talk localization at Stand LP10.</strong> Learning Technologies Exhibition & Conference — 29-30 April, ExCeL London.
            </p>

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7454450705752473600"
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
