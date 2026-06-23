'use client';
import { C, sh } from '@/lib/theme';

const WRAP = { maxWidth: 1200, margin: '0 auto', padding: '0 40px' };

const examples = [
  {
    title: 'Little Bot',
    url: 'https://vimeo.com/showcase/11919627?video=1095045553',
  },
  {
    title: 'Norwich Council',
    url: 'https://vimeo.com/showcase/11919627?video=1203789041',
  },
  {
    title: 'Amazon Van Role Play',
    url: 'https://vimeo.com/manage/showcases/11919627/playback?video=1163223133',
  },
  {
    title: 'Age UK',
    url: 'https://vimeo.com/manage/showcases/11919627/playback?video=1203796244',
  },
  {
    title: 'Future Learn',
    url: 'https://vimeo.com/manage/showcases/11919627/playback?video=1143447295',
  },
];

export default function ExamplesSection() {
  return (
    <section style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ ...WRAP }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: C.navy, lineHeight: 1.1, margin: '0 0 16px 0' }}>
            See It In Action
          </h2>
          <p style={{ fontSize: 16, color: C.gray600, lineHeight: 1.6 }}>
            Watch how leading organizations use Textra Video to create engaging content at scale.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {examples.map((example) => (
            <a
              key={example.title}
              href={example.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: 20,
                background: C.gray50,
                border: `1px solid ${C.gray200}`,
                borderRadius: 16,
                textDecoration: 'none',
                transition: 'transform 300ms, box-shadow 300ms',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = sh.lg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  background: 'linear-gradient(135deg, #1A71B1 0%, #66BCAD 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.navy }}>
                  {example.title}
                </div>
                <div style={{ fontSize: 12, color: C.gray500, marginTop: 4 }}>
                  Watch example →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
