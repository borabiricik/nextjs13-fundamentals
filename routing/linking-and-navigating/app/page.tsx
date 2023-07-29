import Link from "next/link";

// Link Component
// 1 - 'prefetch' is for "production" only
//     'prefetch' loads the page before user navigates to it
//     E.g When you're in Home page, if you have a Link component for /about-us page with 'prefetch' prop,
//     it'll load /about-us even before user navigates to it
// 2 - Link component will act like '<a></a>' tag

export default function Home() {
  return (
    <>
      <div>
        <span className="text-4xl">Home</span> Page
      </div>

      <Link href={"/about-us"}>Click to Navigate About Us Page</Link>
    </>
  );
}
