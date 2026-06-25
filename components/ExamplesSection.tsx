'use client';
import { useRef, useState } from 'react';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const videos = [
  { id: '1095045553', title: 'Little Botanicals', sector: 'Retail' },
  { id: '1203789041', title: 'Norwich Council', sector: 'Government' },
  { id: '1163223133', title: 'Amazon Van Role Play', sector: 'Logistics' },
  { id: '1203796244', title: 'Age UK', sector: 'Healthcare/Charity' },
  { id: '1143447295', title: 'Future Learn', sector: 'Education' },
  { id: '1163223157', title: "Ella's Kitchen", sector: 'Consumer Goods' },
];

export default function ExamplesSection() {
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement }>({});
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const handleFullscreen = (videoId: string) => {
    const iframe = iframeRefs.current[videoId];
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
        return;
      } else if ((iframe as any).webkitRequestFullscreen) {
        (iframe as any).webkitRequestFullscreen();
        return;
      } else if ((iframe as any).mozRequestFullScreen) {
        (iframe as any).mozRequestFullScreen();
        return;
      } else if ((iframe as any).msRequestFullscreen) {
        (iframe as any).msRequestFullscreen();
        return;
      }
    }
    // iOS Safari doesn't support fullscreen on iframes - open the video directly instead
    window.open(`https://vimeo.com/${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="demos" style={{ background: '#fff', padding: '80px 0' }}>
      <div style={{ ...WRAP }} className="wrap-pad">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: '0 0 16px 0' }}>
            See It In Action
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.6 }}>
            Watch how Textra Video creates studio-quality content in under an hour.
          </p>
        </div>

        <div className="examples-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
          {videos.map((video) => (
            <div key={video.id}>
              <div
                style={{
                  aspectRatio: '16/9',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(39,53,114,0.12)',
                  position: 'relative',
                }}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <button
                  className="fullscreen-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFullscreen(video.id);
                  }}
                  style={{
                    position: 'absolute',
                    top: 12,
                    left: 12,
                    zIndex: 10,
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    border: 'none',
                    background: 'rgba(0,0,0,0.6)',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                    transition: 'opacity 200ms, background 200ms',
                    opacity: hoveredVideo === video.id ? 1 : 0,
                    pointerEvents: hoveredVideo === video.id ? 'auto' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.6)';
                  }}
                  title="Fullscreen"
                >
                  ⛶
                </button>
                <iframe
                  ref={(el) => {
                    if (el) iframeRefs.current[video.id] = el;
                  }}
                  src={`https://player.vimeo.com/video/${video.id}?h=&title=0&byline=0&portrait=0&badge=0&player_id=0&app_id=58479`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title={video.title}
                  style={{ display: 'block' }}
                />
              </div>
              <div style={{ marginTop: 12, fontSize: 12, fontWeight: 600, color: C.teal, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {video.sector}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
