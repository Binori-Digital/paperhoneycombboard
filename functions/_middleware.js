export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'paperhoneycombboard.com') {
    url.hostname = 'www.paperhoneycombboard.com';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
