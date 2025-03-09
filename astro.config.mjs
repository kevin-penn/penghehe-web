// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.penghehe.com',
	server: { port: 3000, host: true},
	integrations: [mdx(), sitemap()],
	build: {
		assets: 'assets',
	}
});
