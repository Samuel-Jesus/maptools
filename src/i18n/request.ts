import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export type Locale = "en" | "pt";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }
  const messages =
    locale === "en"
      ? (await import("@/locales/en/common.json")).default
      : (await import("@/locales/pt/common.json")).default;

  return {
    locale,
    messages: {
      common: messages,
    },
  };
});
