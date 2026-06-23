'use client';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

export default function ExamplesSection() {
  return (
    <section id="demos" style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ ...WRAP }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: '0 0 16px 0' }}>
            See It In Action
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.6 }}>
            Watch how Textra Video creates studio-quality content in just 24 hours.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <div style={{ width: '100%', maxWidth: '1200px', aspectRatio: '16/9' }}>
            <iframe
              src="https://player.vimeo.com/video/1095045553?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Textra Little Botanical - Orchid"
              style={{ borderRadius: 12 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
