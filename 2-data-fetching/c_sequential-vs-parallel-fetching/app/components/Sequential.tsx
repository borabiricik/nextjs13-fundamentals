import { Suspense } from "react"
import { getPosts } from "../utils/getPosts"
import Comments from "./Comments"

const Sequential = async () => {
  const postsData = await getPosts()

  return (
    <div className="space-y-8">
      <ul>
        <li>
          ✅ In this part, we will see how to fetch multiple data in parallel.
        </li>
        <li>📝 We will fetch both posts and comments at the same time</li>
        <li>
          💥 It might not be the best practice in <b>your</b> real world scene,
          but it`s a good example to show how to fetch multiple data in
          parallel. I highly recommend you to understand both Sequential and
          Parallel fetching and use them in the right place.
        </li>
      </ul>
      <div className="overflow-y-scroll max-h-[400px] space-y-4 p-2">
        <h2 className="text-2xl">📝 Posts</h2>
        {postsData?.posts?.map((post) => {
          return (
            <div
              className="border border-gray-300 p-2 rounded-md"
              key={post.id}
            >
              <h3 className="text-xl mb-2">{post.title}...</h3>
              <p>{post.body}</p>
              <Suspense
                fallback={<div className="text-2xl">Loading Comments ...</div>}
              >
                <Comments />
              </Suspense>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sequential
