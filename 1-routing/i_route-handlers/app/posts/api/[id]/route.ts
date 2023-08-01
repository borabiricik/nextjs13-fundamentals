import axios from "axios";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  /**
   ** When you hit following URL http://localhost:3000/posts/api/2?search=param&name=bora ,
   ** searchParams will be = { search: "param", name: "bora"}
   */
  const { searchParams } = new URL(request.url);
  console.log("Search Params: ", searchParams.get("name")); // You can't get your param with searchParams.name

  const { data } = await axios.get(`https://dummyjson.com/posts/${params.id}`); // Get post details

  /**
   ** You also can manage cookies from Route Handlers
   */
  const cookiesStore = cookies();
  cookiesStore.set("foo", "bar", { httpOnly: true, secure: true });
  console.log(cookiesStore.get("foo"));
  cookiesStore.get("foo"); // console output => { name: 'foo', value: 'bar', httpOnly: true, secure: true, path: '/' }

  /**
   ** You also can manage headers in Route Handlers requests
   */
  const headersList = headers();
  console.log(headersList.get("host")); // console output => localhost:3000

  return NextResponse.json(data);
}
