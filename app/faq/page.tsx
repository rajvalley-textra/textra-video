import { C } from '@/lib/theme';

export default function FAQPage() {
  const faqs = [
    {
      q: 'What is Textra, and what does it do?',
      a: 'Textra Video is a powerhouse platform that turns your "Dead Content"—such as dry text manuals, onboarding documents, compliance briefs, and product updates—into highly engaging, studio-quality animated videos. By removing the traditional user editing interface entirely, we allow companies to transform critical information into on-brand video formats at the speed and price point of AI.\n\nEvery standard video features an optional title screen, two presenters or actors in conversation, a custom background illustration, and an optional music track—all tailored to match your specific brand identity.',
    },
    {
      q: 'How does Textra create videos?',
      a: 'We eliminate the complex learning curves of traditional editing software by utilising a proprietary, full-stack video engine (the TextraEngine) that acts as an automated "Digital Director". Using custom AI agent frameworks, our platform handles character rigging, lip-syncing, directorial camera logic, and strict brand-compliance rules automatically.\n\nAll your team has to do is upload a document with simple instructions (or write a quick script using our online tool), and our engine dynamically handles the heavy lifting to generate the video.',
    },
    {
      q: 'What are the benefits of using Textra over standard video content?',
      a: 'Key benefits include:\n\n• Unmatched Speed: We operate on a 24-hour delivery SLA, compared to the traditional video production industry standard of 30 days.\n\n• Zero Technical Effort: There is absolutely no software training required. Your team doesn\'t need to act as amateur video editors—you simply upload a file and receive a polished video back.\n\n• Brand-Safe Quality: Unlike generic AI video tools that can look uncanny, eerie, or off-brand, Textra produces bespoke, premium animations that seamlessly fit your corporate identity guidelines.\n\n• Enterprise Trusted: Textra is already trusted to deliver content for global companies and government bodies, including Amazon, Cisco, and the UK Department for Education.',
    },
    {
      q: 'How flexible is Textra? Can bespoke elements be added?',
      a: 'Highly flexible. While your initial setup provides a core branded template, your annual subscription includes Upgrade time that can be used to add tailored visual flourishes.\n\nThrough Upgrades, you can add contextual icons (e.g., for health and safety, specific tools), text on screen, unique character actions, custom visual effects, additional background layouts, and subtitles. Furthermore, you can use Upgrade time to localize and translate your video content into over 30 different languages.',
    },
    {
      q: 'What is the production process, and how involved do we need to be?',
      a: 'Our workflow is broken into two streamlined, low-effort stages:\n\nStage 1: Hassle-Free Set-up (2–5 Days): You complete a short online onboarding wizard to share your brand guidelines, select your first two characters, preferred backgrounds, voices (we can clone your team\'s real voices), and music style. Our UK-based creative team then designs and locks in your branded video template.\n\nStage 2: Production (24-Hour Turnaround): To make a video, simply upload a document or copy a script into our tool with a quick prompt (e.g., "Turn this GDPR manual into a 60-second summary video"). Once you review the AI-generated script, we generate the final animation in the Textra engine and notify you when it\'s ready to download.',
    },
    {
      q: 'What is the pricing model?',
      a: 'Textra operates on a predictable, recurring annual SaaS subscription model. Our standard entry plan is £12,000/year, which grants your account 60 minutes of video production (Textra minutes).\n\nIf your organisation scales up its content output, you can easily top up your balance or add extra "Upgrade time" by purchasing bundle packages whenever you need them.',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#fff', paddingTop: 80 }}>
      <section style={{ padding: '60px 40px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <h1 style={{ fontSize: 48, fontWeight: 900, color: C.navy, lineHeight: 1.1, marginBottom: 16 }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: 18, color: C.gray500, lineHeight: 1.7 }}>
            Find answers to common questions about Textra Video and how we can help you create engaging content.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: `1px solid ${C.gray200}`, paddingBottom: 32 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: C.navy, marginBottom: 12, lineHeight: 1.4 }}>
                {faq.q}
              </h2>
              <p style={{ fontSize: 15, color: C.gray600, lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, padding: '40px', background: C.gray50, borderRadius: 12, textAlign: 'center' }}>
          <p style={{ fontSize: 16, color: C.navy, marginBottom: 16 }}>
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:sales@textra.video"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: C.teal,
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 9999,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
