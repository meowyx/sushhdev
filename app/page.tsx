import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert ">
      <div className=" text-white p-10">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Crafting a content garden that evolves with my tech explorations
        </h1>
        <p className="text-lg">
          Eager to delve into emerging technologies and tools, actively
          participating in open-source projects to make an impact in the
          community.
        </p>
      </div>
      <div className="cards-container flex flex-wrap justify-center">
        {allPosts.map((post) => (
          <div
            key={post._id}
            className="card pt-2 pb-6 pl-6 pr-6 w-[300px] h-[236px] flex-shrink-0 mx-auto"
          >
            <Link href={post.slug}>
              <h2 className="text-white text-2xl font-semibold mb-4 cursor-pointer">
                {post.title}
              </h2>
            </Link>
            {post.description && (
              <p className="text-[#94A3B8] mb-6">{post.description}</p>
            )}
            {/* You can add buttons or other elements here as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}
