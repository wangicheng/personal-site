import { defineConfig, passthroughImageService } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from 'rehype-mermaid';

export default defineConfig({
	site: 'https://wangicheng.github.io',
	base: '/personal-site',
	image: {
		service: passthroughImageService()
	},
	integrations: [preact({ compat: true }), sitemap()],
	markdown: {
		syntaxHighlight: {
			type: 'shiki',
			excludeLangs: ['mermaid']
		},
		remarkPlugins: [remarkMath],
		rehypePlugins: [
			[
				rehypeMermaid,
				{
					strategy: 'img-svg',
					dark: true,
					mermaidConfig: {
						theme: 'dark'
					}
				}
			],
			rehypeKatex
		]
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				react: 'preact/compat',
				'react-dom': 'preact/compat',
				'react/jsx-runtime': 'preact/jsx-runtime'
			}
		}
	}
});
