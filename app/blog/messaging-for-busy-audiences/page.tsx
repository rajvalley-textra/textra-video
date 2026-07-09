'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function BlogPost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Brand Communication & Messaging
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Cut Through the Chaos: Messaging That Reaches Busy Audiences
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Master the art of communicating with time-stretched audiences using video that's fast, friendly, and actually gets watched.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Your audience is busy. Whether they're juggling parenthood, managing a household, or balancing multiple priorities, their attention is fragmented and their time is precious. Long emails get ignored. Dense documentation never gets read. Blog posts disappear into inboxes. If you want your message to land, you need to cut through the noise with something that's quick, engaging, and actually worth their time. That's where modern video messaging becomes essential.
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
                src="https://player.vimeo.com/video/1163223157?badge=0&autopause=0&player_id=0&app_id=58479"
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
                title="Messaging for Busy Audiences"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Attention Crisis: Why Traditional Messaging Fails
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Information Overload
              </h3>
              <p style={{ marginBottom: 0 }}>
                Modern audiences receive dozens of messages daily—emails, notifications, social posts, texts. Static content gets lost in the deluge. Stand out requires format that captures attention instantly and delivers value immediately.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                The Skimming Problem
              </h3>
              <p style={{ marginBottom: 0 }}>
                Even when people open your message, they skim. Long form content gets scanned for key points. Nuance gets missed. Critical context gets lost. By the time someone finishes your email, they've forgotten the opening—and they never internalize your message.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                The Engagement Gap
              </h3>
              <p style={{ marginBottom: 0 }}>
                Text communicates information; video communicates experience. When your message is important enough to matter—whether it's a product launch, vital information, or a brand story—video engagement rates are consistently 5-10x higher than text alone.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Traditional Barrier: Video Takes Too Long
            </h2>

            <p style={{ marginBottom: 32 }}>
              This is where most brands get stuck. Video clearly works—audiences prefer it, engagement soars, messages land better. But traditional video production is prohibitively slow: storyboarding, casting, filming, reshoots, editing. By the time your video launches, the moment has passed. Product launches wait for no one. Seasonal messaging has a window. Sustainability updates need timeliness.
            </p>

            <p style={{ marginBottom: 32 }}>
              Brands end up choosing between impact and speed. Use traditional video and miss the market window. Use static content and watch engagement tank. It's a false choice that leaves money and effectiveness on the table.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Fast, Friendly Video That Actually Gets Made
            </h2>

            <p style={{ marginBottom: 24 }}>
              Modern animated video flips this script entirely. You get the engagement benefits of video—warmth, clarity, entertainment—at the speed your business actually needs.
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Ship at Speed
              </h3>
              <p style={{ marginBottom: 0 }}>
                Turn your script into a finished video in days, not months. No filming logistics. No weather delays. No post-production bottlenecks. When your messaging window is open, you're ready to go.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Effortless Iteration
              </h3>
              <p style={{ marginBottom: 0 }}>
                Need to adjust messaging? Update a few lines of copy and regenerate. A/B test variations. Respond to feedback without scrapping the whole production. This flexibility makes video a genuine business tool, not a one-shot production effort.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Consistent Brand Voice
              </h3>
              <p style={{ marginBottom: 0 }}>
                Animated video preserves your brand personality at scale. Every message—product launch, educational content, sustainability update—carries the same warmth and approachability. Your brand voice becomes truly omnipresent.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Audience-Ready Format
              </h3>
              <p style={{ marginBottom: 0 }}>
                Audiences watch video everywhere—email, social, websites, messaging apps. Animated video works at every size, every context, every device. Your message travels wherever your customers are.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Real-World Impact: Messages That Land
            </h2>

            <p style={{ marginBottom: 24 }}>
              When you can combine video's engagement power with the speed and flexibility of modern production, messaging transforms:
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Product Launches
              </h3>
              <p style={{ marginBottom: 0 }}>
                Announce with a video that explains *why* the product matters, not just *what* it is. Engagement spikes. Pre-orders accelerate. Launch momentum carries forward.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Educational Content
              </h3>
              <p style={{ marginBottom: 0 }}>
                Share weaning tips, how-to guides, best practices—content that audiences actually engage with rather than skim. Video transforms education from push to pull; people *want* to watch.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Values & Sustainability
              </h3>
              <p style={{ marginBottom: 0 }}>
                When you share your sustainability story, brand values, or impact initiatives via video, audiences connect emotionally—not just intellectually. Values marketing actually works when it's presented as human story, not corporate statement.
              </p>
            </div>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Your busy audience isn't ignoring you because they don't care. They're ignoring static content because they're drowning in it. Give them video—fast, friendly, and genuinely worth their time—and watch what actually gets watched.
              </p>
            </div>

            <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 32 }}>
              Stop choosing between speed and impact. Modern video messaging gives you both. Launch faster. Engage deeper. Watch your audience actually receive—and remember—your message.
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
