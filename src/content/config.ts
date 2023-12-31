import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author1: z.string().optional(),
    author2: z.string().optional(),
    author3: z.string().optional(),
    author4: z.string().optional(),
    author_1_photo: z.string().optional(),
    author_2_photo: z.string().optional(),
    author_3_photo: z.string().optional(),
    author_4_photo: z.string().optional(),
    author_1_bio:z.string().optional(),
    author_2_bio:z.string().optional(),
    author_3_bio:z.string().optional(),
    author_4_bio:z.string().optional(),
    author_1_bio_designation:z.string().optional(),
    author_2_bio_designation:z.string().optional(),
    author_3_bio_designation:z.string().optional(),
    author_4_bio_designation:z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
};
