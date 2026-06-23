'use client';
import { useState, useEffect } from 'react';
import { C, grad, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Demos', href: '#demos' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
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
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(16px)',
      borderBottom: scrolled ? `1px solid ${C.gray200}` : '1px solid transparent',
      boxShadow: scrolled ? sh.sm : 'none',
      transition: 'all 280ms cubic-bezier(0,0,0.2,1)',
    }}>
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', height: 70 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none', flexShrink: 0, height: 32 }}>
          <img src="/assets/logos/Textra video logo_1.png" alt="Textra Video" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginLeft: 48, flex: 1 }}>
          {links.map((l) => {
            const lc = scrolled ? C.gray600 : 'rgba(255,255,255,0.8)';
            return (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: 14, fontWeight: 500, color: lc, textDecoration: 'none', transition: 'color 150ms' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = scrolled ? C.navy : '#fff'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = lc; }}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          style={{ background: scrolled ? C.navy : '#fff', color: scrolled ? '#fff' : C.navy, borderRadius: 9999, padding: '11px 24px', fontSize: 14, fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 200ms', flexShrink: 0 }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1'; }}
        >
          Book a Demo
        </a>
      </div>
    </nav>
  );
}
