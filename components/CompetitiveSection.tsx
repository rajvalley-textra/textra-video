'use client';
import { useState, useEffect } from 'react';
import { C, grad } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const cx0 = 80, cy0 = 30, cw = 530, ch = 300;
const bx = (xp: number) => cx0 + xp * cw;
const by = (yp: number) => cy0 + yp * ch;
const gridLines = [0.25, 0.5, 0.75];

const bubbles = [
  { xp: 0.11, yp: 0.14, r: 52, label: 'Traditional\nAgencies', sub: '30 days · £50k+',           fill: 'rgba(255,255,255,0.07)', textFill: 'rgba(255,255,255,0.75)', border: 'rgba(255,255,255,0.15)', isTextra: false },
  { xp: 0.74, yp: 0.76, r: 44, label: 'DIY Tools',            sub: 'Generic output',             fill: 'rgba(255,255,255,0.07)', textFill: 'rgba(255,255,255,0.75)', border: 'rgba(255,255,255,0.15)', isTextra: false },
  { xp: 0.62, yp: 0.60, r: 40, label: 'AI Platforms',         sub: 'Off-brand',                  fill: 'rgba(255,255,255,0.06)', textFill: 'rgba(255,255,255,0.65)', border: 'rgba(255,255,255,0.12)', isTextra: false },
  { xp: 0.83, yp: 0.11, r: 52, label: 'Textra\nVideo',         sub: 'Fast · Studio-quality · On-brand', fill: 'url(#textraBubbleGrad)', textFill: '#fff', border: 'none', isTextra: true },
];

const legend = [
  { label: 'Traditional Agencies', note: 'Beautiful · Slow · Expensive',   color: 'rgba(255,255,255,0.2)', bold: false },
  { label: 'DIY Tools',            note: 'Fast · Generic · Off-brand',      color: 'rgba(255,255,255,0.2)', bold: false },
  { label: 'AI Platforms',         note: 'Fast · Mediocre brand',           color: 'rgba(255,255,255,0.15)', bold: false },
  { label: 'Textra Video',         note: 'Fast · Studio-quality · On-brand', color: grad, bold: true },
];

