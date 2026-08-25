import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'little-botanical-orchid-care-guide.html');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return new NextResponse(fileContent, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
