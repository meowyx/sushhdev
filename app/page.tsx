import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose ">
      <div className=" text-white p-10">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">
          Crafting a content garden that evolves with my tech explorations
        </h1>
        <p className="text-lg text-white">
          Welcome to my digital garden—a space where I explore the vast
          landscape of tech 🚀 and tools 🛠️. It&apos;s an ever-evolving space,
          reflecting my growth 🌿 and discoveries 🔍.
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
