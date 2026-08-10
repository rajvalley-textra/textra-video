'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function LT26UKDay1Post() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Company News
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              LT26 Day One: Moving Past the Video Bottleneck
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Day One at Learning Technologies 2026: connecting with L&D leaders ready to scale video production
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              April 29, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              Day One at Learning Technologies Exhibition & Conference was incredible! We've spent the day re-engaging with our amazing partners and meeting a new wave of L&D leaders who are ready to move past the "video bottleneck" for good.
            </p>

            {/* Image 1 */}
            <img
              src="/media/lt26uk-day1-2026/image1.jpg"
              alt="Learning Technologies Day One"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Question Everyone's Asking
            </h2>

            <p style={{ marginBottom: 32 }}>
              "How can we actually scale video without a massive team?"
            </p>

            <p style={{ marginBottom: 32 }}>
              We've been sharing how we've helped brands like <strong>Amazon, Cisco, and Department for Education</strong> move 10x faster than traditional workflows.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Why You Need to Stop by Stand LP10 Tomorrow
            </h2>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>9x Average Savings</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Enterprise projects are slashing costs while increasing output
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Zero Training Required</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Our 3-stage process (Onboard → Upload → Download) delivers studio-quality, on-brand video from just your text documents
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>✅</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>100% Built for eLearning</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    No "hallucinations" or generic templates—just brand-compliant animated content tailored for your learning goals
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <img
              src="/media/lt26uk-day1-2026/image2.jpg"
              alt="Textra at Learning Technologies"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Part of the Extend Program
            </h2>

            <p style={{ marginBottom: 32 }}>
              We are proud to be part of the <strong>Extend program with Cornerstone OnDemand</strong>, working alongside innovative partners including Mindtools Kineo, Learning Nexus, and Jam Pan.
            </p>

            <p style={{ marginBottom: 32 }}>
              This partnership reinforces our commitment to delivering best-in-class solutions for enterprise L&D teams who want to move faster, scale smarter, and maintain brand compliance every step of the way.
            </p>

            {/* Image 3 */}
            <img
              src="/media/lt26uk-day1-2026/image3.jpg"
              alt="Cornerstone OnDemand partnership"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Let's Talk About Your 2026 Roadmap
            </h2>

            <p style={{ marginBottom: 32 }}>
              If you're looking for a hassle-free way to turn your static training materials into engaging video, come say hi tomorrow at Stand LP10. Let's grab a coffee and look at your 2026 content roadmap.
            </p>

            <p style={{ marginBottom: 32 }}>
              See you for Day Two! ✌️
            </p>

            {/* Image 4 */}
            <img
              src="/media/lt26uk-day1-2026/image4.jpg"
              alt="Learning Technologies experience"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                📍 Find us at Stand LP10 — ready to help you scale your e-learning without the team overhead.
              </p>
            </div>

            <p style={{ marginBottom: 32 }}>
              To hear more about Textra and how we can help your organization, get in touch with Steve Godman, our Chief Revenue Officer.
            </p>

            <div style={{ marginBottom: 40 }}>
              <a
                href="https://www.linkedin.com/posts/textra-video_lt26uk-learningtechnologies-videolearning-activity-7455360371751682048-Yc6v?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAASqaYBawf_adnyzq74HUA1GPRD8uiCXKI"
                target="_blank"
                rel="noopener noreferrer"
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
                Read on LinkedIn →
              </a>
            </div>

            <GetInTouchCTA
              postUrl="https://www.textra.video/media/lt26uk-day1-2026"
              postTitle="LT26 Day One: Moving Past the Video Bottleneck"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
