/**
 *? Under app/ folder you can see (profile) and (shop) folders.
 ** "()" is for only grouping the routes in development time.
 *? When it comes to navigating between that groups, NextJS Router will ignore "()" and won't affect actual URL
 *? So URL structure will be: /account - /payment-history. Not /profile/account - /profile/payment-history
 ** We'll call "Route Groups" to this approach
 */

/**
 *? 🪄 But let's come to the magic part
 ** You can define your layouts for Route Groups
 *? 😱 Check app/(profile)/layout.tsx and impress by NextJS 13's capabilities
 */

export default function Home() {
  return <div className="text-4xl">Please Check app/page.tsx !</div>;
}
