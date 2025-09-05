import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  
  // Sort blog posts by date (newest first)
  const sortedPosts = blog
    .filter(post => post.data.published !== false)
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  return rss({
    title: 'Sercan Altun - Game & AI Programmer',
    description: 'A personal blog and portfolio of a game developer and AI programmer.',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog${post.data.path}/`,
      content: post.body,
      categories: post.data.tags || [],
    })),
    customData: `<language>en-us</language>`,
  });
}