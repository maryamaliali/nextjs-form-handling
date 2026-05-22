"use client";

import Link from "next/link";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { mobileNavLabels } from "@/lib/i18n/ui-labels";
import type { NavLink } from "@/lib/i18n/routing";
import { whatsappHref } from "@/lib/site";

type MobileNavProps = {
  locale: Locale;
  dict: Dictionary;
  links: NavLink[];
};

export function MobileNav({ locale, dict, links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const labels = mobileNavLabels(locale);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-lg font-semibold shadow-sm"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? labels.close : labels.open}
      >
        {open ? "×" : "≡"}
      </button>
      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed left-4 right-4 top-[4.75rem] z-50 mx-auto max-h-[min(70vh,28rem)] max-w-site overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur-md sm:left-6 sm:right-6 sm:top-[5.25rem]"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappHref()}
              className="mt-2 rounded-lg bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setOpen(false)}
            >
              {dict.nav.book}
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
