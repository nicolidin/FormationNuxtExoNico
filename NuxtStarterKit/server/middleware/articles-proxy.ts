import { proxyRequest } from "h3";
import { fetchWithCache } from "../fetchWithCache";

// exercice middleware with cache !
export default defineEventHandler(async (event) => {
  const url = event.node.req.url || "";

  if (!url.startsWith("/api/strapi/articles")) return;

  const config = useRuntimeConfig();

  const pathAfterArticles = url.slice("/api/strapi/articles".length);
  const strapiFullUrl = `${config.strapiBaseUrl}/articles${pathAfterArticles}`;

  const method = event.node.req.method || "GET";

  if (method === "GET") {
    console.log(`[CacheProxy] GET ${strapiFullUrl} - using cache`);
    return await fetchWithCache(strapiFullUrl, () =>
      $fetch(strapiFullUrl, {
        method,
        headers: {
          Authorization: `Bearer ${config.strapiBearerToken}`,
        },
      })
    );
  } else {
    console.log(
      `[ProxyRequest] ${method} ${strapiFullUrl} - forwarding without cache`
    );
    return proxyRequest(event, strapiFullUrl, {
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`,
      },
    });
  }
});
