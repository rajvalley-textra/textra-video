'use client';
import { useState, useEffect } from 'react';
import { C, grad, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const links = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Demos', href: '/#demos' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Media', href: '/media' },
  { label: 'About', href: '/about' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', height: 70 }} className="wrap-pad">
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 0, textDecoration: 'none', flexShrink: 0, height: 28 }}>
          <img src="/assets/logos/Textra video logo_1.png" alt="Textra Video" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32, marginLeft: 48, flex: 1 }}>
          {links.map((l) => {
            const lc = C.navy;
            return (
              <a
                key={l.label}
                href={l.href}
                style={{ fontSize: 14, fontWeight: 500, color: lc, textDecoration: 'none', transition: 'color 150ms', whiteSpace: 'nowrap' }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = C.teal; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = lc; }}
              >
                {l.label}
              </a>
            );
          })}
        </div>

        <div className="nav-cta" style={{ display: 'flex', gap: 12, flexShrink: 0, marginLeft: 'auto' }}>
          <a
            href="https://invest.textra.video/"
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
            style={{ background: C.teal, color: '#fff', borderRadius: 9999, padding: '13px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'all 200ms', boxShadow: `0 4px 14px ${C.teal}66` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px) scale(1.03)'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 6px 18px ${C.teal}80`; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'none'; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 14px ${C.teal}66`; }}
          >
            Book a personalised demo
          </a>
        </div>

        <button
          className="nav-burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ display: 'none', marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', flexDirection: 'column', gap: 5, padding: 8, flexShrink: 0 }}
        >
          <span style={{ width: 22, height: 2, background: C.navy, borderRadius: 2, transition: 'transform 200ms', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: C.navy, borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'opacity 200ms' }} />
          <span style={{ width: 22, height: 2, background: C.navy, borderRadius: 2, transition: 'transform 200ms', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: '#f5f3f0', borderTop: '1px solid rgba(0,0,0,0.08)', padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, fontWeight: 600, color: C.navy, textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            <a
              href="https://invest.textra.video/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{ background: 'transparent', color: C.teal, borderRadius: 9999, padding: '12px 20px', fontSize: 14, fontWeight: 600, textDecoration: 'none', textAlign: 'center', border: `1.5px solid ${C.teal}` }}
            >
              Invest
            </a>
            <a
              href="mailto:sales@textra.video?subject=Book a Demo - Website"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{ background: C.teal, color: '#fff', borderRadius: 9999, padding: '13px 24px', fontSize: 15, fontWeight: 700, textDecoration: 'none', textAlign: 'center', boxShadow: `0 4px 14px ${C.teal}66` }}
            >
              Book a personalised demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
