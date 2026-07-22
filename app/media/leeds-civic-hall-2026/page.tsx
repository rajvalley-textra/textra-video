'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

export default function LeedsCivicHallTalk() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Talk
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Reimagining Local Gov Comms: From Unread Letters to Engaging Video
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Live from Leeds Civic Hall: How local authorities can transform digital citizen engagement and protect budgets with video-first communication.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              June 4, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              At the Innovations in Revenues Conference 2026 at Leeds Civic Hall, Textra Video and our partner Telsolutions Ltd revealed a critical communication problem facing local authorities — and the video-powered solution that's already transforming how councils reach citizens.
            </p>

            {/* Event Image */}
            <img
              src="/media/leeds-civic-hall-2026/event-hall.jpg"
              alt="Leeds Civic Hall conference"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                maxHeight: 450,
                objectFit: 'cover',
                objectPosition: 'center 35%',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Problem: Dead Content
            </h2>

            <p style={{ marginBottom: 24 }}>
              Local authorities face a mounting challenge: rising physical postage prices are hitting budgets hard, yet <strong>80% of citizens ignore the dense text letters</strong> sent to them. Council tax updates, housing policies, benefits changes—critical information that citizens need—are frequently left unread, filed away as "Dead Content."
            </p>

            <p style={{ marginBottom: 32 }}>
              This creates a painful paradox: councils invest heavily in printing and mailing costs while failing to reach the citizens who need the information most.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Solution: Video-First Communication
            </h2>

            <p style={{ marginBottom: 32 }}>
              Instead of dense text letters, councils can turn complex documents into clear, highly engaging, dual-presenter animated videos that citizens actually watch. The shift from "unread" to "watched" isn't just about engagement—it's about effectiveness, accessibility, and fiscal responsibility.
            </p>

            {/* Presentation Image */}
            <img
              src="/media/leeds-civic-hall-2026/presentation.jpg"
              alt="Textra presentation at Leeds Civic Hall"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                maxHeight: 400,
                objectFit: 'cover',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Three Core Benefits
            </h2>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>1. Banish Unread Comms</h3>
              <p style={{ marginBottom: 0 }}>
                Turn complex revenue, housing, or benefits documents into clear, bespoke animated videos that citizens engage with. Dual-presenter format builds trust and improves comprehension.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>2. Protect Budgets</h3>
              <p style={{ marginBottom: 0 }}>
                Replace expensive physical print and mail overhead with rapid, scalable digital distribution. One 24-hour video production cycle replaces weeks of print cycles and mounting postage costs.
              </p>
            </div>

            <div style={{ marginBottom: 32 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12 }}>3. Zero Tech Friction</h3>
              <p style={{ marginBottom: 0 }}>
                Council teams don't need video editing skills or specialist knowledge. Upload a document, and our platform delivers a bespoke, brand-compliant video in 24 hours.
              </p>
            </div>

            {/* Speaking Image */}
            <img
              src="/media/leeds-civic-hall-2026/speaking.jpg"
              alt="Matt Cooper presenting at Leeds Civic Hall"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                maxHeight: 400,
                objectFit: 'cover',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Proven with Enterprise Organizations
            </h2>

            <p style={{ marginBottom: 32 }}>
              Textra already powers video communication for massive public-sector and enterprise organizations including the UK Department for Education, Amazon, and Cisco. We've learned what works at scale: clear writing, strong visuals, strategic distribution, and measurement.
            </p>

            <p style={{ marginBottom: 32 }}>
              Local authorities can access the same quality and speed—tailored for council communications.
            </p>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 40 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                The digital-first approach isn't just better for budgets—it's better for citizens. Information reaches them in a format they'll actually engage with.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Next Steps
            </h2>

            <p style={{ marginBottom: 32 }}>
              If you're a revenues, benefits, housing, or digital transformation officer at a local authority, this is worth exploring. Don't let your critical updates stay trapped in unread letters.
            </p>

            <p style={{ marginBottom: 32 }}>
              We can turn one of your current council guidelines into a custom 60-second summary video sample—no obligation, just proof of what's possible.
            </p>

            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${C.gray200}` }}>
              <a
                href="mailto:sales@textra.video?subject=Local Authority Video Communication"
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
                Request a Video Demo
              </a>
            </div>

            <div style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${C.gray200}`, display: 'flex', gap: 24, alignItems: 'center' }}>
              <a
                href="/media"
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
                ← Back to Media
              </a>
              <a
                href="https://www.linkedin.com/posts/textra-video_innovationsinrevenues2026-localgov-digitaltransformation-activity-7468270665461190657-2OtT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAABxALIBQtdt2gOB8xi0qvDZpcurPtkn9H0"
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
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
