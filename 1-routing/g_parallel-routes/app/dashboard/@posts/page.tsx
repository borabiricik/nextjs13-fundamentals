import axios from "axios";

export interface Posts {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

const PostsSegment = async () => {
  const { data } = await axios.get<Posts>("https://dummyjson.com/posts");
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="col-span-2 flex flex-col space-y-3 max-h-screen overflow-y-scroll scrollbar-hide">
      {data.posts.map((post) => (
        <div key={post.id} className="border border-white rounded-lg p-4">
          <h3 className="text-xl mb-3">{post.title}</h3>
          <p className="line-clamp-3">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsSegment;
