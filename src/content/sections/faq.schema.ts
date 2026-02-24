import { z } from "astro/zod";

export const faqSectionSchema = z.object({
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  faqs: z
    .array(
      z.object({
        question: z.string().min(1),
        answer: z.string().min(1),
      }),
    )
    .min(1),
});

export type FaqSectionData = z.infer<typeof faqSectionSchema>;
