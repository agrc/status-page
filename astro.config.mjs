import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: process.env.BRANCH === 'main' ? process.env.URL : process.env.DEPLOY_URL || 'https://agrc-status.netlify.app',
  markdown: { processor: unified() },
  integrations: [sitemap(), mdx(), react()],
  vite: { plugins: [tailwindcss()] },
});
