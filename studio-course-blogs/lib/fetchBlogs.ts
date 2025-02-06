import { client } from "./sanity";

export async function getBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc) [0...6] {
    _id,
    title,
    slug,
    mainImage {
      asset -> { url }
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    }
  }`;

  return await client.fetch(query);
}
