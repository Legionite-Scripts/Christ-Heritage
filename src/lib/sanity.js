import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'a15yf0p1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})
