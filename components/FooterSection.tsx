'use client';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function FooterSection() {
  return (
    <footer style={{ background: C.navy, color: '#fff', padding: '80px 0 48px' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        {/* Top Section: Brand + Newsletter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
          {/* Left: Brand & Social */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ marginBottom: 28 }}>
              <h2 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
                Textra <span style={{ color: C.teal }}>Video</span>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, maxWidth: 340 }}>
                Custom design and powerhouse code harnessing AI for rapid, on-brand video. Built for enterprises.
              </p>
            </div>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { name: 'LinkedIn', icon: 'in' },
                { name: 'Twitter', icon: 'tw' },
                { name: 'YouTube', icon: 'yt' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  style={{
                    width: 44,
                    height: 44,
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 200ms',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                  title={social.name}
                >
                  {social.icon === 'in' && '👤'}
                  {social.icon === 'tw' && '𝕏'}
                  {social.icon === 'yt' && '▶'}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div style={{ flex: 1, minWidth: 320, maxWidth: 450 }}>
            <div style={{ marginBottom: 12 }}>
              <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: C.teal, margin: 0 }}>Newsletter</h4>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 16, margin: '0 0 16px 0' }}>
              Weekly tips on video strategy for enterprise teams.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="your@company.com"
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: 9,
                  padding: '12px 16px',
                  fontSize: 14,
                  color: '#fff',
                  outline: 'none',
                  transition: 'all 200ms',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
              />
              <button
                style={{
                  background: C.teal,
                  color: C.navy,
                  border: 'none',
                  borderRadius: 9,
                  padding: '12px 24px',
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(102,188,173,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 48 }} />

        {/* Links Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Product */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 18, margin: '0 0 18px 0' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['How It Works', 'Pricing', 'Solutions by Role', 'API Documentation', 'Security & Compliance'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 18, margin: '0 0 18px 0' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['About Textra', 'Our Team', 'Blog & Resources', 'Press & Media', 'Careers', 'Invest in Textra'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 18, margin: '0 0 18px 0' }}>Learn</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Case Studies', 'Webinars', 'Integration Guides', 'Best Practices', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 18, margin: '0 0 18px 0' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Privacy Policy', 'Terms of Service', 'SOC 2 Certification', 'Data Security', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={{ paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, textAlign: 'center' }}>
            © 2026 Textra Video. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
