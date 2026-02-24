import { z } from "astro/zod";

export const heroSectionSchema = z.object({
  title: z.string().min(1),
  titleColored: z.string().min(1),
  description: z.string().min(1),
});

export type HeroSectionData = z.infer<typeof heroSectionSchema>;
