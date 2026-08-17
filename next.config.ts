import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect non-www to www (Vercel handles HTTP→HTTPS automatically)
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
    ];
  },
};

export default nextConfig;
