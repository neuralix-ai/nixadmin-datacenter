import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_ENV,
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

export const articlesClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ARTICLE_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_ARTICLE_ENV,
  apiVersion: '2022-03-07',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_ARTICLE_TOKEN,
})
