'use client';

import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const videos = [
  {
    title: 'Council Tax: What You Need to Know',
    description: 'Clear explainer for residents about council tax bills, payment options, and deadlines.',
    thumbnail: 'placeholder-1',
    duration: '3:45',
  },
  {
    title: 'Apply for Benefits in 5 Minutes',
    description: 'Step-by-step guide showing residents exactly what documents they need and how to apply.',
    thumbnail: 'placeholder-2',
    duration: '4:20',
  },
  {
    title: 'Planning Permission: What to Expect',
    description: 'Demystify the planning process and help residents understand timelines and requirements.',
    thumbnail: 'placeholder-3',
    duration: '5:10',
  },
];

export default function VideoShowcaseSection() {
  return (
    <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', top: -100, left: -150, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(102,188,173,0.04), transparent)', pointerEvents: 'none' }} />

      <div style={{ ...WRAP, width: '100%' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#66BCAD', marginBottom: 12 }}>
            Video Examples
          </div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: 0, marginBottom: 18, textAlign: 'center' }}>
            Textra videos in action
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            See examples of how our videos help residents understand council services.
          </p>
        </div>

        {/* Video grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {videos.map((video) => (
            <div
              key={video.title}
              style={{
                background: '#f8f9fc',
                border: `1px solid ${C.gray100}`,
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: sh.sm,
                transition: 'transform 200ms, box-shadow 200ms',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = sh.md;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = sh.sm;
              }}
            >
              {/* Video thumbnail placeholder */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, rgba(102,188,173,0.1), rgba(39,53,114,0.1))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Play button */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: '#66BCAD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'transform 200ms',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>

                {/* Duration badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    padding: '4px 8px',
                    borderRadius: 4,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: '0 0 8px 0' }}>
                  {video.title}
                </h3>
                <p style={{ fontSize: 14, color: C.gray600, lineHeight: 1.5, margin: 0 }}>
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
