import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';
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
  icons: {
    icon: '/assets/logos/ico.jpeg',
  },
};

const GA_ID = 'G-40P54MVE5E';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body style={{ fontFamily: 'var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif', color: '#273572', background: '#fff' }}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
