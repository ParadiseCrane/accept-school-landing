import { defineCollection, z } from 'astro:content';

const contentBlockCollection = defineCollection({
    type: 'content', // 'content' for Markdown files
    schema: z.object({
        // Main block fields
        title: z.string(),
        subtitle: z.string().optional(),
        // Call-to-action fields
        cta_text: z.string().optional(),
        cta_url: z.string().url().optional(),
        // Visuals
        visual_alt: z.string().optional(),
        // A field to control block visibility or type
        block_type: z.enum(['hero', 'feature', 'courses', 'faq', 'cta']).optional().default('feature'),
    }),
});

export const collections = {
    'blocks': contentBlockCollection,
};