import { defineCollection, z } from 'astro:content';

const incident = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    affectedSystems: z.array(
      z.union([
        z.literal('ugrc api'),
        z.literal('turn gps'),
        z.literal('our website'),
        z.literal('discover base maps and imagery'),
        z.literal('open sgid'),
        z.literal('sgid on arcgis'),
        z.literal('license manager'),
        z.literal('mapserv'),
      ]),
    ),
    severity: z.union([
      z.literal('under-maintenance'),
      z.literal('degraded-performance'),
      z.literal('partial-outage'),
      z.literal('major-outage'),
    ]),
    resolved: z.boolean().default(false),
  }),
});

export const collections = { incident };
