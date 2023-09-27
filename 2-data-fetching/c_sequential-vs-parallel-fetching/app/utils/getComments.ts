import { CommentsResponse } from "../types/Comment"

export const getComments = async () => {
  const res = await fetch("https://dummyjson.com/comments", {
    cache: "no-cache",
  })
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (await res.json()) as CommentsResponse
}
