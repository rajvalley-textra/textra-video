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
      fetch('https://vimeo.com/api/oembed.json?url=https://vimeo.com/1056397509')
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
              Training & Development
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Textra: Scale Your Training, Not Your Effort
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Create scalable, cost-effective video training content without the traditional production overhead.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Creating effective e-learning content can be time-consuming and resource-intensive. Textra solves this challenge by transforming text documents into animated videos while keeping your materials up-to-date without excessive resource investment.
            </p>

            {/* Video Embed */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '56.25%',
                background: '#000',
                borderRadius: 12,
                overflow: 'hidden',
                marginBottom: 40,
              }}>
              <iframe
                src="https://player.vimeo.com/video/1056397509?badge=0&autopause=0&player_id=0&app_id=58479"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: 12,
                }}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Scale Your Training, Not Your Effort"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Five Key Benefits of Textra
            </h2>

            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                1. Rapid Content Creation
              </h3>
              <p style={{ marginBottom: 0 }}>
                Converting existing materials like HR manuals and policy documents into videos eliminates traditional production steps, significantly reducing time and effort compared to conventional video production methods.
              </p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                2. Easy Updates and Maintenance
              </h3>
              <p style={{ marginBottom: 0 }}>
                When information changes (as it inevitably does!), updating a text document is often far quicker and easier than re-shooting and re-editing a traditional video. Your training stays current without the expense.
              </p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                3. Consistent Branding and Messaging
              </h3>
              <p style={{ marginBottom: 0 }}>
                The platform enables uniform visual styles and character sets across all video content, reinforcing brand identity throughout scaled training programs and creating a cohesive employee learning experience.
              </p>
            </div>

            <div style={{ marginBottom: 40 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                4. Wider Reach and Accessibility
              </h3>
              <p style={{ marginBottom: 0 }}>
                Video content with captions reaches broader audiences than text alone, improving participation across organizations with varying learning preferences and supporting diverse learning styles.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                5. Cost-Effective Solution
              </h3>
              <p style={{ marginBottom: 0 }}>
                This approach proves significantly more affordable than traditional video production involving studios, actors, and editing software, making it accessible to organizations of all sizes.
              </p>
            </div>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}` }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Embrace video's engaging potential efficiently and scalably. Transform your training strategy without transforming your budget.
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


      <FooterSection />
    </>
  );
}
