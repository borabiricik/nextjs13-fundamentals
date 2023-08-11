import Link from "next/link"

const Info = () => {
  return (
    <ul className="p-4 space-y-4">
      <li>
        🙌 As you can see, we created {"components"} folder under app/about-us
        but if you try to navigate{" "}
        <Link href={"/about-us/components"} className="underline">
          /about-us/components
        </Link>{" "}
        , you`ll get 404 Not Found page because /about-us/components is not a
        valid route. (Since we didn`t create page.tsx or route.ts under
        app/about-us/component folder)
      </li>
      <li>
        📍 You can safely locate your non-route files inside route files without
        being routable.
      </li>
      <li>
        ✅ You can check app/about-us folder for basic usage of this apprach
      </li>
    </ul>
  )
}

export default Info
