'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const solutions = [
  {
    step: '1',
    title: 'Create engaging video content',
    description: 'Council Tax explainers, benefits guides, planning help—all clear, engaging, on-brand. Residents actually want to watch.',
    icon: '🎥',
  },
  {
    step: '2',
    title: 'Deploy across channels',
    description: 'Embed in emails, add QR codes to letters, post on website. Meet residents where they already are.',
    icon: '📱',
  },
  {
    step: '3',
    title: 'Measure engagement & ROI',
    description: 'Track views, clicks, actions. See exactly how many calls you avoid, how payment rates improve, how much staff time you save.',
    icon: '📊',
  },
];

export default function SolutionSection() {
  return (
    <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', top: -100, right: -150, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.08), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            The Solution
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18 }}>
            Textra: Video engagement that actually works
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', margin: 0 }}>
            Replace confusing council communications with clear, engaging video. Improve understanding. Increase compliance. Free up staff. Measure ROI every step.
          </p>
        </div>

        {/* Solution flow */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {solutions.map((solution, i) => (
            <div key={solution.title} style={{ position: 'relative', paddingLeft: 0 }}>
              {/* Step number */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#66BCAD',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 700,
                zIndex: 10,
              }}>
                {solution.step}
              </div>

              {/* Connector line (hide on last) */}
              {i < solutions.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: 24,
                  left: 56,
                  width: 'calc(100% + 16px)',
                  height: 2,
                  background: 'linear-gradient(90deg, #66BCAD, transparent)',
                  zIndex: 0,
                }} />
              )}

              {/* Content */}
              <div style={{ paddingLeft: 80, paddingTop: 8 }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 12px 0' }}>
                  {solution.title}
                </h3>
                <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.6, margin: 0 }}>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key benefits */}
        <div style={{ marginTop: 80, background: 'linear-gradient(135deg, rgba(102,188,173,0.08), rgba(39,53,114,0.02))', border: `1px solid ${C.gray100}`, borderRadius: 16, padding: 40 }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, textAlign: 'center', margin: '0 0 32px 0' }}>
            What councils see:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#66BCAD', marginBottom: 8 }}>45%</div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>Higher engagement rates</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#66BCAD', marginBottom: 8 }}>30-40%</div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>Fewer contact center calls</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#66BCAD', marginBottom: 8 }}>60+ hrs</div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>Staff time freed annually</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#66BCAD', marginBottom: 8 }}>2-3 months</div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>Payback period</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
