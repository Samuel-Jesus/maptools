import { NextResponse, NextRequest } from "next/server";
import { routing } from "./i18n/routing";
import { Locale } from "../types/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split("/")[1] as Locale;

  if (!routing.locales.includes(locale)) {
    const redirectUrl = new URL(
      `/${routing.defaultLocale}${pathname}`,
      request.url
    );
    return NextResponse.redirect(redirectUrl);
  }
  const response = NextResponse.next();
  response.headers.set("X-Locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
