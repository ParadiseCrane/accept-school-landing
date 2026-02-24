import { z } from "astro/zod";

export const platformSectionSchema = z.object({
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  features: z
    .array(
      z.object({
        title: z.string().min(1),
        icon: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1),
});

export type PlatformSectionData = z.infer<typeof platformSectionSchema>;
