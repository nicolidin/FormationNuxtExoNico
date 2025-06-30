<template>
  <div class="article-list">
    <ArticlePreview
        v-for="article in articles"
        :key="article.id"
        :article="article"
    />
  </div>
</template>

<script setup lang="ts">
import type { ArticleType } from '~/types/ArticleType';
import ArticlePreview from './ArticlePreview.vue';

defineProps<{ articles: ArticleType[] }>();
</script>

<style scoped lang="scss">
.article-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
