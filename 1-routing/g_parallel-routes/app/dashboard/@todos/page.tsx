import axios from "axios";

const TodoSegment = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const { data } = await axios.get("invalid_request_url");
  return (
    <div>
      Its doesn`t matter what we render here because axios request will throw an
      error anyway
    </div>
  );
};

export default TodoSegment;
