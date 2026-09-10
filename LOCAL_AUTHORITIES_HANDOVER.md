# Textra Local Authorities Microsite - Complete Handover

## QUICK START

Repository: https://github.com/rajvalley-textra/textra-video.git
Branch: `main`
Live Preview: https://textra-video-jpo0eta83-rajvalley-textras-projects.vercel.app/localauthorities
Production: https://www.textra.video/localauthorities

## PROJECT SUMMARY

Microsite to convert Local Authorities into clients (6-month contracts at £6k). The site is 95% complete and fully functional, showcasing Textra video engagement solutions.

## REPOSITORY ACCESS

```bash
# Clone the repo
git clone https://github.com/rajvalley-textra/textra-video.git
cd textra-video

# Authenticate with GitHub (if needed)
gh auth login

# Install dependencies
npm install

# Run locally
npm run dev
```

Git User: Raj Valley
Email: rajvalley@gmail.com

## DEPLOYMENT INFO

Platform: Vercel
Account: rajvalley-textra
Current URL: https://textra-video-jpo0eta83-rajvalley-textras-projects.vercel.app/localauthorities

Deploy Commands:

```bash
npm run build           # Build locally
vercel deploy          # Deploy preview
vercel deploy --prod   # Deploy to production
```

## PAGE STRUCTURE

Main File: `app/localauthorities/page.tsx`

Sections (in order):

1. **LAHeroSection.tsx**
   - Headline: "Engage residents better, reduce council costs"
   - ARP logo + council list (East Suffolk, Fenland, West Suffolk, East Cambridgeshire, Breckland)
   - Trust metrics & CTAs

2. **ARPPartnershipSection.tsx**
   - 5 clickable council cards with resident counts
   - Breckland (145k), East Cambridgeshire (91k), East Suffolk (248k), Fenland (104k), West Suffolk (183k)

3. **LAProblemSection.tsx**
   - 3 problem cards

4. **LASolutionSection.tsx**
   - 3-step solution flow
   - "What councils can potentially see:" stats (45%, 30-40%, 60+ hrs, 2-3 months)

5. **LADepartmentsSection.tsx**
   - 4 department cards (Council Tax, Benefits, Planning, Housing)

6. **LAVideoShowcaseSection.tsx**
   - 3 video placeholder cards

7. **LAROICalculatorSection.tsx**
   - Interactive calculator
   - Logic: £12k annual + £2.5k setup | Channel CTRs (15% letters, 7% email, 2% website)
   - Shows: Annual investment, Annual views, Cost per view
   - Department pre-fills with realistic volumes
   - NOT YET: Actual payback calculation (shows potential only)

8. **LACTASection.tsx**
   - Contact form (free text council field)
   - Name, Council, Department, Email, Phone
   - "Schedule a Demo" button
   - TODO: HubSpot CRM integration

> Note: `components/LocalAuthorities/LATestimonialsSection.tsx` still exists in the folder but is no longer imported by `page.tsx` — the testimonials section was removed from the page but the file itself was left behind. Safe to delete if confirmed unused elsewhere.

## COUNCIL DATA

| Council | Population | Primary Channel | Frequency | Pain Point |
|---|---|---|---|---|
| Breckland | 145k | "Your Breckland" print | 3x/year | High print costs (£30-36k/year) |
| East Cambridgeshire | 91k | Web + Email | Monthly | No print reach, low email engagement |
| East Suffolk | 248k | Magazine + Digital | 2x print, weekly web | Managing 248k across channels |
| Fenland | 104k | "The Fenlander" email | Monthly | Low email engagement |
| West Suffolk | 183k | "Thriving West Suffolk" | Quarterly | New pilot—need quick ROI proof |

## KEY ASSETS

Logos: `public/assets/logos/`
- `APR-removebg-preview.png` (currently in use)
- Council logos for each council

Brand Colors:
- Teal: `#66BCAD`
- Navy: `#273572`

## RECENT CHANGES MADE

- Removed testimonials section
- Changed council field to free text (was dropdown)
- Changed "What councils see:" → "What councils can potentially see:"
- Removed scroll icon from hero
- Added resident count under council names
- Removed connector lines from solution steps
- Removed interactive stats box (was showing rotating benefits)
- Made council logos larger (70px height)

## OUTSTANDING TASKS

- [ ] HubSpot CRM Integration — Form needs API connection
- [ ] Live Video Examples — Currently placeholders
- [ ] ROI Calculator Payback — Add actual payback period calculation
- [ ] Form Validation — Add backend error handling
- [ ] Analytics — Add Vercel Analytics
- [ ] Mobile Testing — Verify responsive design
- [ ] Accessibility Audit — WCAG compliance check

## TECH STACK

- Next.js: 16.2.6 (React 19)
- Styling: Tailwind CSS + inline JS objects
- State Management: React hooks
- Deployment: Vercel
- Node: 24 LTS recommended

## COMMANDS REFERENCE

```bash
npm install           # Install dependencies
npm run dev          # Run dev server (localhost:3000)
npm run build        # Build production
vercel deploy        # Deploy preview
vercel deploy --prod # Deploy to production
git status           # Check git status
git pull             # Pull latest changes
```

## ENVIRONMENT SETUP

No critical env vars currently in use. When adding HubSpot, add to `.env.local`:

```
HUBSPOT_API_KEY=your_key_here
```

## FOR NEW SESSION

1. Clone the repo: `git clone https://github.com/rajvalley-textra/textra-video.git`
2. Install: `npm install`
3. Test locally: `npm run dev`
4. Preview current state: Visit the live preview link above
5. For changes: Edit components in `components/LocalAuthorities/`
6. Deploy: `npm run build && vercel deploy`

Key Files to Edit:
- `app/localauthorities/page.tsx` — Main page
- `components/LocalAuthorities/*.tsx` — All sections

## STATUS

Project Health: Fully functional, ready for refinement
Completion: 95%
Next Priority: HubSpot CRM integration + live video examples

Generated: 2026-09-10
For questions, check inline comments in component files.
