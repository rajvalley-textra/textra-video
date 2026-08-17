'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function AreYouAntiAIPost() {
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
              Are you ANTI-AI?
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              The paradox of AI efficiency versus brand safety—and why smart enterprises choose deliberate, branded AI
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              August 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              When surveyed recently, 62% of CEOs stated that the biggest risk on their agenda was "rogue AI".
            </p>

            <p style={{ marginBottom: 32 }}>
              When your brand <strong>is</strong> your value, this concern makes total sense. Without strong brand integrity, we are left with product-slop—and now, AI-slop.
            </p>

            <img
              src="/media/are-you-anti-ai/ai-brand-paradox.png"
              alt="AI and Brand Paradox"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <p style={{ marginBottom: 32 }}>
              AI undoubtedly slashes production costs and accelerates timelines. But if it destroys your brand equity overnight through bizarre hallucinations, uncanny stock avatars, or off-brand visuals, those savings cost far too much.
            </p>

            <p style={{ marginBottom: 32 }}>
              For video content, there is a clear fix: <strong>Textra Video</strong>.
            </p>

            <p style={{ marginBottom: 32 }}>
              Instead of giving non-designers raw generative tools that produce inconsistent results, Textra combines animated video production fundamentals with a proprietary, headless video engine. It bridges the gap between speed and brand safety.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why Brand Leaders Are Choosing Textra
            </h2>

            <div style={{ marginBottom: 40 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>✓</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Zero Brand Risk</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Custom-designed templates ensure every character, asset, background, and voice stays 100% on-brand.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>✓</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>No "Uncanny Valley"</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Replaces eerie synthetic avatars with studio-quality, bespoke animated presenters.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>✓</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Effortless Workflow</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Simply upload a document (like a training manual or comms memo), and receive a fully produced video in 24 hours without learning complex editing software.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>✓</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Enterprise Scaling</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Global brands like Amazon, Cisco, and the UK Department for Education rely on Textra to convert static "dead content" into scalable visual stories.
                  </p>
                </div>
              </div>
            </div>

            <img
              src="/media/are-you-anti-ai/brand-safety.png"
              alt="Brand Safety with Textra Video"
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
                You don't have to choose between AI efficiency and brand safety. You just need an engine that respects your guardrails.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Real Question
            </h2>

            <p style={{ marginBottom: 32 }}>
              What's your team's stance on generative video—are you leaning in, or holding back until brand guardrails catch up?
            </p>

            <p style={{ marginBottom: 32 }}>
              The enterprises that move first won't be the ones betting on raw AI. They'll be the ones using AI as a tool within a system designed to protect their most valuable asset: their brand.
            </p>

            <GetInTouchCTA
              postUrl="https://www.textra.video/media/are-you-anti-ai"
              postTitle="Are you ANTI-AI?"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
