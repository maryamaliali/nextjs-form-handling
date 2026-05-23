"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LangIcon } from "@/components/icons/lang-icon";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { swapLocaleInPathname } from "@/lib/i18n/routing";
import { LANG_LABELS } from "@/lib/i18n/ui-labels";

export function LangSwitch({
  current,
  ariaLabel,
  variant = "inline",
}: {
  current: Locale;
  ariaLabel: string;
  variant?: "inline" | "floating";
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function selectLocale(next: Locale) {
    if (next === current) {
      setOpen(false);
      return;
    }
    router.push(swapLocaleInPathname(pathname, next));
    setOpen(false);
  }

  const wrapperClassName =
    variant === "floating"
      ? "relative"
      : "relative inline-flex";

  return (
    <div ref={rootRef} className={wrapperClassName}>
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition hover:bg-primary/90"
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <LangIcon className="h-4 w-4" />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel}
          className={
            variant === "floating"
              ? "absolute right-0 top-full z-50 mt-2 min-w-38 overflow-hidden rounded-xl border border-border bg-background/95 py-1 shadow-lg backdrop-blur-md"
              : "absolute right-0 top-full z-50 mt-2 min-w-38 overflow-hidden rounded-xl border border-border bg-card py-1 shadow-lg"
          }
        >
          {locales.map((loc) => {
            const selected = loc === current;
            return (
              <li key={loc} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm font-medium transition hover:bg-muted/80 ${
                    selected ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => selectLocale(loc)}
                >
                  <span>{LANG_LABELS[loc]}</span>
                  {selected ? (
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      ✓
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
