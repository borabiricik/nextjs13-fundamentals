import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <ul className="space-y-4">
        <li>
          🥱 If you`re following the document with the order, you probably bored
          of deep concepts of Routing. (Meet to :D)
        </li>
        <li>
          🙌 In this chapter, you`ll see how you can fetch, cache and revalidate
          data in NextJS 13
        </li>
      </ul>

      <h2 className="text-3xl">👇Useful Links</h2>
      <ul className="space-y-4 underline underline-offset-4">
        <li>
          <Link target="_blank" href={"/basics"}>
            Basics of Data Fetching, Caching and Revalidating
          </Link>
          <li>
            <Link target="_blank" href={"/data-fetching"}>
              Basic usages of Data Fetching
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"/caching"}>
              Basic usages of Caching
            </Link>
          </li>
          <li>
            <Link target="_blank" href={"/revalidating"}>
              Basic usages of Revalidating
            </Link>
          </li>
        </li>
      </ul>
    </div>
  )
}
