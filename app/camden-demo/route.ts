export async function GET() {
  return new Response(null, {
    status: 307,
    headers: {
      Location: '/camden-council-parking-permits.html',
    },
  });
}
