"use client";

import { useState } from "react";
import Link from "next/link";
import { ServiceIcon, type ServiceSlug } from "@/components/icons/service-icon";

export type ServiceItem = {
  slug: ServiceSlug;
  title: string;
  body: string;
};

export function ServicesExplorer({
  items,
  bookLabel,
  bookHref,
  listLabel,
}: {
  items: ServiceItem[];
  bookLabel: string;
  bookHref: string;
  listLabel: string;
}) {
  const [active, setActive] = useState<ServiceSlug>(items[0]?.slug ?? "beginner");
  const selected = items.find((s) => s.slug === active) ?? items[0];

  if (!selected) return null;

  return (
    <div className="mt-12 lg:mt-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
        <nav
          className="shrink-0 lg:w-72"
          aria-label={listLabel}
        >
          <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {items.map((item) => {
              const isActive = item.slug === active;
              return (
                <li key={item.slug} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setActive(item.slug)}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex w-full min-w-[11rem] items-center gap-3 rounded-2xl border px-3 py-3 text-left transition lg:min-w-0 lg:px-4 lg:py-3.5 ${
                      isActive
                        ? "border-primary/50 bg-primary/10 text-foreground shadow-sm"
                        : "border-border/70 bg-card/50 text-muted-foreground hover:border-primary/25 hover:bg-card hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isActive ? "bg-primary/15" : "bg-primary/10"
                      }`}
                    >
                      <ServiceIcon slug={item.slug} />
                    </span>
                    <span className="text-sm font-medium leading-snug sm:text-base">
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <article
          key={selected.slug}
          className="min-h-[16rem] flex-1 rounded-2xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:min-h-[20rem]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <ServiceIcon slug={selected.slug} />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
            {selected.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {selected.body}
          </p>
          <Link
            href={bookHref}
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {bookLabel}
          </Link>
        </article>
      </div>
    </div>
  );
}
