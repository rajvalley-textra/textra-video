'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const reasons = [
  {
    title: 'Fewer repeat calls',
    description: 'Explain payment options, deadlines and eligibility before residents pick up the phone — councils using Textra see 30–40% fewer contact-centre calls.',
    icon: '☎️',
  },
  {
    title: 'Better collection rates',
    description: 'A short video reminder gets watched where a letter gets ignored — a 45% engagement uplift means more residents pay before recovery action is needed.',
    icon: '📈',
  },
  {
    title: 'Time back for your team',
    description: '60+ hours a year freed up from answering the same questions on repeat, so your officers can focus on complex cases, not repeat explanations.',
    icon: '⏱️',
  },
];

export default function LAThreeReasonsSection() {
  return (
    <section style={{ background: '#f8f9fc', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(39,53,114,0.03), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, textAlign: 'center' }}>
            Three reasons Revenues &amp; Benefits teams switch to Textra
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {reasons.map((reason) => (
            <div
              key={reason.title}
              style={{
                background: '#fff',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 36,
                boxShadow: sh.sm,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 12px 0' }}>
                {reason.title}
              </h3>
              <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.6, margin: 0 }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
