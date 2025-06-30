<template>
  <div class="article-preview" @click="goToArticle">
    <h2 class="article-preview__title">{{ article.slug }}</h2>
    <p class="article-preview__date">{{ formattedDate }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { ArticleType } from '~/types/ArticleType';

const props = defineProps<{ article: ArticleType }>();

const router = useRouter();
const goToArticle = () => {
  router.push(`/articles/${props.article.slug}`);
};

const formattedDate = new Date(props.article.publishedAt).toLocaleDateString();
</script>

<style scoped lang="scss">
.article-preview {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f9f9f9;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  &__date {
    font-size: 0.875rem;
    color: #666;
  }
}
</style>
