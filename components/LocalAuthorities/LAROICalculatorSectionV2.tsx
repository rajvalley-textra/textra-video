'use client';

import { useState } from 'react';
import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

// Fixed assumptions (not user-editable, kept out of the sliders to avoid over-complicating the tool)
const AVG_CALL_HANDLING_MINUTES = 6; // typical time an officer spends on a repeat "how do I pay / am I eligible" call
const STAFF_HOURLY_COST = 25; // blended loaded cost (salary + on-costs) for a council officer
const ANNUAL_SUBSCRIPTION = 12000;
const SETUP_FEE = 2500;

type Dept = 'ctb' | 'benefits' | 'planning' | 'housing';

const departmentDefaults: Record<Dept, { name: string; calls: number; costPerCall: number; reduction: number }> = {
  ctb: { name: 'Council Tax & Revenues', calls: 40000, costPerCall: 4.5, reduction: 35 },
  benefits: { name: 'Benefits', calls: 25000, costPerCall: 5.5, reduction: 30 },
  planning: { name: 'Planning & Building Control', calls: 8000, costPerCall: 6.0, reduction: 25 },
  housing: { name: 'Housing & Homelessness', calls: 12000, costPerCall: 5.0, reduction: 30 },
};

export default function ROICalculatorSectionV2() {
  const [department, setDepartment] = useState<Dept>('ctb');
  const [calls, setCalls] = useState(departmentDefaults.ctb.calls);
  const [costPerCall, setCostPerCall] = useState(departmentDefaults.ctb.costPerCall);
  const [reduction, setReduction] = useState(departmentDefaults.ctb.reduction);

  // --- ROI logic ---
  // 1. How many repeat calls does Textra stop from happening?
  const callsAvoided = Math.round(calls * (reduction / 100));

  // 2. What does avoiding those calls save directly (contact-centre cost per call)?
  const callCostSavings = callsAvoided * costPerCall;

  // 3. How many staff hours does that free up, and what's that worth?
  const hoursReclaimed = Math.round((callsAvoided * AVG_CALL_HANDLING_MINUTES) / 60);
  const staffTimeSavings = hoursReclaimed * STAFF_HOURLY_COST;

  // 4. Total value delivered vs. what Textra costs
  const totalAnnualSavings = callCostSavings + staffTimeSavings;
  const totalYear1Cost = ANNUAL_SUBSCRIPTION + SETUP_FEE;
  const netBenefitYear1 = totalAnnualSavings - totalYear1Cost;
  const roiYear1 = totalYear1Cost > 0 ? Math.round((netBenefitYear1 / totalYear1Cost) * 100) : 0;
  const paybackMonths = totalAnnualSavings > 0 ? (totalYear1Cost / (totalAnnualSavings / 12)) : null;

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
            Adjust the sliders to see the call-avoidance savings, staff time reclaimed, and payback period for your department.
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
                      setDepartment(key as Dept);
                      setCalls(val.calls);
                      setCostPerCall(val.costPerCall);
                      setReduction(val.reduction);
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
                  Annual repeat calls about payments/eligibility: {calls.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={calls}
                  onChange={(e) => setCalls(parseInt(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>5k–100k calls/year</div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Average cost per call: £{costPerCall.toFixed(2)}
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={costPerCall}
                  onChange={(e) => setCostPerCall(parseFloat(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>£2–£10 per contact-centre call</div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Expected reduction in repeat calls: {reduction}%
                </label>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={reduction}
                  onChange={(e) => setReduction(parseInt(e.target.value))}
                  style={{ width: '100%', height: 6, borderRadius: 3, cursor: 'pointer', accentColor: '#66BCAD' }}
                />
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>20%–50% fewer repeat calls</div>
              </div>

              <div style={{ fontSize: 12, color: C.gray400, lineHeight: 1.6, marginTop: 8 }}>
                Assumes {AVG_CALL_HANDLING_MINUTES} minutes of staff time per call at a £{STAFF_HOURLY_COST}/hr blended cost.
              </div>
            </div>
          </div>

          {/* Output side */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              {/* Annual savings */}
              <div style={{
                background: '#f8f9fc',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: C.gray500, marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Annual Savings
                </div>
                <div style={{ fontSize: 30, fontWeight: 900, color: '#66BCAD' }}>
                  £{Math.round(totalAnnualSavings).toLocaleString()}
                </div>
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>{callsAvoided.toLocaleString()} calls avoided/year</div>
              </div>

              {/* Hours reclaimed */}
              <div style={{
                background: '#f8f9fc',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 12, color: C.gray500, marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Staff Hours Reclaimed
                </div>
                <div style={{ fontSize: 30, fontWeight: 900, color: '#66BCAD' }}>
                  {hoursReclaimed.toLocaleString()} hrs
                </div>
                <div style={{ fontSize: 12, color: C.gray400, marginTop: 4 }}>worth £{Math.round(staffTimeSavings).toLocaleString()}/year</div>
              </div>
            </div>

            {/* Headline ROI card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(102,188,173,0.12), rgba(39,53,114,0.04))',
              border: '2px solid #66BCAD',
              borderRadius: 12,
              padding: 28,
              textAlign: 'center',
              marginBottom: 24,
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                <div>
                  <div style={{ fontSize: 12, color: '#66BCAD', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Payback Period
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: '#66BCAD' }}>
                    {paybackMonths !== null ? `${paybackMonths.toFixed(1)} mo` : 'N/A'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#66BCAD', marginBottom: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Year 1 ROI
                  </div>
                  <div style={{ fontSize: 26, fontWeight: 900, color: '#66BCAD' }}>
                    {roiYear1}%
                  </div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: C.gray600, marginTop: 12 }}>
                Based on £{totalYear1Cost.toLocaleString()} Year 1 cost (£{ANNUAL_SUBSCRIPTION.toLocaleString()} subscription + £{SETUP_FEE.toLocaleString()} setup)
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
