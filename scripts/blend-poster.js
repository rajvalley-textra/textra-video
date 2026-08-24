const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function blendPoster() {
  // Read the video frame
  const videoFrame = sharp('public/east-cambs-complaints-poster.jpg');

  // Slightly darken the video frame (reduce brightness to ~70% - less dark)
  const darkened = await videoFrame
    .modulate({ brightness: 0.7 })
    .toBuffer();

  // Load and encode the logo
  const logoPath = path.resolve('public/east-cambs-icon.png');
  const logoB64 = fs.readFileSync(logoPath).toString('base64');

  // Create the poster overlay SVG
  const overlayWidth = 1280;
  const overlayHeight = 720;

  const overlay = `
<svg width="${overlayWidth}" height="${overlayHeight}" xmlns="http://www.w3.org/2000/svg">
  <!-- Light semi-transparent overlay -->
  <rect width="${overlayWidth}" height="${overlayHeight}" fill="rgba(0,0,0,0.2)"/>

  <!-- Logo badge - sharp edges, no shadow -->
  <rect x="40" y="30" width="220" height="150" fill="#ffffff" stroke="none"/>
  <image x="50" y="40" width="160" height="130" href="data:image/png;base64,${logoB64}" preserveAspectRatio="xMinYMid meet"/>

  <!-- Label -->
  <text x="64" y="330" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="700" letter-spacing="2.5" fill="#bfe3ff">FORMAL COMPLAINTS</text>

  <!-- Title -->
  <text x="62" y="392" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#ffffff">See how the</text>
  <text x="62" y="452" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="800" fill="#ffffff">process works</text>

  <!-- Brand -->
  <text x="1216" y="622" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" fill="#e6f1fb" text-anchor="end">Video by Textra</text>
</svg>
`;

  // Composite: darkened video + overlay
  const blended = await sharp(darkened)
    .composite([{
      input: Buffer.from(overlay),
      top: 0,
      left: 0
    }])
    .jpeg({ quality: 90 })
    .toFile('public/east-cambs-complaints-poster.jpg');
    
  console.log('✓ Blended poster created:', blended.size, 'bytes');
}

blendPoster().catch(console.error);
