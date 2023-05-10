import { NextResponse, type NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
}

// only these routes use middleware
export const config = {
  matcher: ["/api/v1/:path*"],
  // matcher: ["/api/|(?!/api/auth/)|+$"],
}
