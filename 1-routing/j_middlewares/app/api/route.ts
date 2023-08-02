import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Before using middleware
  console.log(request.headers.get("hello")); // console output => null

  // After using middleware
  console.log(request.headers.get("hello")); // console output => "world"
  return NextResponse.json(request.headers);
}
