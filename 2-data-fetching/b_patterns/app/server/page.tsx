import { RandomUserResponse } from "../types/RandomUser"

const ServerSidePage = async () => {
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
      <ul className="space-y-2">
        <li>🌟 This is the most common way to fetch data on Server Side.</li>
        <li>
          💻 In this example, we`re using Server Component to both fetch &
          render the data.
        </li>
        <li>
          😋 Instead of getting data from external API, we could use database to
          do CRUD operations (We may not need a seperate backend project in
          future and that is awesome).
        </li>
        <li>
          🔒 Its the perfect way to avoid leaking sensitive information such as
          tokens, secrets, API keys etc. Its because all the HTML is rendered on
          Server Side. So unlike Client Components, HTML is not generated from
          JavaScript code loaded on Client Side.
        </li>
      </ul>
    </div>
  )
}

export default ServerSidePage
