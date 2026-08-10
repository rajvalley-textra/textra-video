'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const departments = [
  {
    name: 'Council Tax & Revenues',
    description: 'Help residents understand payment deadlines, Q&A about bills, payment methods. Reduce arrears, speed up collections.',
    use: 'Payment videos, deadline reminders, FAQ content',
    icon: '💷',
  },
  {
    name: 'Benefits & Support',
    description: 'Explain eligibility, application process, required documents. Reduce incomplete applications, speed up processing.',
    use: 'Application guides, eligibility explainers, document checklists',
    icon: '🛟',
  },
  {
    name: 'Planning & Building Control',
    description: 'Demystify planning process, building regulations, what to expect. Faster applications, fewer confused enquiries.',
    use: 'Process guides, requirement walkthroughs, decision explainers',
    icon: '🏗️',
  },
  {
    name: 'Housing & Homelessness',
    description: 'Guide residents through housing support options, emergency help process. Improve access to services, reduce crisis calls.',
    use: 'Support pathways, application processes, resource guides',
    icon: '🏘️',
  },
];

export default function DepartmentsSection() {
  return (
    <section style={{ background: '#f8f9fc', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', top: 0, right: -200, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.04), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            Department Solutions
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18, textAlign: 'center' }}>
            Textra works across your entire council
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            Every department faces the same challenge: residents don't understand your processes. Textra solves it across all of them.
          </p>
        </div>

        {/* Department grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {departments.map((dept) => (
            <div
              key={dept.name}
              style={{
                background: '#fff',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                padding: 20,
                boxShadow: sh.sm,
                transition: 'transform 200ms, box-shadow 200ms, border-color 200ms',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = sh.md;
                e.currentTarget.style.borderColor = '#66BCAD';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = sh.sm;
                e.currentTarget.style.borderColor = C.gray100;
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16, lineHeight: 1 }}>
                {dept.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 12px 0' }}>
                {dept.name}
              </h3>
              <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.6, margin: '0 0 16px 0' }}>
                {dept.description}
              </p>
              <div style={{ paddingTop: 16, borderTop: `1px solid ${C.gray100}` }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#66BCAD', marginBottom: 4, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  Use cases:
                </div>
                <div style={{ fontSize: 13, color: C.gray500, lineHeight: 1.5 }}>
                  {dept.use}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
