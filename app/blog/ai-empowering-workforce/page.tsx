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
              Digital Transformation & AI
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              AI in the Workplace: Empowering Teams, Not Replacing Them
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Discover how AI transforms organizational capability by augmenting human expertise and accelerating meaningful outcomes.
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              The conversation around AI in the workplace often centers on anxiety—fear that automation will eliminate jobs and diminish human value. Yet forward-thinking organizations are reframing AI entirely: not as a replacement tool, but as an enabler that magnifies human capability. When deployed thoughtfully, AI doesn't displace talent; it liberates it.
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
                src="https://player.vimeo.com/video/1124858916?badge=0&autopause=0&player_id=0&app_id=58479"
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
                title="AI in the Workplace"
              />
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Real Value of AI: Augmentation Over Automation
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Streamlining Complex Processes
              </h3>
              <p style={{ marginBottom: 0 }}>
                AI excels at processing vast datasets, identifying patterns, and synthesizing insights that would take humans weeks to uncover. In research and development, this means faster problem-solving and accelerated decision-making. Teams shift from data hunting to strategic thinking.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Uncovering Insights at Scale
              </h3>
              <p style={{ marginBottom: 0 }}>
                Complex data that was previously too unwieldy to analyze becomes navigable. AI surfaces hidden correlations and trends, giving experts the intelligence they need to make better decisions faster. The result: improved outcomes delivered with greater confidence.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Reclaiming Time for High-Value Work
              </h3>
              <p style={{ marginBottom: 0 }}>
                When AI handles routine analysis and data processing, knowledge workers reclaim hours previously spent on administrative tasks. This freed capacity redirects toward creative problem-solving, strategic planning, and work that genuinely requires human judgment—the work that matters most.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Shifting the Mindset: Tool, Not Threat
            </h2>

            <p style={{ marginBottom: 32 }}>
              The difference between organizations that thrive with AI and those that struggle often comes down to culture. Companies that position AI as a tool—something that amplifies team capability—see faster adoption, greater innovation, and stronger employee engagement. Those that frame it as a cost-cutting measure face resistance and lose talent.
            </p>

            <p style={{ marginBottom: 32 }}>
              The most successful deployments emphasize upskilling and collaboration. Employees learn to work alongside AI systems, discovering how to leverage the technology to deliver better results faster. This partnership approach builds trust and unlocks genuine organizational transformation.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Real-World Impact: Faster Outcomes, Greater Purpose
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Accelerating Research and Development
              </h3>
              <p style={{ marginBottom: 0 }}>
                In regulated industries like pharmaceuticals, AI dramatically reduces the time required to analyze research data and identify promising compounds. What previously took months can now be accomplished in weeks, meaning new medicines reach patients faster.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Enabling Evidence-Based Decision Making
              </h3>
              <p style={{ marginBottom: 0 }}>
                AI provides the data clarity needed for confident, strategic decisions. Leaders can act on deeper insights rather than intuition, reducing risk and improving outcomes across the organization.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                Purpose-Driven Outcomes
              </h3>
              <p style={{ marginBottom: 0 }}>
                When teams focus on strategy and innovation rather than manual data processing, their work becomes more fulfilling. AI doesn't just improve efficiency—it creates space for purpose-driven work that resonates with employees and stakeholders alike.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Building an AI-Ready Culture
            </h2>

            <p style={{ marginBottom: 24 }}>
              Organizations ready to harness AI's potential invest in three critical areas:
            </p>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                1. Transparent Communication
              </h3>
              <p style={{ marginBottom: 0 }}>
                Clear dialogue about AI's role—augmentation, not replacement—builds psychological safety and engagement. Employees who understand the "why" become advocates rather than resisters.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                2. Continuous Upskilling
              </h3>
              <p style={{ marginBottom: 0 }}>
                Training programs that teach teams how to collaborate with AI systems ensure adoption succeeds and capability grows. This investment in people signals genuine commitment to their future.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 12 }}>
                3. Thoughtful Implementation
              </h3>
              <p style={{ marginBottom: 0 }}>
                Rolling out AI strategically—starting with high-impact, low-risk applications—builds confidence and demonstrates real value before expanding organization-wide.
              </p>
            </div>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                AI isn't about doing more with less. It's about empowering teams to focus on what truly matters—solving complex problems, driving innovation, and delivering outcomes that change lives.
              </p>
            </div>

            <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, marginBottom: 32 }}>
              The organizations winning with AI aren't those cutting costs—they're those amplifying human potential. They're reshaping how work gets done, creating roles that are more strategic, more fulfilling, and ultimately, more valuable. That's the real promise of AI in the workplace: not replacement, but transformation.
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
