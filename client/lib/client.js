import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: "t6a4d9yq",
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})



