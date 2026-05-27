'use client';
import { C, grad, gradHero, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1300, margin: '0 auto', padding: '0 40px' };

const trustItems: [string, string][] = [
  ['Same day', 'Delivery'],
  ['38–55%', 'Engagement uplift'],
  ['On-Brand &', 'Compliant'],
  ['Zero training', 'Required'],
  ['Built for', 'Enterprise'],
];

export default function HeroSection() {
  return (
    <section id="hero" style={{ background: gradHero, minHeight: '100vh', paddingTop: 40, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
      {/* Blobs */}
      <div style={{ position: 'absolute', top: -140, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 340, height: 340, borderRadius: '50%', background: 'rgba(102,188,173,0.09)', pointerEvents: 'none' }} />

      <div className="hero-grid wrap-pad" style={{ ...WRAP, width: '100%', display: 'grid', gridTemplateColumns: '45fr 55fr', gap: 64, alignItems: 'center', padding: '80px 40px' }}>
        {/* Left */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.65)', marginBottom: 18, lineHeight: 1.5 }}>
            Custom design & powerhouse code harnessing AI for rapid, on-brand animated video
          </div>
          <h1 className="hero-title" style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 22px 0' }}>
            Your Content Deserves Better Than{' '}
            <em style={{ fontStyle: 'italic', background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Dead PDFs</em>
          </h1>
          <p className="hero-sub" style={{ fontSize: 18, color: 'rgba(255,255,255,0.92)', lineHeight: 1.7, margin: '0 0 36px 0', fontWeight: 600 }}>
            Turn boring documents into studio-quality{' '}
            <em style={{ fontStyle: 'italic', background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'brightness(1.2)' }}>animated video</em>
            {' '}in{' '}
            <em style={{ fontStyle: 'italic', background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'brightness(1.2)' }}>24 hours</em>
            .<br/>No crew. No delays. No compromise on brand.
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <a
              href="#contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: C.navy, borderRadius: 9999, padding: '11px 22px', fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'transform 200ms, box-shadow 200ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'; }}
            >
              Book a Demo
            </a>
            <a
              href="#showreel"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#fff', borderRadius: 9999, padding: '11px 22px', fontSize: 14, fontWeight: 600, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.32)', transition: 'border-color 200ms, background 200ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.32)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Showreel
            </a>
          </div>

          {/* Trust metrics */}
          <div className="hero-metrics" style={{ display: 'flex', gap: 0, alignItems: 'stretch' }}>
            {trustItems.map((item, i) => (
              <div key={item[0]} className="hero-metric" style={{ flex: 1, paddingRight: 24, marginRight: 24, borderRight: i < 4 ? '1px solid rgba(255,255,255,0.14)' : 'none', whiteSpace: 'nowrap' }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{item[0]}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 4, lineHeight: 1.3 }}>{item[1]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hero-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: 20, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px', border: '1px solid rgba(255,255,255,0.12)', aspectRatio: '4/3' }}>
            <iframe
              src="https://player.vimeo.com/video/1077894850"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ display: 'block' }}
            />
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.06em' }}>Any document → Branded video · Delivered in 24 hours</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.45 }}>
        <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff' }}>Scroll</div>
        <svg width="14" height="20" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="white" strokeWidth="1.5"/>
          <circle cx="7" cy="6" r="2" fill="white">
            <animate attributeName="cy" values="6;14;6" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>
  );
}
