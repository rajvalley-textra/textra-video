#!/usr/bin/env node
/**
 * Generate Camden Visitor Parking Permits poster with video background
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  // Load and resize video frame to 1280x720 (keep colors)
  const videoFrame = await sharp('public/camden-poster-frame.jpg')
    .resize(1280, 720, { fit: 'cover' })
    .modulate({ brightness: 0.9 }) // darker
    .toBuffer();

  // Load and encode the logo and play button
  const logoPath = path.resolve('public/camden-logo-user.png');
  const logoB64 = fs.readFileSync(logoPath).toString('base64');

  // Load the play button
  const playButtonPath = path.resolve('public/play-button-final.png');
  const playButtonB64 = fs.readFileSync(playButtonPath).toString('base64');

  const W = 1280, H = 720;

  // Create the poster overlay SVG
  const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#555555"/>
      <stop offset="55%" stop-color="#666666"/>
      <stop offset="100%" stop-color="#777777"/>
    </linearGradient>
    <radialGradient id="glow1" cx="15%" cy="15%" r="45%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)" opacity="0.7"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>

  <!-- Play button -->
  <g filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))">
    <image x="490" y="210" width="300" height="300" href="data:image/png;base64,${playButtonB64}" preserveAspectRatio="xMidYMid meet"/>
  </g>

  <!-- Logo badge -->
  <g filter="drop-shadow(0 8px 10px rgba(0,0,0,0.28))">
    <rect x="32" y="20" width="280" height="110" rx="16" fill="#ffffff" fill-opacity="0.97"/>
  </g>
  <image x="52" y="28" width="240" height="100" href="data:image/png;base64,${logoB64}" preserveAspectRatio="xMidYMid meet"/>

  <!-- Label -->
  <text x="64" y="330" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="2.5" fill="#bfe3ff">VISITOR PARKING</text>

  <!-- Title -->
  <text x="62" y="420" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#ffffff">Visitor Parking Permits</text>

  <!-- Brand -->
  <text x="1216" y="622" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#e6f1fb" text-anchor="end">Video by Textra</text>
</svg>
`;

  // Composite: video + gradient overlay
  const result = await sharp(videoFrame)
    .composite([{
      input: Buffer.from(overlay),
      top: 0,
      left: 0
    }])
    .jpeg({ quality: 92 })
    .toFile('public/camden-visitor-parking-poster.jpg');

  console.log('✓ Camden poster with background generated:', result.size, 'bytes');
}

main().catch(console.error);
