'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const HUBSPOT_PORTAL_ID = '149079327';
const HUBSPOT_FORM_ID = '65aaa6cb-0572-4d3a-a863-1064576578b6';
const HUBSPOT_REGION = 'eu1';

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export default function CTASectionV2() {
  const targetRef = useRef<HTMLDivElement>(null);
  const createdRef = useRef(false);

  const createForm = () => {
    if (createdRef.current || !window.hbspt || !targetRef.current) return;
    createdRef.current = true;
    window.hbspt.forms.create({
      region: HUBSPOT_REGION,
      portalId: HUBSPOT_PORTAL_ID,
      formId: HUBSPOT_FORM_ID,
      target: '#hs-form-target',
    });
  };

  useEffect(() => {
    if (window.hbspt) createForm();
  }, []);

  return (
    <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', bottom: -150, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(39,53,114,0.03), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -100, right: -150, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.04), transparent)', pointerEvents: 'none' }} />

      <Script
        src="https://js-eu1.hsforms.net/forms/v2.js"
        strategy="afterInteractive"
        onLoad={createForm}
      />

      {/* Brand the raw HubSpot form to match the site */}
      <style>{`
        #hs-form-target .hs-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-family: var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif;
        }
        #hs-form-target .hs-form-field { margin: 0; }
        #hs-form-target label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: ${C.navy};
          margin-bottom: 8px;
        }
        #hs-form-target .hs-form-required { color: #b5453a; }
        #hs-form-target input[type="text"],
        #hs-form-target input[type="email"],
        #hs-form-target input[type="tel"],
        #hs-form-target select,
        #hs-form-target textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid ${C.gray200};
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          box-sizing: border-box;
          transition: border-color 200ms;
        }
        #hs-form-target input:focus,
        #hs-form-target select:focus,
        #hs-form-target textarea:focus {
          border-color: #66BCAD;
          outline: none;
        }
        #hs-form-target .hs-error-msgs {
          list-style: none;
          margin: 6px 0 0 0;
          padding: 0;
          color: #b5453a;
          font-size: 12px;
        }
        #hs-form-target .hs-button {
          padding: 14px 24px;
          background: #66BCAD;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 200ms;
          margin-top: 4px;
        }
        #hs-form-target .hs-button:hover { background: #5aa89a; }
        #hs-form-target .legal-consent-container,
        #hs-form-target .hs-richtext {
          font-size: 12px;
          color: ${C.gray400};
          line-height: 1.5;
        }
        #hs-form-target .submitted-message {
          font-size: 15px;
          color: ${C.navy};
          font-weight: 600;
        }
      `}</style>

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

          {/* Right: HubSpot form, restyled to match the site */}
          <div style={{ background: '#f8f9fc', border: `1px solid ${C.gray100}`, borderRadius: 16, padding: 40 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, margin: '0 0 24px 0' }}>
              Tell us about your council
            </h3>

            <div id="hs-form-target" ref={targetRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
