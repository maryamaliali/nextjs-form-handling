'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import {
  SERVICE_BADGES,
  SERVICE_HIGHLIGHTS,
  SERVICE_IMAGES,
  SERVICE_SLUG_ORDER,
  ROUTES,
} from '@/lib/constants';
import { LuxurySectionBackdrop } from '@/components/ui/luxury-section-backdrop';
import { localeHref } from '@/lib/i18n/routing';
import { whatsappHref } from '@/lib/site';

const AUTO_INTERVAL_MS = 4500;

type ServicesPreviewSectionProps = {
  locale: Locale;
  title: string;
  services: Dictionary['home']['services'];
  learnMore: string;
  ctaBook: string;
  ctaWhatsApp: string;
  sliderLabels?: {
    dot: string;
    live: string;
  };
};

export function ServicesPreviewSection({
  locale,
  title,
  services,
  learnMore,
  ctaBook,
  ctaWhatsApp,
  sliderLabels,
}: ServicesPreviewSectionProps) {
  const cards = SERVICE_SLUG_ORDER.map((slug) => ({
    slug,
    image: SERVICE_IMAGES[slug],
    badge: SERVICE_BADGES[slug],
    features: SERVICE_HIGHLIGHTS[slug],
    ...services[slug],
  }));

  const slideCount = cards.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const next = ((index % slideCount) + slideCount) % slideCount;
      setActiveIndex(next);
    },
    [slideCount]
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReducedMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || paused || slideCount <= 1) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slideCount);
    }, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, paused, slideCount]);

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    if (start === null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 40) {
      goTo(activeIndex + (dx < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  const active = cards[activeIndex];
  const liveLabel = sliderLabels?.live
    ?.replace('{n}', String(activeIndex + 1))
    .replace('{total}', String(slideCount));

  return (
    <section
      ref={sectionRef}
      className={`msa-luxury-slider-section${inView ? ' is-visible' : ''}`}
      aria-label={title}
    >
      <LuxurySectionBackdrop />

      <div className="msa-container msa-luxury-container">
        <div className="msa-luxury-slider-head">
          <h2 className="msa-section-title">{title}</h2>
          <Link
            href={localeHref(locale, ROUTES.services)}
            className="inline-flex shrink-0 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {learnMore}
          </Link>
        </div>

        <div
          className="msa-luxury-slider"
          aria-roledescription="carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="msa-luxury-slides"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.slug}
                className={`msa-luxury-slide${index === activeIndex ? ' is-active' : ''}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${slideCount}`}
                aria-hidden={index !== activeIndex}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="msa-luxury-slide-img"
                  draggable={false}
                  loading={index === 0 || inView ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === activeIndex ? 'high' : 'low'}
                />
                <span className="msa-luxury-slide-overlay" aria-hidden />
                <span className="msa-luxury-slide-badge">
                  <span className="msa-luxury-badge-dot" aria-hidden />
                  {card.badge}
                </span>
              </div>
            ))}
          </div>

          <div
            className="msa-luxury-bottom"
            aria-live="polite"
            aria-atomic="true"
          >
            {liveLabel ? <span className="sr-only">{liveLabel}</span> : null}

            <div key={activeIndex} className="msa-luxury-bottom-content">
              <h3 className="msa-luxury-heading">{active.title}</h3>
              <p className="msa-luxury-subtitle">{active.body}</p>

              <ul className="msa-luxury-features" aria-label="Highlights">
                {active.features.map((feature) => (
                  <li key={feature} className="msa-luxury-feature">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="msa-luxury-buttons">
                <Link
                  href={localeHref(locale, ROUTES.contact)}
                  className="msa-luxury-btn msa-luxury-btn-primary"
                >
                  {ctaBook}
                </Link>
                <a
                  href={whatsappHref(`Hi, I'm interested in ${active.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="msa-luxury-btn msa-luxury-btn-secondary"
                >
                  {ctaWhatsApp}
                </a>
              </div>
            </div>

            <div
              className="msa-luxury-indicators"
              role="tablist"
              aria-label={title}
            >
              {cards.map((card, index) => (
                <button
                  key={card.slug}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={
                    sliderLabels?.dot
                      ? `${sliderLabels.dot} ${index + 1}: ${card.title}`
                      : `${card.title}, ${index + 1} of ${slideCount}`
                  }
                  className={`msa-luxury-dot${index === activeIndex ? ' is-active' : ''}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="msa-luxury-feature-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="var(--primary)" fillOpacity="0.12" />
      <path
        d="m8 12 3 3 5-6"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
