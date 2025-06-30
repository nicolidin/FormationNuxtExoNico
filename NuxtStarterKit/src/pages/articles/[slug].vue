<!-- pages/articles/[slug].vue -->
<template>
  <div v-if="article">
    <!-- Affiche les données de l'article (à adapter pour un rendu propre) -->
    {{ article }}
  </div>
  <div v-else>
    <p>Article non trouvé.</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import type { ArticleType } from '~/types/ArticleType';

// Récupérer le slug depuis l'URL
const route = useRoute();
const slug = route.params.slug as string;

// Accéder au store des articles
const store = useArticlesStore();

// Utiliser useAsyncData pour charger l'article si le store est vide
const { data: articleData, error } = await useAsyncData<ArticleType | null>(
    'article-' + slug,
    async () => {
      // Si le store est vide, fetch depuis l'API
      if (store.articles.length === 0) {
        const res = await $fetch(`/api/strapi/articles?filters[slug][$eq]=${slug}`);
        console.log("response !!: ", res)
        if (res.data && res.data.length > 0) {
          const article = res.data[0] as ArticleType;
          console.log("article fetché ! le voici ->  ", article)
          // Stocker l'article dans le store
          return article;
        }
        // Si pas d'article trouvé, retourner null
        return null;
      } else {
        console.log('we search into store (navigating)')
        // Sinon chercher l'article dans le store
        return store.articles.find(a => a.slug === slug) || null;
      }
    }
);

// Computed pour l'article, priorise l'article chargé par useAsyncData ou celui dans le store
const article = computed(() => {
  return articleData.value || store.articlesBySlug(slug);
});
</script>
