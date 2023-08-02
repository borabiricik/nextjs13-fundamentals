import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen space-y-6 w-full md:w-1/2 mx-auto">
      <p>
        🔺 I think `middlewares` is a little bit advanced topic. So don`t worry
        if you don`t understand at the first shot.
      </p>
      <Image
        src={
          "https://geekflare.com/wp-content/uploads/2022/12/What-is-Middleware.png"
        }
        alt="What is middleware ?"
        width={595}
        height={290}
      />
      <p>
        🥪 Let`s talk methaphorically. When you bite the sandwich, the first
        taste you got is sauce. After that you`ll get the taste of sausace.
      </p>
      <p>
        🥫 When you bite your API Route Handlers sandwich, the first taste you
        got is middleware. After that you`ll get the taste of actual Route
        Handler function.
      </p>
      <p className="text-orange-400">
        See the `middleware.ts` in root directory and app/api/route.ts
      </p>
      <div className="text-center">
        <p>🐸 So execution order in API Route Handlers:</p>
        <p>
          End User {"=>"} Middleware (If exists) {"=>"} Your Route Handler
          Function {"=>"} Middleware (If exists) {"=>"} End User
        </p>
      </div>
    </main>
  );
}
