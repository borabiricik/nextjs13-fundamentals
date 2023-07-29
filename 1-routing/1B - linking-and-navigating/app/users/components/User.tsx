import Image from "next/image";
import Link from "next/link";
import { User } from "../types/users";

const User = ({ user }: { user: User }) => {
  return (
    <Link
      href={`/users/${user.id}`}
      className="border border-gray-400 rounded-lg flex items-center col-span-1 p-3 space-x-4"
    >
      <Image
        src={user.image}
        alt={`${user.firstName} avatar`}
        width={50}
        height={50}
        className="rounded-full"
      />
      <p className="text-white">{`${user.firstName} ${user.lastName}`}</p>
    </Link>
  );
};

export default User;
