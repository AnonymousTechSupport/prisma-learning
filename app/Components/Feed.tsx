import { PrismaClient } from "@prisma/client";
import { Posts } from "./Posts";

const prisma: PrismaClient = new PrismaClient();

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export async function Feed() {
  const posts = await getPosts();
  return (
    <div>
      <div className="mt-5 flex flex-col w-full ">
        {posts.map((post) => (
          <div
            key={post.id}
            className="mt-5 p-5 outline outline-1 shadow-md shadow-slate-400 outline-gray-400 rounded-lg"
          >
            <Posts
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author?.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
