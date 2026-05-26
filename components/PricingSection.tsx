'use client';
import { C, grad, sh } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const features = [
  '60 minutes of video production per year',
  'Unlimited revisions on any video',
  'Custom on-brand template (built for you)',
  'Full API access & LMS integration',
  'Priority support & dedicated account manager',
  'Watch tracking & compliance reporting',
];

export default function PricingSection() {
  const [ref, vis] = useReveal(0.1);

  return (
    <section id="pricing" ref={ref as React.RefObject<HTMLElement>} style={{ padding: '96px 0', background: C.gray50 }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.teal, marginBottom: 12 }}>Pricing</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: C.navy, lineHeight: 1.18, margin: '0 0 14px 0' }}>One Price. No Surprises.</h2>
          <p style={{ fontSize: 16, color: C.gray500, lineHeight: 1.65, margin: 0 }}>Simple, transparent pricing. Most clients use 40–50 minutes in Year 1.</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          {/* Main card */}
          <div style={{ background: '#fff', borderRadius: 24, padding: '44px 44px', boxShadow: sh.xl, border: `1px solid ${C.gray200}`, maxWidth: 480, width: '100%', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)', transition: 'all 0.65s ease 0.1s', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: grad }} />

            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.teal, marginBottom: 16 }}>Enterprise Plan</div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 4 }}>
                <span style={{ fontSize: 28, fontWeight: 800, color: C.navy, marginTop: 8 }}>£</span>
                <span style={{ fontSize: 64, fontWeight: 900, color: C.navy, lineHeight: 1 }}>12,000</span>
              </div>
              <div style={{ fontSize: 14, color: C.gray400, fontWeight: 500, marginTop: 2 }}>per year · billed annually</div>
            </div>

            <div style={{ height: 1, background: C.gray100, margin: '28px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {features.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'linear-gradient(135deg, #edf9f7, #ddeef8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span style={{ fontSize: 14, color: C.gray600, lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: grad, color: '#fff', borderRadius: 9999, padding: '16px 32px', fontSize: 15, fontWeight: 700, textDecoration: 'none', width: '100%', boxSizing: 'border-box', transition: 'filter 200ms, transform 200ms, box-shadow 200ms', boxShadow: sh.md }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = sh.lg; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = sh.md; }}
            >
              Book a Demo
            </a>
            <div style={{ fontSize: 11, color: C.gray400, textAlign: 'center', marginTop: 12 }}>No credit card required · 24-hour setup</div>
          </div>

          {/* Side panel */}
          <div style={{ maxWidth: 300, width: '100%', display: 'flex', flexDirection: 'column', gap: 20, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)', transition: 'all 0.65s ease 0.22s' }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: '24px', border: `1px solid ${C.gray200}`, boxShadow: sh.sm }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.teal, marginBottom: 10 }}>Typical Usage</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: C.navy, marginBottom: 4 }}>40–50 min</div>
              <div style={{ fontSize: 13, color: C.gray500, lineHeight: 1.6 }}>used in Year 1. Your 60 min allowance gives room to scale. Upgrade in Year 2 when ready.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: '24px', border: `1px solid ${C.gray200}`, boxShadow: sh.sm }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.teal, marginBottom: 10 }}>vs. Traditional Agency</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: C.gray500 }}>Agency equivalent</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.gray600, textDecoration: 'line-through' }}>£120k+</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: C.navy, fontWeight: 600 }}>Textra</span>
                  <span style={{ fontSize: 16, fontWeight: 900, background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>£12,000</span>
                </div>
                <div style={{ height: 1, background: C.gray100 }} />
                <div style={{ fontSize: 13, fontWeight: 700, color: C.navy }}>Save up to 90%</div>
              </div>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #f2f4fa, #edf9f7)', borderRadius: 16, padding: '20px', border: `1px solid ${C.gray100}` }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.navy, lineHeight: 1.6 }}>
                &ldquo;Most clients see ROI within the first video — before the end of Month 1.&rdquo;
              </div>
              <div style={{ fontSize: 11, color: C.gray400, marginTop: 8 }}>— Matt Cooper, Founder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
