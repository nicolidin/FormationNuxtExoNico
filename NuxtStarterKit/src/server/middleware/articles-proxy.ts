import { proxyRequest } from 'h3'

export default defineEventHandler(async (event) => {
  const url = event.node.req.url || '';

  if (!url.startsWith('/api/strapi/articles')) return;

  const config = useRuntimeConfig();

  // Récupère la partie après /api/strapi/articles, comme les filter etc
  const pathAfterArticles = url.slice('/api/strapi/articles'.length);

  const strapiFullUrl = `${config.strapiBaseUrl}/articles${pathAfterArticles}`;

  console.log('[Proxy] Forwarding request to:', strapiFullUrl);

  return proxyRequest(event, strapiFullUrl, {
    headers: {
      Authorization: `Bearer ${config.strapiBearerToken}`,
    },
  });
});
