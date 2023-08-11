import UserCard from "@/app/components/UserCard"
import { Result } from "@/app/types/UserCard"

const FetchPage = async () => {
  const response = await fetch("https://randomuser.me/api/", {
    cache: "no-cache",
  })
  const user: Result = await response.json().then((res) => res.results[0])
  return (
    <div className="space-y-4">
      <p>
        👤 Here we have this user card to show you an example for data fetching
        with <code>fetch()</code> API.
      </p>
      <p>
        🚫 I`ve disabled caching on purpose (We`ll deep dive caching in next
        chapers so you don`t need to worry about it), so you can see{" "}
        <code>randomuser API</code> generates new user in each request.
      </p>
      <p>🔄 Refresh the page and see what happens below !</p>
      <UserCard email={user.email} name={user.name} picture={user.picture} />
    </div>
  )
}

export default FetchPage
