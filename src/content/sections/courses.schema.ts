import { z } from "astro/zod";

export const coursesSectionSchema = z.object({
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  cta: z.object({
    href: z.string().url(),
    label: z.string().min(1),
  }),
  courses: z
    .array(
      z.object({
        type: z.enum(["algorithms", "python"]),
        title: z.string().min(1),
        description: z.string().min(1),
        items: z.array(z.string().min(1)).min(1),
      }),
    )
    .min(1),
});

export type CoursesSectionData = z.infer<typeof coursesSectionSchema>;
export type CourseType = CoursesSectionData["courses"][number]["type"];
