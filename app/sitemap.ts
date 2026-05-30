import type { MetadataRoute } from "next";
import { HREFLANG_LOCALE, SITEMAP_PATHS } from "@/lib/constants";
import { defaultLocale, locales } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/site";

function localizedUrl(locale: string, path: (typeof SITEMAP_PATHS)[number]): string {
  const urlPath = path === "" ? `/${locale}` : `/${locale}${path}`;
  return `${siteUrl}${urlPath}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of SITEMAP_PATHS) {
    const languages = Object.fromEntries(
      locales.map((locale) => [HREFLANG_LOCALE[locale], localizedUrl(locale, path)]),
    ) as Record<string, string>;
    languages["x-default"] = localizedUrl(defaultLocale, path);

    for (const locale of locales) {
      entries.push({
        url: localizedUrl(locale, path),
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path === "/booking" ? 0.8 : 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
