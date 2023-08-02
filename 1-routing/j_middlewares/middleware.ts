import { NextRequest, NextResponse } from "next/server";

/**
 *! This examples only includes basic part of the middlewares.
 *! Basically, you can consider this as NodeJS middleware. It works almost the same way.
 *! I don`t want to waste your time with going deep in this concept which I think most of you guys will skip.
 *! Don`t hesitate to submit a PR to deep dive :)
 */

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.append("hello", "world");
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  /**
   ** With this usage (/:path*), middleware will work for every Route Handler
   ** For example, If I do "/posts/:path*", it'll only work for Route Handlers under /posts url
   ** We also can give multiple matcher as a string array => ["/posts/:path*","/profile/:path*",....]
   ** We also can use RegExp string (🤢) => "/((?!api|_next/static|_next/image|favicon.ico).*)'"
   ** If you decide to use RegExp string, its using path-to-regexp concept. I recommende to check out the documentation first.
   */
  matcher: "/:path*",
};
