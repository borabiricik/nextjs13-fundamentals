import { getComments } from "../utils/getComments"
import { getPosts } from "../utils/getPosts"

const Parallel = async () => {
  const postsData = getPosts()
  const commentsData = getComments()
  const [posts, comments] = await Promise.all([postsData, commentsData])
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
        {posts.posts?.map((post) => {
          return (
            <div
              className="border border-gray-300 p-2 rounded-md"
              key={post.id}
            >
              <h3 className="text-xl mb-2">{post.title}...</h3>
              <p>{post.body}</p>
              <ul className="ml-4">
                {comments.comments.splice(0, 4).map((comment) => {
                  return (
                    <li className="text-gray-400" key={comment.id}>
                      {comment.body} - <small>{comment.user.username}</small>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Parallel
