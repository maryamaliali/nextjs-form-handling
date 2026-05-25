"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
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

/** "Sarah M." -> "@sarah" so each pupil card has a social-style handle. */
function handleFromName(name: string) {
  const first = name.split(/\s+/)[0] ?? name;
  const slug = first.toLowerCase().replace(/[^a-z0-9]/g, "");
  return `@${slug || "pupil"}`;
}

/**
 * Signed circular distance between `idx` and the active index. Result is in
 * (-total/2, total/2], so any pupil is at most floor(total/2) hops away from
 * the centered one, regardless of direction.
 */
function circularDist(idx: number, activeIndex: number, total: number) {
  let d = idx - activeIndex;
  if (d > total / 2) d -= total;
  if (d <= -total / 2) d += total;
  return d;
}

type Labels = {
  prev: string;
  next: string;
  dot: string;
  live: string;
};

/**
 * Visible circles around the active slide. Five slots; DOM order places the
 * active slot first so it sits at z-index top, then CSS `order` reshuffles
 * them visually to [far-left, near-left, ACTIVE, near-right, far-right].
 */
const STACK_SLOTS = [
  { offset: 0, order: "order-3", size: "size-16", text: "text-base", z: "z-[6]", ml: "-ml-2" },
  { offset: -1, order: "order-2", size: "size-12", text: "text-sm", z: "z-[4]", ml: "-ml-2" },
  { offset: 1, order: "order-4", size: "size-12", text: "text-sm", z: "z-[4]", ml: "-ml-2" },
  { offset: -2, order: "order-1", size: "size-9", text: "text-[10px]", z: "z-[3]", ml: "" },
  { offset: 2, order: "order-5", size: "size-9", text: "text-[10px]", z: "z-[3]", ml: "-ml-2" },
] as const;

