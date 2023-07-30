import axios from "axios";
import { Suspense } from "react";
import { CommentProps } from "../types/comment";

const Comments = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const { data: commentsData } = await axios.get<CommentProps>(
    "https://dummyjson.com/comments/post/5"
  );
  return (
    <Suspense fallback={<p>Comments loading...</p>}>
      <div className="col-span-2 flex flex-col space-y-10">
        <h2 className="text-3xl">Comments</h2>
        <div className=" flex flex-col space-y-4">
          {commentsData.comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-white rounded-md flex flex-col space-y-2 p-2"
            >
              <span className="text-lg">@{comment.user.username}</span>
              <span>{comment.body}</span>
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
};

export { Comments };
