'use client';
import { C } from '@/lib/theme';

interface GetInTouchCTAProps {
  postUrl: string;
  postTitle: string;
}

export default function GetInTouchCTA({ postUrl, postTitle }: GetInTouchCTAProps) {
  const subject = encodeURIComponent('Web enquiry');
  const body = encodeURIComponent(
    `Hi,\n\nI'm interested in learning more about your services.\n\nI was reading: ${postTitle}\n${postUrl}\n\nLooking forward to hearing from you.`
  );
  const mailtoLink = `mailto:hello@textra.video?subject=${subject}&body=${body}`;

  return (
    <div style={{ marginTop: 60, paddingTop: 40, borderTop: `1px solid ${C.gray200}` }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
        <a
          href={mailtoLink}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            backgroundColor: C.teal,
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 600,
            borderRadius: 8,
            transition: 'opacity 200ms',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
          Get in Touch →
        </a>
        <a
          href="/media"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            color: C.teal,
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'opacity 200ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}>
          ← Back to Media
        </a>
      </div>
    </div>
  );
}
