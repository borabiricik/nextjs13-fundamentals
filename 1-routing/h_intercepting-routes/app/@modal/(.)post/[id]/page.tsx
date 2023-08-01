import { Post } from "@/app/post/types/posts";
import axios from "axios";
import Modal from "../../components/Modal";

const PostDetails = async ({ params }: { params: { id: string } }) => {
  const { data } = await axios.get<Post>(
    `https://dummyjson.com/posts/${params.id}`
  );
  return (
    <Modal>
      <h2 className="text-3xl ">{data.title}</h2>
      <p>{data.body}</p>
      <div className="text-red-400">
        🪄 Now refresh the page ! (Or copy the URL and open in new tab)
      </div>
    </Modal>
  );
};

export default PostDetails;
