import axios from "axios";

/**
 ** In this case, we`ll trigger error scenario on purpose
 *! Please visit http://localhost:3000 and http://localhost:3000/posts to see all the examples.
 *! I also highly recommend to see codes & comments in;
 *! app/error.tsx,
 *! app/posts/error.tsx
 *? P.S: Your app/error.tsx will catch most of the errors on runtime.
 *? Even if you want to create global-error then you should have it only one and define it under app/ folder
 *? But you should define with <html> and <body> tags just like Root Layot (app/layout.tsx)
 *? Because global-error.tsx wraps entire application (even <html>)
 */

export default async function Home() {
  try {
    const { data } = await axios.get("RANDOM_INVALID_REQUEST_URL");
    return <div className="p-10">{JSON.stringify(data)}</div>;
  } catch (error) {
    throw new Error("Something went wrong !");
  }
}
