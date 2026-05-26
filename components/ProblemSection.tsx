'use client';
import { C, grad, sh } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const cards = [
  {
    id: 'agency',
    overline: 'The Agency Route',
    title: 'Beautiful, But Broken.',
    badge: '30+ DAYS · £50K+',
    body: 'Agency quality — eventually. Timelines slip, budgets spiral, revisions take weeks. Not built for enterprise scale or speed.',
    bg: '#fff', textColor: C.navy, bodyColor: C.gray600, border: C.gray200, badgeColor: C.gray400,
    cta: false,
  },
  {
    id: 'diy',
    overline: 'The DIY Route',
    title: 'Fast, But Off-Brand.',
    badge: 'HOURS · OFF-BRAND',
    body: 'Quick to generate. But the output looks generic, stakeholders lose trust, and your brand identity takes a hit.',
    bg: '#fff', textColor: C.navy, bodyColor: C.gray600, border: C.gray200, badgeColor: C.gray400,
    cta: false,
  },
  {
    id: 'textra',
    overline: 'The Textra Route',
    title: '24 Hours.\nOn-Brand.\nDone.',
    badge: '24HR · AGENCY QUALITY',
    body: 'Agency quality at AI speed. Upload any document, receive a polished branded video — guaranteed within 24 hours. Every time.',
    bg: 'linear-gradient(160deg, #1b2558 0%, #273572 60%, #1A71B1 100%)',
    textColor: '#fff', bodyColor: 'rgba(255,255,255,0.7)', border: 'transparent', badgeColor: 'rgba(102,188,173,0.9)',
    cta: true,
  },
];

export default function ProblemSection() {
  const [ref, vis] = useReveal(0.08);

  return (
    <section id="problem" ref={ref as React.RefObject<HTMLElement>} style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.teal, marginBottom: 12 }}>The Problem</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: C.navy, lineHeight: 1.18, margin: 0 }}>Three Routes. One Clear Winner.</h2>
        </div>

        <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {cards.map((card, i) => (
            <div
              key={card.id}
              style={{ background: card.bg, border: `1px solid ${card.border}`, borderRadius: 20, padding: '32px 28px', boxShadow: card.id === 'textra' ? sh.lg : sh.md, display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', overflow: 'hidden', opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(28px)', transition: `all 0.65s ease ${i * 0.12}s`, cursor: 'default' }}
              onMouseEnter={(e) => { if (card.id !== 'textra') { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = sh.lg; } }}
              onMouseLeave={(e) => { if (card.id !== 'textra') { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = sh.md; } }}
            >
              {/* Icon */}
              <div style={{ width: 58, height: 58, borderRadius: 14, background: card.id === 'textra' ? 'rgba(255,255,255,0.1)' : C.gray50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {card.id === 'agency' && (
                  <svg width="32" height="32" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="19" fill="none" stroke={C.gray200} strokeWidth="2.5"/>
                    <line x1="24" y1="24" x2="24" y2="9" stroke={C.gray300} strokeWidth="2.5" strokeLinecap="round" style={{ transformOrigin: '24px 24px', transformBox: 'fill-box', animation: 'clockSpin 8s linear infinite' as string }}/>
                    <line x1="24" y1="24" x2="33" y2="24" stroke={C.navy} strokeWidth="2" strokeLinecap="round" style={{ transformOrigin: '24px 24px', transformBox: 'fill-box', animation: 'clockSpin 2s linear infinite' as string }}/>
                    <circle cx="24" cy="24" r="2.5" fill={C.navy}/>
                  </svg>
                )}
                {card.id === 'diy' && (
                  <div style={{ width: 36, height: 28, borderRadius: 6, background: C.gray200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 800, color: C.gray500, letterSpacing: '0.05em', animation: 'glitchEffect 5s ease-in-out infinite' }}>GENERIC</div>
                )}
                {card.id === 'textra' && (
                  <svg width="32" height="32" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="19" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5"/>
                    <polyline points="13,25 20,32 35,16" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="100" style={{ animation: 'checkDraw 3.5s ease-in-out infinite' as string }}/>
                  </svg>
                )}
              </div>

              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.14em', color: card.badgeColor }}>{card.badge}</div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: card.id === 'textra' ? 'rgba(102,188,173,0.85)' : C.teal }}>{card.overline}</div>
              <h3 style={{ fontSize: 24, fontWeight: 900, color: card.textColor, lineHeight: 1.15, margin: 0, whiteSpace: 'pre-line' }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: card.bodyColor, lineHeight: 1.72, margin: 0, flex: 1 }}>{card.body}</p>

              {card.cta && (
                <a
                  href="#how-it-works"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: C.navy, borderRadius: 9999, padding: '11px 22px', fontSize: 13, fontWeight: 700, textDecoration: 'none', alignSelf: 'flex-start', transition: 'opacity 200ms, transform 200ms' }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none'; }}
                >
                  See How It Works →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
