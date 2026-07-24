'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function VideoLearningRetentionGapPost() {
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
              Video Learning Retention Gap
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Why 80% of learners skim text, and what that means for your training strategy
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              July 27, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              80% of learners skim text. Yet that's where your most critical company knowledge lives. Compliance updates. Product launches. Onboarding essentials. All locked in PDFs and LMS documents that 80% of your team ignores.
            </p>

            {/* Hero Image */}
            <img
              src="/media/video-learning-retention-gap-2026/hero.jpg"
              alt="80% of learners skim text"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Retention Gap is Real
            </h2>

            <p style={{ marginBottom: 32 }}>
              This isn't an opinion. This is the data:
            </p>

            {/* Retention comparison */}
            <img
              src="/media/video-learning-retention-gap-2026/retention.jpg"
              alt="95% video retention vs 10% text retention"
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
                Video learners retain 95% of information. Text learners retain 10%. That's not a statistic—that's the gap between engagement and waste.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Where Critical Knowledge Is Locked Away
            </h2>

            <p style={{ marginBottom: 32 }}>
              Your most important company knowledge isn't gathering dust by accident. It's trapped in formats designed for reading, not engagement:
            </p>

            {/* Knowledge locations */}
            <img
              src="/media/video-learning-retention-gap-2026/knowledge.jpg"
              alt="Where critical knowledge is locked away"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>📋</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Compliance Updates</strong> — Critical regulations and policies hidden in lengthy PDFs
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>🚀</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Product Launches</strong> — New features and capabilities announced in dense documentation
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>📚</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Onboarding Essentials</strong> — Countless handbooks and guides new hires never finish
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>📖</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>LMS Documents</strong> — Training modules buried in systems no one engages with
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Question Isn't Whether. It's Why Not?
            </h2>

            <p style={{ marginBottom: 32 }}>
              The question isn't whether to use video. Video learners retain 95% of information. That's not an experiment—that's settled science.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The real question is: why are you still producing training in a format you know people won't engage with?</strong>
            </p>

            {/* Question image */}
            <img
              src="/media/video-learning-retention-gap-2026/question.jpg"
              alt="Why are you still producing training in a format people won't engage with"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Real Cost of Text-Based Training
            </h2>

            <p style={{ marginBottom: 32 }}>
              Here's what happens when critical knowledge lives in text:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>⚠️</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Compliance Risk</strong> — Regulations aren't optional. When only 10% of your team retains compliance information, you're operating with unacknowledged risk exposure.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>💰</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Wasted Training Budget</strong> — You're investing in content nobody fully absorbs. That's money spent with minimal return.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>😤</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Frustrated Employees</strong> — Your team knows they're supposed to read it. They feel guilty for skipping it. Then they make mistakes because the knowledge didn't stick.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>📉</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Slower Onboarding</strong> — New hires spend weeks wading through documentation. They could be productive in days if the knowledge was delivered in a format that actually sticks.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What One Piece of Critical Knowledge Is Gathering Dust Right Now?
            </h2>

            <p style={{ marginBottom: 32 }}>
              Think about your organization. Somewhere there's a compliance update that 80% of your team hasn't fully read. A product launch document that got skimmed and forgotten. An onboarding guide that new employees abandon halfway through.
            </p>

            <p style={{ marginBottom: 32 }}>
              That knowledge exists. Your team needs it. But the format you chose to deliver it in ensures it won't stick.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Path Forward
            </h2>

            <p style={{ marginBottom: 32 }}>
              This doesn't require overhauling everything. It starts with one piece of critical knowledge—the thing your team most needs to understand and retain.
            </p>

            <p style={{ marginBottom: 32 }}>
              Turn that into video. Measure the difference in retention and engagement. Watch your team actually absorb and apply the knowledge instead of skimming and forgetting.
            </p>

            <p style={{ marginBottom: 32 }}>
              Once you see the gap close, you'll never go back to text-only training.
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Stop creating training content in formats you know people will skip. Turn your critical knowledge into video that actually lands.
              </p>
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
