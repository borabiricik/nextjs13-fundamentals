import Link from "next/link"

const HomePage = () => {
  return (
    <div className="space-y-6">
      <p>👇 We can use few ways to fetch data in NextJS. Let`s name couple:</p>
      <ul className="space-y-4">
        <li>
          -{" "}
          <Link href={"/basics/fetch"} className="underline underline-offset-2">
            Server Side Fetching with <code>fetch()</code> api
          </Link>
        </li>
        <li>
          -{" "}
          <Link
            href={"/basics/third-party"}
            className="underline underline-offset-2"
          >
            Server Side Fetching with third party libraries (like axios etc.)
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
