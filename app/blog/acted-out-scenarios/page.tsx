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
      fetch('https://vimeo.com/api/oembed.json?url=https://vimeo.com/1095042991')
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
              Learning Effectiveness
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              The Power of Acted-Out Scenarios in E-Learning
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Transform your training with realistic, engaging scenarios that drive better learning outcomes.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Acted-out scenarios make learning more relatable, memorable, and ultimately, more effective. By presenting information through realistic situations, organizations can create powerful learning experiences that drive real change.
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
                src="https://player.vimeo.com/video/1095042991?badge=0&autopause=0&player_id=0&app_id=58479"
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
                title="The Power of Acted-Out Scenarios in E-Learning"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why Are Scenarios So Potent for Learning and Retention?
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Real-World Relevance
              </h3>
              <p style={{ marginBottom: 0 }}>
                Acted-out situations bridge the gap between theory and practice. By seeing how concepts apply in realistic contexts, learners can better understand their relevance and how to apply them in their own lives or work. For example, instead of just reading about customer service best practices, watching an animated scenario of a customer interaction and its successful resolution makes the principles tangible.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Emotional Connection and Engagement
              </h3>
              <p style={{ marginBottom: 0 }}>
                Stories and scenarios naturally draw us in. We empathize with characters, become invested in their challenges, and are more likely to pay attention and remember the outcomes. This emotional engagement creates a deeper connection with the learning material.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Visual and Auditory Learning
              </h3>
              <p style={{ marginBottom: 0 }}>
                Acted-out scenarios cater to both visual and auditory learners. Seeing and hearing the information presented in a dynamic way reinforces understanding and caters to different learning styles.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Improved Comprehension of Complex Dynamics
              </h3>
              <p style={{ marginBottom: 0 }}>
                Complex processes, interpersonal interactions, or decision-making frameworks can be difficult to grasp through text alone. Acted-out scenarios can break these down visually, making them easier to understand and remember. Imagine learning about conflict resolution by watching animated characters navigate a disagreement.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Safe Space for Learning from Mistakes
              </h3>
              <p style={{ marginBottom: 0 }}>
                Scenarios can present opportunities to see the consequences of different actions without real-world risks. Learners can observe what works and what doesn't, fostering critical thinking and problem-solving skills in a safe environment.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Traditional Hurdle: Time, Cost, and Logistics
            </h2>

            <p style={{ marginBottom: 32 }}>
              Traditionally, creating acted-out scenarios for learning has been a significant undertaking. Hiring actors, finding locations, setting up cameras, filming, and editing can be expensive and time-consuming, putting this powerful learning tool out of reach for many organizations.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Textra: Lights, Camera, Action – Without the Hollywood Budget!
            </h2>

            <p style={{ marginBottom: 24 }}>
              This is where Textra revolutionizes the game. By allowing you to easily transform text-based content into engaging animated videos with customizable characters and scenarios, Textra removes the traditional barriers to creating this highly effective form of learning.
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                No Need for Actors or Locations
              </h3>
              <p style={{ marginBottom: 0 }}>
                Textra provides a diverse library of animated characters and customizable backgrounds, eliminating the need to hire actors or scout locations. You can bring your scenarios to life digitally, saving significant time and money.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Rapid Scenario Creation
              </h3>
              <p style={{ marginBottom: 0 }}>
                Instead of writing scripts for actors and coordinating shoots, you can focus on crafting the learning scenario in text. Textra then animates your words, making the creation process incredibly fast and efficient.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Easy Iteration and Updates
              </h3>
              <p style={{ marginBottom: 0 }}>
                Need to tweak a scenario based on feedback or updated information? With Textra, it's as simple as editing the text and regenerating the video. No need to re-shoot entire scenes.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Consistent Visual Style
              </h3>
              <p style={{ marginBottom: 0 }}>
                Maintain a consistent brand and visual identity across all your learning scenarios with Textra's customizable characters and branding options.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Focus on Learning Outcomes
              </h3>
              <p style={{ marginBottom: 0 }}>
                By removing the logistical complexities of traditional video production, Textra allows you to focus on the pedagogical design of your scenarios, ensuring they are engaging, effective, and directly contribute to learning objectives.
              </p>
            </div>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Imagine turning a dry HR policy document into a series of animated scenarios demonstrating appropriate workplace conduct, or transforming a technical manual into step-by-step visual guides with animated characters performing the tasks. Textra makes this not just possible, but remarkably quick and cost-effective.
              </p>
            </div>

            <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 32 }}>
              Stop imagining and start engaging! With Textra, you can leverage the power of acted-out scenarios to boost learning and retention without the traditional overhead, making your e-learning content more impactful and your training programs more successful. It's time to bring your learning to life, effortlessly.
            </p>

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
