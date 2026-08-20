#!/usr/bin/env node
/**
 * Generate a branded 1280x720 poster JPG for a demo page's video.
 *
 * Usage:
 *   node scripts/generate-demo-poster.js \
 *     --logo public/some-council-logo.png \
 *     --title "See how the planning process works" \
 *     --out public/some-council-poster.jpg
 *
 * Optional:
 *   --label "VIDEO OVERVIEW"          (small uppercase label above the title)
 *   --brand "Video by Textra"         (bottom-right credit line)
 *   --gradient "#273572,#1A71B1,#2f9c8f"   (3 hex stops, 135deg diagonal)
 *
 * The logo should be the organisation's full lockup (icon + wordmark) on a
 * transparent or white background — it's placed in a white rounded badge
 * top-left, matching the East Cambs poster this was built from.
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const value = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
      args[key] = value;
    }
  }
  return args;
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.logo || !args.title || !args.out) {
    console.error('Usage: node scripts/generate-demo-poster.js --logo <path> --title "<text>" --out <path> [--label "VIDEO OVERVIEW"] [--brand "Video by Textra"] [--gradient "#273572,#1A71B1,#2f9c8f"]');
    process.exit(1);
  }

  const W = 1280, H = 720;
  const label = args.label || 'VIDEO OVERVIEW';
  const brand = args.brand || 'Video by Textra';
  const [g1, g2, g3] = (args.gradient || '#273572,#1A71B1,#2f9c8f').split(',').map((s) => s.trim());

  const logoPath = path.resolve(args.logo);
  if (!fs.existsSync(logoPath)) {
    console.error(`Logo file not found: ${logoPath}`);
    process.exit(1);
  }
  const logoB64 = fs.readFileSync(logoPath).toString('base64');
  const logoMime = logoPath.toLowerCase().endsWith('.jpg') || logoPath.toLowerCase().endsWith('.jpeg') ? 'jpeg' : 'png';

  // Fit the logo into a badge up to 400x160, preserving aspect ratio (larger for better visibility).
  const logoMeta = await sharp(logoPath).metadata();
  const maxW = 400, maxH = 160;
  const scale = Math.min(maxW / logoMeta.width, maxH / logoMeta.height);
  const logoW = Math.round(logoMeta.width * scale);
  const logoH = Math.round(logoMeta.height * scale);

  // Wrap title across up to 2 lines (~22 chars/line at this font size) if it's long.
  const words = args.title.split(' ');
  let line1 = '', line2 = '';
  for (const w of words) {
    if ((line1 + ' ' + w).trim().length <= 24 && !line2) {
      line1 = (line1 + ' ' + w).trim();
    } else {
      line2 = (line2 + ' ' + w).trim();
    }
  }

  const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${g1}"/>
      <stop offset="55%" stop-color="${g2}"/>
      <stop offset="100%" stop-color="${g3}"/>
    </linearGradient>
    <radialGradient id="glow1" cx="15%" cy="15%" r="45%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="85%" cy="90%" r="50%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.28"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>
  <rect width="${W}" height="${H}" fill="url(#glow2)"/>

  <!-- Logo badge -->
  <g filter="url(#shadow)">
    <rect x="35" y="25" width="${logoW + 70}" height="180" rx="16" fill="#ffffff" fill-opacity="0.97"/>
  </g>
  <image x="70" y="${25 + (180 - logoH) / 2}" width="${logoW}" height="${logoH}"
    href="data:image/${logoMime};base64,${logoB64}" preserveAspectRatio="xMinYMid meet"/>

  <!-- Label -->
  <text x="64" y="330" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="2.5" fill="#bfe3ff">${escapeXml(label.toUpperCase())}</text>

  <!-- Title -->
  <text x="62" y="392" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#ffffff">${escapeXml(line1)}</text>
  ${line2 ? `<text x="62" y="452" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#ffffff">${escapeXml(line2)}</text>` : ''}

  <!-- Brand -->
  <text x="1216" y="622" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#e6f1fb" text-anchor="end">${escapeXml(brand)}</text>
</svg>
`;

  const outPath = path.resolve(args.out);
  await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(outPath);
  console.log(`Poster written to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
