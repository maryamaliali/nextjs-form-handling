'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ServiceIcon, type ServiceSlug } from '@/components/icons/service-icon';
import { SERVICE_BADGES, SERVICE_IMAGES } from '@/lib/constants';

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
  prevLabel,
  nextLabel,
}: {
  items: ServiceItem[];
  bookLabel: string;
  bookHref: string;
  listLabel: string;
  prevLabel: string;
  nextLabel: string;
}) {
  const [active, setActive] = useState<ServiceSlug>(
    items[0]?.slug ?? 'beginner'
  );
  const [contentGen, setContentGen] = useState(0);

  const activateSlug = useCallback((slug: ServiceSlug) => {
    setActive((current) => {
      if (slug === current) return current;
      setContentGen((gen) => gen + 1);
      return slug;
    });
  }, []);

  const selected = items.find((s) => s.slug === active) ?? items[0];
  const listRef = useRef<HTMLUListElement>(null);
  const activeIndex = items.findIndex((s) => s.slug === active);

  const goRelative = useCallback(
    (delta: number) => {
      if (items.length <= 1) return;
      const base = activeIndex >= 0 ? activeIndex : 0;
      const nextIndex = (base + delta + items.length) % items.length;
      activateSlug(items[nextIndex].slug);
    },
    [activeIndex, items, activateSlug]
  );

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const activeEl = list.querySelector<HTMLElement>('[aria-current="true"]');
    activeEl?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [active]);

  if (!selected) return null;

  return (
    <section className="msa-services-explorer-section" aria-label={listLabel}>
      <div className="msa-container">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          <nav className="shrink-0 lg:w-72" aria-label={listLabel}>
            <div className="flex items-center gap-1.5 lg:block lg:gap-0">
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 max-lg:inline-flex lg:hidden"
                onClick={() => goRelative(-1)}
                aria-label={prevLabel}
                disabled={items.length <= 1}
              >
                <NavArrowIcon direction="left" />
              </button>
              <ul
                ref={listRef}
                className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
              >
              {items.map((item) => {
                const isActive = item.slug === active;
                return (
                  <li key={item.slug} className="shrink-0 lg:shrink">
                    <button
                      type="button"
                      onClick={() => activateSlug(item.slug)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`msa-services-nav-btn flex w-full min-w-[11rem] items-center gap-3 rounded-2xl border px-3 py-3 text-left transition lg:min-w-0 lg:px-4 lg:py-3.5 ${
                        isActive
                          ? 'border-primary/50 bg-primary/10 text-foreground shadow-sm'
                          : 'border-border/70 bg-card/50 text-muted-foreground hover:border-primary/25 hover:bg-card hover:text-foreground'
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ${
                          isActive ? 'bg-primary/15 scale-105' : 'bg-primary/10'
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
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-background/90 text-foreground shadow-md backdrop-blur-sm transition hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 max-lg:inline-flex lg:hidden"
                onClick={() => goRelative(1)}
                aria-label={nextLabel}
                disabled={items.length <= 1}
              >
                <NavArrowIcon direction="right" />
              </button>
            </div>
          </nav>

          <article
            className="msa-services-detail-panel"
            aria-live="polite"
            data-content-gen={contentGen}
          >
            <div className="msa-services-detail-visual" aria-hidden>
              {items.map((item) => {
                const isActive = item.slug === active;
                return (
                  <div
                    key={item.slug}
                    className={`msa-services-detail-slide${isActive ? ' is-active' : ''}`}
                  >
                    <img
                      src={SERVICE_IMAGES[item.slug]}
                      alt=""
                      className="msa-luxury-slide-img"
                      draggable={false}
                      loading={item.slug === items[0]?.slug ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <span className="msa-services-detail-slide-overlay" aria-hidden />
                  </div>
                );
              })}
            </div>

            <span className="msa-luxury-slide-badge">
              <span className="msa-luxury-badge-dot" aria-hidden />
              {SERVICE_BADGES[selected.slug]}
            </span>

            <div className="msa-services-detail-content">
              <div
                className="msa-services-detail-content-backdrop"
                aria-hidden
              />
              <div
                key={`${active}-${contentGen}`}
                className="msa-services-detail-content-inner"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 backdrop-blur-sm">
                  <ServiceIcon slug={selected.slug} />
                </div>
                <h2 className="font-display mt-5 text-xl font-normal tracking-wide text-foreground sm:text-2xl">
                  {selected.title}
                </h2>
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {selected.body}
                </p>
                <Link
                  href={bookHref}
                  className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  {bookLabel}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function NavArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      className="h-[1.125rem] w-[1.125rem]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : undefined }}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
