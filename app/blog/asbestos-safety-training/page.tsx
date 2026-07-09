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
              Workplace Safety & Compliance
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Master Asbestos Management: Essential Training for Workplace Safety
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Protect your team with comprehensive asbestos awareness training that ensures regulatory compliance and safeguards employee health.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Asbestos remains one of the most significant workplace health hazards. Organizations must implement rigorous training and compliance protocols to protect their workforce from potentially devastating exposure. Yet traditional asbestos safety training often falls flat—dense documentation, lengthy presentations, and disengaged employees create gaps in understanding that put people at risk.
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
                src="https://player.vimeo.com/video/891038775?badge=0&autopause=0&player_id=0&app_id=58479"
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
                title="Asbestos Safety Training"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why Asbestos Training Matters
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                The Silent Health Threat
              </h3>
              <p style={{ marginBottom: 0 }}>
                Asbestos exposure poses serious health risks including mesothelioma, lung cancer, and asbestosis. These conditions often develop silently over years, with symptoms appearing decades after initial exposure. This latency period makes preventative training and awareness essential—employees must understand the risks before exposure occurs.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Regulatory Requirements
              </h3>
              <p style={{ marginBottom: 0 }}>
                Organizations are legally required to provide comprehensive asbestos awareness training to employees who may encounter the material. Compliance isn't just about avoiding penalties—it's about demonstrating a genuine commitment to worker safety and protecting your organization from liability.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Real Understanding Prevents Real Harm
              </h3>
              <p style={{ marginBottom: 0 }}>
                Generic compliance checklists don't create real understanding. Employees need to comprehend what asbestos actually is, where it's found, how exposure occurs, and what protective measures work. Engaging, clear training transforms knowledge into safe practices that employees actually follow.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Challenge of Traditional Asbestos Training
            </h2>

            <p style={{ marginBottom: 32 }}>
              Many organizations rely on outdated training methods: dense manuals, lengthy in-person sessions, or generic online modules that employees rush through without retention. The result? Compliance boxes are ticked, but actual awareness and behavior change remain minimal. This disconnect puts workers at risk while the organization assumes it's protected.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Transform Safety Training with Animated Video
            </h2>

            <p style={{ marginBottom: 24 }}>
              Modern asbestos safety training needs to engage, educate, and inspire lasting behavior change. This is where animated video becomes invaluable. By transforming technical compliance requirements into clear, memorable narratives, organizations can achieve genuine understanding and sustained engagement.
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Clarity Over Complexity
              </h3>
              <p style={{ marginBottom: 0 }}>
                Animation breaks down complex concepts into visual, easy-to-follow explanations. What asbestos is, where it's commonly found, how exposure pathways work, and what protective protocols matter—all become instantly clear through engaging visuals rather than dense text.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Engagement That Sticks
              </h3>
              <p style={{ marginBottom: 0 }}>
                People retain visual information far better than text or spoken-only content. Animated narratives capture attention and maintain focus, ensuring employees actually absorb critical safety information rather than passively enduring mandatory training.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Consistent Messaging Across Teams
              </h3>
              <p style={{ marginBottom: 0 }}>
                Every employee receives identical, professionally delivered safety information. No inconsistency. No gaps. This standardization ensures all team members—whether new hires or long-time staff—share the same baseline of asbestos awareness.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Scalability Without Compromise
              </h3>
              <p style={{ marginBottom: 0 }}>
                Whether you're training 10 people or 1,000, animated video delivers consistent quality every time. Expand safety training across departments, locations, or the entire organization without quality degradation or the need to redeliver content multiple times.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Rapid Updates for Changing Requirements
              </h3>
              <p style={{ marginBottom: 0 }}>
                When regulations change or new risks emerge, animated safety training can be updated quickly and cost-effectively. Keep your compliance program current without the expense and delay of traditional re-shoots or rewrites.
              </p>
            </div>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Imagine transforming a dense asbestos compliance manual into a compelling animated narrative that your entire workforce actually watches, understands, and remembers. That's the power of modern safety training—clear, engaging, and genuinely protective.
              </p>
            </div>

            <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 32 }}>
              Stop relying on compliance theater. With animated video, you create genuine asbestos awareness that protects your people, satisfies regulatory requirements, and demonstrates organizational commitment to workplace safety. It's training that actually works.
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
