import axios from "axios";
import { PostProps } from "../types/post";

const Post = async () => {
  const { data: postData } = await axios.get<PostProps>(
    "https://dummyjson.com/posts/1"
  );
  return <div className="">{postData.body}</div>;
};

export { Post };
