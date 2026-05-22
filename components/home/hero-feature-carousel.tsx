"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  buildHeroFeatureCards,
  HERO_FEATURE_CARD_STAGGER,
  HeroFeatureCard,
  type HeroFeatureCardLabels,
} from "@/components/icons/hero-icons";
import {
  HERO_CAROUSEL_INTERVAL_MS,
  HERO_CAROUSEL_TRANSITION_MS,
  HERO_CAROUSEL_VISIBLE_COUNT,
} from "@/lib/constants";

/** Card height (8.75rem) + gap-4 (1rem) */
const CARD_STEP_PX = 156;

type HeroFeatureCarouselProps = {
  labels: HeroFeatureCardLabels;
  className?: string;
};

export function HeroFeatureCarousel({
  labels,
  className,
}: HeroFeatureCarouselProps) {
  const cards = useMemo(() => buildHeroFeatureCards(labels), [labels]);
  const loopCards = useMemo(
    () => [...cards, ...cards.slice(0, HERO_CAROUSEL_VISIBLE_COUNT)],
    [cards],
  );

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (paused) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const id = window.setInterval(advance, HERO_CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [advance, paused]);

  useEffect(() => {
    if (index !== cards.length) return;

    const timeout = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimate(true));
      });
    }, HERO_CAROUSEL_TRANSITION_MS);

    return () => window.clearTimeout(timeout);
  }, [index, cards.length]);

  const viewportHeight = `calc(${HERO_CAROUSEL_VISIBLE_COUNT} * 8.75rem + ${HERO_CAROUSEL_VISIBLE_COUNT - 1} * 1rem)`;

  return (
    <div
      className={`mx-auto w-full min-w-0 max-w-sm overflow-visible ${className ?? ""}`}
      aria-hidden
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="msa-hero-carousel-viewport relative overflow-hidden px-3"
        style={{ height: viewportHeight }}
      >
        <div
          className="flex w-full min-w-0 flex-col gap-4"
          style={{
            transform: `translateY(-${index * CARD_STEP_PX}px)`,
            transition: animate
              ? `transform ${HERO_CAROUSEL_TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
              : "none",
          }}
        >
          {loopCards.map((card, i) => {
            const slot =
              (i - index + HERO_CAROUSEL_VISIBLE_COUNT * 10) %
              HERO_CAROUSEL_VISIBLE_COUNT;
            const staggerClass = HERO_FEATURE_CARD_STAGGER[slot] ?? "";

            return (
              <HeroFeatureCard
                key={`${card.key}-${i}`}
                label={card.label}
                Svg={card.Svg}
                staggerClass={staggerClass}
              />
            );
          })}
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-background/80 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-background/80"
          aria-hidden
        />
      </div>
    </div>
  );
}
