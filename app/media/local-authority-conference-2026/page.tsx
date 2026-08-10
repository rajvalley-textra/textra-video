'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function LocalAuthorityConferencePost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Talks
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Transforming Resident Engagement
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Insights from the 5th Local Authority Revenues Innovation Conference at Toynbee Hall, London
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              April 17, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              A huge thank you to the team at <strong>Telsolutions Ltd</strong> for inviting us to present at yesterday's 5th Local Authority Revenues Innovation Conference at Toynbee Hall, London. It was an honour to share the stage and discuss the future of video communications for local authorities.
            </p>

            {/* Image */}
            <img
              src="/media/local-authority-conference-2026/image1.jpg"
              alt="Local Authority Revenues Innovation Conference"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Closing the Engagement Gap
            </h2>

            <p style={{ marginBottom: 32 }}>
              Our CRO, Steve Godman, highlighted a critical challenge facing Revenue and Housing managers today: <strong>The Engagement Gap.</strong>
            </p>

            <p style={{ marginBottom: 32 }}>
              As Daniel Pearce (Director at Telsolutions) rightly pointed out, vulnerable residents often <strong>"don't read letters."</strong> When vital information about rents, welfare, or benefits is buried in a PDF or a paper notice, it often goes unseen.
            </p>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Critical information that doesn't reach vulnerable residents is information that fails its purpose entirely.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Solution: Video at 24-Hour Speed
            </h2>

            <p style={{ marginBottom: 32 }}>
              Textra Video is closing that gap. We turn complex council communications into <strong>brand-safe, empathetic, and highly engaging animated videos in just 24 hours.</strong>
            </p>

            <p style={{ marginBottom: 32 }}>
              No more waiting weeks for bespoke production. No more generic templates that don't reflect your council's voice. Just smart, accessible video communication that reaches residents where they are.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Councils Taking Action
            </h2>

            <p style={{ marginBottom: 32 }}>
              We had the privilege of connecting with forward-thinking leaders from:
            </p>

            <div style={{ marginBottom: 32 }}>
              {[
                'London Borough of Waltham Forest',
                'Milton Keynes City Council',
                'East Riding of Yorkshire Council',
                'Lewes District and Eastbourne Borough Councils',
              ].map((council) => (
                <div key={council} style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
                  <div style={{ fontSize: 18, color: C.teal }}>📍</div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>{council}</p>
                </div>
              ))}
            </div>

            <p style={{ marginBottom: 32 }}>
              These councils are stepping up to challenge the status quo. They recognize that residents deserve communication that's not just informative, but accessible and engaging.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What's Next
            </h2>

            <p style={{ marginBottom: 32 }}>
              We're also looking forward to our upcoming session at the <strong>IRRV East Anglia Innovation</strong> conference at Norwich FC in May. If you're in the public sector grappling with resident engagement, we'll see you there!
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>Let's move from "written support" to "visual engagement."</strong> Your residents—especially the most vulnerable—deserve better.
            </p>

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7450847465722859520"
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
