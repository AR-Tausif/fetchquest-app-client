import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define auth pages that shouldn't be accessed when logged in
const authRoutes = ["/login", "/sign-up", "/verify-otp"];

// Define protected routes that require authentication
const protectedRoutes = [
  "/profile",
  "/edit-profile",
  // "/customer-support",
  "/checkout",
  "/dashboard",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the token from cookies
  const token = request.cookies.get("auth")?.value;
  //   const tokenRedux = store.getState().auth.token;
  const isAuthenticated = !!token;
  console.log({ token, isAuthenticated });

  // Handle auth routes (login, register, etc.)
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (isAuthenticated) {
      // Redirect to home if user is already logged in
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Handle protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      // Redirect to login if user is not authenticated
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(redirectUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

// Configure paths that middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     * 4. public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
