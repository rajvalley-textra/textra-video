import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'textra.video',
          },
        ],
        destination: 'https://www.textra.video/:path*',
        permanent: true,
      },
      // Redirect http to https (Vercel typically handles this, but explicit is better)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://www.textra.video/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
