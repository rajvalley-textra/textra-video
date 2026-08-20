export async function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: 'https://textra-video.vercel.app/camden-council-parking-permits.html',
    },
  });
}
