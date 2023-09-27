import { PostsResponse } from "../types/Post"

export const getPosts = async () => {
  const res = await fetch("https://dummyjson.com/posts", { cache: "no-cache" })
  return (await res.json()) as PostsResponse
}
