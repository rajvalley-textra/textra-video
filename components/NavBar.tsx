'use client';
import { useState, useEffect } from 'react';
import { C, grad, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Demos', href: '#demos' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '/about' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#f5f3f0',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      boxShadow: sh.sm,
      transition: 'all 280ms cubic-bezier(0,0,0.2,1)',
    }}>
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', height: 70 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none', flexShrink: 0, height: 28 }}>
          <img src="/assets/logos/Textra video logo_1.png" alt="Textra Video" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginLeft: 48, flex: 1 }}>
          {links.map((l) => {
            const lc = C.navy;
            return (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: 14, fontWeight: 500, color: lc, textDecoration: 'none', transition: 'color 150ms' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = C.teal; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = lc; }}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
          <a
            href="https://invest.textra.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'transparent', color: C.teal, borderRadius: 9999, padding: '11px 20px', fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 200ms', border: `1.5px solid ${C.teal}` }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            Invest
          </a>
          <a
            href="mailto:sales@textra.video?subject=Book a Demo - Website"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: C.teal, color: '#fff', borderRadius: 9999, padding: '11px 24px', fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 200ms' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
