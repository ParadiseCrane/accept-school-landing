// File: src/content/config.ts
import { z, defineCollection } from 'astro:content';


const landingBlocksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        order: z.number(),
        // 1. ADD THE FINAL FOUR BLOCK TYPES
        block_type: z.enum(['hero', 'whyNow', 'botGuide', 'englishTrack', 'courses', 'advantages', 'howItWorks', 'testimonials', 'finalCta', 'faq']),

        title: z.string(),

        // Optional fields
        subtitle: z.string().optional(),
        cta_text: z.string().optional(),
        cta_url: z.string().url().optional(),
        description: z.string().optional(),
        tagline: z.string().optional(),
        secondary_text: z.string().optional(),

        // Complex fields
        cards: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
        features: z.array(z.object({ icon: z.string(), title: z.string(), text: z.string() })).optional(),
        list_blocks: z.array(z.object({ title: z.string(), items: z.array(z.string()) })).optional(),
        courses: z.array(z.object({ title: z.string(), for_whom: z.string(), what_you_get: z.string() })).optional(),
        language_bonus: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
        advantages: z.array(z.object({ icon: z.string(), title: z.string(), text: z.string() })).optional(),

        // 2. ADD SCHEMAS FOR THE NEW BLOCKS
        steps: z.array(z.object({ icon: z.string(), title: z.string(), text: z.string() })).optional(),
        stats: z.array(z.object({ icon: z.string(), text: z.string() })).optional(),
        reviews: z.array(z.object({ quote: z.string(), author: z.string(), role: z.string() })).optional(),
        questions: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    }),
});

const legalPagesCollection = defineCollection({
    type: 'content', // This means the content is in .md or .mdx files
    schema: z.object({
        title: z.string(),
        last_updated: z.string(),
    }),
});

export const collections = {
    'landing-blocks': landingBlocksCollection,
    'legal': legalPagesCollection,
};