'use client';

import { useState } from 'react';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function CTASectionV2() {
  const [formData, setFormData] = useState({
    name: '',
    council: '',
    department: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/local-authorities-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const body = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(body?.error || `Something went wrong (${res.status}).`);
      }

      setStatus('success');
      setFormData({ name: '', council: '', department: '', email: '', phone: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(39,53,114,0.03), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -100, right: -150, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.04), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          {/* Left: Copy */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
              Next Steps
            </div>
            <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: '0 0 18px 0' }}>
              See what a Council Tax or Benefits explainer would look like for your authority
            </h2>
            <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, margin: '0 0 32px 0' }}>
              No obligation, just a 20-minute call.
            </p>

            {/* Benefits checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'No obligation—just a friendly conversation',
                'Get a custom ROI forecast for your council',
                'See sample videos relevant to your departments',
                'Learn how ARP councils are using Textra'
              ].map((benefit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#66BCAD', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                    ✓
                  </div>
                  <span style={{ fontSize: 15, color: C.gray600, fontWeight: 500 }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ background: '#f8f9fc', border: `1px solid ${C.gray100}`, borderRadius: 16, padding: 40 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, margin: '0 0 24px 0' }}>
              Tell us about your council
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Your name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${C.gray200}`,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif',
                    boxSizing: 'border-box',
                    transition: 'border-color 200ms',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#66BCAD'; }}
                  onBlur={(e) => { e.target.style.borderColor = C.gray200; }}
                />
              </div>

              {/* Council */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Council name *
                </label>
                <input
                  type="text"
                  name="council"
                  value={formData.council}
                  onChange={handleChange}
                  placeholder="E.g., East Suffolk Council"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${C.gray200}`,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#66BCAD'; }}
                  onBlur={(e) => { e.target.style.borderColor = C.gray200; }}
                />
              </div>

              {/* Department */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Your department *
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="E.g., Revenues, Benefits, Communications"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${C.gray200}`,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#66BCAD'; }}
                  onBlur={(e) => { e.target.style.borderColor = C.gray200; }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Email address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${C.gray200}`,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#66BCAD'; }}
                  onBlur={(e) => { e.target.style.borderColor = C.gray200; }}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: C.navy, marginBottom: 8 }}>
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: `1px solid ${C.gray200}`,
                    borderRadius: 8,
                    fontSize: 14,
                    fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif',
                    boxSizing: 'border-box',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = '#66BCAD'; }}
                  onBlur={(e) => { e.target.style.borderColor = C.gray200; }}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                style={{
                  padding: '14px 24px',
                  background: '#66BCAD',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: status === 'submitting' ? 'default' : 'pointer',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  transition: 'background 200ms',
                  marginTop: 12,
                }}
                onMouseEnter={(e) => { if (status !== 'submitting') e.currentTarget.style.background = '#5aa89a'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#66BCAD'; }}
              >
                {status === 'submitting' ? 'Sending…' : status === 'success' ? '✓ Message sent!' : 'Book a call'}
              </button>

              {status === 'error' && (
                <p style={{ fontSize: 13, color: '#b5453a', margin: 0 }}>
                  {errorMessage}
                </p>
              )}

              {/* Small print */}
              <p style={{ fontSize: 12, color: C.gray400, margin: '8px 0 0 0' }}>
                We'll be in touch within 24 hours. No spam, no nonsense.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
