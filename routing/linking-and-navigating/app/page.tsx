import Link from "next/link";

// Link Component
// 1 - 'prefetch' is for "production" only
//     'prefetch' loads the page before user navigates to it
//     E.g When you're in Home page, if you have a Link component for /users page with 'prefetch' prop,
//     it'll load /users even before user navigates to it
// 2 - Link component will act like '<a></a>' tag

export default function Home() {
  return (
    <main className="flex flex-col space-y-6">
      <div>
        <span className="text-4xl">Home</span> Page
      </div>

      <Link href={"/users"}>
        Click to Navigate <b>Users</b> Page
      </Link>
      <Link href={"/blog"}>
        Click to Navigate <b>Blog</b> Page
      </Link>
    </main>
  );
}
