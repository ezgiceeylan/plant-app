import type { Article, Category } from './types';

const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export async function getQuestions(): Promise<Article[]> {
  const res = await fetch(`${BASE_URL}/getQuestions`);
  if (!res.ok) {
    throw new Error(`getQuestions failed (${res.status})`);
  }

  return (await res.json()) as Article[];
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/getCategories`);
  if (!res.ok) {
    throw new Error(`getCategories failed (${res.status})`);
  }

  const body = (await res.json()) as { data: Category[] };
  return body.data;
}
