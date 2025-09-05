# Development Workflow Guide

This guide provides instructions for maintaining and developing the Astro-based Sercan Altun portfolio website.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Development Setup
```bash
# Clone the repository (source branch)
git clone -b source https://github.com/altunsercan/altunsercan.github.io.git
cd altunsercan.github.io

# Install dependencies
npm install

# Start development server
npm run dev
# Server runs at http://localhost:8080
```

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:8080
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

### Legacy Compatibility
- `npm run develop` - Alias for `npm run dev` (Gridsome compatibility)
- `npm run explore` - Shows message about GraphQL explorer (not applicable to Astro)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── *.astro         # Static components (server-rendered)
│   ├── *.vue          # Interactive components (client-side)
│   └── ui/            # UI component library
├── content/           # Content Collections (Markdown files)
│   ├── blog/         # Blog posts
│   ├── portfolio/    # Portfolio items
│   ├── docs/         # Documentation
│   └── config.ts     # Content schemas (Zod validation)
├── layouts/          # Page layouts
│   └── BaseLayout.astro
├── pages/            # File-based routing
│   ├── index.astro   # Homepage
│   ├── blog/         # Blog routes
│   ├── portfolio/    # Portfolio routes
│   ├── docs/         # Documentation routes
│   └── rss.xml.js    # RSS feed API route
├── styles/           # Global styles
│   └── global.css    # CSS custom properties and base styles
└── utils/            # Utility functions
```

## Content Management

### Adding Blog Posts
1. Create new file in `src/content/blog/slug-name.md`
2. Add frontmatter with required fields:
```yaml
---
title: "Your Post Title"
path: "/your-post-slug"
date: 2025-09-05
summary: "Brief description of the post"
tags: ['tag1', 'tag2']
published: true  # Set to false to hide from public
---
```

### Adding Portfolio Items
1. Create new file in `src/content/portfolio/item-name.md`
2. Add frontmatter:
```yaml
---
title: "Project Title"
path: "/project-slug"
thumbnailImage: "./images/thumbnail.png"
date: 2025-09-05
summary: "Project description"
tags: ['Unity3D', 'Mobile', 'Game']
---
```

### Adding Documentation
1. Create new file in `src/content/docs/doc-name.md`
2. Use same frontmatter structure as blog posts

### Managing Images
- Place images in `public/` directory for static assets
- Reference as `/image-name.jpg` in markdown or components
- For content-specific images, create subdirectories in `public/images/`

## Component Development

### Static Components (.astro files)
- Use for server-rendered content
- No client-side JavaScript
- Better performance for static content

```astro
---
// Component script (runs on server)
export interface Props {
  title: string;
  description?: string;
}

const { title, description = '' } = Astro.props;
---

<div class="component">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  .component {
    /* Scoped CSS */
  }
</style>
```

### Interactive Components (.vue files)
- Use for client-side interactivity
- Add `client:*` directive when used in Astro

```vue
<template>
  <button @click="handleClick" :class="buttonClass">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
});

const buttonClass = computed(() => {
  return `btn btn-${props.variant}`;
});

const handleClick = () => {
  // Handle click logic
};
</script>
```

## Styling Guidelines

### Tailwind CSS
- Primary framework: Tailwind CSS v3
- Configuration: `tailwind.config.js`
- Custom classes in `src/styles/global.css`

### Theme System
- CSS custom properties for colors
- Automatic dark/light mode detection
- Manual theme switching via ThemeToggle component

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## SEO and Meta Tags

### Automatic SEO
- Meta tags automatically generated in BaseLayout
- JSON-LD structured data included
- Open Graph and Twitter Card support

### Custom SEO
Pass props to BaseLayout:
```astro
<BaseLayout
  title="Custom Page Title"
  description="Page description"
  keywords="keyword1, keyword2"
  canonical="https://altunsercan.github.io/custom-page/"
  type="article"
  image="/og-image.jpg"
>
  <!-- Page content -->
</BaseLayout>
```

## Build and Deployment

### Development Build
```bash
npm run build
# Creates dist/ directory with static files
```

### Deployment to GitHub Pages
```bash
npm run deploy
# Builds and deploys to master branch
```

### Deployment Process
1. Builds static site to `dist/` directory
2. Uses `gh-pages` to deploy to `master` branch
3. GitHub Pages serves from `master` branch
4. Source code remains in `source` branch

## Performance Optimization

### Astro Benefits
- Static site generation with minimal JavaScript
- Vue islands for selective hydration
- Automatic code splitting and optimization

### Best Practices
- Use `.astro` components for static content
- Use `.vue` components only when interactivity is needed
- Add appropriate `client:*` directives for Vue islands
- Optimize images and assets
- Minimize CSS and JavaScript bundles

## Testing and Quality Assurance

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works (desktop and mobile)
- [ ] Search functionality works
- [ ] Theme switching works
- [ ] Blog posts display correctly
- [ ] Portfolio items display correctly
- [ ] RSS feed generates correctly
- [ ] Sitemap generates correctly

### Build Verification
```bash
npm run build
npm run preview
# Test the production build locally
```

## Troubleshooting

### Common Issues
1. **Build failures**: Check content frontmatter validation
2. **Missing images**: Ensure images are in `public/` directory
3. **Search not working**: Verify search index generation in build
4. **Theme not persisting**: Check localStorage functionality

### Debug Steps
1. Check browser console for errors
2. Verify content schema validation
3. Test in development vs production build
4. Check network requests in browser dev tools

## Maintenance Tasks

### Regular Maintenance
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Update content as needed
- Monitor site performance and Core Web Vitals

### Content Updates
- Blog posts: Add to `src/content/blog/`
- Portfolio updates: Modify files in `src/content/portfolio/`
- New features: Update components and pages as needed

## Migration Notes

### Differences from Gridsome
- No GraphQL layer (uses Content Collections instead)
- File-based routing instead of programmatic routing
- Vue islands instead of full Vue SPA
- Different build system and optimizations

### Preserved Features
- All content and functionality from original site
- Same URL structure and SEO
- Dark/light theme switching
- Search functionality
- RSS feed and sitemap

---

For questions or issues, refer to:
- [Astro Documentation](https://docs.astro.build/)
- [Vue 3 Documentation](https://vuejs.org/guide/)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Project MIGRATION.md for migration details