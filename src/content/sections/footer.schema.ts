import { z } from "astro/zod";

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

export const footerSectionSchema = z.object({
  description: z.string().min(1),
  rights: z.string().min(1),
  social: z.object({
    telegram: z.object({
      href: z.string().url(),
      title: z.string().min(1),
    }),
    github: z.object({
      href: z.string().url(),
      title: z.string().min(1),
    }),
  }),
  sections: z
    .array(
      z.object({
        title: z.string().min(1),
        links: z.array(linkSchema).min(1),
      }),
    )
    .min(1),
});

export type FooterSectionData = z.infer<typeof footerSectionSchema>;
