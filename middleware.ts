import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest, res: NextResponse) {
  if (request.nextUrl.pathname.startsWith("/auth")) {
    if (request.cookies.has("access_token")) {
      const loginUrl = new URL("/", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  if (request.nextUrl.pathname.startsWith("/user")) {
    let loginUrl = new URL("/auth/login", request.url)
    loginUrl.searchParams.set("callbackURL", request.nextUrl.pathname)
    if (!request.cookies.has("access_token")) {
        return NextResponse.redirect(loginUrl)
    }  
  }
    if (request.nextUrl.pathname.startsWith("/user/manage")) {
    let loginUrl = new URL("/user/my-account", request.url) 
    if (request.cookies.get("allowed").value !== "F_0x0002") {
        return NextResponse.redirect(loginUrl)
    }  
  }
}

// only these routes use middleware
export const config = {
  matcher: [
    "/api/v1/:path*",
    "/user",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
