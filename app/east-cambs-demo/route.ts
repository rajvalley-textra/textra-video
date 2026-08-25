import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'east-cambs-demo-raw.html');
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Replace entire video section with new video + contact info layout
    const newVideoSection = '<div style=\\"display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start;\\">\\n    <div style=\\"flex: 1 1 300px; min-width: 0;\\">\\n      <div style=\\"position: relative; width: 100%; aspect-ratio: 16/9; border-radius: 8px; overflow: hidden; background: #000;\\">\\n        <video src=\\"https://res.cloudinary.com/oyo7xls1/video/upload/east_cambridgeshire_district_council_-_formal_complaints_process._v1_720p_pauc0v.mp4\\" poster=\\"/east-cambs-complaints-poster.jpg\\" controls=\\"controls\\" playsinline=\\"playsinline\\" preload=\\"metadata\\" style=\\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; background: #000;\\"></video>\\n        <a href=\\"https://www.textra.video/\\" target=\\"_blank\\" rel=\\"noopener\\" title=\\"Made with Textra\\" style=\\"position: absolute; top: 10px; right: 10px; width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.94); display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.25); z-index: 2; padding: 5px;\\"><img src=\\"/textra-logo-mark.png\\" alt=\\"Textra\\" style=\\"width: 100%; height: 100%; object-fit: contain; display: block;\\"></a>\\n      </div>\\n      <p style=\\"font-size: 13px; color: #666; margin-top: 12px; line-height: 1.5;\\">This video is created using <a href=\\"https://www.textra.video/\\" style=\\"color: #0066cc; text-decoration: none; font-weight: 500;\\" target=\\"_blank\\">Textra</a></p>\\n    </div>\\n    <div style=\\"flex: 1 1 220px; padding-top: 8px;\\">\\n      <h3 style=\\"font-size: 16px; font-weight: 700; color: #1a1a1a; margin-bottom: 16px; line-height: 1.4;\\">Need Help With Your Complaint?</h3>\\n      <div style=\\"font-size: 14px; line-height: 1.6; color: #555;\\">\\n        <p style=\\"margin-bottom: 16px;\\"><strong style=\\"color: #1a1a1a; font-weight: 600;\\">Customer Services Team</strong></p>\\n        <p style=\\"margin-bottom: 8px;\\"><a href=\\"mailto:contactus@eastcambs.gov.uk\\" style=\\"color: #0066cc; text-decoration: none; font-weight: 500;\\">contactus@eastcambs.gov.uk</a></p>\\n        <p style=\\"margin-bottom: 0;\\">01353 665555</p>\\n      </div>\\n    </div>\\n  </div>';
    // Bundled HTML has escaped quotes (\") and escaped unicode (\\u002F)
    fileContent = fileContent.replace(
      /<div class=\\"video-embed\\">[\s\S]*?<\\u002Fdiv>[\s\\n]*<\\u002Fdiv>/,
      '<div class=\\"video-embed\\">\\n    <div class=\\"video-embed-label\\">💡 Video Overview</div>\\n    <div class=\\"video-embed-heading\\">See how the complaints process works</div>\\n    ' + newVideoSection + '\\n  </div>'
    );

    // Give the "Find your bin day / My Portal / Planning search" pill row an id,
    // then hide it on mobile via the page's existing 768px breakpoint.
    fileContent = fileContent.replace(
      'display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;\\">',
      'display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;\\" id=\\"quickLinksRow\\">'
    );
    fileContent = fileContent.replace(
      '@media (max-width: 768px) {\\n',
      '@media (max-width: 768px) {\\n  #quickLinksRow { display: none !important; }\\n'
    );

    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        // Demo page — keep out of search results until it's finished and we're ready to launch it.
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch (error) {
    return new NextResponse('Design not found', { status: 404 });
  }
}
