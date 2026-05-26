'use client';
import { C, grad, sh } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const steps = [
  {
    num: 1, time: '30 mins', title: 'Connect & Onboard',
    body: 'Link your LMS, CMS, or SharePoint. Instant integration with your existing content workflow.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  },
  {
    num: 2, time: '2 days, once', title: 'Design Your Brand Template',
    body: 'We build your on-brand character set, color palette, and animation style. Done once, used forever.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5"/><circle cx="17.5" cy="10.5" r="0.5"/><circle cx="8.5" cy="7.5" r="0.5"/><circle cx="6.5" cy="12.5" r="0.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  },
  {
    num: 3, time: 'Anytime', title: 'Upload Your Documents',
    body: 'Drop in any PDF, Word, or PowerPoint file. Our AI platform handles extraction, scripting, and production.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg>,
  },
  {
    num: 4, time: '24 hours', title: 'Download & Deploy',
    body: 'Your finished branded video is ready. Download directly, embed in your LMS, or share via the Textra portal.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  },
];

const extras = ['Zero training required', 'Dedicated account manager', 'API-accessible platform', 'SCORM & xAPI export'];

export default function HowItWorksSection() {
  const [ref, vis] = useReveal(0.08);

  return (
    <section id="how-it-works" ref={ref as React.RefObject<HTMLElement>} style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 64, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.teal, marginBottom: 12 }}>How It Works</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: C.navy, lineHeight: 1.18, margin: '0 0 14px 0' }}>Four Steps. One Day. Done.</h2>
          <p style={{ fontSize: 16, color: C.gray500, lineHeight: 1.65, margin: '0 auto', maxWidth: 520 }}>
            From document upload to finished branded video in 24 hours. Zero training required.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Connector */}
          <div className="steps-connector" style={{ position: 'absolute', top: 36, left: 'calc(12.5% + 20px)', right: 'calc(12.5% + 20px)', height: 2, background: vis ? grad : C.gray100, borderRadius: 2, transition: 'background 1.2s ease 0.4s', zIndex: 0 }} />

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18, position: 'relative', zIndex: 1, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(22px)', transition: `all 0.65s ease ${i * 0.13}s` }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: grad, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: sh.md, flexShrink: 0, position: 'relative' }}>
                  {step.icon}
                  <div style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderRadius: '50%', background: '#fff', border: `2px solid ${C.gray100}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: C.navy }}>
                    {step.num}
                  </div>
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.teal, background: C.gray50, border: `1px solid ${C.gray200}`, borderRadius: 20, padding: '4px 12px' }}>{step.time}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: 0 }}>{step.title}</h3>
                <p style={{ fontSize: 13, color: C.gray500, lineHeight: 1.7, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 56, padding: '20px 32px', background: 'linear-gradient(135deg, #f2f4fa, #edf9f7)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32, flexWrap: 'wrap', opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 0.6s' }}>
          {extras.map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: C.navy }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
