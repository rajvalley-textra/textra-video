'use client';

import { useState } from 'react';
import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function ROICalculatorSection() {
  const [department, setDepartment] = useState<'ctb' | 'benefits' | 'planning' | 'housing'>('ctb');
  const [letters, setLetters] = useState(70000);
  const [emails, setEmails] = useState(100000);
  const [websiteVisits, setWebsiteVisits] = useState(3000000);
  const [engagementUplift, setEngagementUplift] = useState(45);

  // Calculate metrics based on department defaults and user inputs
  const departmentDefaults: Record<string, any> = {
    ctb: { name: 'Council Tax & Revenues', letters: 70000, emails: 100000, visits: 3000000, uplift: 45, transactionValue: 2000 },
    benefits: { name: 'Benefits', letters: 50000, emails: 80000, visits: 500000, uplift: 35, transactionValue: 3500 },
    planning: { name: 'Planning & Building Control', letters: 10000, emails: 20000, visits: 200000, uplift: 40, transactionValue: 500 },
    housing: { name: 'Housing & Homelessness', letters: 5000, emails: 15000, visits: 100000, uplift: 50, transactionValue: 1000 },
  };

  const defaults = departmentDefaults[department];
  const annualTextraCost = 12000;
  const setupFee = 2500;
  const totalYear1Cost = annualTextraCost + setupFee;

  // Video views from different channels
  const lettersQRRate = 0.15;
  const emailCTR = 0.07;
  const websiteCTR = 0.02;

  const lettersViews = Math.round(letters * lettersQRRate);
  const emailViews = Math.round(emails * emailCTR);
  const websiteViews = Math.round((websiteVisits * 12) * websiteCTR);
  const totalViews = lettersViews + emailViews + websiteViews;

  const costPerView = (totalYear1Cost / totalViews).toFixed(3);

  return (
    <section id="calculator" style={{ background: '#fff', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', bottom: -150, left: -150, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.06), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            ROI Calculator
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18, textAlign: 'center' }}>
            Calculate your council's savings
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Adjust the sliders to see how much Textra could save your council. We'll show cost per video view and projected ROI.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Input side */}
          <div style={{
            background: '#f8f9fc',
            border: `1px solid ${C.gray100}`,
            borderRadius: 16,
            padding: 40,
          }}>
            {/* Department selector */}
            <div style={{ marginBottom: 32 }}>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: C.navy, marginBottom: 12 }}>
                Select your department:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {Object.entries(departmentDefaults).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setDepartment(key as any);
                      setLetters(val.letters);
                      setEmails(val.emails);
                      setWebsiteVisits(val.visits);
                      setEngagementUplift(val.uplift);
                    }}
                    style={{
                      padding: 12,
                      border: `2px solid ${department === key ? '#66BCAD' : C.gray200}`,
                      background: department === key ? 'rgba(102,188,173,0.08)' : '#fff',
                      borderRadius: 8,
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 600,
                      color: department === key ? '#66BCAD' : C.gray600,
                      transition: 'all 200ms',
                    }}
                  >
                    {val.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Annual letters sent: {letters.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="200000"
                  step="5000"
                  value={letters}
                  onChange={(e) => setLetters(parseInt(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>10k–200k letters</div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Annual emails sent: {emails.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="10000"
                  value={emails}
                  onChange={(e) => setEmails(parseInt(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>20k–500k emails</div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Monthly website visits: {websiteVisits.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={websiteVisits}
                  onChange={(e) => setWebsiteVisits(parseInt(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>100k–10M visits/month</div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Expected engagement uplift: {engagementUplift}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={engagementUplift}
                  onChange={(e) => setEngagementUplift(parseInt(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>20%–80% improvement in resident action</div>
              </div>
            </div>
          </div>

          {/* Output side */}
          <div>
            <div style={{ display: 'grid', gap: 16, marginBottom: 24 }}>
              {/* Cost card */}
              <div style={{
                background: '#f8f9fc',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: C.gray500, marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Annual Textra Investment
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#66BCAD' }}>
                  £{(totalYear1Cost / 12 * 12).toLocaleString()}
                </div>
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>Year 1 (includes setup fee)</div>
              </div>

              {/* Views card */}
              <div style={{
                background: '#f8f9fc',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: C.gray500, marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Annual Video Views
                </div>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#66BCAD' }}>
                  {totalViews.toLocaleString()}
                </div>
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>Cost per view: £{costPerView}</div>
              </div>

              {/* Cost efficiency card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(102,188,173,0.12), rgba(39,53,114,0.04))',
                border: '2px solid #66BCAD',
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: '#66BCAD', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Cost Efficiency
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: '#66BCAD' }}>
                  £{costPerView}/view
                </div>
                <div style={{ fontSize: 12, color: C.gray600, marginTop: 4 }}>Extremely cost-effective engagement</div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="mailto:sales@textra.video?subject=Local Authority ROI Discussion"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                padding: '16px 24px',
                background: '#66BCAD',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'background 200ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#5aa89a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#66BCAD'; }}
            >
              Get Custom ROI Breakdown
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
