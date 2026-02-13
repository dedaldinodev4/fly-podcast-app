import { z } from 'zod'

const InfoSchema = z.object({
  sections: z.object({
    about: z.object({
      title: z.string(),
      description: z.string(),
      subDescription: z.string(),
      image: z.string(),
    }),
    contact: z.object({
      title: z.string(),
      description: z.string(),
    }),
    episodes: z.object({
      title: z.string(),
    }),
    hero: z.object({
      title: z.string(),
      description: z.string(),
    }),
    navbar: z.object({
      navlinks: z.array(z.object({
        name: z.string(),
        to: z.string(),
      }))
    })
  })
})

export type Info = z.infer<typeof InfoSchema>;