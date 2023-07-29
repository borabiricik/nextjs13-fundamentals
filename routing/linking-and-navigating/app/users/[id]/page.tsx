"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * * Basic example for Client Side routing in Next.JS 13
 **/

/**
 * ? If your component is Server Component, you won't be able to use hooks (useRouter,
 * ? useParams etc.)
 * * So you can catch your route params (E.g /users/:id => /users/10) from "props.params"
 * **/
const UserDetails = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const nextUserURL = `/users/${Number(params.id) + 1}`;

  /**
   *? Instead of getting params from "props.params", you also can use:
   *? "const params = useParams()" to get URL params
   *? But this will work on Client Side only since we're using "use client" directive
   */
  return (
    <div className="flex flex-col items-start gap-y-4">
      {/**
       * You can use both <Link /> and router.push() for navigation
       * But router.push() will only work on Client Side since we're using useRouter hook
       * <Link /> is usable for both Client and Server Side
       **/}
      <button onClick={() => router.push(nextUserURL)}>
        Click to navigate next user with router.push()
      </button>

      <Link href={nextUserURL}>
        Click to navigate next user with {"<Link /> component"}
      </Link>
      <p>User id: {params.id}</p>
      <p className="text-orange-400">
        <h3 className="text-xl">P.S:</h3> {"<Link />"} component will act like{" "}
        {"<a>"} tag so you can open link in new tab, copy link address etc.
        using router.push() will not give same effect as {"<Link />"} component.
      </p>
    </div>
  );
};

export default UserDetails;
