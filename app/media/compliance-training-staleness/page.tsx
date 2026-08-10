'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function ComplianceTrainingStalenessPost() {
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
              Your Compliance Training Is Costing You Money
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Every week it doesn't match reality
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              August 10, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Policy changes. Market shifts. New regulations. But your training always lags by 4–6 months.
            </p>

            <p style={{ marginBottom: 32 }}>
              By the time your compliance video is final, approved, and deployed, half of it is already outdated.
            </p>

            <p style={{ marginBottom: 32 }}>
              The cost accumulates quietly. Nobody measures it. But it's there.
            </p>

            {/* Hero image */}
            <img
              src="/media/compliance-training-staleness/hero.png"
              alt="The cost of outdated compliance training"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              How Outdated Training Drains Your Margins
            </h2>

            <p style={{ marginBottom: 32 }}>
              When compliance training doesn't match the current reality, you get four distinct costs bleeding your organization:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Support Tickets from Confused Employees</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Training says one thing. Reality is different. Employees follow the training, get stuck, open tickets. Your support team spends hours clarifying what should have been clear from day one.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Failed Audits and Compliance Risk</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Auditors find that employees trained on old procedures. Compliance gaps open up. You're exposed to regulatory risk because your training lagged behind reality.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Disengaged Teams and Churn</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Employees stop trusting training because it's wrong. They skip it. Or they waste time re-learning things they already know. Good people leave for companies with clearer onboarding.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>4</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Margin Pressure from Operational Mistakes</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Employees make mistakes because they were trained on outdated procedures. Rework. Refunds. Customer churn. The cost compounds.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual 1 - costs breakdown */}
            <img
              src="/media/compliance-training-staleness/visual-1.png"
              alt="The four costs of outdated training"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Root Problem: Your Training Cycle Is Too Slow
            </h2>

            <p style={{ marginBottom: 32 }}>
              Here's how most companies approach compliance training:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>📋</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Month 1:</strong> A policy change is identified. Someone says "we need to train on this."
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>🎬</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Months 2–3:</strong> Production begins. Script reviews. Stakeholder feedback. Revisions. More reviews.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Months 4–5:</strong> Legal and compliance sign off. HR schedules rollout.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>🚀</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Month 6:</strong> Training launches. But by now, another policy has changed. The market has shifted. Your training is already behind.
                </p>
              </div>
            </div>

            <p style={{ marginBottom: 32 }}>
              Most companies measure training completion. How many people watched? How many passed the quiz?
            </p>

            <p style={{ marginBottom: 32 }}>
              Nobody measures staleness. How recent is this training? Does it match what people actually do today?
            </p>

            {/* Visual 2 - timeline */}
            <img
              src="/media/compliance-training-staleness/visual-2.png"
              alt="The 6-month training lag timeline"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Market Is Moving Faster Than Your Training
            </h2>

            <p style={{ marginBottom: 32 }}>
              Regulations change overnight. Product features shift. Market conditions evolve. Your competitive landscape is in constant motion.
            </p>

            <p style={{ marginBottom: 32 }}>
              But your training cycle is locked in a 6-month rhythm. By design, it will always be behind.
            </p>

            <p style={{ marginBottom: 32 }}>
              The question isn't: "When can we fit training into our calendar?"
            </p>

            <p style={{ marginBottom: 32 }}>
              The question is: "How fast can we update training when reality changes?"
            </p>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                When was the last time you updated training because the world changed—not because your annual cycle demanded it?
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Fix: Build for Speed, Not Calendars
            </h2>

            <p style={{ marginBottom: 32 }}>
              The best compliance organizations don't wait for annual reviews. They update training when policy changes, not six months later.
            </p>

            <p style={{ marginBottom: 32 }}>
              This requires a different approach to how training is built. Modular content. Templated production. Clear governance. The ability to swap one section without reshuffling the entire video.
            </p>

            <p style={{ marginBottom: 32 }}>
              When training is built as modular components instead of monolithic videos, you can:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>⚡</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Update in days</strong> — not months. Policy changes? Update the compliance module. Everything else stays current.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>📊</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Measure staleness</strong> — Know which sections are outdated. Track what's current. Update with intention.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>💰</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Stop the bleeding</strong> — Eliminate support tickets from confusion. Pass audits. Keep teams engaged. Protect margins.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Your Compliance Training Should Match Your Market Speed
            </h2>

            <p style={{ marginBottom: 32 }}>
              Most compliance programs treat training as a once-a-year project. Check the box. Move on.
            </p>

            <p style={{ marginBottom: 32 }}>
              But your market moves faster than that. Your policies change faster than that. Your employees expect clarity faster than that.
            </p>

            <p style={{ marginBottom: 32 }}>
              It's time to build training that keeps pace with reality.
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Outdated training isn't just a productivity problem. It's a margin problem. It's time to fix it.
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
