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

export default function MediaPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'Case Studies' | 'Articles & Interviews' | 'Company News' | 'Talks'>('all');

  const posts = [
    { title: 'Are you ANTI-AI?', excerpt: 'When your brand is your value, AI efficiency without brand safety leaves you with AI-slop. 62% of CEOs cite rogue AI as their biggest risk. Here\'s how to get AI speed without sacrificing brand integrity.', category: 'Articles & Interviews', slug: 'are-you-anti-ai', color: C.navy, videoId: '', videoToken: '', image: '/media/are-you-anti-ai/card.png' },
    { title: 'The PDF Paradox: Why Enterprises Ignore What They Already Know', excerpt: 'The data is unambiguous: video retention is 95%, text retention is 10%. Yet 80% of enterprises still default to PDFs. Here\'s why the gap between knowing and doing persists—and how to close it.', category: 'Articles & Interviews', slug: 'the-pdf-paradox', color: C.teal, videoId: '', videoToken: '', image: '/media/the-pdf-paradox/card.png' },
    { title: 'Your Compliance Training Is Costing You Money', excerpt: 'Every week it doesn\'t match reality. Policy changes. Market shifts. New regulations. But training always lags by 4–6 months. By launch, half is outdated. Here\'s the hidden cost and the fix.', category: 'Articles & Interviews', slug: 'compliance-training-staleness', color: C.blue, videoId: '', videoToken: '', image: '/media/compliance-training-staleness/card.png' },
    { title: '5 Reasons Your Training Videos Fail', excerpt: 'Not because the idea is bad. Because of five specific things everyone gets wrong. Too long. Overproduced. One-way broadcast. Inconsistent. Stale. Here\'s the fix.', category: 'Articles & Interviews', slug: '5-reasons-training-videos-fail', color: C.blue, videoId: '', videoToken: '', image: '/media/5-reasons-training-videos-fail/card.png' },
    { title: 'Speed & Quality Aren\'t Tradeoffs', excerpt: 'How we built systems instead of hiring people, and what that means for production at scale. Amazon and DfE are doing what was supposed to be impossible.', category: 'Articles & Interviews', slug: 'speed-quality-architecture', color: C.teal, videoId: '', videoToken: '', image: '/media/speed-quality-architecture/card.png' },
    { title: 'Why Amazon Renewed: The Training Renewal That Speaks for Itself', excerpt: 'Amazon doesn\'t renew things that don\'t work. They renewed with us in March. Here\'s how we flipped their training pipeline from weeks to same-day delivery.', category: 'Case Studies', slug: 'amazon-training-renewal-case-study', color: C.teal, videoId: '', videoToken: '', image: '/media/amazon-training-renewal-case-study/card.png' },
    { title: 'Video Learning Retention Gap', excerpt: '80% of learners skim text. Yet that\'s where your most critical company knowledge lives. Video learners retain 95% of information. Text learners retain 10%.', category: 'Articles & Interviews', slug: 'video-learning-retention-gap-2026', color: C.blue, videoId: '', videoToken: '', image: '/media/video-learning-retention-gap-2026/hero.jpg' },
    { title: 'The Future of AI in Video: Ideas, Quality, and the Human Edge', excerpt: 'Insights from Matt Cooper (founder & CEO) on how technology is reshaping video production, what still requires human creativity, and why distribution is becoming the new differentiator.', category: 'Articles & Interviews', slug: 'future-of-ai-in-video', color: C.teal, videoId: 'ut_nW9TMP2k', videoToken: '', isYoutube: true },
    { title: 'Reimagining Local Gov Comms: From Unread Letters to Engaging Video', excerpt: 'Live from Leeds Civic Hall: How councils can transform citizen engagement and protect budgets by replacing unread text letters with compelling video communication.', category: 'Talks', slug: 'leeds-civic-hall-2026', color: C.blue, videoId: '', videoToken: '', image: '/media/leeds-civic-hall-2026/event-hall.jpg' },
    { title: 'Four Insights from Learning Technologies 2026', excerpt: 'After two days at LT26UK, the biggest takeaway wasn\'t hype—it was a clear shift from DIY tools to done-for-you solutions. Here\'s what L&D leaders really want.', category: 'Articles & Interviews', slug: 'lt26uk-2026', color: C.blue, videoId: '', videoToken: '', image: '/media/lt26uk-2026/image1.jpg' },
    { title: 'Textra Video Makes Onstage Top 100', excerpt: 'Officially in the top 5% of 1,600+ global applicants for Onstage S26 Demo Day. We\'re honoured to be recognized as one of the standout companies in the May cohort.', category: 'Company News', slug: 'onstage-top-100-2026', color: C.teal, videoId: '', videoToken: '', image: '/media/onstage-top-100-2026/screenshot.png' },
    { title: 'LT26 Recap: Day Two Highlights', excerpt: 'Closing out Learning Technologies 2026 with momentum from connecting with L&D leaders across financial services, universities, retail, and beyond. Here\'s what we learned.', category: 'Company News', slug: 'lt26uk-day2-2026', color: C.teal, videoId: '', videoToken: '', image: '/media/lt26uk-day2-2026/card.jpg' },
    { title: 'LT26 Day One: Moving Past the Video Bottleneck', excerpt: 'Day One at Learning Technologies 2026: re-engaging with partners and connecting with L&D leaders ready to scale video production without the overhead.', category: 'Company News', slug: 'lt26uk-day1-2026', color: C.teal, videoId: '', videoToken: '', image: '/media/lt26uk-day1-2026/card.jpg' },
    { title: 'One Day to Go: LT26 is Here', excerpt: 'Tomorrow at ExCeL London: See how we\'re moving the goalposts to 24-hour video delivery for L&D. Stand LP10.', category: 'Company News', slug: 'lt26uk-announcement-2026', color: C.teal, videoId: '', videoToken: '', image: '/media/lt26uk-announcement-2026/logo.png' },
    { title: 'Localization at Scale: From Project to Configuration', excerpt: 'When video is built as data rather than footage, global scale becomes a configuration, not a project. How AI speed + human verification transforms localization.', category: 'Articles & Interviews', slug: 'localization-at-scale-2026', color: C.blue, videoId: '', videoToken: '', image: '/media/localization-at-scale-2026/image.jpg' },
    { title: 'The Video Wizard Bottleneck', excerpt: 'Every team has that one person who knows the brand and the software. When they become your single point of failure, true scale becomes impossible—until you build process over person.', category: 'Articles & Interviews', slug: 'video-wizard-bottleneck-2026', color: C.blue, videoId: '', videoToken: '', image: '/media/video-wizard-bottleneck-2026/image.png' },
    { title: 'Transforming Resident Engagement', excerpt: 'Insights from the 5th Local Authority Revenues Innovation Conference at Toynbee Hall, London', category: 'Talks', slug: 'local-authority-conference-2026', color: C.blue, videoId: '', videoToken: '', image: '/media/local-authority-conference-2026/card.jpg' },
    { title: 'Cut Through the Chaos: Messaging That Reaches Busy Audiences', excerpt: 'Master the art of communicating with time-stretched audiences using video that\'s fast, friendly, and actually gets watched.', category: 'Case Studies', slug: 'messaging-for-busy-audiences', color: C.blue, videoId: '1163223157', videoToken: '' },
    { title: 'Getting Online Made Simple: A Beginner\'s Guide to Digital Connection', excerpt: 'Discover how animated learning breaks down digital literacy barriers and empowers everyone to confidently join the online world.', category: 'Case Studies', slug: 'digital-inclusion-getting-online', color: C.teal, videoId: '1203796244', videoToken: '' },
    { title: 'AI in the Workplace: Empowering Teams, Not Replacing Them', excerpt: 'Discover how AI transforms organizational capability by augmenting human expertise and accelerating meaningful outcomes.', category: 'Case Studies', slug: 'ai-empowering-workforce', color: C.blue, videoId: '1124858916', videoToken: '' },
    { title: 'The Power of Acted-Out Scenarios in E-Learning', excerpt: 'Transform your training with realistic, engaging scenarios that drive better learning outcomes.', category: 'Case Studies', slug: 'acted-out-scenarios', color: C.blue, videoId: '1095042991', videoToken: '' },
    { title: 'Textra: Scale Your Training, Not Your Effort', excerpt: 'Create scalable, cost-effective video training content without the traditional production overhead.', category: 'Case Studies', slug: 'scale-your-training', color: C.teal, videoId: '1056397509', videoToken: '346bb42aa4?fl=pl&fe=cm' },
    { title: 'Level Up Your Learning: How Animated Videos Make E-Learning Unforgettable', excerpt: 'Discover why animated videos are revolutionizing corporate training and employee engagement.', category: 'Case Studies', slug: 'level-up-your-learning', color: C.blue, videoId: '1077894850', videoToken: 'fl=pl&fe=cm' },
  ];

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff', paddingTop: 80 }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
              Media
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Case studies, articles, and insights for creating engaging video content and transforming how you communicate.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px 80px' }}>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { label: 'All', value: 'all' as const },
              { label: 'Case Studies', value: 'Case Studies' as const },
              { label: 'Articles & Interviews', value: 'Articles & Interviews' as const },
              { label: 'Talks', value: 'Talks' as const },
              { label: 'Company News', value: 'Company News' as const },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setSelectedCategory(btn.value)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 24,
                  border: selectedCategory === btn.value ? `2px solid ${C.teal}` : `1px solid ${C.gray200}`,
                  background: selectedCategory === btn.value ? C.teal : '#fff',
                  color: selectedCategory === btn.value ? '#fff' : C.navy,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 200ms',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== btn.value) {
                    e.currentTarget.style.borderColor = C.teal;
                    e.currentTarget.style.color = C.teal;
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== btn.value) {
                    e.currentTarget.style.borderColor = C.gray200;
                    e.currentTarget.style.color = C.navy;
                  }
                }}>
                {btn.label}
              </button>
            ))}
          </div>
        </section>

        {/* Posts Grid */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {(() => {
              const filteredPosts = posts.filter((post) => selectedCategory === 'all' || post.category === selectedCategory);
              if (filteredPosts.length === 0) {
                return (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px' }}>
                    <p style={{ fontSize: 16, color: C.gray500 }}>No content in this category yet. Check back soon!</p>
                  </div>
                );
              }
              return filteredPosts.map((post) => (
              <a
                key={post.slug}
                href={`/media/${post.slug}`}
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
                {/* Preview */}
                <div
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '280px',
                    background: post.videoId || post.image ? '#000' : post.color,
                    overflow: 'hidden',
                    borderRadius: 12,
                  }}>
                  {post.videoId ? (
                    <iframe
                      src={post.isYoutube ? `https://www.youtube.com/embed/${post.videoId}?si=r-KgvKHBjPWUMMz-` : `https://player.vimeo.com/video/${post.videoId}?badge=0&autopause=0&player_id=0&app_id=58479`}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        borderRadius: 12,
                        border: 'none',
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={post.title}
                    />
                  ) : post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        borderRadius: 12,
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textAlign: 'center',
                        padding: '20px',
                      }}>
                      <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {post.category}
                      </div>
                    </div>
                  )}
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
              ));
            })()}
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
              Book a personalised demo
            </a>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
