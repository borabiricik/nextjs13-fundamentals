import axios from "axios";
import Link from "next/link";
import { Posts } from "./post/types/posts";

export default async function Home() {
  const { data } = await axios.get<Posts>("https://dummyjson.com/posts");

  return (
    <div className="flex flex-col space-y-4 w-1/2 mx-auto py-4">
      <h2 className="text-4xl">Feed</h2>
      <div>
        <p>👻 Intercepting Routes is very similar to Parallel Routes.</p>
        <p>
          🤯 The difference is NextJS keeps the content of the intercepted (we
          can say inherited) route when we navigated to child page
        </p>
        <p>
          💙 In this example, we`ll see a basic Twitter (X) feed. When we click
          to the post, we`ll open a modal using Intercept Routes.
        </p>
        <p>👇 So click one of the posts and see the magic happens !</p>
      </div>
      {data.posts.map((post) => (
        <Link
          href={`/post/${post.id}`}
          className="border border-white p-6 rounded-lg"
          key={post.id}
        >
          <h3 className="text-2xl">{post.title}</h3>
          <p className="text-sm">{post.body}</p>
          <div className="flex items-center text-blue-500">
            Likes:
            {post.reactions}
          </div>
        </Link>
      ))}
    </div>
  );
}
