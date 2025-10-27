import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/dashboard")) {
    if (!token) {
      url.pathname = "/";
      return NextResponse.redirect("url");
    }
    return NextResponse.next();
  }
  return NextResponse.next();
}

// Apply middleware only to specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
