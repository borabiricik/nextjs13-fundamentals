import { Suspense } from "react";
import { Comments } from "./components/Comments";
import { Post } from "./components/Post";
/**
 ** Let`s say we have two different async requests.
 ** First one is for getting a single blog post.
 ** Second one is for getting comments in that post.
 ** And let`s say we want to fetch the post and the comments at the same time.
 ** Let`s create a scenario that post will load first, and fetching comments will take time.
 ** With this way:
 *? When post data is loaded, we`ll render post and comments will be fetched when user is reading post.
 *? So the user won`t experience the delay when fetching comments.
 ** P.S: You can combine both streaming and loading together.
 ** In that case, we also can create loading.tsx and show full page loader for getting a single post request.
 */

const PostsPage = async () => {
  return (
    <div className="grid grid-cols-3 space-x-4">
      <Suspense fallback={<p>Posts Loading...</p>}>
        <Post />
      </Suspense>
      <Suspense fallback={<p>Comments Loading...</p>}>
        <Comments />
      </Suspense>
    </div>
  );
};

export default PostsPage;
