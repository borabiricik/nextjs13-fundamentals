/**
 ** Note that if you don't create error.tsx under posts/ folder,
 ** parent's error will inherit to the children.
 *? So if you remove posts/error.tsx, you'll see the same error in app/error.tsx
 */

const PostsPage = () => {
  throw new Error("Something went wrong in Posts page !");
  return <div>PostsPage</div>;
};

export default PostsPage;
