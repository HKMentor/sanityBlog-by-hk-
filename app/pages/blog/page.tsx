import Header from "@/app/component/Header";
import { client } from "@/studio-course-blogs/lib/sanity";
import Image from "next/image";
import Link from "next/link";

// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
    image?: {
      asset: {
        url: string;
      };
    };
  };
}

async function getBlogs(): Promise<Blog[]> {
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

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">Latest Blogs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: Blog) => (
            <div
              key={blog._id}
              className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              {blog.mainImage && (
                <div className="relative w-full h-72">
                  <Image
                    src={blog.mainImage.asset.url}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  {blog.title}
                </h2>
                <div className="flex items-center mt-4 space-x-3">
                  {blog.author?.image && (
                    <Image
                      src={blog.author.image.asset.url}
                      alt={blog.author.name}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-gray-300"
                    />
                  )}
                  <p className="text-gray-600 text-sm">{blog.author?.name}</p>
                </div>
                <Link href={`/blog/${blog.slug.current}`}>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white text-sm rounded-lg transition-all duration-200 hover:bg-blue-700 focus:outline-none">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
