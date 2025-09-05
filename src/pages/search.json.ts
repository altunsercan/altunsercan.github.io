export async function GET() {
  const { getCollection } = await import('astro:content');
  
  // Get all blog posts and portfolio items
  const blogPosts = await getCollection('blog', ({ data }) => data.published !== false);
  const portfolioItems = await getCollection('portfolio', ({ data }) => data.published !== false);
  
  // Format for search index
  const searchData = [
    ...blogPosts.map(post => ({
      title: post.data.title,
      summary: post.data.summary,
      path: `/blog/${post.slug}`,
      tags: post.data.tags || []
    })),
    ...portfolioItems.map(item => ({
      title: item.data.title,
      summary: item.data.summary,
      path: `/portfolio/${item.slug}`,
      tags: item.data.tags || []
    }))
  ];

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}