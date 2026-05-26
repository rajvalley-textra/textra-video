'use client';
import React from 'react';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
const grad = 'linear-gradient(135deg, #1A71B1 0%, #66BCAD 100%)';

export default function FooterSection() {
  const [nsVal, setNsVal] = React.useState('');

  const cols = [
    {
      title: 'Product',
      links: ['How It Works', 'Pricing', 'Solutions by Role', 'API Documentation', 'Security & Compliance'],
    },
    {
      title: 'Company',
      links: ['About Textra', 'Our Team', 'Blog & Resources', 'Press & Media', 'Careers', 'Invest in Textra'],
    },
    {
      title: 'Learn',
      links: ['Case Studies', 'Webinars', 'Integration Guides', 'Best Practices', 'FAQ'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'SOC 2 Certification', 'Data Security', 'Cookie Policy'],
    },
  ];

  const linkStyle = { fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' as const, lineHeight: '28px', display: 'block' as const, transition: 'color 150ms', fontWeight: 400 };

  return (
    <footer id="about" style={{ background: '#1b2558', paddingTop: 72, paddingBottom: 0 }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        {/* Top row: logo + newsletter */}
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 48, marginBottom: 56, flexWrap: 'wrap' }}>
          {/* Logo & Social */}
          <div style={{ maxWidth: 320 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 18 }}>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 20, color: '#fff', letterSpacing: '-0.02em' }}>Textra</span>
              <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 20, letterSpacing: '-0.02em', background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginLeft: 5 }}>Video</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              Custom design and powerhouse code harnessing AI for rapid, on-brand video. Built for enterprises.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              {/* Social icons */}
              {[
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 150ms, background 150ms' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'transparent'; }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter + Invest CTA */}
          <div style={{ maxWidth: 340 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.teal, marginBottom: 10 }}>Newsletter</div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 16px 0' }}>Weekly tips on video strategy for enterprise teams.</p>
            <div style={{ display: 'flex', gap: 0, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)', marginBottom: 20 }}>
              <input
                type="email"
                placeholder="your@company.com"
                value={nsVal}
                onChange={(e) => setNsVal(e.target.value)}
                style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: 'none', padding: '12px 16px', fontSize: 13, color: '#fff', outline: 'none', fontFamily: 'Montserrat, sans-serif' }}
              />
              <button
                style={{ background: grad, border: 'none', padding: '12px 20px', fontSize: 13, fontWeight: 700, color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'Montserrat, sans-serif', transition: 'filter 150ms' }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; }}>
                Subscribe
              </button>
            </div>
            {/* Invest in Textra CTA */}
            <a
              href="#"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: grad, color: '#fff', padding: '14px 20px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 13, transition: 'all 200ms', boxShadow: '0 4px 16px rgba(102,188,173,0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(102,188,173,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(102,188,173,0.3)'; }}>
              💼 Invest in Textra
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-cols" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>{col.title}</div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.82)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Contact + copyright */}
        <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@textra.video"
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)'; }}>
              hello@textra.video
            </a>
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>
            © 2026 Textra Video Ltd. Made by video experts. Built for enterprises.
          </div>
        </div>
      </div>
    </footer>
  );
}
