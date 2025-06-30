<template>
  <div>
    yes articles
    <ArticleList :articles="articles.data"/>
    {{articles}}
  </div>
</template>

<script setup lang="ts">
import {fetchArticles} from "~/api/strapi/fetchArticles";
import ArticleList from "~/components/Molecules/ArticleList.vue";

// exo 1
// const { data: articles, error } = await useAsyncData('articles', () =>
//   fetchArticlesExo1()
// )


// Exercice 2 – Utilisation d'une route
// intermédiaire Nuxt pour fetch articles // on appel la route
// la même pour  exercice 3  avec middleware
// décommenter sois middleware soit route
// const { data: articles, error } = await useAsyncData('articles', () =>
//   $fetch('/api/strapi/articles')
// )


//📝 Exercice - Création d'une page article​ -> gestion store
const articleStore = useArticlesStore();
const { data: articles, error } = await useAsyncData('articles', async () => {
      const resp = await $fetch('/api/strapi/articles')
      console.log("resp: ", resp)
      articleStore.setArticles(resp.data)
      return resp
}
)
</script>

<style scoped lang="scss">

</style>
