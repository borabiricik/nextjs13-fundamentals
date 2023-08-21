import Link from "next/link"
import { RandomUserResponse } from "../types/RandomUser"

const WhereNeededPage = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?seed=df6116c7965a8e91"
  )
  const { results }: RandomUserResponse = await response.json()
  const user = results[0]
  return (
    <div className="space-y-6">
      <div className="flex flex-col border border-white rounded-md p-4">
        <h3 className="text-xl">User</h3>
        <p>{user.email}</p>
        <p>
          {user.name.first} {user.name.last}
        </p>
      </div>
      <ul className="space-y-3">
        <li>
          ⏪ Now if you go to 💻{" "}
          <Link className="underline" href={"/server"}>
            Fetching Data on Server Side
          </Link>{" "}
          page and come back to here, you`ll see data & page is loading much
          more faster. Its because of NextJS 13`s caching strategy.
        </li>
        <li>
          🤿 We`ll deep dive to <code>Caching</code> but for simple
          explaination, NextJS`s caching mechanism remembers data for particular
          amount of time. When you hit a GET request for the first time, result
          will be memorized and no matter where you hit that request again,
          it`ll retrieve memorized result until it expires.
        </li>
      </ul>
    </div>
  )
}

export default WhereNeededPage