export default function CompetitiveSection() {
  const [ref, vis] = useReveal(0.1);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!vis) return;
    const delays = [300, 700, 1050, 1500];
    const timers = delays.map((d, i) =>
      setTimeout(() => setStep((s) => Math.max(s, i + 1)), d)
    );
    return () => timers.forEach(clearTimeout);
  }, [vis]);

  return (
    <section id="competitive" ref={ref as React.RefObject<HTMLElement>} style={{ padding: '96px 0', background: 'linear-gradient(160deg, #1b2558 0%, #273572 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, position: 'relative' }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 56, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.teal, marginBottom: 12 }}>Competitive Positioning</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: '#fff', lineHeight: 1.18, margin: '0 0 14px 0' }}>Everyone Offers Speed. Some, quality. Some ease-of-use. We Offer all 3.</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>
            Fast delivery. Studio-quality output. 100% on-brand. Textra is the only platform in the top-right.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', opacity: vis ? 1 : 0, transition: 'opacity 0.5s ease 0.2s' }}>
            <svg className="comp-svg" viewBox="0 0 700 400" width="700" height="400" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="textraBubbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1A71B1"/>
                  <stop offset="100%" stopColor="#66BCAD"/>
                </linearGradient>
              </defs>

              {/* Winning zone */}
              <rect x={bx(0.5)} y={cy0} width={cw * 0.5} height={ch * 0.5} rx="4" fill="rgba(102,188,173,0.05)" />
              <text x={bx(0.75)} y={cy0 + 18} textAnchor="middle" fontSize="9" fontWeight="700" fill="rgba(102,188,173,0.5)" letterSpacing="2" fontFamily="var(--font-montserrat), sans-serif">WINNING ZONE</text>

              {/* Grid */}
              {gridLines.map((p) => (
                <g key={p}>
                  <line x1={bx(p)} y1={cy0} x2={bx(p)} y2={cy0 + ch} stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                  <line x1={cx0} y1={by(p)} x2={cx0 + cw} y2={by(p)} stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                </g>
              ))}

              {/* Axes */}
              <line x1={cx0} y1={cy0 + ch} x2={cx0 + cw} y2={cy0 + ch} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
              <line x1={cx0} y1={cy0} x2={cx0} y2={cy0 + ch} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>

              <text x={cx0} y={cy0 + ch + 22} textAnchor="start" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-montserrat), sans-serif">Slow</text>
              <text x={cx0 + cw / 2} y={cy0 + ch + 22} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontWeight="700" letterSpacing="2" fontFamily="var(--font-montserrat), sans-serif">SPEED →</text>
              <text x={cx0 + cw} y={cy0 + ch + 22} textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-montserrat), sans-serif">Fast</text>

              <text x={cx0 - 16} y={cy0 + ch} textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-montserrat), sans-serif">Generic</text>
              <text x={cx0 - 16} y={cy0 + 4} textAnchor="end" fontSize="10" fill="rgba(255,255,255,0.4)" fontFamily="var(--font-montserrat), sans-serif">On-Brand</text>
              <text x={cx0 - 32} y={cy0 + ch / 2} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.55)" fontWeight="700" letterSpacing="2" fontFamily="var(--font-montserrat), sans-serif" transform={`rotate(-90,${cx0 - 32},${cy0 + ch / 2})`}>BRAND QUALITY ↑</text>

              {/* Bubbles */}
              {bubbles.map((b, i) => {
                const active = step > i;
                const cx2 = bx(b.xp);
                const cy2 = by(b.yp);
                const labelLines = b.label.split('\n');
                const totalLines = labelLines.length;
                return (
                  <g key={i} style={{ transformOrigin: `${cx2}px ${cy2}px`, transform: active ? 'scale(1)' : 'scale(0)', transition: 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)', opacity: active ? 1 : 0 }}>
                    {b.isTextra && (
                      <circle cx={cx2} cy={cy2} r={b.r + 18} fill="rgba(102,188,173,0.1)" style={{ animation: active ? 'textraPulse 2.5s ease-in-out infinite' : 'none' }} />
                    )}
                    <circle cx={cx2} cy={cy2} r={b.r} fill={b.fill} stroke={b.border} strokeWidth="1.5" />
                    {labelLines.map((line, li) => (
                      <text key={li} x={cx2} y={cy2 + (li - (totalLines - 1) / 2) * 14} textAnchor="middle" dominantBaseline="middle" fontSize={b.isTextra ? 13 : 11} fontWeight={b.isTextra ? 800 : 600} fill={b.textFill} fontFamily="var(--font-montserrat), sans-serif">{line}</text>
                    ))}
                    {b.sub.split('\n').map((line, li) => {
                      const baseY = b.isTextra ? b.r + 18 : (totalLines - 1) * 7 + 18;
                      return (
                        <text key={`s${li}`} x={cx2} y={cy2 + baseY + li * 14} textAnchor="middle" fontSize={b.isTextra ? 11 : 9} fontWeight={b.isTextra ? 700 : 400} fill={b.isTextra ? '#fff' : 'rgba(255,255,255,0.45)'} fontFamily="var(--font-montserrat), sans-serif">{line}</text>
                      );
                    })}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 32, flexWrap: 'wrap', opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 1.8s' }}>
          {legend.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: item.bold ? 'rgba(255,255,255,0.06)' : 'transparent', borderRadius: 20, padding: item.bold ? '6px 14px' : '0', border: item.bold ? '1px solid rgba(102,188,173,0.3)' : 'none' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: item.bold ? '#fff' : 'rgba(255,255,255,0.7)', fontWeight: item.bold ? 800 : 600 }}>{item.label}</span>
              <span style={{ fontSize: 11, color: item.bold ? 'rgba(102,188,173,0.9)' : 'rgba(255,255,255,0.35)' }}>· {item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
