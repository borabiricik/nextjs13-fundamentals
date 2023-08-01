import axios from "axios";
import { Post } from "../types/posts";

const PostDetails = async ({ params }: { params: { id: string } }) => {
  const { data } = await axios.get<Post>(
    `https://dummyjson.com/posts/${params.id}`
  );
  return (
    <div className="flex flex-col items-center text-center text-white space-y-10 w-full md:w-1/2 justify-center mx-auto">
      <h2 className="text-3xl ">{data.title}</h2>
      <p>{data.body}</p>
      <ul className="text-left space-y-6 text-green-400">
        <li>
          🧩{" "}
          <span className="text-orange-400">
            Intercepts will occur only routing from redirection.
          </span>{" "}
          (From {"<Link />"} or router.push() )
        </li>
        <li>
          🧠 For example, when you`re landing {"“/post/1“"} page from a button
          somewhere in application and if you created an Intercepted Route,
          NextJS will handle that route and show whatever content it is to the
          user. But if you refresh the page when you`re in {"“/post/1“"} page,
          NextJS will handle the actual route.
        </li>
        <li>
          👀 In our case, if we navigate {"“/post/1“"} page from Feed Page
          (app/page.tsx), it`ll open Modal (which is a Parallel Route
          (app/@modal/post/[id].page.tsx)). But if we refresh the page when
          modal is open (or copy link and open in new tab), it`ll display
          app/post/[id]/page.tsx
        </li>
      </ul>
    </div>
  );
};

export default PostDetails;
