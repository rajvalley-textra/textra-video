# Textra Video Deployment Guide

This project has its own **separate Vercel account** (not BlackFrame MVP). Follow these steps to deploy.

## Prerequisites

1. You should have access to the separate Textra Video Vercel account
2. Vercel CLI should be installed: `npm i -g vercel@latest`

## Deployment Steps

### 1. Link to Vercel (First Time Only)

From the `/Users/movebubble/textra-video` directory, run:

```bash
vercel link --yes
```

This will:
- Prompt you to log in to your Textra Video Vercel account (if not already logged in)
- Create a `.vercel` folder with `project.json` containing your project ID
- Store environment variable settings

**Important:** Verify that the `orgId` in `.vercel/project.json` is for the Textra Video account, NOT BlackFrame MVP.

### 2. Set Environment Variables (if needed)

If your landing page needs any environment variables, add them:

```bash
vercel env add
```

Currently, the landing page is static with no environment variables required.

### 3. Deploy to Production

```bash
vercel deploy --prod
```

Or use the shorter version:

```bash
vercel --prod
```

### 4. Verify the Deployment

Visit the URL provided by the CLI (e.g., `https://textra-video-xxxx.vercel.app`)

## GitHub Integration (Optional)

To enable automatic deployments on push:

1. Push the repository to GitHub in the Textra Video account
2. In Vercel dashboard → Project Settings → Git
3. Connect the GitHub repository
4. Vercel will auto-deploy on every push to main

## Project Structure

```
textra-video/
├── app/                  # Next.js App Router
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Landing page (assembled components)
│   └── globals.css      # Tailwind + custom animations
├── components/          # React components (9 sections)
├── hooks/               # useReveal hook for scroll animations
├── lib/                 # Shared theme constants
├── .vercel/             # Vercel config (created by vercel link)
└── package.json         # Dependencies
```

## Build Output

- **Static site:** All pages prerendered as static HTML
- **Build time:** ~4-5 seconds with Turbopack
- **Size:** Optimized with Tailwind CSS v4

## Troubleshooting

### Wrong Vercel Account

If linked to BlackFrame MVP instead of Textra Video:

```bash
rm -rf .vercel
vercel link --yes
```

### Port Already in Use

Dev server conflicts are automatically resolved, but if needed:

```bash
lsof -i :3000
kill -9 <PID>
npm run dev
```

### TypeScript Errors

All components are fully typed. Run type-check before deploying:

```bash
npm run build
```

## Next Steps

1. **Configure domain:** Add custom domain in Vercel dashboard
2. **Analytics:** Enable Vercel Web Analytics in project settings
3. **Monitoring:** Set up error tracking (optional)
4. **API routes:** Add backend endpoints if needed in `/app/api/`
