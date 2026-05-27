'use client';
import { useState, useEffect } from 'react';
import { C, grad, sh } from '@/lib/theme';
import { useReveal } from '@/hooks/useReveal';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const docIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/>
  </svg>
);

const playIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);

function MiniTransform({ color }: { color: string }) {
  const [ph, setPh] = useState<'doc' | 'video'>('doc');
  useEffect(() => {
    const t = setInterval(() => setPh((p) => p === 'doc' ? 'video' : 'doc'), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ width: 44, height: 44, borderRadius: 10, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: ph === 'doc' ? 1 : 0, transition: 'opacity 0.4s ease' }}>{docIcon}</div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: ph === 'video' ? 1 : 0, transition: 'opacity 0.4s ease' }}>{playIcon}</div>
    </div>
  );
}

const roles = [
  {
    id: 'ld', tab: 'L&D', headline: 'Deploy Training 10× Faster',
    sub: 'Convert compliance docs, product manuals, and training materials into engaging video — in 24 hours.',
    sectors: [
      { industry: 'Finance & Banking',  companies: 'HSBC · Lloyds Register',                   challenge: 'Compliance training for 30,000+ employees',         solution: 'Video-first compliance suite, deployed in days', color: C.blue },
      { industry: 'Government',         companies: 'Dept for Education · Met Police · Army',    challenge: 'Mandatory training with completion tracking',        solution: 'Compliance video with built-in watch tracking',  color: C.navy },
      { industry: 'Technology',         companies: 'Amazon · Cisco',                            challenge: 'Product training for globally distributed teams',    solution: 'Launch-day training videos, every release',     color: '#1558a0' },
    ],
  },
  {
    id: 'cco', tab: 'Communications', headline: 'Instant Comms That Actually Land',
    sub: 'Replace ignored emails with branded video updates that employees actually watch — delivered in 24 hours.',
    sectors: [
      { industry: 'Financial Services', companies: 'HSBC · Bloomberg',                          challenge: 'CEO announcements going unread by employees',        solution: 'On-brand exec video updates with 85% view rate',  color: C.blue },
      { industry: 'Government',         companies: 'Dept for Education · Met Police',           challenge: 'Policy changes communicated to remote field staff',  solution: 'Video policy briefs with watch-tracking built in', color: C.navy },
      { industry: 'Technology',         companies: 'Amazon · Cisco',                            challenge: 'Culture and value comms across remote teams',        solution: 'Consistent, on-brand video for every location',   color: '#1558a0' },
    ],
  },
  {
    id: 'vp', tab: 'Product', headline: 'Sales Enablement at Scale',
    sub: 'Turn product releases, feature docs, and launch materials into polished video — ready on launch day.',
    sectors: [
      { industry: 'Technology & SaaS',  companies: 'Amazon · Cisco · Genesys',                 challenge: 'Feature launch docs that reps never read',           solution: 'Video product walkthroughs, ready for day-one',   color: C.blue },
      { industry: 'Financial Services', companies: "HSBC · Lloyd's of London",                  challenge: 'Complex product education for sales teams',         solution: 'Clear, branded product explainers at scale',      color: '#1558a0' },
      { industry: 'Government',         companies: 'Dept for Education · Army',                 challenge: 'System and process training at national scale',      solution: 'Branded government training video, fast and compliant', color: C.navy },
    ],
  },
];

export default function RolesSection() {
  const [ref, vis] = useReveal(0.06);
  const [activeTab, setActiveTab] = useState(0);
  const active = roles[activeTab];

  return (
    <section id="solutions" ref={ref as React.RefObject<HTMLElement>} style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 48, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(18px)', transition: 'all 0.6s ease' }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.teal, marginBottom: 12 }}>Solutions By Role</div>
          <h2 style={{ fontSize: 38, fontWeight: 800, color: C.navy, lineHeight: 1.18, margin: '0 0 14px 0' }}>Built For Your Team</h2>
          <p style={{ fontSize: 16, color: C.gray500, lineHeight: 1.65, margin: 0 }}>Train your team, educate your audience, deliver your message.</p>
        </div>

        {/* Tabs */}
        <div className="role-tabs" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48, opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 0.1s' }}>
          {roles.map((role, i) => {
            const isActive = activeTab === i;
            return (
              <button
                key={role.id}
                onClick={() => setActiveTab(i)}
                style={{ background: isActive ? C.navy : '#fff', color: isActive ? '#fff' : C.gray600, border: `2px solid ${isActive ? C.navy : C.gray200}`, borderRadius: 9999, padding: '11px 24px', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'all 220ms', letterSpacing: '0.02em', outline: 'none' }}
                onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.borderColor = C.navy; e.currentTarget.style.color = C.navy; } }}
                onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.borderColor = C.gray200; e.currentTarget.style.color = C.gray600; } }}
              >
                {role.tab}
              </button>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 40, opacity: vis ? 1 : 0, transition: 'opacity 0.5s ease 0.15s' }}>
          <h3 style={{ fontSize: 26, fontWeight: 800, color: C.navy, margin: '0 0 10px 0' }}>{active.headline}</h3>
          <p style={{ fontSize: 15, color: C.gray500, lineHeight: 1.65, margin: '0 auto', maxWidth: 560 }}>{active.sub}</p>
        </div>

        <div className="roles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {active.sectors.map((sector, i) => (
            <div
              key={sector.industry}
              style={{ background: '#fff', border: `1px solid ${C.gray200}`, borderRadius: 16, padding: '28px 24px', boxShadow: sh.sm, display: 'flex', flexDirection: 'column', gap: 12, opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(20px)', transition: `all 0.55s ease ${0.2 + i * 0.07}s`, cursor: 'default' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = sh.md; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = sh.sm; e.currentTarget.style.transform = 'none'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <MiniTransform color={sector.color} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.navy, lineHeight: 1.3 }}>{sector.industry}</div>
                  <div style={{ fontSize: 10, color: C.gray400, marginTop: 2, lineHeight: 1.3 }}>{sector.companies}</div>
                </div>
              </div>
              <div style={{ height: 1, background: C.gray100 }} />
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gray400, marginBottom: 4 }}>Challenge</div>
                <div style={{ fontSize: 12, color: C.gray600, lineHeight: 1.55 }}>{sector.challenge}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.teal, marginBottom: 4 }}>Solution</div>
                <div style={{ fontSize: 12, color: C.navy, fontWeight: 600, lineHeight: 1.55 }}>{sector.solution}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36, opacity: vis ? 1 : 0, transition: 'opacity 0.6s ease 0.7s' }}>
          <a
            href="#contact"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: grad, color: '#fff', borderRadius: 9999, padding: '14px 28px', fontSize: 14, fontWeight: 700, textDecoration: 'none', boxShadow: sh.md, transition: 'filter 200ms, transform 200ms' }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.transform = 'none'; }}
          >
            See How {active.tab} Teams Use Textra →
          </a>
        </div>
      </div>
    </section>
  );
}
