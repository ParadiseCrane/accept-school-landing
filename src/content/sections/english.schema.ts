import { z } from "astro/zod";

export const englishSectionSchema = z.object({
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
});

export type EnglishSectionData = z.infer<typeof englishSectionSchema>;
