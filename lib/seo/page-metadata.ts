import type { Metadata } from "next";
import { HREFLANG_LOCALE, OPEN_GRAPH_LOCALE } from "@/lib/constants";
import type { AppRoute } from "@/lib/constants";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { defaultMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";

type PageMetadataInput = {
  localeParam: string;
  path: AppRoute;
  title: string;
  description: string;
};

function localizedPath(locale: Locale, path: AppRoute): string {
  return path === "" ? `/${locale}` : `/${locale}${path}`;
}

export function buildPageMetadata({
  localeParam,
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const canonicalPath = localizedPath(locale, path);
  const canonical = `${siteUrl}${canonicalPath}`;

  const languageAlternates = Object.fromEntries(
    locales.map((l) => [HREFLANG_LOCALE[l], `${siteUrl}${localizedPath(l, path)}`]),
  ) as Record<string, string>;
  languageAlternates["x-default"] =
    `${siteUrl}${localizedPath(defaultLocale, path)}`;

  const alternateOgLocales = locales
    .filter((l) => l !== locale)
    .map((l) => OPEN_GRAPH_LOCALE[l]);

  return {
    title: path === "" ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: OPEN_GRAPH_LOCALE[locale],
      alternateLocale: alternateOgLocales,
      title,
      description,
      url: canonical,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
    },
  };
}

export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale | null> {
  const { locale } = await params;
  return isLocale(locale) ? locale : null;
}
