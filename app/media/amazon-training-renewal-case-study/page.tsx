'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function AmazonTrainingCaseStudyPost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Case Studies
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Why Amazon Renewed: The Training Renewal That Speaks for Itself
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Enterprise training modernization done right. How one of the world's largest companies solved the outdated training pipeline
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              July 30, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              <strong>Amazon doesn't renew things that don't work.</strong> They renewed with us in March. That renewal isn't just a contract renewal—it's validation that we solved a problem every enterprise was struggling with.
            </p>

            {/* Warehouse image */}
            <img
              src="/media/amazon-training-renewal-case-study/warehouse.png"
              alt="Amazon warehouse team"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Problem Every Enterprise Faces
            </h2>

            <p style={{ marginBottom: 32 }}>
              Amazon's training team faced the same bottleneck that cripples most enterprises. Training gets made the old way:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>⏳</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Weeks of Production</strong> — Training gets commissioned. Timelines slip. Internal teams debate creative direction. External consultants charge for revision after revision.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>⚠️</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Stale by Launch</strong> — By the time training ships, it's already outdated. Market conditions changed. Product features evolved. Policies shifted. The training you spent weeks on is answering yesterday's questions.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>👥</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Team Attrition</strong> — By launch, half your audience has left. People who needed to learn it months ago have already moved on, found workarounds, or stopped waiting.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                When training arrives late, it doesn't just miss the moment—it becomes irrelevant. And irrelevant training is worse than no training at all.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Flip We Made for Amazon
            </h2>

            <p style={{ marginBottom: 32 }}>
              We fundamentally changed the timeline. Here's what happens now:
            </p>

            {/* Worker image */}
            <img
              src="/media/amazon-training-renewal-case-study/worker-focus.png"
              alt="Amazon warehouse worker"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Morning: Upload</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Training team uploads a document. No consultant calls. No creative briefing meetings. Just content.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Same Day: Studio-Quality Video</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Animated, branded, professionally produced video comes back. No production team. No weeks of limbo. No back-and-forth revisions.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>That Afternoon: Deployed</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Training ships while it's still relevant. Team members see it before they've forgotten why they needed it.
                  </p>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What Changed for Amazon's Teams
            </h2>

            <p style={{ marginBottom: 32 }}>
              The impact went beyond speed. By eliminating the production bottleneck, Amazon unlocked something more valuable:
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Faster Onboarding</h3>
              <p style={{ marginBottom: 20, fontSize: 15, color: C.gray600 }}>
                New hires don't wait weeks to understand core systems. Training ships the day it's needed. Time-to-productivity dropped measurably.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Better Engagement</h3>
              <p style={{ marginBottom: 20, fontSize: 15, color: C.gray600 }}>
                Video engagement outperforms text by orders of magnitude. Teams actually watch training instead of skipping it. Completion rates tell the story.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Training That Sticks</h3>
              <p style={{ marginBottom: 20, fontSize: 15, color: C.gray600 }}>
                When training arrives at the right moment in the right format, it sticks. Fewer support tickets. Fewer process failures. Better execution across teams.
              </p>

              <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 12 }}>No More Consultant Dependency</h3>
              <p style={{ marginBottom: 0, fontSize: 15, color: C.gray600 }}>
                Training teams own the full pipeline. They upload documents. They get video back. No external dependencies. No weeks of waiting. No consultant bills stacking up.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why Amazon Renewed
            </h2>

            <p style={{ marginBottom: 32 }}>
              Enterprises don't renew unless they see measurable business impact. Amazon's renewal tells us they're seeing exactly that. The training pipeline works. Teams move faster. Knowledge sticks.
            </p>

            <p style={{ marginBottom: 32 }}>
              But here's what matters most: <strong>Amazon isn't unique.</strong> Every enterprise has this problem. Every training team is dealing with the same bottleneck—outdated training, delayed deployment, consultant dependency, engagement gaps.
            </p>

            {/* Delivery image */}
            <img
              src="/media/amazon-training-renewal-case-study/delivery.png"
              alt="Amazon delivery team"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Question We're Asking Every Enterprise
            </h2>

            <p style={{ marginBottom: 32 }}>
              If Amazon solved this problem, what's stopping your organization?
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                What's your biggest training bottleneck right now? The answer to that question is the training we can fix by tomorrow.
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
