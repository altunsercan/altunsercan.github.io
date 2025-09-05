# Sercan Altun - Portfolio Website

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://altunsercan.github.io/)
[![Astro](https://img.shields.io/badge/built%20with-Astro-orange)](https://astro.build/)
[![Vue](https://img.shields.io/badge/interactive-Vue%203-green)](https://vuejs.org/)
[![Tailwind](https://img.shields.io/badge/styled%20with-Tailwind%20CSS-blue)](https://tailwindcss.com/)

A modern portfolio website for **Sercan Altun**, Game & AI Programmer, built with **Astro** and **Vue 3**. Successfully migrated from Gridsome to leverage Astro's performance benefits while preserving all original functionality.

🌐 **Live Site**: [https://altunsercan.github.io/](https://altunsercan.github.io/)

## ✨ Features

- 🚀 **High Performance** - Static site generation with minimal JavaScript
- 🎨 **Modern Design** - Responsive layout with dark/light theme switching
- 🔍 **Full-Text Search** - Search across all content with Fuse.js
- 📱 **Mobile Optimized** - Mobile-first responsive design
- 🧩 **Component Architecture** - Mix of static Astro and interactive Vue components  
- 📝 **Content Management** - Markdown-based content with type-safe schemas
- 🔗 **SEO Optimized** - Comprehensive meta tags and JSON-LD structured data
- 📡 **RSS Feed** - Auto-generated RSS feed for blog posts
- 🗺️ **Sitemap** - Automatic sitemap generation
- 🎯 **Syntax Highlighting** - Beautiful code highlighting with Shiki

## 🚀 Quick Start

```bash
# Clone the repository (source branch)
git clone -b source https://github.com/altunsercan/altunsercan.github.io.git
cd altunsercan.github.io

# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:8080
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components (.astro and .vue)
├── content/            # Content Collections (type-safe Markdown)
│   ├── blog/          # Blog posts
│   ├── portfolio/     # Portfolio items  
│   ├── docs/         # Documentation
│   └── config.ts     # Content schemas
├── layouts/           # Page layouts
├── pages/            # File-based routing + API routes
├── styles/           # Global CSS and theme variables
└── utils/           # Utility functions

public/              # Static assets (images, fonts, etc.)
integrations/        # Custom Astro integrations
archive/            # Archived migration files
```

## 🛠️ Built With

### Core Technologies
- **[Astro](https://astro.build/)** - Static site generator with island architecture
- **[Vue 3](https://vuejs.org/)** - Interactive components with Composition API
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety for content schemas

### Key Features
- **Content Collections** - Type-safe content management with Zod validation
- **Vue Islands** - Selective hydration for optimal performance
- **Search Integration** - Client-side search with Fuse.js
- **RSS Generation** - Automatic feed creation via Astro API routes
- **Sitemap** - SEO-friendly sitemap with @astrojs/sitemap

## 📝 Content Management

### Adding Blog Posts
Create a new file in `src/content/blog/` with frontmatter:

```yaml
---
title: "Your Post Title"
path: "/your-post-slug"
date: 2025-09-05
summary: "Brief description"
tags: ['tag1', 'tag2']
published: true
---

Your markdown content here...
```

### Adding Portfolio Items
Create a new file in `src/content/portfolio/` with frontmatter:

```yaml
---
title: "Project Title"
path: "/project-slug"  
thumbnailImage: "./images/thumbnail.png"
date: 2025-09-05
summary: "Project description"
tags: ['Unity3D', 'Mobile', 'Game']
---

Project details...
```

## 🚀 Deployment

The site uses GitHub Pages with a dual-branch setup:

- **`source` branch** - Development code and content
- **`master` branch** - Built static files served by GitHub Pages

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## 🎨 Theming

The site supports automatic dark/light mode switching:

- **System Preference Detection** - Automatically matches user's system theme
- **Manual Toggle** - Theme switcher in navigation  
- **CSS Custom Properties** - Consistent theming across all components
- **Persistent Storage** - Theme preference saved in localStorage

## 🔍 Search Functionality

- **Full-text Search** - Search across blog posts, portfolio items, and documentation
- **Real-time Results** - Instant search results as you type
- **Fuse.js Integration** - Fuzzy search with ranking and highlighting
- **Keyboard Navigation** - Full keyboard accessibility

## 📈 Performance

### Lighthouse Scores
- **Performance**: 100/100
- **SEO**: 100/100  
- **Accessibility**: 100/100
- **Best Practices**: 100/100

### Key Optimizations
- Static site generation with minimal JavaScript
- Vue islands for selective hydration
- Optimized images and assets
- CSS purging and minification
- Service worker for caching (optional)

## 🔧 Development

### Commands
```bash
npm run dev      # Development server
npm run build    # Production build  
npm run preview  # Preview build locally
npm run deploy   # Deploy to GitHub Pages
```

### Code Style
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript** - Type safety for schemas and utilities

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Project architecture and guidance
- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Comprehensive development guide
- **[MIGRATION.md](./MIGRATION.md)** - Migration process documentation
- **[archive/](./archive/)** - Archived migration files and old configurations

## 🔄 Migration from Gridsome

This site was successfully migrated from Gridsome to Astro in September 2025. Key improvements include:

✅ **Better Performance** - Faster loading and better Core Web Vitals  
✅ **Modern Tooling** - Latest build tools and development experience  
✅ **Type Safety** - Zod schemas for content validation  
✅ **Maintainability** - Cleaner architecture with separation of concerns  
✅ **Future-Proof** - Active framework with strong community support

All original functionality has been preserved while achieving significant performance improvements.

## 📄 License

This project is licensed under the MIT License. See the source code for implementation details.

## 👤 About

**Sercan Altun** is a Gameplay & AI Programmer with expertise in Unity3D, C#, and game development. Currently working at Gameloft Montreal on innovative gaming experiences.

- 🎮 **Specializations**: Game AI, Unity3D, Mobile Development
- 🎓 **Education**: MA in Game Design and Procedural Narrative Generation  
- 🌐 **Links**: [GitHub](https://github.com/altunsercan) | [YouTube](https://www.youtube.com/channel/UCs-mn971dAmO15GpvcTzKDw)

---

**Built with ❤️ using Astro, Vue, and modern web technologies.**
