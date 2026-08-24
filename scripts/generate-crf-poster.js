const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1280;
const height = 720;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#273572;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1A71B1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2f9c8f;stop-opacity:1" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#grad)"/>

  <!-- Top left logo area -->
  <rect x="30" y="30" width="180" height="90" fill="white" rx="8"/>

  <!-- GOV.UK text in logo box -->
  <text x="120" y="85" font-size="36" font-weight="bold" fill="#0b7d9e" font-family="Arial, sans-serif" text-anchor="middle">GOV.UK</text>

  <!-- Label -->
  <text x="40" y="180" font-size="20" font-weight="bold" fill="white" letter-spacing="2">FUNDING GUIDANCE</text>

  <!-- Title -->
  <text x="40" y="280" font-size="56" font-weight="bold" fill="white" font-family="Arial, sans-serif">
    <tspan x="40">Crisis and</tspan>
    <tspan x="40" dy="70">Resilience Fund</tspan>
  </text>

  <!-- Bottom right branding -->
  <text x="${width - 250}" y="${height - 30}" font-size="16" fill="white">Video by Textra</text>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile(path.join(__dirname, '../public/crisis-resilience-poster.jpg'), (err, info) => {
    if (err) {
      console.error('Error generating poster:', err);
      process.exit(1);
    }
    console.log('✓ Poster generated:', info.size, 'bytes');
  });
