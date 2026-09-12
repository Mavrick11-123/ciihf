// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mavrick11-123.github.io',
  base: '/ciihf',
  vite: {
    plugins: [tailwindcss()],
  },
});
