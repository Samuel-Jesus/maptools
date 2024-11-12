import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Usa o requestLocale diretamente se disponível
  const locale = (await requestLocale) || routing.defaultLocale;
  console.log("getRequestConfig - Locale:", locale); // Verificando o valor do locale

  const messages = (await import(`@/locales/${locale}/common.json`)).default;

  return {
    locale,
    messages: {
      common: messages,
    },
  };
});
