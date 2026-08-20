const sharp = require('sharp');

sharp("/Users/movebubble/Downloads/the-london-borough-of-camden-logo-vector.png")
  .resize(200, 200, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .toFile("public/camden-logo-badge.png")
  .then(() => console.log("✓ Logo resized"))
  .catch(err => console.error(err));
