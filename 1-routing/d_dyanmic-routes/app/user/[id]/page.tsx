import Link from "next/link";

const UserDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <p className="flex items-center space-x-4">
        <span className="text-4xl">🫵🏻</span>
        <span>Your dynamic User ID: {params.id}.</span>
      </p>
      <p className="flex items-center space-x-4">
        <span className="text-4xl">📲</span>{" "}
        <span>
          Observe the changes in URL. We are navigating dynamicly to your User
          ID.
        </span>
      </p>

      <div className="mt-10">
        <Link className="bg-white text-black rounded-md px-4 py-2" href={"/"}>
          {"< Back"}
        </Link>
      </div>
    </div>
  );
};

export default UserDetailsPage;
