import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/issues' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dek: z.string().optional(), // one-sentence summary shown in the archive
    issue: z.number().optional(), // issue number, e.g. 1
    tags: z.array(z.string()).optional(), // e.g. ["markets", "global economy", "the transfer"]
  }),
});

export const collections = { issues };
