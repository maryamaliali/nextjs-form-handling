import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "./config";

/**
 * Resolves locale from route params when available, otherwise from middleware
 * headers. `params` is omitted on some `not-found` renders in the App Router.
 */
export async function resolveRequestLocale(
  params?: Promise<{ locale?: string }>,
): Promise<Locale> {
  if (params) {
    try {
      const resolved = await params;
      const raw = resolved?.locale;
      if (raw && isLocale(raw)) return raw;
    } catch {
      /* fall through to headers */
    }
  }

  const h = await headers();
  const fromHeader = h.get("x-next-locale");
  if (fromHeader && isLocale(fromHeader)) return fromHeader;

  return defaultLocale;
}
