import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'awn5yihk',  // Aapka Sanity project ID
  dataset: 'production',  // Aapka dataset naam
  useCdn: false,  // Latest data lene ke liye useCdn ko false kar dein
  apiVersion: '2025-06-02',  // Make sure to set API version
  token: process.env.SANITY_API_TOKEN,  // Agar private dataset ho, token zaroori hai
});
