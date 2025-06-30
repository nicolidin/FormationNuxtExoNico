// stores/useArticlesStore.ts
import { defineStore } from "pinia";
import type { ArticleType } from "~/types/ArticleType";

export type State = {
  articles: Array<ArticleType>;
};

export const useArticlesStore = defineStore<State>("articlesStore", {
  state: () => ({ articles: [] }),

  getters: {
    articlesBySlug: (state) => {
      return (slug: string): ArticleType | undefined =>
        state.articles.find((article) => article.slug === slug);
    },
  },

  actions: {
    setArticles(newArticles: Array<ArticleType>) {
      this.articles = newArticles;
    },
  },
});
