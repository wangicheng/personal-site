import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '*.{md,mdx}', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			role: z.string(),
			period: z.string(),
			summary: z.string(),
			highlights: z.array(z.string()).default([]),
			tags: z.array(z.string()).default([]),
			featured: z.boolean().default(false),
			isCore: z.boolean().default(false),
			hasArticle: z.boolean().default(true),
			githubUrl: z.string().optional(),
			demoUrl: z.string().optional(),
			metric: z
				.object({
					value: z.string(),
					label: z.string()
				})
				.optional(),
			image: image().optional(),
			order: z.number().default(0),
			date: z.string().optional()
		})
});

const experience = defineCollection({
	loader: glob({ pattern: '*.{md,mdx}', base: './src/content/experience' }),
	schema: z.object({
		title: z.string(),
		role: z.string(),
		period: z.string(),
		date: z.string().optional(),
		summary: z.string(),
		highlights: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([]),
		metric: z
			.object({
				value: z.string(),
				label: z.string()
			})
			.optional(),
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string()
				})
			)
			.default([]),
		href: z.string().optional(),
		current: z.boolean().default(false),
		order: z.number().default(0)
	})
});

const now = defineCollection({
	loader: glob({ pattern: '*.{md,mdx}', base: './src/content/now' }),
	schema: z.object({
		title: z.string(),
		status: z.string().optional(),
		period: z.string().optional(),
		date: z.string().optional(),
		summary: z.string().optional(),
		highlights: z.array(z.string()).default([]),
		tags: z.array(z.string()).default([]),
		metric: z
			.object({
				value: z.string(),
				label: z.string()
			})
			.optional(),
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string()
				})
			)
			.default([]),
		order: z.number().default(0)
	})
});

export const collections = { projects, experience, now };
