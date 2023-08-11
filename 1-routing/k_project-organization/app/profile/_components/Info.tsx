import Link from "next/link"

const Info = () => {
  return (
    <ul className="space-y-4">
      <li>
        🙌 As you can see, we created {"_components"} folder under app/profile
        and created page.tsx under it, but if you try to navigate{" "}
        <Link
          href={"/profile/components"}
          className="underline underline-offset-2"
        >
          /profile/components
        </Link>{" "}
        or{" "}
        <Link
          href={"/profile/_components"}
          className="underline underline-offset-2"
        >
          /profile/_components
        </Link>
        , you`ll get 404 Not Found page because /profile/components or
        /profile/_components is not a valid route. (Since we defined it as
        Private Route)
      </li>
      <li>
        ✅ You can check app/profile folder for basic usage of this apprach
      </li>
    </ul>
  )
}

export default Info
