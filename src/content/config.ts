import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    image: z.string().optional(),
    client: z.string().optional(),
    role: z.string().optional(),
    technologies: z.array(z.string()).optional(),
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.date().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  'blog': blog,
  'portfolio': portfolio,
  'docs': docs,
};