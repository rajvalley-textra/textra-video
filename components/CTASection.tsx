'use client';
import { useState } from 'react';
import { C, grad, sh } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const promises: [string, string][] = [
  ['Your brand template', 'in 2 days'],
  ['Your first video', 'in under an hour'],
  ['Your new workflow', 'forever'],
];

export default function CTASection() {
  const [ref, vis] = useReveal(0.1);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        <div
          className="cta-inner"
          style={{ background: 'linear-gradient(160deg, #1b2558 0%, #273572 60%, #1A71B1 100%)', borderRadius: 28, padding: '72px 64px', textAlign: 'center', position: 'relative', overflow: 'hidden', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(24px)', transition: 'all 0.7s ease' }}
        >
          <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', background: 'rgba(102,188,173,0.08)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(102,188,173,0.85)', marginBottom: 20 }}>Get Started</div>
            <h2 className="cta-title" style={{ fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 8px 0' }}>Stop Waiting For Video.</h2>
            <h2 className="cta-title" style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 28px 0', background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Start Creating It.</h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
              {promises.map(([top, bottom]) => (
                <div key={top} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>{top}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{bottom}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
              <a
                href="#demo"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: C.navy, borderRadius: 9999, padding: '16px 32px', fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'transform 200ms, box-shadow 200ms' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.25)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; }}
              >
                Book a Demo
              </a>
              <button
                onClick={() => setShowModal(true)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#fff', borderRadius: 9999, padding: '16px 32px', fontSize: 16, fontWeight: 600, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.3)', transition: 'border-color 200ms, background 200ms', cursor: 'pointer' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Watch Showreel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {showModal && (
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 1200, aspectRatio: '16/9' }}>
          <button
            onClick={() => setShowModal(false)}
            style={{ position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', fontWeight: 'bold' }}
          >
            ✕
          </button>
          <iframe
            src="https://player.vimeo.com/video/1077894850?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Textra Promo"
            style={{ borderRadius: 8 }}
          />
        </div>
      </div>
    )}
    </>
  );
}
