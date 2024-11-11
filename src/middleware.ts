import { NextResponse, NextRequest } from "next/server";

import { routing } from "./i18n/routing";
import { Locale } from "./i18n/request";

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const locale = pathname.split("/")[1];

  if (!routing.locales.includes(locale as Locale)) {
    const redirectUrl = new URL(
      `/${routing?.defaultLocale}${pathname}`,
      request?.url
    );
    return NextResponse.redirect(redirectUrl);
  }

  request.nextUrl.pathname = `/${locale}`;
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", locale);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
