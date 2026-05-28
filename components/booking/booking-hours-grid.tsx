"use client";

import { useMemo } from "react";
import type { OpeningHoursRow } from "@/components/contact/opening-hours";

function BookingClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getLondonWeekday(): number {
  const short = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
  }).format(new Date());
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return map[short] ?? 1;
}

type BookingHoursGridProps = {
  title: string;
  todayLabel: string;
  rows: OpeningHoursRow[];
};

export function BookingHoursGrid({ title, todayLabel, rows }: BookingHoursGridProps) {
  const today = useMemo(() => getLondonWeekday(), []);

  return (
    <div className="msa-card-lift rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm backdrop-blur-sm sm:p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
          <BookingClockIcon />
        </span>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" role="list">
        {rows.map((row) => {
          const isActive = row.weekday === today;
          return (
            <li
              key={row.key}
              aria-current={isActive ? "true" : undefined}
              className={`rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "border-primary/35 bg-primary/10 text-foreground ring-1 ring-primary/20"
                  : "border-border/70 bg-muted/20 text-muted-foreground"
              }`}
            >
              <p className="font-medium text-foreground">
                {row.label}
                {isActive ? (
                  <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {todayLabel}
                  </span>
                ) : null}
              </p>
              <p className="mt-0.5 tabular-nums text-xs sm:text-sm">{row.hours}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
