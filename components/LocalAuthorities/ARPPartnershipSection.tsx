'use client';

import { useState } from 'react';
import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const councils = [
  {
    name: 'Breckland',
    role: 'Founding partner',
    logo: '/assets/logos/breckland council logo.jpeg',
    residents: '145k',
    channel: '"Your Breckland" Print Magazine',
    frequency: '3x annually',
    videoVolume: '36-48 videos/year',
    contentTopics: 'Waste, Cost-of-Living, Planning, Events',
    painPoint: 'High print costs (£30-36k/year) limit reach & frequency',
    benefits: [
      { label: 'Cost Savings', value: 'Save £12-18k/year', icon: '💰' },
      { label: 'Reach Expansion', value: 'Monthly updates vs quarterly', icon: '📢' },
      { label: 'Staff Efficiency', value: 'Reduce contact center calls 30%', icon: '⏱️' }
    ]
  },
  {
    name: 'East Cambridgeshire',
    role: 'Partner authority',
    logo: '/assets/logos/East Camb council logo2.png',
    residents: '91k',
    channel: 'Web + Email (no print)',
    frequency: 'Monthly press releases',
    videoVolume: '24-36 videos/year',
    contentTopics: 'Cost-of-Living, Housing, Community',
    painPoint: 'No print reach for non-digital residents; low email engagement',
    benefits: [
      { label: 'Reach Expansion', value: 'Engage non-digital residents', icon: '📢' },
      { label: 'Engagement', value: '+45% potential uplift', icon: '📈' },
      { label: 'Efficiency', value: 'Consolidate multiple channels', icon: '⚡' }
    ]
  },
  {
    name: 'East Suffolk',
    role: 'Partner authority',
    logo: '/assets/logos/East Suffolk Logo.png',
    residents: '248k',
    channel: '"East Suffolk Magazine" + Digital',
    frequency: '2x print + weekly web',
    videoVolume: '48-60 videos/year',
    contentTopics: 'Waste, Housing, Planning, Cost-of-Living',
    painPoint: 'Managing 248k residents across channels; overwhelmed contact center',
    benefits: [
      { label: 'Staff Efficiency', value: 'Free up 60+ hours/year', icon: '⏱️' },
      { label: 'Cost Savings', value: 'Reduce print magazine spend', icon: '💰' },
      { label: 'Engagement', value: 'Weekly video updates', icon: '📺' }
    ]
  },
  {
    name: 'Fenland',
    role: 'Partner authority',
    logo: '/assets/logos/fenland council logo.webp',
    residents: '104k',
    channel: '"The Fenlander" Email Newsletter',
    frequency: 'Monthly',
    videoVolume: '24-36 videos/year',
    contentTopics: 'Waste, Food Waste, Cost-of-Living, Events',
    painPoint: 'Low email open rates; food waste rollout needs clarity',
    benefits: [
      { label: 'Engagement', value: '+45% potential uplift', icon: '📈' },
      { label: 'Clarity', value: 'Explain food waste rollout 2025-26', icon: '🎥' },
      { label: 'Reach Expansion', value: 'Monthly video newsletter', icon: '📢' }
    ]
  },
  {
    name: 'West Suffolk',
    role: 'Partner authority',
    logo: '/assets/logos/west suffolk council logo.png',
    residents: '183k',
    channel: '"Thriving West Suffolk" Magazine',
    frequency: 'Quarterly (pilot)',
    videoVolume: '24-36 videos/year',
    contentTopics: 'Business Grants, Planning, Community',
    painPoint: 'New magazine pilot—need to prove ROI quickly',
    benefits: [
      { label: 'Measurable Results', value: 'Track views, clicks, actions', icon: '📊' },
      { label: 'Engagement', value: 'Boost pilot performance', icon: '🚀' },
      { label: 'Efficiency', value: 'Weekly videos + quarterly print', icon: '⚡' }
    ]
  },
];

export default function ARPPartnershipSection() {
  const [selectedCouncil, setSelectedCouncil] = useState(councils[0].name);

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
              onClick={() => setSelectedCouncil(council.name)}
              style={{
                background: selectedCouncil === council.name ? 'rgba(102,188,173,0.1)' : '#fff',
                border: `2px solid ${selectedCouncil === council.name ? '#66BCAD' : C.gray100}`,
                borderRadius: 12,
                padding: 28,
                boxShadow: selectedCouncil === council.name ? sh.md : sh.sm,
                transition: 'transform 200ms, box-shadow 200ms, background 200ms, border 200ms',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                if (selectedCouncil !== council.name) {
                  e.currentTarget.style.boxShadow = sh.md;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                if (selectedCouncil !== council.name) {
                  e.currentTarget.style.boxShadow = sh.sm;
                }
              }}
            >
              {/* Logo */}
              <img src={council.logo} alt={council.name} style={{ height: 70, objectFit: 'contain', marginBottom: 16, alignSelf: 'center' }} />

              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 8 }}>
                {council.role}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 6px 0' }}>
                {council.name}
              </h3>
              <div style={{ fontSize: 12, color: C.gray600, fontWeight: 500 }}>
                {council.residents} residents
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
