// Returns the visitor's country code from Cloudflare's edge (CF-IPCountry).
// Used by the savings calculator to preselect a currency. Nothing is stored.
export const onRequestGet: PagesFunction = async ({ request }) => {
  const country = request.headers.get('cf-ipcountry') ?? '';
  return new Response(JSON.stringify({ country }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
};
