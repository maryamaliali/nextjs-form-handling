import type { Metadata } from "next";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import type { AppRoute } from "@/lib/constants";
import { siteUrl } from "@/lib/site";

type PageMetadataInput = {
  localeParam: string;
  path: AppRoute;
  title: string;
  description: string;
};

export function buildPageMetadata({
  localeParam,
  path,
  title,
  description,
}: PageMetadataInput): Metadata {
  const locale: Locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const canonicalPath = path === "" ? `/${locale}` : `/${locale}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
      languages: Object.fromEntries(
        locales.map((l) => [
          l,
          `${siteUrl}${path === "" ? `/${l}` : `/${l}${path}`}`,
        ]),
      ),
    },
  };
}

export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale | null> {
  const { locale } = await params;
  return isLocale(locale) ? locale : null;
}
