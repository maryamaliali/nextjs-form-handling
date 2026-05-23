"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type TouchEvent,
} from "react";
import { StatsIcon, type StatsIconName } from "@/components/icons/stats-icon";
import { TotalPassedTrophy } from "@/components/home/total-passed-trophy";
import { CountUp } from "@/components/ui/count-up";
import {
  HOME_STAT_HIGHLIGHTS,
  STATS_CAROUSEL_3D_STEP_MS,
  TESTIMONIAL_SWIPE_THRESHOLD_PX,
  TOTAL_PASSED_COUNT,
} from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SliderLabels = {
  prev: string;
  next: string;
  dot: string;
  live: string;
};

type StatSlide = {
  key: string;
  icon: StatsIconName;
  label: string;
  description: string;
  value: { kind: "count"; target: number } | { kind: "text"; text: string };
};

type StatsCarouselProps = {
  stats: Dictionary["home"]["stats"];
  sliderLabels: SliderLabels;
};

function buildSlides(stats: Dictionary["home"]["stats"]): StatSlide[] {
  const { totalPassed, highlights } = stats;

  return [
    {
      key: "totalPassed",
      icon: "totalPassed",
      label: totalPassed.label,
      description: totalPassed.description,
      value: { kind: "count", target: TOTAL_PASSED_COUNT },
    },
    ...HOME_STAT_HIGHLIGHTS.map((item) => ({
      key: item.key,
      icon: item.key,
      label: highlights[item.key].label,
      description: highlights[item.key].description,
      value: { kind: "text" as const, text: item.value },
    })),
  ];
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

function StatCardValue({
  slide,
  active,
}: {
  slide: StatSlide;
  active?: boolean;
}) {
  if (slide.value.kind === "count") {
    if (active !== false) {
      return (
        <CountUp
          target={slide.value.target}
          className="msa-stats-3d-card-value"
          suffix="+"
        />
      );
    }
    return (
      <span className="msa-stats-3d-card-value">
        {slide.value.target.toLocaleString()}+
      </span>
    );
  }

  return <span className="msa-stats-3d-card-value">{slide.value.text}</span>;
}

function StatSlideContent({
  slide,
  idPrefix,
  variant,
  active,
}: {
  slide: StatSlide;
  idPrefix: string;
  variant: "ring" | "card";
  active?: boolean;
}) {
  const isRing = variant === "ring";

  return (
    <div
      className={
        isRing ? "msa-stats-3d-ring-content" : "msa-stats-3d-card-content"
      }
    >
      {!isRing ? (
        <div className="msa-stats-3d-card-icon">
          <StatsIcon
            name={slide.icon}
            idPrefix={idPrefix}
            className="msa-stats-3d-card-icon-svg"
          />
        </div>
      ) : null}
      <p className="msa-stats-3d-card-label">{slide.label}</p>
      <StatCardValue slide={slide} active={active ?? true} />
      <p className="msa-stats-3d-card-desc">{slide.description}</p>
    </div>
  );
}

/** Avoid exact multiples of 360° so the browser does not collapse -360° to 0° and rewind the ring. */
function ringRotationDeg(steps: number, angleStep: number) {
  const deg = -steps * angleStep;
  return deg % 360 === 0 && deg !== 0 ? deg - 0.001 : deg;
}

export function StatsCarousel({ stats, sliderLabels }: StatsCarouselProps) {
  const slides = useMemo(() => buildSlides(stats), [stats]);
  const [index, setIndex] = useState(0);
  const rotationStepsRef = useRef(0);
  const [rotationSteps, setRotationSteps] = useState(0);
  const reducedMotion = usePrefersReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const total = slides.length;
  const current = slides[index]!;
  const angleStep = 360 / total;
  const ringRotation = ringRotationDeg(rotationSteps, angleStep);

  const liveText = useMemo(
    () =>
      sliderLabels.live
        .replace("{n}", String(index + 1))
        .replace("{total}", String(total)),
    [index, sliderLabels.live, total],
  );

  const addRotationSteps = useCallback((delta: number) => {
    rotationStepsRef.current += delta;
    setRotationSteps(rotationStepsRef.current);
  }, []);

  const step = useCallback(
    (dir: -1 | 1) => {
      addRotationSteps(dir);
      setIndex((i) => (i + dir + total) % total);
    },
    [addRotationSteps, total],
  );

  const goTo = useCallback(
    (targetIndex: number) => {
      setIndex((currentIndex) => {
        if (targetIndex === currentIndex) return currentIndex;

        const forward = (targetIndex - currentIndex + total) % total;
        addRotationSteps(forward);

        return targetIndex;
      });
    },
    [addRotationSteps, total],
  );

  const go = useCallback((dir: -1 | 1) => step(dir), [step]);

  useEffect(() => {
    if (reducedMotion || total <= 1) return;
    const id = window.setInterval(() => step(1), STATS_CAROUSEL_3D_STEP_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, total, step]);

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

  const ringStyle: CSSProperties | undefined = reducedMotion
    ? undefined
    : {
        transform: `perspective(800px) rotateX(4deg) rotateY(${ringRotation}deg)`,
      };

  return (
    <div
      className="relative mx-auto mt-10 max-w-3xl text-center"
      role="region"
      aria-roledescription="carousel"
      aria-label={stats.title}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <span className="sr-only" aria-live="polite">
        {liveText}: {current.label}
      </span>

      <div className="msa-stats-3d-scene">
        {!reducedMotion ? (
          <div
            className="msa-stats-3d-ring msa-stats-3d-ring--sliding"
            style={ringStyle}
          >
            {slides.map((slide, i) => (
              <div
                key={`ring-${slide.key}`}
                className={`msa-stats-3d-ring-slide ${i === index ? "msa-stats-3d-ring-slide--at-front" : ""}`}
                style={{
                  transform: `translate(-50%, -50%) rotateY(${i * angleStep}deg) translateZ(var(--stats-3d-radius))`,
                }}
                aria-hidden={i === index}
              >
                <StatSlideContent
                  slide={slide}
                  idPrefix={`stat-ring-${slide.key}`}
                  variant="ring"
                  active={false}
                />
              </div>
            ))}
          </div>
        ) : null}

        <article className="msa-stats-3d-card msa-stats-3d-card--front">
          <span className="msa-stats-3d-card-circle" aria-hidden />
          <span
            className="msa-stats-3d-card-circle msa-stats-3d-card-circle--b"
            aria-hidden
          />
          <div className="msa-stats-3d-card-inner">
            <StatSlideContent
              key={current.key}
              slide={current}
              idPrefix={`stat-slide-${current.key}`}
              variant="card"
              active
            />
          </div>
        </article>
      </div>

      <div className="flex flex-col items-center gap-4 py-4 sm:gap-5 sm:py-5">
        <TotalPassedTrophy className="msa-total-passed-trophy--lg" />
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
        <div className="flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`${sliderLabels.dot} ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/55"
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:justify-end">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm transition hover:bg-muted/60 sm:flex-none sm:px-5"
            onClick={() => go(-1)}
            aria-label={sliderLabels.prev}
          >
            ←
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-sm transition hover:bg-muted/60 sm:flex-none sm:px-5"
            onClick={() => go(1)}
            aria-label={sliderLabels.next}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
