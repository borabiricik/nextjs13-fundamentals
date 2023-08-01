import axios from "axios";
import { NextResponse } from "next/server";

/**
 *? You also can use POST, PUT, PATCH and DELETE methods here.
 *? NextJS recognises it from function name
 *? E.g. The following function's name is "GET" and it represents GET method
 *! As not to make this example more complicated, I didn't want to use other methods than GET.
 *! It's because you cannot manually send a POST, PUT etc. request from your browser (at least with common ways).
 *! You'll need to use other approaches like Postman, curl etc. if you want to test your request methods other than GET
 */

export async function GET() {
  const { data } = await axios.get("https://dummyjson.com/posts");
  return NextResponse.json({
    description:
      "We are getting posts data from 3rd party API and returning it.".toUpperCase(),
    data,
  });
}
