'use client';

import { gradHero, sh, C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function LAHeroSection() {
  return (
    <section id="hero" style={{ background: gradHero, minHeight: '100vh', paddingTop: 70, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />

      {/* Blobs */}
      <div style={{ position: 'absolute', top: -140, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 340, height: 340, borderRadius: '50%', background: 'rgba(102,188,173,0.09)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%', display: 'grid', gridTemplateColumns: '1fr', gap: 64, alignItems: 'center', padding: '80px 40px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(102,188,173,0.92)', marginBottom: 18 }}>
            Resident Engagement Platform
          </div>

          <h1 style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 22px 0' }}>
            Engage residents better,<br />reduce council costs
          </h1>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.76)', lineHeight: 1.7, margin: '0 0 36px 0', fontWeight: 400, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Help residents understand council services with engaging video content. Improve payment rates, reduce contact center burden, and free up staff time—all while building trust in your council.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48, justifyContent: 'center' }}>
            <a
              href="#calculator"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: C.navy, borderRadius: 9999, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'transform 200ms, box-shadow 200ms', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'; }}
            >
              Calculate Your Savings
            </a>
            <a
              href="mailto:sales@textra.video?subject=Local Authority Enquiry"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#fff', borderRadius: 9999, padding: '14px 28px', fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.32)', transition: 'border-color 200ms, background 200ms', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.32)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Get in Touch
            </a>
          </div>

          {/* ARP Logo */}
          <div style={{ marginBottom: 48, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: 20, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Proud to be working with
            </div>
            <img src="/assets/logos/APR-removebg-preview.png" alt="ARP Logo" style={{ height: 120, maxWidth: 400, objectFit: 'contain', filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.7))' }} />
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500, lineHeight: 1.6, textAlign: 'center', marginTop: 20 }}>
              covering East Suffolk, Fenland, West Suffolk, East Cambridgeshire, Breckland Councils
            </div>
          </div>

          {/* Trust metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>5 Councils</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 4, lineHeight: 1.3 }}>ARP Partnership</div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>1000s</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 4, lineHeight: 1.3 }}>Residents Engaged</div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>45%</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 4, lineHeight: 1.3 }}>Engagement Uplift</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
