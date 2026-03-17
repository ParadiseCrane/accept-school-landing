import { z } from "astro/zod";

export const ctaSectionSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export type CtaSectionData = z.infer<typeof ctaSectionSchema>;
