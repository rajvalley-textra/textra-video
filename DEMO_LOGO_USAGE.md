# Demo Page Logo & Poster Usage Guide

## Overview

Demo pages (East Cambs, Camden Council, etc.) use a two-layer badge system:
1. **Poster JPG** — Generated automatically with the council logo in a badge (top-left)
2. **HTML T Badge Overlay** — Persistent Textra logo badge (top-right, always visible)

The T badge is handled via HTML overlay (`textra-logo-mark.png`), not the poster. This keeps it visible during video playback.

## Updating a Council Logo

### Step 1: Prepare Your Logo File
- Should be a PNG on transparent or white background
- Include the full lockup (icon + wordmark together)
- Any size/aspect ratio works — the script auto-scales it

### Step 2: Run the Poster Generator
```bash
node scripts/generate-demo-poster.js \
  --logo path/to/council-logo.png \
  --title "Your Page Title" \
  --label "VIDEO OVERVIEW" \
  --brand "Video by Textra" \
  --gradient "#273572,#1A71B1,#2f9c8f" \
  --out public/your-poster.jpg
```

**What happens automatically:**
- Logo is fit into a badge (max 248×42px, preserves aspect ratio)
- Badge placed in white rounded box with shadow
- Title, label, and brand text positioned
- Entire thing exported as 1280×720px JPG (92% quality)

### Step 3: Use in HTML
Link the generated poster in your video element:
```html
<div class="video-container">
  <video
    controls
    poster="/your-poster.jpg"
    style="width: 100%; height: 100%; background: #000;">
    <source src="https://res.cloudinary.com/oyo7xls1/video/upload/YOUR_VIDEO.mp4" type="video/mp4">
  </video>
  <a href="https://www.textra.video/" class="textra-badge" target="_blank" rel="noopener" title="Made with Textra">
    <img src="/textra-logo-mark.png" alt="Textra">
  </a>
</div>
```

## The T Badge (Always Persistent)

The T badge is an **HTML overlay**, not part of the poster. This means:
- ✅ Visible during video playback
- ✅ Clickable to textra.video
- ✅ Styled via CSS for 34×34px circle with white background

**Current styling** (from `/public/camden-council-parking-permits.html`):
```css
.textra-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 2;
  padding: 5px;
}
```

## Files Reference

| File | Purpose |
|------|---------|
| `scripts/generate-demo-poster.js` | Poster generator (SVG → JPG) |
| `public/camden-poster.jpg` | Generated poster for Camden demo |
| `public/textra-logo-mark.png` | T badge logo (used in HTML overlay) |
| `public/camden-council-logo-correct.png` | Council logo for badge |

## Gradient Colors (Customizable)

Default East Cambs/Camden gradient:
```
#273572 (dark blue) → #1A71B1 (medium blue) → #2f9c8f (teal)
```

To use different colors, pass `--gradient` flag:
```bash
node scripts/generate-demo-poster.js \
  --logo ... \
  --title ... \
  --gradient "#000000,#333333,#666666" \
  --out ...
```

## No Manual Editing Needed

- ❌ Don't manually edit the SVG — the script generates it every time
- ❌ Don't resize logos in photo editors — the script does this automatically
- ✅ Just provide the logo PNG and run the script

