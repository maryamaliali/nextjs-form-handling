"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import {
  isRouteActive,
  localeHref,
  type NavLink,
} from "@/lib/i18n/routing";

type SiteHeaderNavProps = {
  locale: Locale;
  links: NavLink[];
};

export function SiteHeaderNav({ locale, links }: SiteHeaderNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center justify-center gap-0.5 md:flex lg:gap-1"
      aria-label="Primary"
    >
      {links.map((link) => {
        const active = isRouteActive(pathname, locale, link.path);
        const base =
          "whitespace-nowrap rounded-full px-2.5 py-2 text-center text-sm font-medium transition lg:px-3.5";
        const state = active
          ? "bg-primary/10 text-primary font-semibold"
          : "text-muted-foreground hover:bg-muted hover:text-foreground";
        return (
          <Link
            key={link.path}
            href={localeHref(locale, link.path)}
            aria-current={active ? "page" : undefined}
            className={`${base} ${state}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
