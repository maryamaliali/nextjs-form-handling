import type { Dictionary } from "./dictionaries";
import type { Locale } from "./config";
import { ROUTES, type AppRoute } from "@/lib/constants";

export type NavLink = { href: string; label: string; path: AppRoute };

export function localeBasePath(locale: Locale): string {
  return `/${locale}`;
}

export function localeHref(locale: Locale, path: AppRoute): string {
  const base = localeBasePath(locale);
  return path === ROUTES.home ? base : `${base}${path}`;
}

export function buildNavLinks(locale: Locale, dict: Dictionary): NavLink[] {
  const base = localeBasePath(locale);
  return [
    { href: base, label: dict.nav.home, path: ROUTES.home },
    { href: `${base}${ROUTES.services}`, label: dict.nav.services, path: ROUTES.services },
    { href: `${base}${ROUTES.packages}`, label: dict.nav.packages, path: ROUTES.packages },
    { href: `${base}${ROUTES.about}`, label: dict.nav.about, path: ROUTES.about },
    { href: `${base}${ROUTES.contact}`, label: dict.nav.contact, path: ROUTES.contact },
  ];
}
