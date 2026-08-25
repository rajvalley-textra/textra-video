#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const videoFrame = await sharp('public/norwich-poster-frame.jpg')
    .resize(1280, 720, { fit: 'cover' })
    .modulate({ brightness: 0.9 })
    .toBuffer();

  const logoPath = path.resolve('public/norwich-logo.png');
  const logoB64 = fs.readFileSync(logoPath).toString('base64');
  const playButtonPath = path.resolve('public/play-button-final.png');
  const playButtonB64 = fs.readFileSync(playButtonPath).toString('base64');

  const W = 1280, H = 720;

  const overlay = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B5E7E"/>
      <stop offset="55%" stop-color="#2B7E9E"/>
      <stop offset="100%" stop-color="#3B9EBE"/>
    </linearGradient>
    <radialGradient id="glow1" cx="15%" cy="15%" r="45%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#FFD700" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)" opacity="0.7"/>
  <rect width="${W}" height="${H}" fill="url(#glow1)"/>

  <g filter="drop-shadow(0 4px 12px rgba(0,0,0,0.4))">
    <image x="490" y="210" width="300" height="300" href="data:image/png;base64,${playButtonB64}" preserveAspectRatio="xMidYMid meet"/>
  </g>

  <g filter="drop-shadow(0 8px 10px rgba(0,0,0,0.28))">
    <rect x="32" y="20" width="280" height="110" rx="16" fill="#ffffff" fill-opacity="0.97"/>
  </g>
  <image x="52" y="28" width="240" height="100" href="data:image/png;base64,${logoB64}" preserveAspectRatio="xMidYMid meet"/>

  <text x="64" y="330" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="2.5" fill="#FFD700">ABOUT COUNCIL TAX</text>
  <text x="62" y="420" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#ffffff">About Council Tax</text>

  <text x="1216" y="622" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#e6f1fb" text-anchor="end">Video by Textra</text>
</svg>
`;

  const result = await sharp(videoFrame)
    .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
    .jpeg({ quality: 92 })
    .toFile('public/norwich-council-tax-poster.jpg');

  console.log('✓ Norwich poster generated:', result.size, 'bytes');
}

main().catch(console.error);
