import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { Analytics } from "@/components/analytics";

export default function Home() {
  return (
    <div className="prose ">
      <div className="text-white">
        <p className="text-xl font-semibold mb-2 text-white text-left hover:text-orange-300">
          read my blog
        </p>
      </div>
      <div className="posts-container">
        {allPosts.map((post) => {
          // Assuming post.date is a string in ISO format
          const formattedDate = new Date(post.date).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          return (
            <div key={post._id} className="post-entry">
              <Link href={post.slug}>
                <div className="text-white">
                  <p className="hover:text-orange-200">
                    <p className="hover:text-orange-200">
                      <span>{post.title}</span>
                    </p>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
