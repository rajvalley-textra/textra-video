import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Textra Video — Turn Dead Documents Into Studio-Quality Video',
  description:
    'Turn boring documents into studio-quality branded video in 24 hours. No crew. No delays. No compromise on brand.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body style={{ fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif', color: '#273572', background: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
