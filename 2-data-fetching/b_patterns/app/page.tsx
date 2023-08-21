import Link from "next/link"

export default function Home() {
  return (
    <main className="text-left">
      <ul className="text-lg space-y-4">
        <li>
          💻{" "}
          <Link className="underline" href={"/server"}>
            Fetching Data on Server Side
          </Link>
        </li>
        <li>
          👤{" "}
          <Link className="underline" href={"/where-needed"}>
            Fetching Data Where It`s Needed
          </Link>
        </li>
      </ul>
    </main>
  )
}
