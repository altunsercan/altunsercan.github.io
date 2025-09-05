import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import searchIndexIntegration from './integrations/search-index.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://altunsercan.github.io',
  integrations: [
    tailwind(),
    vue(),
    sitemap(),
    searchIndexIntegration()
  ],
  server: {
    port: 8080,
    host: true
  },
  build: {
    assets: '_astro',
    // CSS optimization is enabled by default in Astro
    inlineStylesheets: 'auto'
  },
  output: 'static',
  markdown: {
    shikiConfig: {
      theme: 'material-theme-palenight',
      wrap: true
    }
  }
});