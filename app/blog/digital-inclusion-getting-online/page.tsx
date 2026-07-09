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
              Digital Literacy & Inclusion
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Getting Online Made Simple: A Beginner's Guide to Digital Connection
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Discover how animated learning breaks down digital literacy barriers and empowers everyone to confidently join the online world.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              The internet opens doors to connection, information, and opportunity. Yet for many people—particularly older adults—the barrier to entry feels insurmountable. Unfamiliar terminology, unclear instructions, and intimidating technology can prevent people from ever taking that first step online. When learning is presented clearly and without judgment, everyone can get connected and discover the internet's genuine value.
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
                src="https://player.vimeo.com/video/1203796244?badge=0&autopause=0&player_id=0&app_id=58479"
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
                title="Getting Online: A Beginner's Guide"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why Digital Inclusion Matters
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Connection to Loved Ones
              </h3>
              <p style={{ marginBottom: 0 }}>
                The internet enables video calls with distant family, instant messaging with grandchildren, and the ability to stay close despite physical distance. For isolated individuals, digital connection can be profoundly meaningful and life-changing.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Access to Information and Services
              </h3>
              <p style={{ marginBottom: 0 }}>
                From bus schedules to health information, banking to shopping, the internet provides convenient access to the services people rely on daily. Without digital skills, people are excluded from this efficiency and independence.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Learning and Personal Growth
              </h3>
              <p style={{ marginBottom: 0 }}>
                The internet is a endless repository of knowledge—hobbies, history, skills, entertainment. Getting online opens opportunities for intellectual stimulation, creative expression, and lifelong learning.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Challenge: Demystifying Technology
            </h2>

            <p style={{ marginBottom: 32 }}>
              Technical jargon and complex instructions have excluded millions from digital participation. Terms like "broadband," "browser," and "Wi-Fi" are meaningful once explained—but without clear, judgment-free guidance, they remain mystifying barriers. Many people who want to get online simply don't know where to start.
            </p>

            <p style={{ marginBottom: 32 }}>
              Traditional tech support often moves too quickly or assumes existing knowledge. Generational digital divides widen when instruction isn't thoughtfully designed for adult learners coming to technology for the first time. The result: capable, curious people remain offline by choice simply because getting started felt too complicated.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Breaking Down Barriers with Clear, Engaging Learning
            </h2>

            <p style={{ marginBottom: 24 }}>
              When digital literacy is taught with clarity, patience, and visual demonstration, remarkable transformation happens. Animated video excels here by:
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Making Complex Concepts Visual
              </h3>
              <p style={{ marginBottom: 0 }}>
                Animation shows exactly what happens when you connect to broadband, open a browser, or use Wi-Fi. Seeing the process step-by-step removes mystery and builds confidence before touching a device.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Moving at Learner Pace
              </h3>
              <p style={{ marginBottom: 0 }}>
                Video can be paused, rewound, and revisited as often as needed. There's no pressure, no judgment, no feeling rushed—learners control their own pace of understanding.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Normalizing Beginner Questions
              </h3>
              <p style={{ marginBottom: 0 }}>
                Animated dialogue—like a friend explaining the basics—creates permission for basic questions and removes shame from not already knowing. It's friendly, not condescending.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Building Real Confidence
              </h3>
              <p style={{ marginBottom: 0 }}>
                When learners understand the "why" and "how" of basic internet connectivity before they start, they approach their first online experience with genuine confidence rather than anxiety.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              From Uncertainty to Connection
            </h2>

            <p style={{ marginBottom: 32 }}>
              The impact of bridging the digital divide extends far beyond technology adoption. When someone who felt excluded suddenly gets online and discovers the internet's value—whether it's connecting with grandchildren, researching interests, or managing their own affairs independently—the transformation is profound. They've moved from feeling left behind to feeling capable and connected.
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Digital inclusion isn't just about technology—it's about belonging, opportunity, and independence. Clear, animated learning removes the barriers that keep people offline and unlocks genuine connection to the modern world.
              </p>
            </div>

            <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 32 }}>
              Everyone deserves access to digital opportunity. When learning is presented with clarity, empathy, and engaging visual explanation, there are no impossible learners—only content that hasn't yet met them where they are. That's where animated video transforms digital inclusion from an aspirational goal into an achievable reality.
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
