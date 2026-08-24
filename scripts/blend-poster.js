const sharp = require('sharp');

async function blendPoster() {
  // Read the video frame
  const videoFrame = sharp('public/east-cambs-complaints-poster.jpg');
  
  // Darken the video frame (reduce brightness to ~50%)
  const darkened = await videoFrame
    .modulate({ brightness: 0.5 })
    .toBuffer();
  
  // Create the poster overlay SVG
  const overlayWidth = 1280;
  const overlayHeight = 720;
  
  const overlay = `
<svg width="${overlayWidth}" height="${overlayHeight}" xmlns="http://www.w3.org/2000/svg">
  <!-- Semi-transparent dark overlay -->
  <rect width="${overlayWidth}" height="${overlayHeight}" fill="rgba(0,0,0,0.4)"/>
  
  <!-- Logo badge -->
  <g filter="drop-shadow(0 8px 10px rgba(0,0,0,0.28))">
    <rect x="42" y="32" width="140" height="110" rx="14" fill="#ffffff" fill-opacity="0.95"/>
  </g>
  <text x="112" y="95" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="bold" fill="#0b7d9e" text-anchor="middle">EC</text>

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
