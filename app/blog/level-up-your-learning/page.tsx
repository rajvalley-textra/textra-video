'use client';
import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

function VimeoThumbnail({ videoId, title, color }: { videoId: string; title: string; color: string }) {
  const [thumbnail, setThumbnail] = useState<string>(`https://i.vimeocdn.com/video/${videoId}_1920x1080.jpg`);

  useEffect(() => {
    fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${videoId}`)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.thumbnail_url) {
          const url = data.thumbnail_url;
          if (url.includes('vimeocdn')) {
            setThumbnail(url.replace(/_\d+x\d+\.jpg/, '_1920x1080.jpg'));
          } else {
            setThumbnail(url);
          }
        }
      })
      .catch(() => {
        // Keep high-quality CDN fallback
      });
  }, [videoId]);

  return (
    <img
      src={thumbnail}
      alt={title}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        background: color,
      }}
    />
  );
}

export default function BlogPost() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoThumbnail, setVideoThumbnail] = useState<string>('');

  const handlePlayClick = () => {
    if (!videoThumbnail) {
      fetch('https://vimeo.com/api/oembed.json?url=https://vimeo.com/1077894850')
        .then((res) => res.json())
        .then((data) => setVideoThumbnail(data.thumbnail_url || ''))
        .catch(() => {});
    }
    setShowVideo(true);
  };

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Learning & Development
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Level Up Your Learning: How Animated Videos Make E-Learning Unforgettable
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Discover why animated videos are revolutionizing corporate training and employee engagement.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Traditional e-learning modules with dense text create a tedious, disengaging experience where information fails to stick. Animated video offers a compelling solution to transform how organizations deliver learning and development.
            </p>

            {/* Video Embed */}
            <div
              onClick={handlePlayClick}
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                background: '#000',
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 40,
                cursor: 'pointer',
              }}>
              <VimeoThumbnail
                videoId="1077894850"
                title="Level Up Your Learning"
                color="#1A71B1"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                  transition: 'background 300ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.3)';
                }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: C.teal,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 200ms ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 16, marginTop: 40 }}>
              Key Benefits of Animated E-Learning
            </h2>

            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12, marginTop: 32 }}>
              Visual Engagement
            </h3>
            <p style={{ marginBottom: 24 }}>
              Our brains process visual information more efficiently than text alone. Animation captures and maintains attention, creating a more active learning experience that keeps employees engaged from start to finish.
            </p>

            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12, marginTop: 32 }}>
              Enhanced Comprehension
            </h3>
            <p style={{ marginBottom: 24 }}>
              Abstract ideas become concrete when visualized. Animated characters can demonstrate complex processes and make difficult topics more understandable—exemplified by showing how a character could guide users through software more effectively than written instructions alone.
            </p>

            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12, marginTop: 32 }}>
              Emotional Connection
            </h3>
            <p style={{ marginBottom: 24 }}>
              Relatable animated characters foster comfort and receptiveness to new information by creating emotional bonds with learners, making training sessions feel more human and approachable.
            </p>

            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12, marginTop: 32 }}>
              Improved Retention
            </h3>
            <p style={{ marginBottom: 32 }}>
              Research supports that visual learning aids significantly improve information retention, particularly when presented through engaging, narrative-driven formats that tell a story rather than just listing facts.
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}` }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Textra enables transformation of HR documents and training materials into compelling video experiences, turning e-learning from obligatory to genuinely engaging.
              </p>
            </div>

            <div style={{ marginTop: 60, paddingTop: 40, borderTop: `1px solid ${C.gray200}` }}>
              <a
                href="/blog"
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
                ← Back to Blog
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {showVideo && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 20,
          }}
          onClick={() => setShowVideo(false)}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 900,
              paddingBottom: '56.25%',
              backgroundImage: videoThumbnail ? `url(${videoThumbnail})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            onClick={(e) => e.stopPropagation()}>
            <iframe
              src="https://player.vimeo.com/video/1077894850?fl=pl&fe=cm"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 12,
              }}
              allow="autoplay; fullscreen; picture-in-picture"
              title="Level Up Your Learning"
            />
          </div>
          <button
            onClick={() => setShowVideo(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              background: 'none',
              border: 'none',
              color: '#fff',
              fontSize: 32,
              cursor: 'pointer',
              zIndex: 1001,
            }}>
            ✕
          </button>
        </div>
      )}

      <FooterSection />
    </>
  );
}
