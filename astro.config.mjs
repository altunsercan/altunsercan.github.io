import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import searchIndexIntegration from './integrations/search-index.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://altunsercan.github.io',
  integrations: [
    tailwind(),
    vue(),
    searchIndexIntegration(),
    sitemap()
  ],
  server: {
    port: 8080,
    host: true
  },
  build: {
    assets: '_astro'
  },
  output: 'static'
});