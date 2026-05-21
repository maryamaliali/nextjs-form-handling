"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { LANG_LABELS } from "@/lib/i18n/ui-labels";

export function LangSwitch({
  current,
  ariaLabel,
}: {
  current: Locale;
  ariaLabel: string;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function onChange(next: Locale) {
    if (next === current) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${next}`);
      return;
    }
    segments[0] = next;
    router.push(`/${segments.join("/")}`);
  }

  return (
    <label className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
      <span className="sr-only">{ariaLabel}</span>
      <select
        className="h-9 cursor-pointer rounded-full border border-border bg-card px-3 text-foreground shadow-sm outline-none transition hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring"
        value={current}
        aria-label={ariaLabel}
        onChange={(e) => onChange(e.target.value as Locale)}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {LANG_LABELS[loc]}
          </option>
        ))}
      </select>
    </label>
  );
}
