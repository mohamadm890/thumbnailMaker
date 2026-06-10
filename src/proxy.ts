import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'



const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/pricing', '/api/webhooks(.*)', '/api/products(.*)',  '/privacy',
  '/terms', '/contact', '/about', '/', '/refund'])

export default clerkMiddleware(async (auth, req) => {
  const path = req.nextUrl.pathname;

  if (path === "/") return;

  if (!isPublicRoute(req)) {
    await auth.protect()
  }
})
export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
    
  ],
}
