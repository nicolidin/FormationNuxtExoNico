
// fonctionne QUE si on rafréchis la page /articles car fonctionne que en SS
// pas de middleware ou route intermediaire encore
export const fetchArticles = async () => {
  const config = useRuntimeConfig();
  const url = `http://localhost:1337/api/articles`;

  try {
    const data = await $fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.strapiBearerToken}`,
      },
    });
    console.log("articles : ", data)
    return data;
  } catch (error: any) {
    console.error("Fetch error:", error);
    throw new Error(error.message || "Failed to fetch articles");
  }
};
