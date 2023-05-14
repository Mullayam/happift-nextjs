import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest, res: NextResponse) {
  if (request.nextUrl.pathname.startsWith("/api/v1/")) {
    // const bearerToken = request.headers.get("authorization") as string
    // if (!bearerToken) {
    //   return new NextResponse(
    //     JSON.stringify({
    //       error: "UnAuthorised Request",
    //       statusCode: 401,
    //     })
    //   )
    // }
    // const token: string = bearerToken.split(" ")[1]
    // const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY)
    // try {
    //   // await jose.jwtVerify(token, secret)
    //    return new NextResponse(
    //     JSON.stringify({ error: "UnAuthorised Request", statusCode: 401 })
    //   )
    // } catch (error) {
    //   return new NextResponse(
    //     JSON.stringify({ error: "UnAuthorised Request", statusCode: 401 })
    //   )
    // }
    // console.log("api", request.nextUrl.pathname)
  }
  if (request.nextUrl.pathname.startsWith("/auth")) {
    if (request.cookies.has("access_token")) {
      const loginUrl = new URL("/", request.url)
      
      return NextResponse.redirect(loginUrl)
    }
  }

  if (request.nextUrl.pathname.startsWith("/user")) {
    CheckLogin()
  }
  function CheckLogin() {
    const loginUrl = new URL("/auth/login", request.url)
    if (request.cookies.has("access_token")) {
      console.log(request.cookies.get("access_token"))
    } else {
      loginUrl.searchParams.set("from", request.nextUrl.pathname)
    }
  }
}

// only these routes use middleware
export const config = {
  matcher: ["/api/v1/:path*", "/((?!_next/static|_next/image|favicon.ico).*)"],
}
