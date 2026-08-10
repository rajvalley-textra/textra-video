'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const problems = [
  {
    title: 'Low engagement on key services',
    description: 'Residents ignore council communications. Websites get bounced. Payment reminders go unread. Crucial information isn\'t getting through.',
    icon: '📉',
  },
  {
    title: 'Contact center overload',
    description: 'Thousands of preventable calls about how to pay, where to apply, what documents you need. Staff drowning in repetitive questions.',
    icon: '☎️',
  },
  {
    title: 'Payment and compliance delays',
    description: 'Residents don\'t understand deadlines. Collection rates drop. Compliance tasks pile up. Budget impact is real and measurable.',
    icon: '⏳',
  },
];

export default function ProblemSection() {
  return (
    <section style={{ background: '#f8f9fc', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(39,53,114,0.03), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            The Challenge
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18, textAlign: 'center' }}>
            Residents aren't engaging with your council
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Dense websites, ignored emails, and confusing forms mean residents miss deadlines, skip payments, and clog your contact center with preventable questions.
          </p>
        </div>

        {/* Problem cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
          {problems.map((problem) => (
            <div
              key={problem.title}
              style={{
                background: '#fff',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 36,
                boxShadow: sh.sm,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>
                {problem.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 12px 0' }}>
                {problem.title}
              </h3>
              <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.6, margin: 0 }}>
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
