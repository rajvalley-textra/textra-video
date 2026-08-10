import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'east-cambs-demo-raw.html');
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // Replace video placeholder with Vimeo iframe
    const vimeoIframe = '<iframe src=\\"https://player.vimeo.com/video/1216346692\\" width=\\"100%\\" height=\\"400\\" style=\\"max-width: 600px; border-radius: 8px; aspect-ratio: 16/9;\\" frameborder=\\"0\\" allow=\\"autoplay; fullscreen; picture-in-picture\\" allowfullscreen></iframe>';
    // Bundled HTML has escaped quotes (\") and escaped unicode (\\u002F)
    fileContent = fileContent.replace(
      /<div class=\\"video-placeholder\\">[\s\S]*?<\\u002Fdiv>/,
      vimeoIframe
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
