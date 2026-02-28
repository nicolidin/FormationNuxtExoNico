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

// // exo 1 en appelant function (plus clean)
// const { data: articles, error } = await useAsyncData('articles', () =>
//   fetchArticles()
// )

//exo1 en direct
// fonctionne QUE si on rafréchis la page /articles car fonctionne que en SS
// pas de middleware ou route intermediaire encore
// const { data: articles, error } = await useAsyncData('articles', async ()  => {
//   console.log("import.meta.server: ", import.meta.server )
//   console.log("we fetch articles")
//   const config = useRuntimeConfig();
//   const data =  await $fetch('http://localhost:1337/api/articles', {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${config.strapiBearerToken}`,
//     }
//   })
//   console.log("data: ", data);
//   return data
// })
//


// Exercice 2 – Utilisation d'une route
// intermédiaire Nuxt pour fetch articles // on appel la route
// la même pour  exercice 3  avec middleware
// décommenter sois middleware soit route
const { data: articles, error } = await useAsyncData('articles', () =>
  $fetch('/api/strapi/articles')
)

//
// //📝 Exercice - Création d'une page article​ -> gestion store
// const articleStore = useArticlesStore();
// const { data: articles, error } = await useAsyncData('articles', async () => {
//       console.log("useAsyncData articles page")
//       const resp = await $fetch('/api/strapi/articles')
//       console.log("resp: ", resp)
//       articleStore.setArticles(resp.data)
//       return resp
// }
// )

useSeoMeta({
  title: 'my page articles',
  description: 'tous mes articles - Nicolas Lidin',
});
</script>

<style scoped lang="scss">

</style>
