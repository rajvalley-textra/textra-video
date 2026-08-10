'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const councils = [
  { name: 'Breckland', role: 'Founding partner', year: '2003', logo: '/assets/logos/breckland council logo.jpeg' },
  { name: 'East Cambridgeshire', role: 'Partner authority', year: '2003', logo: '/assets/logos/East Camb council logo2.png' },
  { name: 'East Suffolk', role: 'Partner authority', year: '2017', logo: '/assets/logos/East Suffolk Logo.png' },
  { name: 'Fenland', role: 'Partner authority', year: '2003', logo: '/assets/logos/fenland council logo.webp' },
  { name: 'West Suffolk', role: 'Partner authority', year: '2003', logo: '/assets/logos/west suffolk council logo.png' },
];

export default function ARPPartnershipSection() {
  return (
    <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <div style={{ position: 'absolute', top: 0, right: -200, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.04), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            Trusted Partnership
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18, textAlign: 'center', textDecoration: 'none', borderBottom: 'none', outline: 'none' }}>
            Used by Anglian Revenues Partnership
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Textra video engagement is trusted by 5 member councils across the East of England, helping residents understand council services and improving payment rates.
          </p>
        </div>

        {/* Council cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 48 }}>
          {councils.map((council, i) => (
            <div
              key={council.name}
              style={{
                background: '#fff',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 28,
                boxShadow: sh.sm,
                transition: 'transform 200ms, box-shadow 200ms',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = sh.md;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = sh.sm;
              }}
            >
              {/* Logo */}
              <img src={council.logo} alt={council.name} style={{ height: 50, objectFit: 'contain', marginBottom: 16, alignSelf: 'center' }} />

              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 8 }}>
                {council.role}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 12px 0' }}>
                {council.name}
              </h3>
              <div style={{ fontSize: 13, color: C.gray500, fontWeight: 500 }}>
                Since {council.year}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ background: 'linear-gradient(135deg, rgba(102,188,173,0.05), rgba(39,53,114,0.02))', border: `1px solid ${C.gray100}`, borderRadius: 16, padding: 40, textAlign: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#66BCAD', lineHeight: 1, marginBottom: 8 }}>
                1000+
              </div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>
                Residents engaged monthly
              </div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#66BCAD', lineHeight: 1, marginBottom: 8 }}>
                45%
              </div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>
                Average engagement uplift
              </div>
            </div>
            <div>
              <div style={{ fontSize: 36, fontWeight: 900, color: '#66BCAD', lineHeight: 1, marginBottom: 8 }}>
                20+
              </div>
              <div style={{ fontSize: 14, color: C.gray600, fontWeight: 500 }}>
                Video topics deployed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
