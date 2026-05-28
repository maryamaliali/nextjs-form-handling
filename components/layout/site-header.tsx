import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import {
  langSwitchAriaLabel,
  themeToggleLabels,
} from "@/lib/i18n/ui-labels";
import {
  buildHeaderNavLinks,
  localeBasePath,
} from "@/lib/i18n/routing";
import { LangSwitch } from "@/components/lang-switch";
import { ROUTES } from "@/lib/constants";
import { ThemeToggle } from "@/components/theme-toggle";
import { BrandMark } from "@/components/brand-mark";
import { MobileNav } from "@/components/layout/site-mobile-nav";
import { SiteHeaderNav } from "@/components/layout/site-header-nav";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const base = localeBasePath(locale);
  const links = buildHeaderNavLinks(locale, dict);

  return (
    <header className="relative sticky top-0 z-40 px-4 sm:px-6">
      <div className="absolute left-1/2 mx-auto mt-4 grid w-full max-w-site -translate-x-1/2 grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border border-border/80 bg-background/80 py-2 pl-3 pr-2 shadow-sm backdrop-blur-md sm:gap-3 sm:py-2.5 sm:pl-4 sm:pr-3">
        <Link
          href={base}
          className="group flex min-w-0 shrink-0 items-center gap-2.5"
        >
          <BrandMark sizePx={42} />
          <span className="flex min-w-0 flex-col justify-center leading-tight">
            <span className="truncate text-sm font-semibold tracking-wide text-primary sm:text-base">
              {dict.brand}
            </span>
            <span className="truncate text-xs text-muted-foreground sm:text-sm">
              {dict.city}
            </span>
          </span>
        </Link>

        <SiteHeaderNav locale={locale} links={links} />

        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          <ThemeToggle labels={themeToggleLabels(locale)} />
          <Link
            href={localeBasePath(locale) + ROUTES.booking}
            className="hidden min-h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
          >
            {dict.nav.book}
          </Link>
          <MobileNav locale={locale} dict={dict} links={links} />
        </div>
      </div>

      <div className="pointer-events-none fixed inset-y-0 right-0 z-50 flex items-center pr-3 sm:pr-4">
        <div className="pointer-events-auto">
          <LangSwitch
            current={locale}
            ariaLabel={langSwitchAriaLabel(locale)}
            variant="floating"
          />
        </div>
      </div>
    </header>
  );
}
