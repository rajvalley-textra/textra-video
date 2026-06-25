'use client';
import { useState, useEffect, useRef, CSSProperties } from 'react';
import Player from '@vimeo/player';
import { C, grad, gradHero, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

type Phase = 'doc' | 'process' | 'video';

function AnimatedHeroCard() {
  const [phase, setPhase] = useState<Phase>('doc');
  const [progress, setProgress] = useState(0);
  const [vkey, setVkey] = useState(0);

  useEffect(() => {
    const durations: Record<Phase, number> = { doc: 3000, process: 1800, video: 3200 };
    const order: Phase[] = ['doc', 'process', 'video'];
    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;
    let raf: number;

    function advance() {
      idx = (idx + 1) % 3;
      const next = order[idx];
      setPhase(next);
      if (next === 'video') setVkey((k) => k + 1);
      if (next === 'process') {
        let start: number | null = null;
        setProgress(0);
        function tick(ts: number) {
          if (!start) start = ts;
          const p = Math.min((ts - start) / durations.process, 1);
          setProgress(p);
          if (p < 1) raf = requestAnimationFrame(tick);
        }
        raf = requestAnimationFrame(tick);
      }
      timer = setTimeout(advance, durations[next]);
    }
    timer = setTimeout(advance, durations.doc);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, []);

  function layerStyle(p: Phase): CSSProperties {
    return {
      position: 'absolute', inset: 0,
      opacity: phase === p ? 1 : 0,
      transition: 'opacity 0.55s cubic-bezier(0,0,0.2,1)',
      pointerEvents: phase === p ? 'auto' : 'none',
    };
  }

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 480, borderRadius: 20, overflow: 'hidden', boxShadow: sh.xl, border: '1px solid rgba(255,255,255,0.12)', aspectRatio: '4/3' }}>

      {/* Doc layer */}
      <div style={{ ...layerStyle('doc'), background: '#fff', padding: '22px 26px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10, borderBottom: `1px solid ${C.gray100}` }}>
          <div style={{ width: 28, height: 36, background: '#eef0f7', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.navy, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Q3_Strategy_Brief.pdf</div>
            <div style={{ fontSize: 9, color: C.gray400, marginTop: 1 }}>42 pages · Modified today</div>
          </div>
          <div style={{ fontSize: 8, fontWeight: 700, background: '#e8ebf5', color: C.gray500, padding: '3px 6px', borderRadius: 3, flexShrink: 0, letterSpacing: '0.04em' }}>PDF</div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.navy, marginBottom: 2 }}>Q3 Strategy Brief — Leadership Team</div>
        {[88, 68, 82, 55, 78, 48, 80, 62].map((w, i) => (
          <div key={i} style={{ height: 7, background: i < 2 ? C.gray200 : C.gray100, borderRadius: 4, width: `${w}%` }} />
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', fontSize: 8, color: C.gray300, paddingTop: 8, borderTop: `1px solid ${C.gray100}` }}>
          <span>Page 1 of 42</span><span>Confidential</span>
        </div>
      </div>

      {/* Processing layer */}
      <div style={{ ...layerStyle('process'), background: 'linear-gradient(160deg, #273572, #1A71B1)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18, padding: 32 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.92)', marginBottom: 5 }}>Converting to branded video...</div>
          <div style={{ fontSize: 10, color: 'rgba(102,188,173,0.85)', lineHeight: 1.5 }}>AI processing · Quality check · Brand match</div>
        </div>
        <div style={{ width: '78%', height: 4, background: 'rgba(255,255,255,0.14)', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ height: '100%', background: grad, borderRadius: 4, width: `${progress * 100}%`, transition: 'width 0.08s linear' }} />
        </div>
        <div style={{ display: 'flex', gap: 14 }}>
          {['AI Processing', 'Brand Match', 'Quality Check'].map((step, i) => {
            const done = progress > (i + 1) / 3;
            return (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 9, color: done ? 'rgba(102,188,173,0.9)' : 'rgba(255,255,255,0.35)', fontWeight: 600, transition: 'color 0.3s ease' }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', border: '1.5px solid', borderColor: done ? '#66BCAD' : 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.3s ease' }}>
                  {done && <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#66BCAD' }} />}
                </span>
                {step}
              </div>
            );
          })}
        </div>
      </div>

      {/* Video layer */}
      <div style={{ ...layerStyle('video'), background: 'linear-gradient(160deg, #1b2558, #273572)', display: 'flex', flexDirection: 'column', padding: '18px 22px' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(26,113,177,0.18), rgba(102,188,173,0.08))', borderRadius: 10 }} />
          <div style={{ position: 'relative', zIndex: 1, width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.14)', border: '2px solid rgba(255,255,255,0.22)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="white" style={{ marginLeft: 2 }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <div style={{ position: 'absolute', top: 6, right: 6, background: grad, padding: '3px 9px', borderRadius: 5, fontSize: 8, fontWeight: 800, color: '#fff', letterSpacing: '0.08em' }}>✓ READY</div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Q3 Strategy Brief — Team Video</div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.42)', marginBottom: 8 }}>On-brand · 3:24 · Delivered under an hour</div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.12)', borderRadius: 3, overflow: 'hidden' }}>
            <div key={vkey} style={{ height: '100%', background: grad, borderRadius: 3, animation: 'vidProg 3.2s ease-out forwards' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
            <span>0:00</span><span>3:24</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const trustItems: [string, string][] = [
  ['Under 1hr', 'Delivery SLA'],
  ['30+', 'Languages'],
  ['30–50%', 'Engagement uplift'],
  ['Subtitles', 'Included'],
  ['On-Brand', 'Every video'],
  ['Enterprise', 'Grade security'],
];

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [heroPlaying, setHeroPlaying] = useState(false);
  const heroIframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    if (!heroIframeRef.current) return;
    const player = new Player(heroIframeRef.current);
    player.on('play', () => setHeroPlaying(true));
    player.on('pause', () => setHeroPlaying(false));
    return () => {
      player.unload?.();
    };
  }, []);

  return (
    <>
    <section id="hero" style={{ background: gradHero, minHeight: '100vh', paddingTop: 70, display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />
      {/* Blobs */}
      <div style={{ position: 'absolute', top: -140, right: -100, width: 600, height: 600, borderRadius: '50%', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -60, width: 340, height: 340, borderRadius: '50%', background: 'rgba(102,188,173,0.09)', pointerEvents: 'none' }} />

      <div className="hero-grid wrap-pad" style={{ ...WRAP, width: '100%', display: 'grid', gridTemplateColumns: '55fr 45fr', gap: 64, alignItems: 'center', padding: '80px 40px' }}>
        {/* Left */}
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(102,188,173,0.92)', marginBottom: 18 }}>
            Enterprise Video Platform
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 900, color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em', margin: '0 0 22px 0' }}>
            Don't be lifeless...{' '}
            <em style={{ fontStyle: 'italic', color: '#fff' }}>get animated</em>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.76)', lineHeight: 1.7, margin: '0 0 36px 0', fontWeight: 400 }}>
            Turn boring documents into studio-quality video in under an hour.{' '}
            No crew. No delays. No compromise on brand.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 48 }}>
            <a
              href="mailto:sales@textra.video?subject=Book a Demo - Website"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', color: C.navy, borderRadius: 9999, padding: '14px 28px', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', transition: 'transform 200ms, box-shadow 200ms' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.18)'; }}
            >
              Book a Demo
            </a>
            <button
              onClick={() => setShowModal(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'transparent', color: '#fff', borderRadius: 9999, padding: '14px 28px', fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.32)', transition: 'border-color 200ms, background 200ms', cursor: 'pointer' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.32)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Watch Showreel
            </button>
          </div>

          {/* Trust metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {trustItems.map((item, i) => (
              <div key={item[0]} style={{ paddingRight: 0, marginRight: 0, borderRight: 'none', whiteSpace: 'nowrap' }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{item[0]}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 4, lineHeight: 1.3 }}>{item[1]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div
            style={{ position: 'relative', width: '100%', maxWidth: 560, borderRadius: 20, overflow: 'hidden', boxShadow: sh.xl, border: '1px solid rgba(255,255,255,0.12)', aspectRatio: '4/3' }}
          >
            <iframe
              ref={heroIframeRef}
              src="https://player.vimeo.com/video/1077894850"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ display: 'block' }}
            />
            <button
              className="fullscreen-btn"
              onClick={() => {
                const iframe = heroIframeRef.current;
                if (!iframe) return;
                if (iframe.requestFullscreen) {
                  iframe.requestFullscreen();
                } else if ((iframe as any).webkitRequestFullscreen) {
                  (iframe as any).webkitRequestFullscreen();
                }
                // If none of the above are supported (e.g. iOS Safari), do nothing —
                // the Vimeo player's own built-in fullscreen control is still available.
              }}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                zIndex: 10,
                width: 32,
                height: 32,
                borderRadius: 6,
                border: 'none',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                transition: 'opacity 200ms, background 200ms',
                opacity: heroPlaying ? 1 : 0,
                pointerEvents: heroPlaying ? 'auto' : 'none',
              }}
              title="Fullscreen"
            >
              ⛶
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>Textra Video· <span style={{ color: 'rgba(102,188,173,0.9)' }}>Fast · Studio-quality · On-brand</span></div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.06em' }}>Any document → Branded video · Delivered under an hour</div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.45 }}>
        <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff' }}>Scroll</div>
        <svg width="14" height="20" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="white" strokeWidth="1.5"/>
          <circle cx="7" cy="6" r="2" fill="white">
            <animate attributeName="cy" values="6;14;6" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
    </section>

    {showModal && (
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '20px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 1200, aspectRatio: '16/9' }}>
          <button
            onClick={() => setShowModal(false)}
            style={{ position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer', fontWeight: 'bold' }}
          >
            ✕
          </button>
          <iframe
            src="https://player.vimeo.com/video/1077894850?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Textra Promo"
            style={{ borderRadius: 8 }}
          />
        </div>
      </div>
    )}
    </>
  );
}
