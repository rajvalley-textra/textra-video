import NavBar from '@/components/NavBar';
import FooterSection from '@/components/FooterSection';
import { C } from '@/lib/theme';

const WRAP = { maxWidth: 900, margin: '0 auto', padding: '0 40px' };

export const metadata = {
  title: 'Terms of Service — Textra Video',
  description: 'Terms of service for Textra Video',
};

export default function TermsPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '80vh', paddingTop: 120, paddingBottom: 80 }}>
        <div style={{ ...WRAP }}>
          <h1 style={{ fontSize: 42, fontWeight: 900, color: C.navy, marginBottom: 8 }}>Terms of Service</h1>
          <p style={{ fontSize: 14, color: C.gray500, marginBottom: 40 }}>Last Updated: June 2026</p>

          <div style={{ lineHeight: 1.8, color: C.gray600, fontSize: 15 }}>
            <p>
              These Terms of Service ("Terms") govern your use of the Textra Video platform and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>1. Our Service</h2>
            <p>
              Textra Video provides a managed, AI-powered video production service. We convert text-based documents (PDFs, Word documents, PowerPoint) into branded animated videos. As a managed service, our team collaborates closely with you to ensure quality, brand alignment, and project success.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>2. Deliverables & Ownership</h2>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li><strong>Supplier IP:</strong> Textra Video Ltd retains exclusive ownership of all underlying tools, software, proprietary automation engines, and animation systems used to provide our services.</li>
              <li><strong>Client Ownership:</strong> Upon full payment for the services, you retain ownership of all final rendered videos and any unique brand-specific characters developed specifically for your account.</li>
            </ul>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>3. Client Obligations</h2>
            <p>You agree to:</p>
            <ul style={{ marginLeft: 20, marginBottom: 16 }}>
              <li>Provide timely access to all necessary materials, including scripts and brand assets.</li>
              <li>Designate a single point of contact for project communication.</li>
              <li>Ensure that content submitted for production does not violate any laws or infringe upon the rights of any third party.</li>
            </ul>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>4. Data Protection</h2>
            <p>
              We are committed to enterprise-grade data security and are GDPR compliant. All client-provided documents and assets are treated as highly confidential and are used exclusively for the requested video production. Please review our <a href="/privacy" style={{ color: C.blue, textDecoration: 'none' }}>Privacy Policy</a> for detailed information on how we handle your data.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Textra Video Ltd's total liability under these terms shall not exceed the total amount paid by the client for the services in the 12 months preceding any claim. We are not liable for indirect or consequential losses.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>6. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2 style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginTop: 32, marginBottom: 16 }}>7. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Your continued use of our services after such changes constitutes your acceptance of the updated terms.
            </p>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
