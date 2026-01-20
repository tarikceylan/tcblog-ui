import * as z from 'zod';

export const BlogSchema = z.object({
  title: z.string(),
  body: z.string().max(1000),
  tags: z.array(z.string()),
});
