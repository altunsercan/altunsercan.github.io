import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    path: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    path: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    featured_image: z.string().optional(),
    thumbnailImage: z.string().optional(),
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
    description: z.string().optional(),
    excerpt: z.string().optional(), // For backward compatibility
    path: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = {
  'blog': blog,
  'portfolio': portfolio,
  'docs': docs,
};