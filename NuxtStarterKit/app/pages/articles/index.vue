<template>
  <div>
    yes articles
    <ArticleList :articles="articles.data" />
    {{ articles }}
  </div>
</template>

<script setup lang="ts">
import ArticleList from "~/components/Molecules/ArticleList.vue";

// Exercice 2 – Utilisation d'une route
// intermédiaire Nuxt pour fetch articles // on appel la route
// la même pour  exercice 3  avec middleware
const { data: articles, error } = await useAsyncData("articles", () =>
  $fetch("/api/strapi/articles")
);

useSeoMeta({
  title: "my page articles",
  description: "tous mes articles - Nicolas Lidin",
});
</script>

<style scoped lang="scss"></style>
