'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function TrainingVideoFailuresPost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Articles & Interviews
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              5 Reasons Your Training Videos Fail
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Not because the idea is bad. Because of five specific things everyone gets wrong.
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              August 3, 2026
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <p style={{ marginBottom: 32 }}>
              You invested in training videos. The production looked good. The script was solid. The team approved it.
            </p>

            <p style={{ marginBottom: 32 }}>
              Then it went live. Completion rates tanked. Engagement was nonexistent. People didn't retain anything.
            </p>

            <p style={{ marginBottom: 32 }}>
              Your video didn't fail because the idea was bad. It failed because of five specific mistakes that almost every training program makes. The good news? They're all fixable.
            </p>

            {/* Hero image placeholder */}
            <img
              src="/media/5-reasons-training-videos-fail/hero.png"
              alt="5 Reasons Training Videos Fail"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Reason #1: Too Long
            </h2>

            <p style={{ marginBottom: 24 }}>
              <strong>The mistake:</strong> Your training video is 8 minutes long. It covers everything. Every detail. Every edge case. You packed the entire manual into video form.
            </p>

            <p style={{ marginBottom: 24 }}>
              <strong>Why it fails:</strong> People skim. They don't watch. Research shows that attention spans collapse after the 2-minute mark. By minute 3, half your audience has checked out.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The fix:</strong> Keep training videos under 2 minutes. One concept. One learning outcome. One action the viewer should take. If you need to cover more, make multiple videos. Short videos that stick beat long videos that nobody finishes.
            </p>

            {/* Reason 1 image placeholder */}
            <img
              src="/media/5-reasons-training-videos-fail/reason-1-length.png"
              alt="Why long training videos fail"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Reason #2: Overproduced
            </h2>

            <p style={{ marginBottom: 24 }}>
              <strong>The mistake:</strong> You hired a production company. They brought in a voiceover actor with that deep, formal training-video voice. Orchestral music. Slick transitions. It looks like a corporate broadcast.
            </p>

            <p style={{ marginBottom: 24 }}>
              <strong>Why it fails:</strong> People can smell inauthenticity. Corporate voiceovers feel hollow. Orchestral music feels distant. Slick production distances the trainer from the trainee. It says "this is a broadcast" not "this is for you."
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The fix:</strong> Get to the point. Use natural speech. Show real people solving real problems. Skip the production theater. A simple animated explainer or a straightforward screen recording from your actual subject matter expert beats a polished production that nobody connects with.
            </p>

            {/* Reason 2 image placeholder */}
            <img
              src="/media/5-reasons-training-videos-fail/reason-2-overproduced.png"
              alt="Overproduction in training videos"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Reason #3: One-Way Broadcast
            </h2>

            <p style={{ marginBottom: 24 }}>
              <strong>The mistake:</strong> You made a video and uploaded it. People press play. For 5 minutes, it's just them watching. No interaction. No questions. No pause moments. They zone out.
            </p>

            <p style={{ marginBottom: 24 }}>
              <strong>Why it fails:</strong> Learning isn't passive. It requires engagement. When there's no pause point, no moment to reflect, no chance to answer a question, the brain goes into skim mode. You're teaching to an audience that stopped listening at minute 1.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The fix:</strong> Build in interaction. Pause moments. Mini-quizzes. Ask them to think about how this applies to their job. Use animation or callouts that make them react. Make them part of the story, not spectators watching it.
            </p>

            {/* Reason 3 image placeholder */}
            <img
              src="/media/5-reasons-training-videos-fail/reason-3-broadcast.png"
              alt="One-way broadcast training fails"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Reason #4: Inconsistent Visual Style
            </h2>

            <p style={{ marginBottom: 24 }}>
              <strong>The mistake:</strong> Team A created training videos with 3D animation. Team B used live-action footage. Team C grabbed random stock video. Your training library looks like five different companies made it.
            </p>

            <p style={{ marginBottom: 24 }}>
              <strong>Why it fails:</strong> Inconsistency is disjointing. Your brain expects consistency. When every video looks different, it breaks the flow. People have to adjust to a new visual language every time. That cognitive load adds up. They get tired.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The fix:</strong> Enforce visual consistency. One animation style. One color palette. One motion language. When all your training videos feel like they're from the same system, the learner can focus on the content, not on adjusting to a new visual grammar every 5 minutes.
            </p>

            {/* Reason 4 image placeholder */}
            <img
              src="/media/5-reasons-training-videos-fail/reason-4-consistency.png"
              alt="Inconsistent visual style in training"
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 40,
                height: 'auto',
                display: 'block',
              }}
            />

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Reason #5: 18-Month Update Cycle
            </h2>

            <p style={{ marginBottom: 24 }}>
              <strong>The mistake:</strong> You made a training video in January. By the time it's approved and published, it's March. By June, the product has changed. By August, half the information is stale. By December, it's completely outdated. But it takes 6 months to get approval for a new version.
            </p>

            <p style={{ marginBottom: 24 }}>
              <strong>Why it fails:</strong> Training doesn't stick when it's about yesterday's version. People watch outdated training and either can't apply it or apply it wrong. They lose trust. They stop watching your videos because they learned the hard way that they're not current.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The fix:</strong> Build a system where videos can be updated fast. Not 18 months. Not 6 months. Weeks. Days if something critical changes. Modular content helps. When you can swap out one section without re-shooting the entire thing, you stay current. Your training stays relevant.
            </p>

            {/* Reason 5 image placeholder */}
            <img
              src="/media/5-reasons-training-videos-fail/reason-5-updates.png"
              alt="Outdated training videos"
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
                The good news: these five failures aren't accidents. They're choices. Fix them, and your training videos go from ignored to indispensable.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              Which One Is Tanking Your Program?
            </h2>

            <p style={{ marginBottom: 32 }}>
              Most training programs fail on at least two of these. Some fail on all five.
            </p>

            <p style={{ marginBottom: 32 }}>
              Look at your current training videos. Which of these five are you doing wrong?
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>1️⃣</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  Are your videos too long? Cut them in half.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>2️⃣</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  Do they feel overproduced? Get authentic.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>3️⃣</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  Are they one-way broadcasts? Build in interaction.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>4️⃣</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  Do they look disjointed? Create a visual system.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>5️⃣</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  Are they stale by launch? Fix your update cycle.
                </p>
              </div>
            </div>

            <p style={{ marginBottom: 32 }}>
              Fix these five things, and suddenly your training videos stop being corporate background noise and start being the resource people actually want to watch.
            </p>

            <div style={{ background: C.gray50, padding: 32, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginTop: 40, marginBottom: 32 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: C.navy, margin: 0 }}>
                Training that lands doesn't happen by accident. It happens when you stop making videos and start building systems for learning.
              </p>
            </div>

            <GetInTouchCTA
              postUrl="https://www.textra.video/media/5-reasons-training-videos-fail"
              postTitle="5 Reasons Your Training Videos Fail"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
