import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'east-cambs-demo-raw.html');
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Replace entire video section with new video + contact info layout
    const newVideoSection = '<div style=\\"display: flex; gap: 32px; align-items: flex-start;\\">\\n    <div style=\\"flex: 1; min-width: 0;\\">\\n      <iframe src=\\"https://player.vimeo.com/video/1217045546\\" width=\\"100%\\" height=\\"400\\" style=\\"border-radius: 8px; aspect-ratio: 16/9;\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen; picture-in-picture\\" allowfullscreen></iframe>\\n      <p style=\\"font-size: 13px; color: #666; margin-top: 12px; line-height: 1.5;\\">This video is created using <a href=\\"https://www.textra.video/\\" style=\\"color: #0066cc; text-decoration: none; font-weight: 500;\\" target=\\"_blank\\">Textra</a></p>\\n    </div>\\n    <div style=\\"flex: 0 0 280px; padding-top: 8px;\\">\\n      <h3 style=\\"font-size: 16px; font-weight: 700; color: #1a1a1a; margin-bottom: 16px; line-height: 1.4;\\">Need Help With Your Complaint?</h3>\\n      <div style=\\"font-size: 14px; line-height: 1.6; color: #555;\\">\\n        <p style=\\"margin-bottom: 16px;\\"><strong style=\\"color: #1a1a1a; font-weight: 600;\\">Customer Services Team</strong></p>\\n        <p style=\\"margin-bottom: 8px;\\"><a href=\\"mailto:contactus@eastcambs.gov.uk\\" style=\\"color: #0066cc; text-decoration: none; font-weight: 500;\\">contactus@eastcambs.gov.uk</a></p>\\n        <p style=\\"margin-bottom: 0;\\">01353 665555</p>\\n      </div>\\n    </div>\\n  </div>';
    // Bundled HTML has escaped quotes (\") and escaped unicode (\\u002F)
    fileContent = fileContent.replace(
      /<div class=\\"video-embed\\">[\s\S]*?<\\u002Fdiv>[\s\\n]*<\\u002Fdiv>/,
      '<div class=\\"video-embed\\">\\n    <div class=\\"video-embed-label\\">💡 Video Overview</div>\\n    <div class=\\"video-embed-heading\\">See how the complaints process works</div>\\n    ' + newVideoSection + '\\n  </div>'
    );

    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    return new NextResponse('Design not found', { status: 404 });
  }
}
