"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SectionReveal } from "@/components/section-reveal";
import { SUCCESS_STORY_IMAGES } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SuccessStoriesSliderProps = {
  copy: Dictionary["home"]["successSlider"];
};

const AUTO_INTERVAL_MS = 3200;
/** Number of times we repeat the image list in the DOM track to fake an infinite loop. */
const COPIES = 3;

/** Tile width + gap dimensions per viewport breakpoint (kept in sync with CSS). */
type Dims = { active: number; normal: number; gap: number };

function dimsForViewport(width: number): Dims {
  if (width <= 480) return { active: 230, normal: 130, gap: 10 };
  if (width <= 768) return { active: 320, normal: 180, gap: 14 };
  if (width <= 1024) return { active: 400, normal: 230, gap: 16 };
  return { active: 480, normal: 280, gap: 18 };
}

/**
 * Infinite circular carousel of pupil pass-photos.
 *
 * The image list is repeated `COPIES` times in the DOM so that, regardless of
 * the direction the user steps, there are always neighbouring tiles to render.
 * `rawIndex` is the absolute position on that repeated track. When it drifts
 * out of the middle copy after a transition, we snap it back to the equivalent
 * tile in the middle copy with transitions disabled for one frame — the user
 * never sees the jump because the image at the centered position is identical.
 *
 * Starts at the middle image (index ≈ `total / 2`) so the user lands in the
 * middle of the gallery rather than at one edge.
 */
export function SuccessStoriesSlider({ copy }: SuccessStoriesSliderProps) {
  const total = SUCCESS_STORY_IMAGES.length;
  const middleStart = total;
  const middleEnd = total * 2;
  const trackLength = total * COPIES;

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [rawIndex, setRawIndex] = useState(
    middleStart + Math.floor(total / 2),
  );
  const [animating, setAnimating] = useState(true);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [containerW, setContainerW] = useState(0);
  const [dims, setDims] = useState<Dims>(() => dimsForViewport(1280));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const update = () => {
      setDims(dimsForViewport(window.innerWidth));
      if (containerRef.current) {
        setContainerW(containerRef.current.clientWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    let ro: ResizeObserver | undefined;
    if (containerRef.current && "ResizeObserver" in window) {
      ro = new ResizeObserver(() => {
        if (containerRef.current) {
          setContainerW(containerRef.current.clientWidth);
        }
      });
      ro.observe(containerRef.current);
    }
    return () => {
      window.removeEventListener("resize", update);
      ro?.disconnect();
    };
  }, []);

  /** Map any rawIndex back into the middle copy band [middleStart, middleEnd). */
  const normalizeRaw = (r: number) => {
    const offset = (((r - middleStart) % total) + total) % total;
    return middleStart + offset;
  };

  // For reduced-motion users there is no transitionend snap, so normalize
  // inside the setters; for normal users let rawIndex drift and let
  // `handleTransitionEnd` snap it back invisibly after each transition.
  const stepBy = (delta: number) => {
    setRawIndex((prev) => {
      const target = prev + delta;
      return reducedMotion ? normalizeRaw(target) : target;
    });
  };
  const next = () => stepBy(1);
  const prev = () => stepBy(-1);
  const goTo = (k: number) => setRawIndex(reducedMotion ? normalizeRaw(k) : k);

  // Auto-advance: keep stepping forward; the wrap-around stays invisible
  // thanks to the snap-jump handled in `handleTransitionEnd`.
  useEffect(() => {
    if (paused || reducedMotion || total <= 1) return;
    const id = window.setInterval(() => {
      setRawIndex((i) => i + 1);
    }, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, total]);

  // After a no-transition render (snap-jump), re-enable the transition the
  // next frame so subsequent steps animate normally again.
  useEffect(() => {
    if (animating) return;
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setAnimating(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [animating]);

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current) return;
    if (event.propertyName !== "transform") return;
    if (rawIndex < middleStart || rawIndex >= middleEnd) {
      setAnimating(false);
      setRawIndex(normalizeRaw(rawIndex));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  // Translate the track so the active tile sits at the container center.
  // Tiles before `rawIndex` each contribute (normal + gap); the active tile
  // contributes `active/2` from its left edge to its centre.
  const tileCenter = rawIndex * (dims.normal + dims.gap) + dims.active / 2;
  const translate = containerW > 0 ? containerW / 2 - tileCenter : 0;

  // Build the repeated track. The React Compiler memoizes this automatically.
  const tiles = Array.from({ length: trackLength }, (_, k) => ({
    k,
    src: SUCCESS_STORY_IMAGES[k % total],
    imageIndex: k % total,
  }));

  const activeImageIndex = ((rawIndex % total) + total) % total;

  return (
    <section className="msa-success-slider-section" aria-label={copy.title}>
      <div className="msa-container">
        <SectionReveal variant="fade">
          <div className="msa-success-slider-head">
            <p className="msa-success-slider-eyebrow">{copy.eyebrow}</p>
            <h2 className="msa-section-title">{copy.title}</h2>
            <p className="msa-success-slider-sub">{copy.subtitle}</p>
          </div>
        </SectionReveal>
      </div>

      <div
        ref={containerRef}
        className="msa-success-slider"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        onKeyDown={onKeyDown}
      >
        <button
          type="button"
          className="msa-success-arrow msa-success-arrow-prev"
          onClick={prev}
          aria-label={copy.prev}
        >
          <ArrowIcon direction="left" />
        </button>

        <div
          ref={trackRef}
          className={`msa-success-slider-track${animating ? "" : " is-jumping"}`}
          style={{
            transform: `translate3d(${translate}px, 0, 0)`,
            gap: `${dims.gap}px`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {tiles.map(({ k, src, imageIndex }) => {
            const isActive = k === rawIndex;
            const distance = Math.abs(k - rawIndex);
            return (
              <button
                type="button"
                key={k}
                className={`msa-success-tile${isActive ? " is-active" : ""}`}
                style={{
                  width: isActive ? dims.active : dims.normal,
                }}
                aria-label={`${copy.imageAlt} (${imageIndex + 1} / ${total})`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goTo(k)}
                tabIndex={isActive ? 0 : -1}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={copy.imageAlt}
                  className="msa-success-tile-img"
                  loading={distance < 5 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
                <span className="msa-success-tile-overlay" aria-hidden />
                <span className="msa-success-tile-badge" aria-hidden>
                  <CheckIcon />
                  Passed
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className="msa-success-arrow msa-success-arrow-next"
          onClick={next}
          aria-label={copy.next}
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {copy.live
          .replace("{n}", String(activeImageIndex + 1))
          .replace("{total}", String(total))}
      </p>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      style={{ transform: direction === "left" ? "rotate(180deg)" : undefined }}
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

function CheckIcon() {
  return (
    <svg
      className="msa-success-tile-check"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.18" />
      <path
        d="m8 12 3 3 5-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
