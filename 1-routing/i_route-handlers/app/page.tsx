"use ";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-2xl mb-2">Before start:</h2>
        <ul className="space-y-6">
          <li>
            😂 I know there`s a lot of concepts named {"“Route“"} but since
            we`re dealing with NextJS`s routing system, it`s a bit normal.
          </li>
          <li>
            🧠 In my opinion, you definitely shouldn`t memorize the name of
            concepts. I`ll be lot easier if you make sure you understand basics
            of the concepts and use cases.
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-2xl mb-2">In This Chapter:</h2>
        <ul className="space-y-6">
          <li className="text-2xl">
            📲 NextJS`s embedded API Routes based on file routing.
          </li>
          <li>
            😱 Since NextJS has an embedded API Routes (It`s not the official
            name of it. I just love to call it like that) we can run
            “NodeJs/Express“-like Server inside our NextJS application without
            any configuration. Deep vision
          </li>
          <li>
            ✈️ Please navigate to{" "}
            <Link
              className="underline"
              href={"http://localhost:3000/posts/api"}
              target="_blank"
            >
              Posts Endpoint
            </Link>{" "}
            (app/posts/api/route.ts) and see the response coming from our
            endpoint.
          </li>
          <li>
            ✈️ Please navigate to{" "}
            <Link
              className="underline"
              href={"http://localhost:3000/posts/api/2"}
              target="_blank"
            >
              Post Details Endpoint
            </Link>{" "}
            (app/posts/api/[id]/route.ts) to see more advanced usages (most of
            it).
          </li>
          <li>
            😎 By default, NextJS Route Handlers is handling caching so you
            don`t need to.
          </li>
          <li>
            - For example, if you hit a single endpoint 4 times (let`s say we`re
            hittin /api/posts which is GET method) you will get the result for
            the first time and next 3 result will come from cache. After that,
            if you hit any POST methoded enpoint one time, your cache will
            expire automatically. After that, if you hit any GET method (let`s
            say we`re hitting /api/posts again), you`ll get the new (non-cached)
            data.
          </li>
        </ul>
      </div>
    </div>
  );
}
