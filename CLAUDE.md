# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run develop` or `gridsome develop` - Start local development server at http://localhost:8080
- `npm run build` or `gridsome build` - Build the site for production (outputs to `dist/`)
- `npm run explore` or `gridsome explore` - Explore GraphQL data layer at http://localhost:8080/___explore

### Deployment
- `npm run deploy` - Build and deploy to GitHub Pages (`gh-pages -b master -d dist`)
- Build command for Netlify: `gridsome build` (configured in netlify.toml)

## Architecture Overview

This is a **Gridsome** (Vue.js-based static site generator) portfolio website for Sercan Altun, a game developer and AI programmer. The site features:

### Content Types
- **Blog Posts**: Located in `blog/` directory, transformed into GraphQL `Post` type
- **Portfolio Items**: Located in `portfolio/` directory, transformed into GraphQL `PortfolioItem` type  
- **Documentation**: Located in `docs/` directory, transformed into GraphQL `Documentation` type

### Key Structure
- `src/main.js` - Global Vue configuration, plugins (VueScrollTo, VueFuse), and meta tags
- `src/layouts/` - Layout components (Default.vue)
- `src/pages/` - Static pages and routing
- `src/templates/` - Dynamic page templates for content types
- `src/components/` - Reusable Vue components
- `gridsome.config.js` - Main configuration with plugins and content source definitions
- `gridsome.server.js` - Server-side hooks, generates search index for Fuse.js

### Styling & Features
- **Tailwind CSS v1** with PurgeCSS for production builds
- **Dark mode theme switcher**
- **Search functionality** using Fuse.js and vue-fuse (searches title/summary of posts)
- **Syntax highlighting** with Shiki (Material-Theme-Palenight theme)
- **RSS feed generation** for blog posts
- **Sitemap generation**
- **Scroll-to-section** navigation

### Important Files
- `static/search.json` - Auto-generated search index for Fuse.js (created during build)
- `tailwind.config.js` - Tailwind CSS configuration
- `purgecss.config.js` - PurgeCSS configuration for production builds

### Templates & Routing
- Blog posts: `/blog/:path`
- Portfolio items: `/portfolio/:path` 
- Tags: `/tag/:id` and `/portfolio/tag/:id`
- Documentation: `/docs/:path`

The site is deployed to GitHub Pages with the master branch containing the built site and the source branch containing the source code.