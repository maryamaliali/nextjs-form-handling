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
  localeHref,
} from "@/lib/i18n/routing";
import { LangSwitch } from "@/components/lang-switch";
import { ThemeToggle } from "@/components/theme-toggle";
import { whatsappHref } from "@/lib/site";
import { MobileNav } from "@/components/layout/site-mobile-nav";

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
          className="group flex min-w-0 shrink-0 flex-col justify-center leading-tight"
        >
          <span className="truncate text-sm font-semibold tracking-wide text-primary sm:text-base">
            {dict.brand}
          </span>
          <span className="truncate text-xs text-muted-foreground sm:text-sm">
            {dict.city}
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-0.5 md:flex lg:gap-1"
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.path}
              href={localeHref(locale, link.path)}
              className="whitespace-nowrap rounded-full px-2.5 py-2 text-center text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground lg:px-3.5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-1.5 sm:gap-2">
          <ThemeToggle labels={themeToggleLabels(locale)} />
          <a
            href={whatsappHref()}
            className="hidden min-h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:inline-flex"
            rel="noopener noreferrer"
            target="_blank"
          >
            {dict.nav.book}
          </a>
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
