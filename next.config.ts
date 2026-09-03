import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

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

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  widenClientFileUpload: true,
  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
