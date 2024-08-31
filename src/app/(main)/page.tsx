import PostEditor from "@/components/post/editor/PostEditor";
import Post from "@/components/post/Post";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";
import TrendsSidebar from "@/components/TrendsSidebar";


export default async function Home() {

  const posts = await prisma.post.findMany({
    include: postDataInclude,
    orderBy : {createdAt: "desc"}
  })

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor/>
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
      <TrendsSidebar/>
    </main>
  );
}
