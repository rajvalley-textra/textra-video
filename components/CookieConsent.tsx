'use client';
import { useEffect, useState } from 'react';
import { C, sh } from '@/lib/theme';

const STORAGE_KEY = 'textra-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const respond = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        background: '#fff',
        borderTop: `1px solid ${C.gray200}`,
        boxShadow: sh.lg,
        padding: '20px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <p style={{ fontSize: 13, color: C.gray600, lineHeight: 1.6, margin: 0, flex: 1, minWidth: 240 }}>
          We use cookies to enhance site navigation, analyze usage, and support our video player (Vimeo). View our{' '}
          <a href="/privacy" style={{ color: C.teal, fontWeight: 600, textDecoration: 'underline' }}>
            Privacy Policy
          </a>{' '}
          for more information.
        </p>
        <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
          <button
            onClick={() => respond('declined')}
            style={{
              background: 'transparent',
              color: C.navy,
              border: `1.5px solid ${C.gray300}`,
              borderRadius: 9999,
              padding: '10px 20px',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Decline
          </button>
          <button
            onClick={() => respond('accepted')}
            style={{
              background: C.teal,
              color: '#fff',
              border: 'none',
              borderRadius: 9999,
              padding: '10px 22px',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
