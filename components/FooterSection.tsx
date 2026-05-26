'use client';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function FooterSection() {
  return (
    <footer style={{ background: C.navy, color: '#fff', padding: '64px 0 32px' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        {/* Main Footer Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24, letterSpacing: '0.02em' }}>Textra Video</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>
              Turn dead documents into studio-quality video in 24 hours.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 16 }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Features', 'Pricing', 'Solutions', 'API'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 16 }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.teal, marginBottom: 16 }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Privacy', 'Terms', 'Cookies', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 200ms' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.1)', marginBottom: 32 }} />

        {/* Bottom Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            © 2026 Textra Video. All rights reserved.
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { name: 'Twitter', href: '#' },
              { name: 'LinkedIn', href: '#' },
              { name: 'GitHub', href: '#' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 200ms' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
