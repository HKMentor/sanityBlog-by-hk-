import Header from "@/app/component/Header";
import { client } from "@/studio-course-blogs/lib/sanity";
import Image from "next/image";

// Define an interface for the block structure 
interface Block {
  _key: string;
  _type: string;
  children: Array<{
    _key: string;
    _type: string;
    text: string;
  }>;
}

async function getBlog(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    mainImage {
      asset -> { url }
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    },
    block
  }`;

  return await client.fetch(query, { slug });
}

// Define an interface for the params
interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = await params;  // Await params
  const blog = await getBlog(slug);

  return (
    <>
      <Header />
      <div className="container mx-auto px-6 py-12 max-w-3xl bg-white shadow-lg rounded-xl border border-gray-100">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">{blog.title}</h1>
        
        {blog.mainImage && (
          <Image
            src={blog.mainImage.asset.url}
            alt={blog.title}
            width={800}
            height={450}
            className="rounded-xl mt-6 object-cover shadow-lg"
          />
        )}
        
        <div className="flex items-center mt-6 space-x-4">
          {blog.author?.image && (
            <Image
              src={blog.author.image.asset.url}
              alt={blog.author.name}
              width={60}
              height={60}
              className="rounded-full border-2 border-gray-300 shadow-md"
            />
          )}
          <p className="text-gray-600 text-xl font-medium">{`By ${blog.author?.name}`}</p>
        </div>
        
        <div className="mt-8 space-y-8 text-lg text-gray-800">
          {blog.block?.map((block: Block, index: number) => (
            <div key={index} className="space-y-4">
              {block.children.map((child, childIndex) => (
                <p key={childIndex} className="leading-relaxed text-gray-700">{child.text}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
