import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 items-start">
      <p>
        👋 Hey ! Let`s assume we have a request that takes too much time to
        respond, like 5 seconds.
      </p>
      <p>
        ✨ In that case, we might want to show user a sparkly loading screen...
      </p>
      <Link
        className="bg-white text-black rounded-md px-4 py-2"
        href={"/products"}
      >
        Click to go to Products page (Loading example)
      </Link>
      <Link
        className="bg-white text-black rounded-md px-4 py-2"
        href={"/posts"}
      >
        Click to go to Posts page (Streaming example)
      </Link>
    </div>
  );
}
