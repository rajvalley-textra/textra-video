'use client';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function BlogPost() {
  const [currentPdfPage, setCurrentPdfPage] = useState(1);
  const totalPdfPages = 10;

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Interview & Insights
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              The Future of AI in Video: Ideas, Quality, and the Human Edge
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Insights from Matt Cooper (Textra.video) on how technology is reshaping video production, what still requires human creativity, and why distribution is becoming the new differentiator.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              AI has democratized video production. Tools are cheaper, faster, and more accessible than ever before. But accessibility isn't the same as excellence—and in a world flooded with low-effort AI content, that distinction has become the defining competitive advantage.
            </p>

            {/* YouTube Embed */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                background: '#000',
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 40,
              }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ut_nW9TMP2k?si=r-KgvKHBjPWUMMz-"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: 12,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="The Future of AI in Video Interview"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Script Is King — Ideas Always Win
            </h2>

            <p style={{ marginBottom: 32 }}>
              Technology and technique used to differentiate. Now, the idea does. The flood of AI-generated content has raised the bar — videos that cut through are built on strong concepts, well-crafted scripts, and genuine creative vision. Accessibility is no longer the edge. Originality is.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Production Values Define Perception
            </h2>

            <p style={{ marginBottom: 24 }}>
              Viewers make instant judgments. Poor graphics, weak editing, or cheap visuals damage brand credibility before a single message lands.
            </p>

            <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid #FFC107`, marginBottom: 32 }}>
              <p style={{ fontSize: 15, fontWeight: 600, color: C.navy, margin: 0 }}>
                Don't start making video until you can do it at a level that won't hurt your brand.
              </p>
            </div>

            <p style={{ marginBottom: 32 }}>
              For startups and smaller firms, genuinely high production values can make a company appear far more established than it actually is — a powerful competitive signal.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Numbers Don't Lie
            </h2>

            <p style={{ marginBottom: 32 }}>
              The core job of video is to educate and entertain — and the data backs it up:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 40 }}>
              {[
                { stat: '+50%', label: 'Engagement Boost', desc: 'Video drives up to 50% more engagement than written content alone.' },
                { stat: '+40%', label: 'Knowledge Retention', desc: 'Audiences retain up to 40% more information when delivered via video.' },
                { stat: '1:1', label: 'Personalised Delivery', desc: 'The next frontier — video tailored and delivered to individuals at scale.' },
              ].map((item) => (
                <div key={item.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36, fontWeight: 900, color: C.teal, marginBottom: 8 }}>{item.stat}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: C.gray500 }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <p style={{ marginBottom: 32 }}>
              For organisations trying to communicate, train, or sell — these are gains that compound.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              AI Is a Brush, Not a Replacement
            </h2>

            <p style={{ marginBottom: 32 }}>
              AI won't replace creativity — it will change what creative people spend their time on. Matt frames AI as a new kind of brush: tools evolve, craftspeople adapt. The industry will be busier, not smaller — just doing different things.
            </p>

            <p style={{ marginBottom: 32 }}>
              Critical insight: AI is an echo chamber — it only learns from what has gone before. Original thinking remains a distinctly human edge.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Where Human Creativity Still Leads
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Original Ideas</h3>
              <p style={{ marginBottom: 0 }}>AI recombines what already exists. Truly novel concepts — the spark that starts a movement — remain a human monopoly.</p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Real Experimentation</h3>
              <p style={{ marginBottom: 0 }}>Genuine creative risk-taking and exploration will always sit with humans. AI can refine — it cannot truly explore the unknown.</p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>Authentic Connection</h3>
              <p style={{ marginBottom: 0 }}>Audiences sense authenticity. Stories rooted in real human experience build trust that algorithmically generated content cannot replicate.</p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              5 Key Takeaways
            </h2>

            {[
              { num: 1, title: 'Ideas Win', desc: 'In a world of AI slop, the strength of your concept is the ultimate differentiator.' },
              { num: 2, title: 'Quality Signals Trust', desc: 'Poor production damages credibility. High production builds perceived authority.' },
              { num: 3, title: 'Engagement Is Measurable', desc: '+50% engagement, +40% retention — video ROI is quantifiable and significant.' },
              { num: 4, title: 'Distribution Is the New Frontier', desc: '1-to-1 personalised video via WhatsApp and direct messaging is already live.' },
              { num: 5, title: 'AI Amplifies, Humans Lead', desc: 'AI is a powerful brush — but the artist still decides what to paint.' },
            ].map((item) => (
              <div key={item.num} style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>{item.num}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: C.gray600 }}>{item.desc}</p>
                </div>
              </div>
            ))}

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Video is no longer a production challenge — it's a creative and strategic one. The organisations that will win are those that pair AI efficiency with human originality, invest in quality, and rethink how content reaches its audience.
              </p>
            </div>

            {/* PDF Carousel at Bottom */}
            <div style={{ marginTop: 60, paddingTop: 40, borderTop: `1px solid ${C.gray200}`, marginBottom: 40 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24 }}>Full Collateral</h2>
              <div style={{ marginBottom: 20 }}>
                <embed
                  src={`/media/future-of-ai-in-video/AI-in-Video-Insights.pdf#page=${currentPdfPage}`}
                  type="application/pdf"
                  style={{
                    width: '100%',
                    height: '600px',
                    borderRadius: 12,
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
                <button
                  onClick={() => setCurrentPdfPage(Math.max(1, currentPdfPage - 1))}
                  disabled={currentPdfPage === 1}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 6,
                    border: `1px solid ${C.gray200}`,
                    background: currentPdfPage === 1 ? C.gray100 : '#fff',
                    color: currentPdfPage === 1 ? C.gray400 : C.navy,
                    cursor: currentPdfPage === 1 ? 'not-allowed' : 'pointer',
                    fontSize: 14,
                    fontWeight: 600,
                    transition: 'all 200ms',
                  }}>
                  ← Previous
                </button>
                <span style={{ fontSize: 14, fontWeight: 600, color: C.gray600 }}>
                  Page {currentPdfPage} of {totalPdfPages}
                </span>
                <button
                  onClick={() => setCurrentPdfPage(Math.min(totalPdfPages, currentPdfPage + 1))}
                  disabled={currentPdfPage === totalPdfPages}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 6,
                    border: `1px solid ${C.gray200}`,
                    background: currentPdfPage === totalPdfPages ? C.gray100 : '#fff',
                    color: currentPdfPage === totalPdfPages ? C.gray400 : C.navy,
                    cursor: currentPdfPage === totalPdfPages ? 'not-allowed' : 'pointer',
                    fontSize: 14,
                    fontWeight: 600,
                    transition: 'all 200ms',
                  }}>
                  Next →
                </button>
              </div>
            </div>

            <div style={{ marginTop: 20, paddingTop: 40, borderTop: `1px solid ${C.gray200}` }}>
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
