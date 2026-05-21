"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { Avatar } from "@/components/ui/avatar";
import {
  TESTIMONIAL_AUTO_MS,
  TESTIMONIAL_SWIPE_THRESHOLD_PX,
} from "@/lib/constants";

export type TestimonialItem = {
  quote: string;
  name: string;
  tag: string;
  initials?: string;
};

function initialsFromName(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0]![0] + parts[1]![0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

type Labels = {
  prev: string;
  next: string;
  dot: string;
  live: string;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function TestimonialSlider({
  items,
  labels,
  ariaLabel,
}: {
  items: TestimonialItem[];
  labels: Labels;
  ariaLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const total = items.length;

  const liveText = useMemo(
    () =>
      labels.live
        .replace("{n}", String(index + 1))
        .replace("{total}", String(total)),
    [index, labels.live, total],
  );

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (reducedMotion || paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, TESTIMONIAL_AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, total]);

  function onTouchStart(e: TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function onTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX ?? start;
    const dx = end - start;
    if (dx > TESTIMONIAL_SWIPE_THRESHOLD_PX) go(-1);
    else if (dx < -TESTIMONIAL_SWIPE_THRESHOLD_PX) go(1);
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <span className="sr-only" aria-live="polite">
        {liveText}
      </span>

      <div
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none motion-reduce:duration-0"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, idx) => (
            <article
              key={`${idx}-${item.name}`}
              className="w-full shrink-0 px-5 py-8 sm:px-8 sm:py-10 md:px-10"
              aria-hidden={idx !== index}
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                “{item.quote}”
              </p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <Avatar
                  initials={item.initials ?? initialsFromName(item.name)}
                  size="lg"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.tag}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${labels.dot} ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/55"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm transition hover:bg-muted/60 sm:flex-none sm:px-5"
            onClick={() => go(-1)}
            aria-label={labels.prev}
          >
            ←
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm transition hover:bg-muted/60 sm:flex-none sm:px-5"
            onClick={() => go(1)}
            aria-label={labels.next}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
