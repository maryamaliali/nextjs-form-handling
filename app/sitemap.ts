import type { MetadataRoute } from "next";
import { SITEMAP_PATHS } from "@/lib/constants";
import { locales } from "@/lib/i18n/config";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of SITEMAP_PATHS) {
      const urlPath = path === "" ? `/${locale}` : `/${locale}${path}`;
      entries.push({
        url: `${siteUrl}${urlPath}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }

  return entries;
}
