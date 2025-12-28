import {createClient} from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'wtkhe29n',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true
})