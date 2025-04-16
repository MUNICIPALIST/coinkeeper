import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get the token from the request
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  console.log(`Middleware check - Path: ${pathname}, Auth: ${!!token}`);

  // Define public routes that don't require authentication
  const publicRoutes = ['/auth/signin', '/auth/register', '/auth/error'];
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
  
  // If user is on a public route but already authenticated, redirect to dashboard
  if (isPublicRoute && token) {
    console.log('User is authenticated but on public route, redirecting to dashboard');
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // If user is not authenticated and trying to access a protected route, redirect to login
  if (!token && !isPublicRoute && !pathname.startsWith('/api/auth')) {
    console.log('User is not authenticated, redirecting to login');
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }
  
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: [
    // Apply to all routes except public assets
    '/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)',
  ],
}; 