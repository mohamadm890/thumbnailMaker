import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/terms",
  "/privacy",
  "/pricing",
  "/about",
  "/contact",
  "/refund",
  "/api/webhooks(.*)",
  "/api/products(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  const isPublic = isPublicRoute(req);

  // Only protect private pages
  if (!isPublic && !userId) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
