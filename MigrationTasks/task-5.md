# Task 5: Create Page Routes and Templates

## Objective
Set up Astro page routes and dynamic templates for content display.

## Current Gridsome Routes
- `/` - Index.vue (Homepage)
- `/blog` - Blog.vue (Blog listing)
- `/blog/:path` - Post.vue template
- `/portfolio` - Portfolio.vue (Portfolio listing) 
- `/portfolio/:path` - PortfolioItem.vue template
- `/docs` - Docs.vue (Documentation listing)
- `/docs/:path` - Documentation.vue template
- `/tag/:id` - Tag.vue template
- `/portfolio/tag/:id` - PortfolioTag.vue template
- `/404` - 404.vue

## Tasks to Complete
1. Create static pages in `src/pages/`:
   - `index.astro` - Homepage
   - `blog/index.astro` - Blog listing
   - `portfolio/index.astro` - Portfolio listing
   - `docs/index.astro` - Documentation listing
   - `404.astro` - Error page

2. Create dynamic routes:
   - `blog/[...slug].astro` - Individual blog posts
   - `portfolio/[...slug].astro` - Individual portfolio items
   - `docs/[...slug].astro` - Individual documentation pages
   - `tag/[tag].astro` - Tag listing pages
   - `portfolio/tag/[tag].astro` - Portfolio tag pages

3. Implement `getStaticPaths()` for dynamic routes
4. Set up proper content rendering with markdown processing
5. Configure pagination for listing pages

## Expected Deliverables
- All page routes functional
- Dynamic content rendering working
- Pagination implemented where needed
- Proper meta tags and SEO setup

## Notes
- Maintain existing URL structure for SEO
- Ensure proper 404 handling
- Test all route parameters and edge cases