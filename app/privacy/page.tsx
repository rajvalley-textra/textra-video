import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 900, margin: '0 auto', padding: '0 40px' };

export const metadata = {
  title: 'Privacy Policy — Textra Video',
  description: 'Privacy policy for Textra Video',
};

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '80vh', paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ ...WRAP }}>
          <h1 style={{ fontSize: 42, fontWeight: 900, color: C.navy, marginBottom: 8 }}>Privacy Policy</h1>
          <p style={{ fontSize: 14, color: C.gray500, marginBottom: 40 }}>Last Updated: February 2026</p>

          <div style={{ lineHeight: 1.8, color: C.gray600, fontSize: 15 }}>
            <p>
              This Privacy Policy outlines how Textra Video LTD ("Textra," "we," "us," or "our") collects, uses, and protects information provided by enterprise clients and users of our AI-powered video production platform. We are committed to ensuring your data is handled with the highest standards of enterprise governance, risk management, and compliance.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>1. GDPR Compliance</h2>
            <p>
              Textra Video is fully GDPR compliant. We adhere to the strict data protection principles set out under the General Data Protection Regulation (GDPR) to ensure the privacy and security of all personal data processed within our "human-in-the-loop" infrastructure.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>2. Information We Collect</h2>
            <p>To provide our managed video services, we collect the following types of information:</p>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li><strong>Account Data:</strong> Contact details (name, email, organization) for enterprise onboarding and account management.</li>
              <li><strong>Content Uploads:</strong> Text-based documents (PDFs, Word documents, slides, scripts) uploaded to our portal for video transformation.</li>
              <li><strong>Brand Assets:</strong> Corporate visual identity kits, including logos and styling preferences, to ensure brand-perfect results.</li>
              <li><strong>Usage Data:</strong> Metrics on platform interaction to optimize our proprietary automation engine.</li>
            </ul>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>3. How We Use Your Data</h2>
            <p>We utilize collected information solely to deliver our "creativity without friction" production model:</p>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li><strong>Production:</strong> To convert uploaded text into scripts and automated animations.</li>
              <li><strong>Quality Assurance:</strong> To facilitate our "human-in-the-loop" review process, ensuring all content is polished and on-brand.</li>
              <li><strong>Account Growth:</strong> To manage annual subscriptions and track usage-based upgrade bundles.</li>
            </ul>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>4. Data Security & Governance</h2>
            <p>Textra Video recognizes that enterprises are often resistant to full AI solutions due to governance concerns. We address this through:</p>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li><strong>Proprietary Infrastructure:</strong> Using our unique codebase rather than generic third-party tools to maintain strict data standards.</li>
              <li><strong>Human Oversight:</strong> Every output undergoes human quality control (QC) before delivery to mitigate AI-related risks.</li>
              <li><strong>Confidentiality:</strong> All client-provided documents and assets are treated as highly confidential and used exclusively for the requested video production.</li>
            </ul>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>5. Data Retention & Sharing</h2>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li><strong>Retention:</strong> We retain your video assets and uploaded content only as long as necessary to fulfill your enterprise subscription and provide repeat access.</li>
              <li><strong>Third Parties:</strong> We do not sell your data. Information may only be shared with verified creative and technical specialists within our managed network for the sole purpose of QC and professional finishing.</li>
            </ul>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>6. Cookies</h2>
            <p>
              We use a minimal set of cookies to support core site functionality. Our embedded video player (Vimeo) may set third-party cookies when you play a video, used to support playback and basic viewing analytics. We do not use cookies for advertising or to sell your data. You can manage your cookie preference using the banner shown on your first visit, or via your browser settings.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>7. Your Rights</h2>
            <p>As an enterprise-facing, GDPR-compliant platform, we comply with international data protection standards. Clients have the right to:</p>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li>Access, rectify, or request the deletion of their uploaded content and brand data.</li>
              <li>Request detailed logs regarding the processing of their data within our automated engine.</li>
            </ul>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
