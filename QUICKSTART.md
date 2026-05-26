# Textra Video — Quick Start Guide

## What's Been Built

✅ **Complete Next.js landing page** with 9 animated sections, ready to deploy.

All design elements from your original HTML have been converted to production-quality React components with TypeScript.

## Dev Server (Already Running)

The site is live on your machine:

```bash
http://localhost:3000
```

To restart if needed:

```bash
cd /Users/movebubble/textra-video
npm run dev
```

## Deploy to Vercel (5 minutes)

### Step 1: Link Project

```bash
cd /Users/movebubble/textra-video
vercel link --yes
```

- Log in with your **Textra Video Vercel account** (NOT BlackFrame)
- Confirm the project name

### Step 2: Deploy

```bash
vercel --prod
```

Wait for it to finish. You'll see a URL like:
```
🔗  Deployment ready on https://textra-video-xxxx.vercel.app
```

### Step 3: Verify

Visit the URL above and scroll through all sections:
- ✓ NavBar scrolls smoothly
- ✓ Hero section animates
- ✓ All 9 sections appear
- ✓ Mobile looks good

**Done!** Your landing page is live. 🎉

## File Locations

- **Components:** `/Users/movebubble/textra-video/components/`
- **Styles:** `/Users/movebubble/textra-video/app/globals.css`
- **Colors/Theme:** `/Users/movebubble/textra-video/lib/theme.ts`
- **Main page:** `/Users/movebubble/textra-video/app/page.tsx`

## Make Changes

1. Edit any component file
2. Dev server auto-reloads
3. See changes on localhost:3000
4. Push and Vercel redeploys automatically (after GitHub setup)

## Sections Included

1. **NavBar** — Logo, links, CTA button
2. **HeroSection** — Animated card cycling through 3 phases
3. **LogosSection** — Enterprise client logos
4. **ProblemSection** — Agency vs DIY vs Textra comparison
5. **HowItWorksSection** — 4-step process with animated timeline
6. **CompetitiveSection** — Bubble chart positioning
7. **RolesSection** — Tabbed solutions by role (L&D, Comms, Product)
8. **PricingSection** — £12,000/year plan + comparison
9. **CTASection** — Final call-to-action

## Common Tasks

### Update text or colors
Edit the component file directly (e.g., `components/PricingSection.tsx`)

### Change animation speed
Edit the `transition` CSS property in the component style object

### Add a new section
1. Create `components/NewSection.tsx`
2. Copy structure from existing component
3. Import and add to `app/page.tsx`

### Add a footer
Create `components/FooterSection.tsx` and import it in `app/page.tsx`

## Need Help?

- **Dev server issues?** → See `DEPLOYMENT.md` troubleshooting
- **Design tweaks?** → Edit inline `style={{}}` objects in components
- **Build errors?** → Run `npm run build` and check output
- **Vercel link issues?** → Run `rm -rf .vercel && vercel link --yes`

## Important ⚠️

- This is **NOT** BlackFrame MVP — separate project, separate Vercel
- Always work in `/Users/movebubble/textra-video` directory
- Don't mix with blackframe-mvp files/accounts

---

**Current Status:** ✅ Build complete, ready to deploy  
**Next Action:** Run `vercel link --yes` then `vercel --prod`
