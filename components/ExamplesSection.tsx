'use client';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const videos = [
  { id: '1095045553', title: 'Little Botanicals' },
  { id: '1203789041', title: 'Norwich Council' },
  { id: '1163223133', title: 'Amazon Van Role Play' },
  { id: '1203796244', title: 'Age UK' },
  { id: '1143447295', title: 'Future Learn' },
  { id: '1163223157', title: "Ella's Kitchen" },
];

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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
          {videos.map((video) => (
            <div key={video.id} style={{ aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 16px rgba(39,53,114,0.12)' }}>
              <iframe
                src={`https://player.vimeo.com/video/${video.id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title={video.title}
                style={{ display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
