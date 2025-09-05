import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://altunsercan.github.io',
  integrations: [
    tailwind(),
    vue(),
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