import fs from 'fs';
import path from 'path';

/**
 * Manual search index generation for development/testing
 * This creates the search index that would be created by the Astro integration
 */
async function generateSearchIndex() {
  console.log('Generating search index manually...');

  try {
    // Function to recursively find markdown files
    function findMarkdownFiles(dir) {
      const files = [];
      try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            files.push(...findMarkdownFiles(fullPath));
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        console.warn(`Could not read directory ${dir}:`, error.message);
      }
      return files;
    }
    
    // Get all blog and portfolio files
    const blogFiles = findMarkdownFiles('src/content/blog');
    const portfolioFiles = findMarkdownFiles('src/content/portfolio');
    
    const searchData = [];
    
    // Process blog posts
    for (const file of blogFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      const slug = path.basename(file, '.md');
      
      // Extract frontmatter
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\s*$/m);
        const summaryMatch = frontmatter.match(/summary:\s*["']?(.*?)["']?\s*$/m);
        const publishedMatch = frontmatter.match(/published:\s*(false)\s*$/m);
        
        if (!publishedMatch) { // Only include if not explicitly published: false
          const title = titleMatch ? titleMatch[1] : slug;
          const summary = summaryMatch ? summaryMatch[1] : '';
          
          searchData.push({
            title: title,
            path: `/blog/${slug}/`,
            summary: summary,
            type: 'blog'
          });
        }
      }
    }
    
    // Process portfolio items
    for (const file of portfolioFiles) {
      const content = fs.readFileSync(file, 'utf-8');
      const slug = path.basename(file, '.md');
      
      // Extract frontmatter
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        const titleMatch = frontmatter.match(/title:\s*["']?(.*?)["']?\s*$/m);
        const summaryMatch = frontmatter.match(/summary:\s*["']?(.*?)["']?\s*$/m);
        const publishedMatch = frontmatter.match(/published:\s*(false)\s*$/m);
        
        if (!publishedMatch) { // Only include if not explicitly published: false
          const title = titleMatch ? titleMatch[1] : slug;
          const summary = summaryMatch ? summaryMatch[1] : '';
          
          searchData.push({
            title: title,
            path: `/portfolio/${slug}/`,
            summary: summary,
            type: 'portfolio'
          });
        }
      }
    }

    // Ensure public directory exists
    const publicDir = path.resolve(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write search index to public directory
    const searchIndexPath = path.resolve(publicDir, 'search.json');
    fs.writeFileSync(searchIndexPath, JSON.stringify(searchData, null, 2));

    console.log(`✓ Search index generated with ${searchData.length} items`);
    console.log(`  - Blog posts: ${searchData.filter(item => item.type === 'blog').length}`);
    console.log(`  - Portfolio items: ${searchData.filter(item => item.type === 'portfolio').length}`);
    console.log(`Search index saved to: ${searchIndexPath}`);

  } catch (error) {
    console.error('Error generating search index:', error);
    process.exit(1);
  }
}

generateSearchIndex();