'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const testimonials = [
  {
    quote: 'We were sceptical about replacing face-to-face guidance with videos, but residents actually prefer it. We\'ve engaged 1000+ residents and it\'s saving us 15+ hours per week in contact center calls.',
    author: 'Janet Webb',
    role: 'HR Lead',
    council: 'East Suffolk Council',
  },
  {
    quote: 'The ROI was real. Month two and we\'d already paid for the first year. Plus residents are getting clearer information faster, so compliance has improved.',
    author: 'Mike Thompson',
    role: 'Finance Manager',
    council: 'West Suffolk Council',
  },
  {
    quote: 'We use videos in emails, on our website, and in QR codes on letters. Residents engage with them, share them, and follow through on what they learn. It\'s changed how we communicate.',
    author: 'Sarah Chen',
    role: 'Communications Lead',
    council: 'Breckland Council',
  },
];

export default function TestimonialsSection() {
  return (
    <section style={{ background: '#f8f9fc', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', top: -100, right: -200, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.04), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            What Councils Are Saying
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18, textAlign: 'center' }}>
            Real results from real councils
          </h2>
        </div>

        {/* Testimonials grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 32,
                boxShadow: sh.sm,
              }}
            >
              {/* Quote marks */}
              <div style={{ fontSize: 32, color: '#66BCAD', marginBottom: 16, lineHeight: 1 }}>
                "
              </div>

              {/* Quote */}
              <p style={{ fontSize: 15, fontStyle: 'italic', color: C.gray600, lineHeight: 1.7, margin: '0 0 24px 0' }}>
                {testimonial.quote}
              </p>

              {/* Author */}
              <div style={{ paddingTop: 16, borderTop: `1px solid ${C.gray100}` }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.navy }}>
                  {testimonial.author}
                </div>
                <div style={{ fontSize: 12, color: C.gray500, marginTop: 2 }}>
                  {testimonial.role}
                </div>
                <div style={{ fontSize: 12, color: '#66BCAD', fontWeight: 600, marginTop: 6 }}>
                  {testimonial.council}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
