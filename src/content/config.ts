import { z, defineCollection } from 'astro:content';

const landingBlocksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        order: z.number(),
        block_type: z.enum(['hero', 'whyNow', 'botGuide', 'englishTrack']),

        // Fields for all blocks
        title: z.string(),

        // Optional fields used by different blocks
        subtitle: z.string().optional(),
        cta_text: z.string().optional(),
        cta_url: z.string().url().optional(),
        description: z.string().optional(),
        tagline: z.string().optional(),

        // Complex fields for lists/cards
        cards: z.array(z.object({
            title: z.string(),
            text: z.string(),
        })).optional(),

        features: z.array(z.object({
            icon: z.string(),
            title: z.string(),
            text: z.string(),
        })).optional(),

        list_blocks: z.array(z.object({
            title: z.string(),
            items: z.array(z.string()),
        })).optional(),
    }),
});

export const collections = {
    'landing-blocks': landingBlocksCollection,
};