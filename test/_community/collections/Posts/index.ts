import type { CollectionConfig } from 'payload'

import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: 'block',
                fields: [
                  {
                    name: 'field',
                    type: 'text',
                    hooks: {
                      beforeValidate: [
                        (args) => {
                          console.log('beforeValidate', args)
                          return 'Injected Value'
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
  ],
}
