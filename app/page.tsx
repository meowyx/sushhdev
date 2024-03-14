import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { Analytics } from "@/components/analytics";
export default function Home() {
  return (
    <div className="prose ">
      <div className=" text-white p-10">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          Building a content garden that evolves with my tech explorations
        </h1>
        <p className="text-lg text-white">
          Welcome to my digital garden—a space where I explore tech 🚀 and tools
          by following my curiosity 🛠️. It&apos;s an ever-evolving space,
          reflecting my growth 🌿 and discoveries 🔍.
        </p>
      </div>
      <div className="cards-container flex flex-wrap justify-center ">
        {allPosts.map((post) => (
          <Link
            href={post.slug}
            className="mx-2 my-2 hover:shadow-[0_0_15px_#95C8E5] transition-shadow"
            key={post._id}
          >
            <Analytics />
            <div className="card pt-2 pb-6 pl-6 pr-6 w-[300px] h-[236px] flex-shrink-0 mx-auto">
              <h2 className="text-white text-2xl font-semibold mb-4 cursor-pointer">
                {post.title}
              </h2>

              {post.description && (
                <p className="text-[#94A3B8] mb-6">{post.description}</p>
              )}
              {/* You can add buttons or other elements here as needed */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
