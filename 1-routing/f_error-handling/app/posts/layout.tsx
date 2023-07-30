import { PropsWithChildren } from "react";

const PostsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="border-b border-b-white p-4">Posts Layout</div>
      <div>{children}</div>
    </div>
  );
};

export default PostsLayout;
