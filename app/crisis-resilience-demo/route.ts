export async function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: 'https://textra-video.vercel.app/crisis-resilience-demo.html',
    },
  });
}
