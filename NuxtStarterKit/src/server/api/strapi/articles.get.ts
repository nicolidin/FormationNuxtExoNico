// Exercice 2 – Utilisation d'une route
// intermédiaire Nuxt pour fetch article
// c'est la suite de l'appel dans articles.vue
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const strapiUrl = `${config.strapiBaseUrl}/articles`;

  try {
    const data = await $fetch(strapiUrl, {
      headers: {
        Authorization: `Bearer ${config.strapiBearerToken}`,
      },
    });

    // not mandatory
    // event.node.res.statusCode = 200;
    return data; // $fetch parse automatiquement en JSON si la réponse est JSON
  } catch (error) {
    console.error("Error fetching from Strapi:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch data from Strapi",
    });
  }
});
