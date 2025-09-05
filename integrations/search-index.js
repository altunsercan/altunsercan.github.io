import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

/**
 * Astro integration to generate search index
 */
export default function searchIndexIntegration() {
  return {
    name: 'search-index',
    hooks: {
      'astro:build:start': async () => {
        console.log('Generating search index...');

        try {
          // Get all published blog posts
          const blogPosts = await getCollection('blog', ({ data }) => data.published !== false);
          
          // Get all published portfolio items
          const portfolioItems = await getCollection('portfolio', ({ data }) => data.published !== false);

          // Transform blog posts for search
          const searchableBlogPosts = blogPosts.map(post => ({
            title: post.data.title,
            path: `/blog/${post.slug}/`,
            summary: post.data.summary,
            type: 'blog'
          }));

          // Transform portfolio items for search
          const searchablePortfolio = portfolioItems.map(item => ({
            title: item.data.title,
            path: `/portfolio/${item.slug}/`,
            summary: item.data.summary,
            type: 'portfolio'
          }));

          // Combine all searchable items
          const searchData = [...searchableBlogPosts, ...searchablePortfolio];

          // Ensure public directory exists
          const publicDir = path.resolve(process.cwd(), 'public');
          if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
          }

          // Write search index to public directory
          const searchIndexPath = path.resolve(publicDir, 'search.json');
          fs.writeFileSync(searchIndexPath, JSON.stringify(searchData, null, 2));

          console.log(`✓ Search index generated with ${searchData.length} items`);
          console.log(`  - Blog posts: ${searchableBlogPosts.length}`);
          console.log(`  - Portfolio items: ${searchablePortfolio.length}`);

        } catch (error) {
          console.error('Error generating search index:', error);
          throw error;
        }
      }
    }
  };
}