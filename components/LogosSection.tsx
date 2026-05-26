'use client';
import Image from 'next/image';
import { C, sh } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const clients = [
  { name: 'Amazon',             src: '/assets/logos/amazon.png',        use: 'Enterprise Training & Onboarding',   h: 28 },
  { name: 'HSBC',               src: '/assets/logos/hsbc.png',          use: 'Compliance & Regulatory Training',   h: 30 },
  { name: 'GSK',                src: '/assets/logos/gsk.png',           use: 'Regulatory & Sales Training',        h: 54 },
  { name: 'Cisco',              src: '/assets/logos/cisco.png',         use: 'Sales Enablement & Onboarding',      h: 38 },
  { name: 'Dept for Education', src: '/assets/logos/dfe.png',           use: 'Government Compliance Training',     h: 56 },
];

const partners = [
  { name: 'Cornerstone',       src: '/assets/logos/cornerstone.png',    h: 22 },
  { name: 'Kineo / Mindtools', src: '/assets/logos/kineo.png',          h: 34 },
  { name: 'Jam Pan',           src: '/assets/logos/jampan.webp',        h: 16 },
  { name: 'Netex',             src: '/assets/logos/netex.png',          h: 36 },
  { name: 'Learning Nexus',    src: '/assets/logos/learningnexus.png',  h: 26 },
];

export default function LogosSection() {
  const [ref, vis] = useReveal(0.1);

  return (
    <section
      id="clients"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ padding: '52px 0', background: C.gray50, borderTop: `1px solid ${C.gray100}`, borderBottom: `1px solid ${C.gray100}` }}
    >
      <div style={{ ...WRAP }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 28, opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease' }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gray400 }}>Trusted By Enterprise</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          {clients.map((c, i) => (
            <div
              key={c.name}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '16px 20px', borderRadius: 14, background: '#fff', border: `1px solid ${C.gray200}`, minWidth: 130, minHeight: 95, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(10px)', transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`, boxShadow: sh.sm }}
            >
              <Image
                src={c.src}
                alt={c.name}
                width={120}
                height={c.h}
                style={{ objectFit: 'contain', filter: 'saturate(0.6) opacity(0.82)', transition: 'filter 0.3s ease' }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.filter = 'saturate(1) opacity(1)'; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.filter = 'saturate(0.6) opacity(0.82)'; }}
              />
              <div style={{ fontSize: 8, color: C.gray400, fontWeight: 500, textAlign: 'center', lineHeight: 1.3, maxWidth: 120 }}>{c.use}</div>
            </div>
          ))}
        </div>

        {/* Partnerships */}
        <div style={{ marginTop: 32, paddingTop: 28, borderTop: `1px solid ${C.gray200}` }}>
          <div style={{ textAlign: 'center', marginBottom: 20, opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 0.2s' }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.gray400 }}>Partnerships</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            {partners.map((p, i) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={140}
                height={p.h}
                style={{ objectFit: 'contain', filter: 'grayscale(1) opacity(0.45)', transition: `filter 0.3s ease, opacity 0.5s ease ${i * 0.07}s`, opacity: vis ? 1 : 0 }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.filter = 'grayscale(0) opacity(1)'; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.filter = 'grayscale(1) opacity(0.45)'; }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
