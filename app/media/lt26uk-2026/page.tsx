'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function LT26UKPost() {
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
              Four Insights from Learning Technologies 2026
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              What L&D leaders really want: a shift from DIY tools to done-for-you solutions
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              May 6, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              After two days of back-to-back meetings at Learning Technologies 2026, a few things really stood out. While the hall was full of "AI hype," the actual pain points we heard from L&D leaders were surprisingly grounded.
            </p>

            <p style={{ marginBottom: 32 }}>
              It wasn't about "faster" or "cheaper." It was about <strong>reclaiming time and protecting the brand</strong>.
            </p>

            {/* Image 1 */}
            <img
              src="/media/lt26uk-2026/image1.jpg"
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
              1. The "Amateur Editor" Fatigue is Real
            </h2>

            <p style={{ marginBottom: 32 }}>
              I spoke with so many teams who are exhausted by tools that promise "easy" video but actually require their staff to act like amateur video editors. Most L&D pros want to solve training problems, not spend four hours tweaking the keyframes on a character's arm.
            </p>

            <p style={{ marginBottom: 32 }}>
              We've found that by removing the interface entirely—upload a doc, get a video—we give that time back to the experts.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              2. Brand Compliance is the New "Must-Have"
            </h2>

            <p style={{ marginBottom: 32 }}>
              The biggest fear? "Brand poisoning." The DIY AI route often leads to uncanny, off-brand content that doesn't sit right with corporate identity.
            </p>

            <p style={{ marginBottom: 32 }}>
              The win here isn't just making a video; it's <strong>providing a compliant, pre-approved environment where the first frame is as on-brand as the last</strong>.
            </p>

            {/* Image 2 */}
            <img
              src="/media/lt26uk-2026/image2.jpg"
              alt="Brand compliance discussion"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              3. The License Trap vs. Actual Value
            </h2>

            <p style={{ marginBottom: 32 }}>
              The industry loves selling "unlimited usage" annual licenses. But for a team that needs 20 minutes of high-impact video to launch a product or update a compliance module, does an annual seat make sense?
            </p>

            <p style={{ marginBottom: 32 }}>
              We're seeing a massive shift toward <strong>"Subscription for Minutes."</strong> People want to pay for what they produce, not for the "potential" of a tool they only use once a quarter.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              4. Grounding AI in Science
            </h2>

            <p style={{ marginBottom: 32 }}>
              One conversation with a senior consultant really stuck with me: the need to match "AI tech" with "Learning Science." If the video doesn't adhere to Mayer's Principles of Multimedia Learning, it's just noise.
            </p>

            <p style={{ marginBottom: 32 }}>
              At Textra, we're focusing on making sure our "Digital Director" engine isn't just creative—<strong>it's pedagogically sound</strong>.
            </p>

            {/* Image 3 */}
            <img
              src="/media/lt26uk-2026/image3.jpg"
              alt="Learning principles discussion"
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
                The big shift? We're moving away from "DIY" and toward DFY—"Done-For-You."
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What's Next for L&D?
            </h2>

            <p style={{ marginBottom: 32 }}>
              The conversation at LT26 revealed a clear pattern: L&D teams are tired of the complexity. They're looking for partners who understand both the technical and pedagogical sides of video learning—not just tools that promise speed.
            </p>

            <p style={{ marginBottom: 32 }}>
              If you were at the show, what was the one thing that changed your perspective on the future of L&D? Let's discuss in the comments.
            </p>

            {/* Image 4 */}
            <img
              src="/media/lt26uk-2026/image4.jpg"
              alt="L&D future discussion"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <p style={{ marginBottom: 32 }}>
              Want to see Textra Video in action? Connect with our Chief Revenue Officer Steve Godman for a tailored demo of how we can help you scale your e-learning content.
            </p>

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/posts/textra-video_lt26uk-learningtechnologies-landd-activity-7457785772264394752-xULa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAASqaYBawf_adnyzq74HUA1GPRD8uiCXKI"
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
