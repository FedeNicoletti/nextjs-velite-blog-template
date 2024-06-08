import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import HeroPage from "../components/Hero";
import WhatInclude from "../components/WhatInclude";
import CTA from "../components/CTA";
import Clients from "../components/Clients";
import Coach from "../components/Coach";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <main className="w-full mx-auto overflow-x-hidden flex justify-center items-center flex-col">
        <div className="w-[370px] mx-auto overflow-x-hidden flex justify-center items-center flex-col">
          <HeroPage />
        </div>
        <div className="w-full flex flex-col items-center">
          <WhatInclude />
          <CTA />
          <Clients />
          <h2 className="text-sm md:text-6xl font-black text-center mb-6">
            Want to learn something nice? <br /> Read my latest articles.
          </h2>
          <ul className="flex flex-col items-center w-[370px] mb-12">
            {latestPosts.map(
              (post) =>
                post.published && (
                  <li
                    key={post.slug}
                    className="w-full first:border-t first:border-border"
                  >
                    <PostItem
                      slug={post.slug}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      tags={post.tags}
                    />
                  </li>
                )
            )}
          </ul>
          <Coach />
        </div>
      </main>
    </>
  );
}
