import { NextRequest, NextResponse } from "next/server";

let locales = ["en", "ar"];
let defaultLocale = "en";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip paths that are static files (like images, CSS, etc.)
  const isPublicFile = pathname.startsWith('/images') || pathname.startsWith('/favicon') || pathname.startsWith('/fonts') || pathname.startsWith('/dictionaries');
  
  if (isPublicFile) {
    // Let the static file requests pass through without modifying the URL
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static assets (images, fonts, favicon)
    "/((?!_next|images|favicon|fonts).*)",
  ],
};
