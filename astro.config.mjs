// Configuration Astro 5 — pokopia.blog
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://pokopia.blog',
  output: 'static',

  // Intégrations Astro
  integrations: [
    mdx(),
  ],

  // Plugin Tailwind CSS v4 via Vite
  vite: {
    plugins: [tailwindcss()],
  },
});
