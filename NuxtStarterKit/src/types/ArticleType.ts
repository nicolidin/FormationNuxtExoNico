// types/ArticleType.ts
export type ArticleType = {
  id: number;
  documentId: string;
  contentMd: string;
  slug: string;
  createdAt: string;     // ISO date string
  updatedAt: string;     // ISO date string
  publishedAt: string;   // ISO date string
};
