 # Task 1: Initialize Astro Project Structure

## Objective
Set up the basic Astro project structure and configure essential dependencies.

## Current Context
- Migrating from Gridsome (Vue.js-based static site generator) to Astro
- Site Name: "Sercan Altun - Game & AI Programmer"  
- Current dependencies: Tailwind CSS v1, Vue components, Gridsome plugins

## Tasks to Complete
1. Initialize new Astro project with `npm create astro@latest`
2. Configure project name and basic settings
3. Install Tailwind CSS integration (`@astrojs/tailwind`)
4. Install Vue integration (`@astrojs/vue`) for component migration
5. Set up basic project structure:
   - `src/content/` for content collections
   - `src/components/` for reusable components
   - `src/layouts/` for page layouts
   - `src/pages/` for routes
   - `public/` for static assets

## Expected Deliverables
- Functioning Astro development server
- Basic astro.config.mjs with Tailwind and Vue integrations
- Clean project structure ready for content migration

## Notes
- Keep package.json scripts compatible with existing deployment process
- Ensure dev server runs on port 8080 to match current setup
- Configure build output directory as needed for GitHub Pages deployment