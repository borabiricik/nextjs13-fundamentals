import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl text-center">
        🙌 Here we are in another amazing feature of NextJS 13.{" "}
      </h2>
      <div>
        <section className="flex items-center space-x-8">
          <ul className="space-y-4">
            <li>
              🧐 Let`s ask `What is parallel fetching ?`. Let`s imagine: You`re
              build an social media app which has posts and comments inside of
              posts. Let`s say you need to fetch posts first and after that you
              need to fetch comments by category.
            </li>
            <li>
              ⬅️ You can see on{" "}
              <Link
                href={"/parallel"}
                className="underline underline-offset-2 font-bold text-lg"
              >
                Parallel Fetching page
              </Link>
              , we`re using Parallel Fetching to send both `GET Posts` & `GET
              Comments` requests at the same time.
            </li>
            <li>
              📝 Note that we`re not awaiting with <code>await</code> both
              requests separately, we`re using Promise.all() to wait both
              requests at the same time.
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              🧐 And let`s ask `What is sequential fetching ?`. Let`s imagine:
              You`re build an social media app which has posts and comments
              inside of posts. Let`s say you need to fetch posts first and after
              that you need to fetch comments.
            </li>
            <li>
              ⬅️ You can see on{" "}
              <Link
                href={"/sequential"}
                className="underline underline-offset-2 font-bold text-lg"
              >
                Sequential Fetching page
              </Link>
              , we`re using Sequential Fetching to send both `GET Posts` & `GET
              Comments` requests at the same time but waiting for them
              seperately.
            </li>
            <li>
              📝 Note that we`re using <b>await</b> to wait for the first
              request and then we`re using <b>await</b> again to wait for the
              second one.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