function StackedDots({
  items,
  index,
  onSelect,
  dotLabel,
}: {
  items: TestimonialItem[];
  index: number;
  onSelect: (i: number) => void;
  dotLabel: string;
}) {
  const total = items.length;
  if (total === 0) return null;

  return (
    <div className="flex items-center justify-center">
      {STACK_SLOTS.map(({ offset, order, size, text, z, ml }) => {
        const idx = ((index + offset) % total + total) % total;
        const item = items[idx]!;
        const isActive = offset === 0;
        const label = item.initials ?? initialsFromName(item.name);
        return (
          <button
            key={offset}
            type="button"
            aria-label={`${dotLabel} ${idx + 1}: ${item.name}`}
            aria-current={isActive}
            title={item.name}
            onClick={() => onSelect(idx)}
            className={`${order} ${size} ${text} ${z} ${ml} relative flex shrink-0 cursor-pointer items-center justify-center rounded-full border font-extrabold uppercase leading-none tracking-wide shadow-sm transition-all duration-200 ease-out hover:z-10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background ${
              isActive
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-muted/60"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function StarRow({ count = 5, max = 5 }: { count?: number; max?: number }) {
  return (
    <div
      className="flex items-center gap-0.5 text-primary"
      aria-label={`${count} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 0 0 .95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 0 0-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.367-2.446a1 1 0 0 0-1.176 0l-3.367 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 0 0-.364-1.118L2.071 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 0 0 .95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

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
  const [isDragging, setIsDragging] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartY = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(0);
  const dragStartYRef = useRef<number | null>(null);
  const dragDeltaYRef = useRef(0);
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
    touchStartY.current = e.touches[0]?.clientY ?? null;
  }

  function onTouchEnd(e: TouchEvent<HTMLDivElement>) {
    const start = touchStartY.current;
    touchStartY.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientY ?? start;
    const dy = end - start;
    if (dy > TESTIMONIAL_SWIPE_THRESHOLD_PX) go(-1);
    else if (dy < -TESTIMONIAL_SWIPE_THRESHOLD_PX) go(1);
  }

  // Mouse wheel inside the slider stage: one slide per scroll, debounced.
  // Attached via useEffect with passive:false so we can call preventDefault and
  // stop the page from scrolling while the user is interacting with the stage.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      const dy = e.deltaY;
      if (Math.abs(dy) < 4) return;
      const now = Date.now();
      if (now - wheelLockRef.current < 650) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      wheelLockRef.current = now;
      go(dy > 0 ? 1 : -1);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [go]);

  // Mouse drag — listen on document so a drag that releases outside the stage
  // still completes cleanly.
  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent) => {
      if (dragStartYRef.current == null) return;
      dragDeltaYRef.current = e.clientY - dragStartYRef.current;
    };

    const handleUp = () => {
      const dy = dragDeltaYRef.current;
      dragStartYRef.current = null;
      dragDeltaYRef.current = 0;
      setIsDragging(false);
      if (dy > TESTIMONIAL_SWIPE_THRESHOLD_PX) go(-1);
      else if (dy < -TESTIMONIAL_SWIPE_THRESHOLD_PX) go(1);
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleUp);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleUp);
    };
  }, [isDragging, go]);

  function onMouseDown(e: ReactMouseEvent<HTMLDivElement>) {
    if (e.button !== 0) return;
    dragStartYRef.current = e.clientY;
    dragDeltaYRef.current = 0;
    setIsDragging(true);
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
        ref={stageRef}
        className={`relative h-[460px] select-none overflow-hidden sm:h-[520px] ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {items.map((item, idx) => {
          const dist = total > 0 ? circularDist(idx, index, total) : 0;
          const isActive = dist === 0;
          const visible = Math.abs(dist) <= 1;

          return (
            <article
              key={`${idx}-${item.name}`}
              className="absolute inset-x-0 top-1/4 h-1/2 px-1 transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:duration-0 sm:px-2"
              style={{
                transform: `translateY(${dist * 100}%) scale(${isActive ? 1 : 0.94})`,
                opacity: visible ? (isActive ? 1 : 0.45) : 0,
                zIndex: isActive ? 10 : visible ? 5 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
              aria-hidden={!isActive}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-md">
                <div className="flex items-center justify-between gap-3 px-5 py-3 sm:px-6 sm:py-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar
                      initials={item.initials ?? initialsFromName(item.name)}
                      size="md"
                    />
                    <div className="min-w-0">
                      <div className="truncate text-base font-bold leading-tight text-foreground">
                        {item.name}
                      </div>
                      <div className="truncate text-sm text-muted-foreground">
                        {handleFromName(item.name)}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={item.tag}
                    aria-haspopup="menu"
                    tabIndex={isActive ? 0 : -1}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition hover:bg-muted/60 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-1 flex-col gap-2 overflow-hidden px-5 pb-4 sm:px-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <GoogleLogo />
                    <StarRow count={5} />
                    <span className="text-xs font-medium text-muted-foreground">
                      Posted on Google
                    </span>
                  </div>
                  <p className="line-clamp-4 text-sm leading-relaxed text-foreground/90 sm:text-[15px]">
                    “{item.quote}”
                  </p>
                  <span className="mt-auto inline-flex w-fit items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-border/70 px-5 py-3 sm:px-6">
                  <div
                    className="flex items-center gap-4 text-muted-foreground"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                      <path d="M8 16H3v5" />
                    </svg>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                  </div>
                  <div
                    className="flex items-center gap-4 text-muted-foreground"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                      <circle cx="5" cy="12" r="1" />
                    </svg>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-base font-semibold shadow-sm transition hover:bg-muted/60"
          onClick={() => go(-1)}
          aria-label={labels.prev}
        >
          ↑
        </button>

        <StackedDots
          items={items}
          index={index}
          onSelect={setIndex}
          dotLabel={labels.dot}
        />

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-base font-semibold shadow-sm transition hover:bg-muted/60"
          onClick={() => go(1)}
          aria-label={labels.next}
        >
          ↓
        </button>
      </div>

      <p className="mt-3 text-center text-sm font-medium text-foreground">
        {items[index]?.name}
        <span className="ml-2 text-xs text-muted-foreground">
          {index + 1} / {total}
        </span>
      </p>
    </div>
  );
}
