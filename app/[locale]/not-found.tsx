import type { Metadata } from "next";
import { NotFoundPage } from "@/components/not-found/not-found-page";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { resolveRequestLocale } from "@/lib/i18n/resolve-request-locale";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default async function LocaleNotFound({
  params,
}: {
  params?: Promise<{ locale?: string }>;
}) {
  const locale = await resolveRequestLocale(params);
  const dict = await getDictionary(locale);

  return <NotFoundPage locale={locale} labels={dict.notFoundPage} />;
}
