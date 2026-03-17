import { z } from "astro/zod";

export const statsSectionSchema = z.object({
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
});

export type StatsSectionData = z.infer<typeof statsSectionSchema>;
