import axios from "axios";
import User from "./components/User";
import { UsersType } from "./types/users";

const Users = async () => {
  const { data } = await axios.get<UsersType>("https://dummyjson.com/users");

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
