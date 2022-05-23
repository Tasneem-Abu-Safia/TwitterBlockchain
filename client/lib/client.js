import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId:'088f5bzv',
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})



