import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/posts' }),
  schema: z.object({
    title: z.string()
  })
})

export const collections = {
  posts: posts
}