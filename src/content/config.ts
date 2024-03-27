import { defineCollection, z } from 'astro:content';

const incident = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    affectedSystems: z.array(z.string()),
    severity: z.string(),
    resolved: z.boolean().default(false),
  }),
});

export const collections = { incident };
