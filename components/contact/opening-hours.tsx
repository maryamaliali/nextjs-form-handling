"use client";

import { useMemo } from "react";

export type OpeningHoursRow = {
  key: string;
  label: string;
  hours: string;
  /** 0 = Sunday … 6 = Saturday (Europe/London). */
  weekday: number;
};

type OpeningHoursProps = {
  title: string;
  todayLabel: string;
  rows: OpeningHoursRow[];
};

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

export function OpeningHours({ title, todayLabel, rows }: OpeningHoursProps) {
  const today = useMemo(() => getLondonWeekday(), []);

  return (
    <div className="border-t border-border/60 pt-5">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <ul className="mt-3 space-y-1" role="list">
        {rows.map((row) => {
          const isActive = row.weekday === today;
          return (
            <li
              key={row.key}
              aria-current={isActive ? "true" : undefined}
              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 font-medium text-foreground ring-1 ring-primary/25"
                  : "text-muted-foreground"
              }`}
            >
              <span className={isActive ? "text-foreground" : undefined}>
                {row.label}
                {isActive ? (
                  <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    {todayLabel}
                  </span>
                ) : null}
              </span>
              <span
                className={`shrink-0 tabular-nums ${isActive ? "text-foreground" : ""}`}
              >
                {row.hours}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
