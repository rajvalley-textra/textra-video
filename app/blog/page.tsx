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

export default function BlogPage() {
  const posts = [
    {
      title: 'Level Up Your Learning: How Animated Videos Make E-Learning Unforgettable',
      excerpt: 'Discover why animated videos are revolutionizing corporate training and employee engagement.',
      category: 'Learning & Development',
      slug: 'level-up-your-learning',
      color: C.blue,
      videoId: '1077894850',
      videoToken: 'fl=pl&fe=cm',
    },
    {
      title: 'Textra: Scale Your Training, Not Your Effort',
      excerpt: 'Create scalable, cost-effective video training content without the traditional production overhead.',
      category: 'Training & Development',
      slug: 'scale-your-training',
      color: C.teal,
      videoId: '1056397509',
      videoToken: '346bb42aa4?fl=pl&fe=cm',
    },
    {
      title: 'The Power of Acted-Out Scenarios in E-Learning',
      excerpt: 'Transform your training with realistic, engaging scenarios that drive better learning outcomes.',
      category: 'Learning Effectiveness',
      slug: 'acted-out-scenarios',
      color: C.blue,
      videoId: '1095042991',
      videoToken: '',
    },
    {
      title: 'AI in the Workplace: Empowering Teams, Not Replacing Them',
      excerpt: 'Discover how AI transforms organizational capability by augmenting human expertise and accelerating meaningful outcomes.',
      category: 'Digital Transformation & AI',
      slug: 'ai-empowering-workforce',
      color: C.blue,
      videoId: '1124858916',
      videoToken: '',
    },
    {
      title: 'Getting Online Made Simple: A Beginner\'s Guide to Digital Connection',
      excerpt: 'Discover how animated learning breaks down digital literacy barriers and empowers everyone to confidently join the online world.',
      category: 'Digital Literacy & Inclusion',
      slug: 'digital-inclusion-getting-online',
      color: C.teal,
      videoId: '1203796244',
      videoToken: '',
    },
  ];

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff', paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
              Blog
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Insights and best practices for creating engaging video content and transforming your training strategy.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  textDecoration: 'none',
                  background: '#fff',
                  border: `1px solid ${C.gray200}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'all 300ms ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = post.color;
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(102,188,173,0.12)`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.gray200;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'none';
                }}>
                {/* Vimeo Video Preview */}
                <div
                  style={{
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                    paddingBottom: '56.25%',
                    background: '#000',
                    overflow: 'hidden',
                  }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${post.videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: 12,
                      pointerEvents: 'none',
                    }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={post.title}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    flex: 1,
                  }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        background: post.color,
                      }}
                    />
                    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gray500 }}>
                      {post.category}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 16, fontWeight: 700, color: C.navy, lineHeight: 1.3, margin: 0 }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 13, color: C.gray600, lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.excerpt}
                  </p>
                  <div style={{ marginTop: 'auto', paddingTop: 12, borderTop: `1px solid ${C.gray100}` }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: post.color, pointerEvents: 'none' }}>
                      Read Article →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: C.gray50, padding: '60px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: C.navy, marginBottom: 16 }}>
              Ready to transform your content?
            </h2>
            <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.7, marginBottom: 32 }}>
              Discover how Textra can help you create engaging video content at scale.
            </p>
            <a
              href="mailto:sales@textra.video?subject=Learn More About Textra"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: C.teal,
                color: '#fff',
                padding: '14px 28px',
                borderRadius: 9999,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 15,
                transition: 'all 200ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(102,188,173,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              Book a Demo
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
