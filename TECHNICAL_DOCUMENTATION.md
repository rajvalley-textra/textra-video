# Textra Video — Technical Documentation

**Live Site:** https://www.textra.video  
**Deployment:** Vercel  
**Repository:** textra-video (Next.js)  
**Last Updated:** June 2026

---

## Table of Contents
1. [Tech Stack](#tech-stack)
2. [Architecture](#architecture)
3. [Project Structure](#project-structure)
4. [Setup & Installation](#setup--installation)
5. [Deployment](#deployment)
6. [Environment Variables](#environment-variables)
7. [Key Features](#key-features)
8. [Analytics & SEO](#analytics--seo)
9. [Common Tasks](#common-tasks)
10. [Troubleshooting](#troubleshooting)

---

## Tech Stack

### Frontend
- **Framework:** Next.js 16.2.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + inline CSS-in-JS
- **Runtime:** Node.js 24 LTS
- **Package Manager:** npm

### External Services
- **Hosting:** Vercel (vercel-deployed)
- **Video Embeds:** Vimeo (player SDK)
- **Video Detection:** Vimeo Player SDK (`@vimeo/player`)
- **Analytics:** Google Analytics 4 (ready to configure)
- **Domain Registrar:** Gandi

### Dev Dependencies
- ESLint 9
- TypeScript 5
- Tailwind PostCSS 4

---

## Architecture

### High-Level Overview
```
User Browser
    ↓
Vercel (Edge + Fluid Compute)
    ↓
Next.js App Router (Server Components)
    ↓
Client Components (useState, useEffect hooks)
    ↓
External APIs (Vimeo Player, Google Analytics)
```

### Key Design Patterns
1. **Server Components by default** — all pages render server-side, minimal JS sent to browser
2. **Client Components only where needed** — navigation, modals, cookie consent, video playback detection
3. **Responsive CSS Grid** — media queries in `globals.css` for mobile/tablet/desktop
4. **Lazy loading** — Next.js Image optimization via `next/image`
5. **No database** — static content site (all text hardcoded in components)

---

## Project Structure

```
textra-video/
├── app/
│   ├── layout.tsx                 # Root layout (GA4 script, fonts, metadata)
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles + responsive breakpoints
│   ├── privacy/
│   │   └── page.tsx               # Privacy policy page
│   ├── terms/
│   │   └── page.tsx               # Terms of service page
│   └── about/
│       └── page.tsx               # About page with team photos
├── components/
│   ├── NavBar.tsx                 # Fixed header with hamburger menu on mobile
│   ├── HeroSection.tsx            # Hero video + showreel modal
│   ├── LogosSection.tsx           # Trusted companies logos
│   ├── ProblemSection.tsx         # Problem statement (Agency/DIY/Textra comparison)
│   ├── HowItWorksSection.tsx      # 4-step process
│   ├── ExamplesSection.tsx        # 6 demo videos with play detection
│   ├── CompetitiveSection.tsx     # Speed vs quality positioning
│   ├── RolesSection.tsx           # Solutions by role (L&D, Comms, Product)
│   ├── PricingSection.tsx         # £12k/year pricing card
│   ├── CTASection.tsx             # Call-to-action with video modal
│   ├── FooterSection.tsx          # Footer with invest button
│   └── CookieConsent.tsx          # Cookie banner (stored in localStorage)
├── lib/
│   ├── theme.ts                   # Color palette & shadow definitions
│   └── device.ts                  # iOS detection utility
├── hooks/
│   └── useReveal.tsx              # Intersection Observer for scroll reveal animation
├── public/
│   ├── assets/logos/              # Brand logos, favicon
│   ├── assets/icons/              # LinkedIn, Vimeo icons
│   └── assets/Profile pics/       # Team member photos
├── package.json
├── tsconfig.json
├── next.config.js
└── TECHNICAL_DOCUMENTATION.md     # This file
```

---

## Setup & Installation

### Local Development

```bash
# 1. Clone repo (if applicable)
cd /Users/movebubble/textra-video

# 2. Install dependencies
npm install

# 3. Add environment variables (see below)
# Create .env.local or set in Vercel dashboard

# 4. Start dev server
npm run dev

# Site will be available at http://localhost:3000
```

### Build for Production

```bash
npm run build
# Outputs optimized static site to `.next/`
```

### Lint

```bash
npm run lint
# Runs ESLint on all TypeScript files
```

---

## Deployment

### Vercel Setup (Already Configured)

- **Project:** `textra-video`
- **Vercel Account:** `raj-valleys-projects-724c2cc1`
- **Production URL:** https://www.textra.video
- **Preview URLs:** Automatically generated for PRs

### Deploy Command

```bash
vercel deploy --prod --force
```

**Note:** Never use worktrees for deployment. Always deploy from `/Users/movebubble/textra-video`.

### Domain Configuration

- **Registrar:** Gandi.net
- **DNS Records:**
  - `@` A record → `216.198.79.1` (Vercel IP)
  - `www` CNAME → `368bac0b299beb06.vercel-dns-017.com.` (Vercel DNS)
- **SSL:** Auto-provisioned by Vercel (Let's Encrypt)

### Rollback

If something breaks in production:
1. Revert the commit: `git revert <commit-hash>`
2. Redeploy: `vercel deploy --prod --force`
3. Vercel will roll back to the previous version within ~30 seconds

---

## Environment Variables

### Required for Production

```env
# Google Analytics 4 (optional but recommended)
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX  # Get this from Google Analytics property settings

# Note: NEXT_PUBLIC_ prefix means this variable is visible to the browser
# Use it only for public IDs (never API secrets)
```

### How to Set in Vercel

1. Go to Vercel Dashboard → `textra-video` project
2. Settings → Environment Variables
3. Add `NEXT_PUBLIC_GA_ID` with your GA4 measurement ID
4. Deployments will automatically use the new variable

### How to Set Locally

Create `.env.local` in the project root:

```
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
```

(This file is `.gitignore`d and won't be committed)

---

## Key Features

### 1. Responsive Design
- **Desktop:** Full-width layouts, grid-based
- **Tablet (900px):** 2-column grids, smaller gaps
- **Mobile (560px):** Single-column stacks, touch-friendly buttons
- **Hamburger Menu:** Auto-shows on mobile, dismisses when clicking a link

### 2. Video Embeds (Vimeo)
- **Hero video:** Fullscreen button (hidden on iOS where not supported)
- **6 Demo videos:** Play-detection triggers visible fullscreen button
- **Modal popups:** "Watch Showreel" buttons open modal overlays
- **All use Vimeo Player SDK** for robust event handling

### 3. Animations
- **Scroll reveal:** `useReveal()` hook uses Intersection Observer to fade-in sections
- **Smooth scroll:** Built-in `scroll-behavior: smooth` in `globals.css`
- **Hover effects:** Buttons change opacity/shadow on hover
- **SVG animations:** Scroll cue (animated circle, hidden on mobile)

### 4. Cookie Consent
- **Banner:** Appears on first visit, stored in `localStorage`
- **Persistence:** "Accept All" / "Decline" buttons dismiss it
- **Links to:** `/privacy` page with cookies section
- **No third-party tracking until consent** (cookie banner links to privacy)

### 5. Mobile Optimizations
- Fullscreen buttons on demos only appear during playback (not before)
- Scroll cue animation hidden on mobile (unnecessary on touch devices)
- iOS detection (`lib/device.ts`) hides Fullscreen API button (not supported)
- Touch-friendly spacing on all buttons (min 44×44px)

---

## Analytics & SEO

### Google Analytics 4 Setup

1. **Create GA4 property:**
   - Go to [Google Analytics](https://analytics.google.com)
   - Create new property for `www.textra.video`
   - Get the **Measurement ID** (format: `G_XXXXXXXXXX`)

2. **Add to Vercel:**
   - Vercel Dashboard → Settings → Environment Variables
   - Add `NEXT_PUBLIC_GA_ID` = your measurement ID
   - Redeploy or wait for next deploy

3. **Verify tracking:**
   - Go to www.textra.video in a new browser
   - Open DevTools → Network tab → filter `collect`
   - Should see requests to `google-analytics.com` (confirms GA is firing)

### Google Search Console Setup

1. **Verify domain ownership:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property for `www.textra.video`
   - Choose DNS verification method
   - Add TXT record to Gandi DNS (instructions in GSC)

2. **Submit sitemap:**
   - (Currently no sitemap.xml — optional to add `robots.txt` later)

3. **Monitor performance:**
   - Check indexing status
   - View search queries & impressions
   - Fix any crawl errors

### SEO Status

- **Lighthouse SEO:** 100/100 ✅
- **Meta tags:** Title, description in `app/layout.tsx`
- **Robots:** GSC will auto-create `robots.txt` (no manual config needed)
- **Structured data:** None currently (not required for this site)

---

## Common Tasks

### Add a New Page

1. Create directory: `app/newpage/`
2. Add `page.tsx`:
   ```tsx
   export default function NewPage() {
     return <div>Page content</div>;
   }
   ```
3. Redeploy — will be available at `/newpage`

### Edit Homepage Content

1. Open `app/page.tsx`
2. Edit text in the component JSX
3. Redeploy or test locally with `npm run dev`

### Update Colors/Theme

1. Edit `lib/theme.ts` (color palette)
2. Update any inline `style={{}}` props using `C.navy`, `C.teal`, etc.
3. CSS changes in `app/globals.css` apply globally

### Add a New Component Section

1. Create `components/NewSection.tsx`
2. Import in `app/page.tsx` under appropriate spot
3. Call `<NewSection />` in the render
4. Redeploy

### Update Team Members (About Page)

1. Open `app/about/page.tsx`
2. Find the `team` array
3. Edit or add members with: name, title, bio, linkedin, image path, imagePos, imageScale
4. Add new image to `public/assets/Profile pics/`
5. Redeploy

### Change Pricing or Features

1. Open `components/PricingSection.tsx`
2. Edit the `features` array at the top
3. Edit price in the JSX
4. Redeploy

---

## Troubleshooting

### Site shows old Webflow content
- **Cause:** DNS hasn't propagated yet
- **Fix:** Wait 5–30 minutes, hard-refresh (`Cmd+Shift+R`), try incognito window

### SSL "Not Secure" error on new domain
- **Cause:** Certificate still being issued
- **Fix:** Wait 5–15 minutes for Vercel to auto-issue cert, refresh page

### Videos not loading
- **Cause:** Vimeo server down OR video ID invalid
- **Fix:** Check Vimeo player status; verify video IDs in component are correct numbers

### Mobile menu doesn't close when clicking a link
- **Cause:** Expected behavior — menu auto-closes via `onClick={() => setMenuOpen(false)}`
- **Fix:** Check `components/NavBar.tsx` line ~85 to confirm handler is present

### Google Analytics not tracking
- **Cause:** `NEXT_PUBLIC_GA_ID` not set in Vercel environment
- **Fix:** Add env var to Vercel, redeploy, wait 24h for data to appear in GA dashboard

### Build fails locally
- **Cause:** Missing dependencies or outdated Node.js
- **Fix:** 
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  npm run build
  ```

### Cookie banner doesn't appear on return visit
- **Expected behavior** — localStorage remembers consent decision
- **To test:** Open incognito window or clear localStorage: `localStorage.clear()`

---

## Useful Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Vimeo Player API:** https://developer.vimeo.com/player/sdk
- **Google Analytics 4:** https://support.google.com/analytics
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## Contact & Support

- **Site Owner:** Textra Video team
- **Hosted By:** Vercel
- **Domain Registrar:** Gandi.net
- **DNS Provider:** Gandi.net
- **Questions:** Check Vercel dashboard logs or review this documentation

---

**Last Deploy:** [Check Vercel dashboard for timestamp]
