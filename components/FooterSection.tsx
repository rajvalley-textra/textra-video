'use client';
import React from 'react';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };
const grad = 'linear-gradient(135deg, #1A71B1 0%, #66BCAD 100%)';

export default function FooterSection() {
  const cols = [
    {
      title: 'Company',
      links: ['About Textra', 'Our Team', 'Media', 'FAQ'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service'],
    },
  ];

  const linkStyle = { fontSize: 13, color: '#576170', textDecoration: 'none' as const, lineHeight: '28px', display: 'block' as const, transition: 'color 150ms', fontWeight: 400 };

  return (
    <footer id="about" style={{ background: '#f5f3f0' }}>
      <div style={{ ...WRAP, paddingTop: 48, paddingBottom: 0 }}>
        {/* Top row: logo, description, invest button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 48, marginBottom: 48, flexWrap: 'wrap' }}>
          {/* Logo & Description */}
          <div style={{ maxWidth: 400 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 14, height: 28 }}>
              <img src="/assets/logos/Textra video logo_1.png" alt="Textra Video" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: 13, color: '#273572', lineHeight: 1.7, margin: 0 }}>
              Custom design and powerhouse code harnessing AI for rapid, on-brand video. Built for enterprises.
            </p>
          </div>

          {/* Invest Button */}
          <div>
            <a
              href="http://invest.textra.video/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: grad, color: '#fff', padding: '14px 20px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: 13, transition: 'all 200ms', boxShadow: '0 4px 16px rgba(102,188,173,0.3)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(102,188,173,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(102,188,173,0.3)'; }}>
              💼 Invest in Textra
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', marginBottom: 40 }} />

        {/* Middle section: links and social */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 48, marginBottom: 40 }}>
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#273572', marginBottom: 16 }}>{col.title}</div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href={link === 'Privacy Policy' ? '/privacy' : link === 'Terms of Service' ? '/terms' : link === 'About Textra' ? '/about' : link === 'Our Team' ? '/about#team' : link === 'Media' ? '/media' : link === 'FAQ' ? '/faq' : '#'}
                  style={linkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#273572'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#576170'; }}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Social icons section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/textra-video', icon: '/assets/icons/linkedin.png' },
              { label: 'Vimeo', href: 'https://vimeo.com/showcase/11919627?share=copy', icon: '/assets/icons/vimeo.png' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{ width: 28, height: 28, borderRadius: 4, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 150ms', opacity: 0.8 }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8'; }}>
                <img src={s.icon} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/assets/logos/BSL-icon-01.svg" alt="British Sign Language" style={{ height: 24, width: 'auto', objectFit: 'contain' }} />
            <span style={{ fontSize: 11, color: '#576170' }}>British Sign Language support available</span>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div style={{ paddingTop: 24, paddingBottom: 24, borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 32 }}>
          <a
            href="mailto:hello@textra.video"
            style={{ fontSize: 12, color: '#576170', textDecoration: 'none', transition: 'color 150ms' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#273572'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#576170'; }}>
            hello@textra.video
          </a>
          <div style={{ fontSize: 12, color: '#9aa5b1' }}>
            © 2026 Textra Video Ltd. Made by video experts. Built for enterprises.
          </div>
        </div>
      </div>
    </footer>
  );
}
