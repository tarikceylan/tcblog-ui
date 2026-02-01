import * as z from 'zod';

export const BlogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  body: z.string().min(1, 'Body is required'),
  tags: z
    .array(z.string().min(1, "Tag can't be empty"))
    .min(1, 'Provide at least one tag'),
  hidden: z.boolean().optional(),
});
