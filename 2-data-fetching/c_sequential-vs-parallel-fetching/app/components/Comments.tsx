import { getComments } from "../utils/getComments"

const Comments = async () => {
  const commentsData = await getComments()
  return (
    <ul className="ml-4">
      {commentsData.comments?.splice(0, 4).map((comment) => {
        return (
          <li className="text-gray-400" key={comment.id}>
            {comment.body} - <small>{comment.user.username}</small>
          </li>
        )
      })}
    </ul>
  )
}

export default Comments
