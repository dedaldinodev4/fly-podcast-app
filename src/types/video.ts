import { z } from 'zod'

const VideoSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  link: z.string(),
  image: z.string(),
  date: z.string(),
})

export type Video = z.infer<typeof VideoSchema>;