import type { Dictionary } from "./dictionaries";
import { isLocale, type Locale } from "./config";
import { ROUTES, type AppRoute } from "@/lib/constants";

export type NavLink = { href: string; label: string; path: AppRoute };

export function localeBasePath(locale: Locale): string {
  return `/${locale}`;
}

export function localeHref(locale: Locale, path: AppRoute): string {
  const base = localeBasePath(locale);
  return path === ROUTES.home ? base : `${base}${path}`;
}

/**
 * Returns true when `pathname` matches (or is nested under) the locale-aware
 * href of the given route. Used to flag the currently-active nav item.
 */
export function isRouteActive(
  pathname: string | null | undefined,
  locale: Locale,
  path: AppRoute,
): boolean {
  if (!pathname) return false;
  const base = localeBasePath(locale);
  if (path === ROUTES.home) {
    return pathname === base || pathname === `${base}/`;
  }
  const target = `${base}${path}`;
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function buildNavLinks(locale: Locale, dict: Dictionary): NavLink[] {
  return [
    { href: localeHref(locale, ROUTES.home), label: dict.nav.home, path: ROUTES.home },
    {
      href: localeHref(locale, ROUTES.services),
      label: dict.nav.services,
      path: ROUTES.services,
    },
    {
      href: localeHref(locale, ROUTES.packages),
      label: dict.nav.packages,
      path: ROUTES.packages,
    },
    { href: localeHref(locale, ROUTES.about), label: dict.nav.about, path: ROUTES.about },
    {
      href: localeHref(locale, ROUTES.contact),
      label: dict.nav.contact,
      path: ROUTES.contact,
    },
  ];
}

/** Swap locale segment in a pathname (e.g. /en/services → /pl/services). */
export function swapLocaleInPathname(pathname: string, next: Locale): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0 || !isLocale(segments[0])) {
    return localeBasePath(next);
  }
  segments[0] = next;
  return `/${segments.join("/")}`;
}

export function buildHeaderNavLinks(locale: Locale, dict: Dictionary): NavLink[] {
  return buildNavLinks(locale, dict).filter((link) => link.path !== ROUTES.home);
}
