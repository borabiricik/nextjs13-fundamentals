export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center space-y-6 font-light">
      <h2 className="text-3xl">🌟 Project Organization</h2>
      <ul className="space-y-4 text-lg">
        <li>
          ⏪ Back when we`re using NextJS 12, it wasn`t easy to organize the
          projects. Especially in the team projects.
        </li>
        <li>
          💩 Everyone was able to follow their own approaches which is bad for
          not well organized team projects.
        </li>
        <li>
          👻 In this part, we`ll see few approaches to how you can well organize
          project structure in your both solo and team projects.
        </li>
      </ul>
      <ul className="space-y-4">
        <li>
          1️⃣ First approach is called `Safe Colocation by Default`. In this
          approach, NextJS 13`s app router won`t treat your folder as a Route,
          even though if you create a folder in somewhere in the app/,{" "}
          <b className="font-bold">until</b> you create page.tsx or route.ts
          inside of that folder.
        </li>
        <li>
          2️⃣ Second one is called `Private Folders`. In this approach you`re
          able to define your non-route folders with underscore (like
          app/profile/_components), app router will ignore that folder when
          scanning for routes. This means even if you create page.tsx or
          route.ts inside the private folder, Next 13`s app/ router will ignore
          that page.tsx or route.ts
        </li>
      </ul>
    </main>
  )
}
