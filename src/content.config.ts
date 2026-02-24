// src/content.config.ts
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { coursesSectionSchema } from "./content/sections/courses.schema";
import { englishSectionSchema } from "./content/sections/english.schema";
import { ctaSectionSchema } from "./content/sections/cta.schema";
import { faqSectionSchema } from "./content/sections/faq.schema";
import { footerSectionSchema } from "./content/sections/footer.schema";
import { heroSectionSchema } from "./content/sections/hero.schema";
import { platformSectionSchema } from "./content/sections/platform.schema";
import { statsSectionSchema } from "./content/sections/stats.schema";

const navigation = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/navigation" }),
  schema: z.object({
    links: z
      .array(
        z.object({
          href: z
            .string()
            .min(1)
            .refine((s) => s.startsWith("#") || s.startsWith("/"), {
              message: 'href должен начинаться с "#" или "/"',
            }),
          label: z.string().min(1),
        }),
      )
      .min(1),
    cta: z.object({
      href: z.string().url(),
      label: z.string().min(1),
    }),
    aria: z
      .object({
        burgerLabel: z.string().min(1),
      })
      .optional(),
  }),
});

const coursesSection = defineCollection({
  loader: glob({ pattern: "courses.md", base: "./src/content/sections" }),
  schema: coursesSectionSchema,
});

const englishSection = defineCollection({
  loader: glob({ pattern: "english.md", base: "./src/content/sections" }),
  schema: englishSectionSchema,
});

const ctaSection = defineCollection({
  loader: glob({ pattern: "cta.md", base: "./src/content/sections" }),
  schema: ctaSectionSchema,
});

const faqSection = defineCollection({
  loader: glob({ pattern: "faq.md", base: "./src/content/sections" }),
  schema: faqSectionSchema,
});

const footerSection = defineCollection({
  loader: glob({ pattern: "footer.md", base: "./src/content/sections" }),
  schema: footerSectionSchema,
});

const heroSection = defineCollection({
  loader: glob({ pattern: "hero.md", base: "./src/content/sections" }),
  schema: heroSectionSchema,
});

const platformSection = defineCollection({
  loader: glob({ pattern: "platform.md", base: "./src/content/sections" }),
  schema: platformSectionSchema,
});

const statsSection = defineCollection({
  loader: glob({ pattern: "stats.md", base: "./src/content/sections" }),
  schema: statsSectionSchema,
});

export const collections = {
  navigation,
  coursesSection,
  englishSection,
  ctaSection,
  faqSection,
  footerSection,
  heroSection,
  platformSection,
  statsSection,
};
