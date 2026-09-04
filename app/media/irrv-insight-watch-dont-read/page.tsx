'use client';
import { useState, type ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: 64, height: 64, borderRadius: 16, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(39,53,114,0.08)', flexShrink: 0 }}>
      {children}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" style={{ flexShrink: 0 }}>
      <path d="M0 7H26M26 7L20 1M26 7L20 13" stroke={C.gray300} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayCircle({ size = 64 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${C.blue} 0%, ${C.teal} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
      <svg width={size * 0.32} height={size * 0.32} viewBox="0 0 24 24" fill="#fff">
        <path d="M6 4L20 12L6 20V4Z" />
      </svg>
    </div>
  );
}

function StatBanner({
  kicker,
  stat,
  statLabel,
  caption,
  children,
}: {
  kicker: string;
  stat: string;
  statLabel: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <div style={{ background: C.gray50, borderRadius: 16, padding: '32px 28px', marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.teal }}>
          {kicker}
        </span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 34, fontWeight: 900, color: C.navy, lineHeight: 1 }}>{stat}</div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gray500, marginTop: 4 }}>
            {statLabel}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        {children}
      </div>
      <div style={{ fontSize: 16, color: C.gray500 }}>{caption}</div>
    </div>
  );
}

function PlatformStrip() {
  const platforms = ['TikTok', 'YouTube', 'Instagram', 'Facebook Reels', 'LinkedIn'];
  return (
    <div style={{ background: `linear-gradient(160deg, ${C.navy} 0%, ${C.blue} 62%, ${C.teal} 100%)`, borderRadius: 16, padding: '32px 28px', marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>
          Platforms Residents Live On
        </span>
        <div style={{ fontSize: 34, fontWeight: 900, color: '#fff', lineHeight: 1 }}>5</div>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        {platforms.map((p, i) => {
          const active = i === 2;
          return (
            <div
              key={p}
              title={p}
              style={{
                flex: 1,
                aspectRatio: '3 / 4',
                borderRadius: 12,
                background: active ? '#fff' : 'rgba(255,255,255,0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? C.navy : 'rgba(255,255,255,0.85)'}>
                <path d="M6 4L20 12L6 20V4Z" />
              </svg>
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)' }}>
        {platforms.join(' · ')} — residents already live here
      </div>
    </div>
  );
}

export default function IRRVInsightWatchDontReadPost() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Technology
            </div>
            <h1 style={{ fontSize: 'clamp(28px, 5.4vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: 24, whiteSpace: 'nowrap' }}>
              Watch Don&apos;t Read — The Results
            </h1>
            <button
              onClick={() => setLightboxOpen(true)}
              aria-label="View larger photo of Dan Pearce"
              style={{
                border: '3px solid rgba(255,255,255,0.6)',
                borderRadius: '50%',
                width: 88,
                height: 88,
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'transparent',
                marginBottom: 20,
              }}>
              <img
                src="/media/irrv-insight-watch-dont-read/dan-pearce.jpg"
                alt="Dan Pearce IRRV"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </button>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Dan Pearce IRRV, writing in Insight, considers how AI-generated explainer videos can transform the way councils communicate with residents
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              Insight — The monthly journal of the Institute of Revenues, Rating and Valuation, September 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              As event and conference season gets into full swing, there has been a great deal of interest from delegates in using video as an effective technique to get responses and engagement from the public.
            </p>

            <p style={{ marginBottom: 32 }}>
              As residents increasingly consume information through short-form video, social platforms and mobile-first content, local authorities face a growing challenge: how to communicate complex messages in ways that are clear, trusted and engaging. Traditional letters, PDFs and lengthy web pages still have their place, but they are no longer enough on their own. This is where platforms using AI from a range of suppliers, including Textra.video, could offer a boost in responses. Having seen them present twice in recent weeks, there is more curiosity from the audience.
            </p>

            <p style={{ marginBottom: 32 }}>
              AI-powered services convert written content, policies and documents into studio-quality animated videos using branded presenters, automated voiceovers and rapid production workflows. They transform static information into engaging, accessible video communications.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Revenues and Recovery
            </h2>

            <StatBanner
              kicker="Revenues & Recovery"
              stat="+30–50%"
              statLabel="Engagement & Retention"
              caption="Instalment plans · direct debit setup · arrears support · Council Tax Support">
              <IconBadge>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="3" width="16" height="18" rx="2" stroke={C.navy} strokeWidth="1.6" />
                  <line x1="7.5" y1="8" x2="16.5" y2="8" stroke={C.navy} strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="7.5" y1="11.5" x2="16.5" y2="11.5" stroke={C.gray300} strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="7.5" y1="15" x2="13" y2="15" stroke={C.gray300} strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="7.5" y1="18" x2="10.5" y2="18" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </IconBadge>
              <Arrow />
              <PlayCircle />
            </StatBanner>

            <p style={{ marginBottom: 32 }}>
              For local authority revenues and benefits teams, the potential impact is significant. Council Tax reminders, benefit entitlement explanations, discount schemes and payment support processes are often difficult for residents to understand. Many people ignore written communications simply because they are too long, too technical or arrive at stressful moments. A short, friendly video explaining what a resident needs to do, what support is available and how to avoid enforcement action could dramatically improve engagement and compliance.
            </p>

            <p style={{ marginBottom: 32 }}>
              In revenues and recovery, video could help explain instalment plans, direct debit setup, arrears support and the consequences of non-payment. Rather than sending multiple pages of text, councils could provide QR codes linking to short animated videos tailored to the resident&apos;s stage in the recovery process. This would help reduce confusion, inbound call volumes and avoidable escalation.
            </p>

            <p style={{ marginBottom: 32 }}>
              Benefits teams could also use video to improve understanding of Universal Credit interactions, Housing Benefit changes, Council Tax Support applications and evidence submission requirements. Residents often struggle to navigate complicated forms and eligibility criteria. Video walkthroughs with simple visual explanations could improve completion rates and reduce errors in applications. Importantly, video also supports digital inclusion by helping residents with lower literacy levels or those who process visual information more effectively.
            </p>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0, fontStyle: 'italic' }}>
                &ldquo;Another important consideration is accessibility.&rdquo;
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Enforcement, Housing and Beyond
            </h2>

            <StatBanner
              kicker="Enforcement, Housing & Beyond"
              stat="<1 Hour"
              statLabel="From Document to Video"
              caption="Parking · environmental enforcement · licensing · repairs · anti-social behaviour reporting">
              <IconBadge>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3L19 5.5V11C19 15.5 16 19 12 21C8 19 5 15.5 5 11V5.5L12 3Z" stroke={C.navy} strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M9 12L11 14L15.5 9.5" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </IconBadge>
              <Arrow />
              <IconBadge>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M4 11L12 4L20 11" stroke={C.navy} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9.5V20H18V9.5" stroke={C.navy} strokeWidth="1.6" strokeLinejoin="round" />
                  <rect x="10" y="14" width="4" height="6" stroke={C.navy} strokeWidth="1.6" />
                </svg>
              </IconBadge>
              <Arrow />
              <PlayCircle size={72} />
            </StatBanner>

            <p style={{ marginBottom: 32 }}>
              Enforcement services could benefit equally. Parking enforcement, environmental enforcement, licensing compliance and debt recovery all rely heavily on public understanding. Educational video campaigns explaining why enforcement exists, how appeals work and how residents can remain compliant would help build trust and reduce perceptions of unfairness.
            </p>

            <p style={{ marginBottom: 32 }}>
              The wider council landscape presents even greater opportunities. Housing teams could use video to explain repairs processes, tenancy obligations and anti-social behaviour reporting. Adult social care could create accessible guidance for carers and families.
            </p>

            <p style={{ marginBottom: 32 }}>
              Another important consideration is accessibility. Video content can include subtitles, multiple languages and simplified narration, helping councils communicate with more diverse communities.
            </p>

            <p style={{ marginBottom: 32 }}>
              There is also growing evidence that animated and visual content improves engagement and retention. The Charity Learning Consortium notes that animated explainer videos can increase engagement by 30–50% while improving knowledge retention. For local authorities, this means residents are more likely to remember important information, complete required actions and understand available support.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              A Permanent Shift in Expectations
            </h2>

            <PlatformStrip />

            <p style={{ marginBottom: 32 }}>
              Critically, local authorities must recognise that public expectations around communication have changed permanently. Residents now consume news, advice and educational content through TikTok, YouTube, Instagram, Facebook Reels and LinkedIn video. Government and public services compete for attention in the same digital ecosystem as commercial brands and media outlets.
            </p>

            <p style={{ marginBottom: 32 }}>
              This does not mean councils should abandon traditional channels. Instead, video should become part of a wider omnichannel communication strategy. A Council Tax letter could include a QR code linking to a personalised explainer video. A benefits email could contain a short, animated walkthrough. Social media campaigns could reinforce key public service messages using concise, branded video snippets. The goal is clarity, trust and accessibility.
            </p>

            <p style={{ marginBottom: 32 }}>
              There is also an internal benefit for councils themselves. Video can reduce repeat enquiries, improve self-service uptake and free frontline officers from answering the same questions repeatedly. In a period of ongoing budget pressures and rising demand, smarter communication becomes an operational efficiency tool as much as a resident engagement strategy.
            </p>

            <p style={{ marginBottom: 32 }}>
              As public behaviour continues shifting toward video-first content consumption, councils that embrace accessible, engaging and scalable communication methods will be better placed to build trust, improve compliance and deliver services more effectively in the digital age.
            </p>

            <p style={{ marginBottom: 32, fontSize: 13, color: C.gray500 }}>
              Dan Pearce IRRV is Director of Sales and Business Development at Telsolutions, a company that provides customer contact technology and services specifically designed for income recovery and customer engagement applications. This article first appeared in Insight, the monthly journal of the Institute of Revenues, Rating and Valuation, September 2026.
            </p>

            <GetInTouchCTA
              postUrl="https://www.textra.video/media/irrv-insight-watch-dont-read"
              postTitle="Watch Don't Read — The Results"
            />
          </div>
        </section>
      </main>

      <FooterSection />

      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close photo"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15,20,40,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 24,
            cursor: 'zoom-out',
          }}>
          <img
            src="/media/irrv-insight-watch-dont-read/dan-pearce.jpg"
            alt="Dan Pearce IRRV"
            style={{ maxWidth: 480, width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
          />
        </div>
      )}
    </>
  );
}
