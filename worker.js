/**
 * Cloudflare Worker with Static Assets
 * Direct edge serving with custom security headers
 */

export default {
  async fetch(request, env) {
    // If static assets binding is available
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(request);
      const headers = new Headers(response.headers);
      headers.set('X-XSS-Protection', '1; mode=block');
      headers.set('X-Content-Type-Options', 'nosniff');
      headers.set('X-Frame-Options', 'SAMEORIGIN');
      headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};

