# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` or `astro dev` - Start local development server at http://localhost:8080
- `npm run build` or `astro build` - Build the site for production (outputs to `dist/`)
- `npm run preview` - Preview the built site locally

### Deployment
- `npm run deploy` - Build and deploy to GitHub Pages (`gh-pages -b master -d dist`)
- Build command for Netlify: `astro build` (configured in netlify.toml)

## Architecture Overview

This is an **Astro** (modern static site generator) portfolio website for Sercan Altun, a game developer and AI programmer. The site was migrated from Gridsome to leverage Astro's performance benefits while maintaining all functionality. The site features:

### Content Types
- **Blog Posts**: Located in `src/content/blog/` directory, using Astro Content Collections
- **Portfolio Items**: Located in `src/content/portfolio/` directory, using Astro Content Collections
- **Documentation**: Located in `src/content/docs/` directory, using Astro Content Collections

### Key Structure
- `astro.config.mjs` - Main Astro configuration with integrations and build settings
- `src/layouts/` - Layout components (BaseLayout.astro)
- `src/pages/` - Static pages and API routes (RSS feed generation)
- `src/components/` - Reusable components (mix of .astro and .vue files)
- `src/content/` - Content collections with Zod schemas for type safety
- `integrations/search-index.js` - Custom integration to generate search index

### Styling & Features
- **Tailwind CSS v3** with modern utility classes and CSS custom properties
- **Dark mode theme switcher** with system preference detection
- **Search functionality** using Fuse.js with Vue islands for interactivity
- **Syntax highlighting** with Shiki (Material-Theme-Palenight theme)
- **RSS feed generation** for blog posts (generated at build time)
- **Sitemap generation** via @astrojs/sitemap integration
- **Responsive design** with mobile-first approach

### Important Files
- `public/search.json` - Auto-generated search index for Fuse.js (created during build)
- `tailwind.config.js` - Tailwind CSS configuration with theme customization
- `src/content/config.ts` - Content collections schema definitions
- `src/components/Search.vue` - Interactive search component (Vue island)
- `src/components/ThemeToggle.vue` - Theme switcher component (Vue island)

### Routing & Templates
- Blog posts: `/blog/[slug]` (dynamic route using content collections)
- Portfolio items: `/portfolio/[slug]` (dynamic route using content collections)
- Tags: `/tag/[tag]` and `/portfolio/tag/[tag]` (dynamic tag pages)
- Documentation: `/docs/[slug]` (dynamic route using content collections)

### Performance Features
- **Static site generation** with minimal JavaScript shipped to client
- **Vue islands** for selective hydration of interactive components
- **Optimized images** and assets
- **CSS purging** and minification built-in

The site is deployed to GitHub Pages with the master branch containing the built site and the source branch containing the source code. The original Gridsome files are preserved in the repository for reference during the migration period.