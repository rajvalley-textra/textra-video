'use client';
import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import GetInTouchCTA from '@/components/media/GetInTouchCTA';
import { C } from '@/lib/theme';

export default function PDFParadoxPost() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#fff' }}>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg, #273572 0%, #1A71B1 62%, #66BCAD 100%)', color: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
              Article
            </div>
            <h1 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              The PDF Paradox
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
              Why Enterprises Ignore What They Already Know
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
              The data is unambiguous. So why isn't everyone using video?
            </p>
          </div>
        </section>

        {/* Content */}
        <section style={{ maxWidth: 800, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 0 }}>
              The Data Is Unambiguous
            </h2>

            <p style={{ marginBottom: 32 }}>
              Retention rates tell a brutal story:
            </p>

            {/* Retention Gap Image */}
            <img
              src="/media/the-pdf-paradox/retention-gap.png"
              alt="Video retention 95% vs Text retention 10%"
              style={{
                width: '100%',
                maxWidth: 350,
                borderRadius: 12,
                marginBottom: 40,
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
                height: 'auto',
              }}
            />

            <p style={{ marginBottom: 32 }}>
              That gap isn't new. It's not contested. The research is twenty years old and has been replicated dozens of times. Yet walk into any Fortune 500 company today and ask how they onboard new employees, communicate policy changes, or deliver compliance training. The answer, overwhelmingly, is the same: <strong>email a PDF</strong>.
            </p>

            <p style={{ marginBottom: 32 }}>
              This isn't ignorance. Nobody at Amazon, HSBC, or GSK is unaware that video works. Their teams have probably read the same reports you have. They know the numbers. They know the gap between 95% and 10% is the gap between knowledge that sticks and knowledge that evaporates.
            </p>

            <div style={{ background: 'rgba(212, 114, 93, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid #d4725d`, marginBottom: 40 }}>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: C.navy }}>
                So why do 80% of enterprises still default to text when they have the evidence—and increasingly, the technology—to do better?
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Answer Isn't Rational. It's Human.
            </h2>

            <p style={{ marginBottom: 32 }}>
              The answer isn't rational. It's human. And understanding that gap is the key to understanding why the enterprise video landscape is about to shift.
            </p>

            <h3 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 16 }}>
              The Comfort of Inertia
            </h3>

            <p style={{ marginBottom: 16 }}>
              Change, even good change backed by data, requires friction. It requires someone to raise their hand and say: "We're going to do this differently now." That person is usually overbooked. The existing system, however broken, works enough. A PDF gets sent. It sits in someone's inbox. Technically, it's documented. Technically, people had access to the information.
            </p>

            <p style={{ marginBottom: 32 }}>
              Video requires infrastructure. It requires coordination between departments. It requires vendors. It requires people to learn new tools. It requires budget that has to come from somewhere. And here's the thing: that initial friction is real and legitimate. It is harder. At least, it used to be.
            </p>

            <p style={{ marginBottom: 32 }}>
              <strong>The psychological comfort of PDFs runs deep:</strong>
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: C.teal, minWidth: 40 }}>•</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>It feels safe.</strong> Text is passive. It can be sent, filed, archived. If someone doesn't read it, that's not your problem—you created it, you sent it, you have proof. Video is active. Someone has to watch it. That means if they don't, it reflects on the creator.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: C.teal, minWidth: 40 }}>•</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>It feels fast.</strong> Writing a document takes time, yes. But it feels faster than producing a video. You don't need specialists. You don't need cameras or audio equipment. You write, you format, you send. Done.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: C.teal, minWidth: 40 }}>•</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>It feels controllable.</strong> A text document is static. What you send is what people see. Video, historically, meant hiring agencies, managing talent, dealing with production timelines. The complexity is real. The cost is real.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: C.teal, minWidth: 40 }}>•</div>
                <div>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    <strong>It feels familiar.</strong> Organizations have been communicating in text for decades. We have systems for it. We have workflows. We have templates. Changing that means retraining people, changing processes, learning new tools.
                  </p>
                </div>
              </div>
            </div>

            <p style={{ marginBottom: 32 }}>
              All of these reasons are understandable. None of them are good enough anymore.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Cost of Delay
            </h2>

            {/* Enterprise Default Image */}
            <img
              src="/media/the-pdf-paradox/enterprise-default.png"
              alt="Enterprise default medium - 80% PDFs, 20% Video"
              style={{
                width: '100%',
                maxWidth: 350,
                borderRadius: 12,
                marginBottom: 40,
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
                height: 'auto',
              }}
            />

            <p style={{ marginBottom: 32 }}>
              Here's what gets lost in the inertia: <strong>Every quarter that your compliance training sits in a PDF format, you're accepting an 85-point retention gap.</strong> If 100 employees watch a compliance video, roughly 95 will remember what matters. If 100 employees read a PDF on the same topic, roughly 10 will.
            </p>

            <p style={{ marginBottom: 32 }}>
              That's not a difference of degree. That's a difference of kind.
            </p>

            <p style={{ marginBottom: 32 }}>
              What does that 85-point gap cost you?
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Risk</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Compliance training that doesn't stick isn't training. It's documentation. But it's not changing behavior. And when behavior doesn't change, risk remains. GDPR violations, data security lapses, harassment incidents—these are usually the result of information that didn't stick.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Turnover</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Onboarding via PDF is onboarding that fails. New hires sit through hours of reading material that evaporates. They don't retain key processes. They don't internalize culture. They feel lost. Quality onboarding correlates with 50% higher retention in the first year.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Performance</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    If your sales team can't recall the new positioning framework because they read it once, they default to the old framework. Behavior follows what's remembered. Memory follows what engages.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>4</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Compounding Cost</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Compliance changes quarterly. Updates come monthly. If each update defaults to text, you're building a compounding debt of information that technically exists but functionally doesn't.
                  </p>
                </div>
              </div>
            </div>

            <p style={{ marginBottom: 32 }}>
              The PDF feels cheap. But the cost of it not working is enormous.
            </p>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Shift Is Already Happening
            </h2>

            <p style={{ marginBottom: 32 }}>
              The paradox is resolving. Here's why:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>1</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Technology has removed the friction</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Modern video platforms—especially AI-driven video—have made production fast, affordable, and integrated. The excuse "video is too hard" no longer holds.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>2</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Market pressure is building</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Companies that are getting onboarding right are pulling ahead. They're retaining talent better. They're ramping faster. Competitors are noticing.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>3</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>Platforms are demanding integration</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    LMS platforms, CMS systems, internal knowledge bases—they're all building video-first. The infrastructure is inverting.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 28, fontWeight: 700, color: C.teal, minWidth: 50 }}>4</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>The generational shift is real</h3>
                  <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                    Younger employees don't absorb information via text the same way. They expect video, visual communication, interactive content. If you want to reach them, you have to meet them where they learn.
                  </p>
                </div>
              </div>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              What Would Change If Your Training Actually Worked?
            </h2>

            {/* When Training Works Image */}
            <img
              src="/media/the-pdf-paradox/when-training-works.png"
              alt="Business impact when training sticks - Hiring, Retention, Compliance, NPS, Culture"
              style={{
                width: '100%',
                maxWidth: 550,
                borderRadius: 12,
                marginBottom: 40,
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
                height: 'auto',
              }}
            />

            <p style={{ marginBottom: 32 }}>
              The enterprises that move first—that acknowledge the gap between data and action and actually close it—will see the compounding benefits first:
            </p>

            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Hiring:</strong> New hires ramp 40% faster. They make fewer mistakes. They need less hand-holding.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Retention:</strong> Employees who remember what they learned stay longer. The cost of replacing an employee is 50-200% of their salary. Better onboarding pays for itself.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Compliance and risk:</strong> Training that sticks means behavior change. Changed behavior means fewer incidents, fewer violations.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Customer experience:</strong> Teams that remember execute better. They solve problems faster. Your NPS moves.
                </p>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.teal, minWidth: 30 }}>•</div>
                <p style={{ margin: 0, fontSize: 15, color: C.gray600 }}>
                  <strong>Culture:</strong> Organizations with strong cultures have them because people remember what matters. Video that sticks is culture that lands.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(102, 188, 173, 0.1)', padding: 24, borderRadius: 12, borderLeft: `4px solid ${C.teal}`, marginBottom: 40 }}>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 600, color: C.navy }}>
                These aren't theoretical benefits. They're operational. They move metrics. They show up in P&L.
              </p>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 700, color: C.navy, marginBottom: 24, marginTop: 40 }}>
              The Question Isn't If. It's When.
            </h2>

            <p style={{ marginBottom: 32 }}>
              The evidence for video effectiveness is two decades old. The evidence that enterprises aren't using it despite that is current.
            </p>

            <p style={{ marginBottom: 32 }}>
              The question every organization faces now is simple: <strong>How long are you comfortable with the gap between what you know works and what you're actually doing?</strong>
            </p>

            <p style={{ marginBottom: 40 }}>
              The answer to that question will determine who leads their category and who follows.
            </p>

            <GetInTouchCTA
              postUrl="https://www.textra.video/media/the-pdf-paradox"
              postTitle="The PDF Paradox: Why Enterprises Ignore What They Already Know"
            />
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
