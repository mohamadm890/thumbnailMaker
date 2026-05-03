import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'



const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/pricing(.*)', '/api/webhooks(.*)', '/api/products(.*)',  '/privacy',
  '/terms', '/contact', '/about', '/'])

export default clerkMiddleware(async (auth, req) => {
  console.log("Is Public Route?", isPublicRoute(req), "Path:", req.nextUrl.pathname);
  
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
