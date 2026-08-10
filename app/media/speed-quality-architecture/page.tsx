'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function SpeedQualityArchitecturePost() {
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
              Speed & Quality Aren't Tradeoffs
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              How we built systems instead of hiring people, and what that means for production at scale
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              August 3, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Can you convert boring training documents into videos? Fast. On-brand. Without hiring a production team?
            </p>

            <p style={{ marginBottom: 32 }}>
              Most vendors said no. Speed and quality are tradeoffs, they said. You pick one.
            </p>

            <p style={{ marginBottom: 32 }}>
              We said: <strong>what if they aren't?</strong>
            </p>

            <p style={{ marginBottom: 32 }}>
              We built the platform to answer that question. A year later, Amazon and DfE are using it to do what was supposed to be impossible.
            </p>

            {/* Hero image */}
            <img
              src="/media/speed-quality-architecture/hero.png"
              alt="The challenge: fast production at scale"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Insight Was Simple
            </h2>

            <p style={{ marginBottom: 32 }}>
              Production expertise doesn't live in hiring people. It lives in building systems. Encode the knowledge into architecture. Let AI handle the execution.
            </p>

            <p style={{ marginBottom: 32 }}>
              That's the difference between a production company (expensive, slow, dependent on people) and a production platform (scalable, fast, consistent).
            </p>

            {/* Architecture image */}
            <img
              src="/media/speed-quality-architecture/architecture.png"
              alt="System architecture for production at scale"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What This Actually Means
            </h2>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Upload Your Content</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    No production briefs. No creative meetings. Just the knowledge that needs to become a video.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Systems Encode Your Brand</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Your visual identity, messaging patterns, and quality standards are built into the architecture. Every output stays on-brand automatically.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>AI Handles Execution</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Video comes back production-ready. No revisions. No waiting. Hours instead of weeks.
                  </p>
                </div>
              </div>
            </div>

            {/* Knowledge image */}
            <img
              src="/media/speed-quality-architecture/knowledge.png"
              alt="Production knowledge encoded into systems"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Sometimes the Biggest Innovations Start with Annoyance
            </h2>

            <p style={{ marginBottom: 32 }}>
              Every vendor we talked to treated speed and quality as an inherent tradeoff. Deliver fast or deliver well. Pick one. That assumption frustrated us enough to push back.
            </p>

            <p style={{ marginBottom: 32 }}>
              What if the real problem wasn't that it was impossible? What if the real problem was that nobody had thought to encode production expertise into systems instead of hiring for it?
            </p>

            {/* Insight image */}
            <img
              src="/media/speed-quality-architecture/insight.png"
              alt="Speed and quality are not tradeoffs when systems encode expertise"
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
                The future of production isn't hiring better people. It's building systems smart enough that fewer people can do more.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What's the "Impossible" Problem You've Stopped Asking Vendors to Solve?
            </h2>

            <p style={{ marginBottom: 32 }}>
              Maybe you've accepted that fast training production requires a production team. Or that scaling video means scaling headcount. Or that quality means time.
            </p>

            <p style={{ marginBottom: 32 }}>
              What if you didn't have to accept any of that?
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                The problem you've stopped asking about is probably the next big opportunity in your organization.
              </p>
            </div>

            <GetInTouchCTA
              postUrl="https://www.textra.video/media/speed-quality-architecture"
              postTitle="Speed & Quality Aren't Tradeoffs"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
