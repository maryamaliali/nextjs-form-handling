"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import {
  ROUTES,
  SCROLL_STORY_INTERVAL_MS,
  SCROLL_STORY_TAB_MEDIA,
} from "@/lib/constants";
import { localeHref } from "@/lib/i18n/routing";

type ScrollStorySectionProps = {
  locale: Locale;
  content: Dictionary["home"]["scrollStory"];
};

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4.667 11.333 11.334 4.667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.667 4.667h6.667v6.666"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScrollStorySection({ locale, content }: ScrollStorySectionProps) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const tabCount = content.tabs.length;

  useEffect(() => {
    const block = blockRef.current;
    if (!block) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(block);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || paused || tabCount <= 1) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % tabCount);
    }, SCROLL_STORY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [inView, paused, tabCount]);

  return (
    <section className="msa-scroll-story rounded-4xl -mt-10" aria-label="Highlights">
      <div className="msa-container msa-scroll-story-inner">
        <div
          ref={blockRef}
          className={`msa-scroll-story-grid${inView ? " is-in-view" : ""}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="msa-scroll-story-left">
            <div className="msa-scroll-story-left-content">
              <div
                className="msa-scroll-story-dots"
                role="tablist"
                aria-label="Highlights"
              >
                {content.tabs.map((tab, index) => (
                  <button
                    key={tab.titleHighlight}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    className={`msa-scroll-story-dot${
                      index === activeIndex ? " is-active" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="sr-only">{tab.titleHighlight}</span>
                  </button>
                ))}
              </div>

              <div className="msa-scroll-story-left-top">
                {content.tabs.map((tab, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={tab.titleHighlight}
                      className={`msa-scroll-story-panel${
                        isActive ? " is-active" : ""
                      }`}
                      role="tabpanel"
                      aria-hidden={!isActive}
                    >
                      <h3 className="msa-scroll-story-panel-title">
                        {tab.titleBefore}
                        <span className="msa-scroll-story-accent">
                          {tab.titleHighlight}
                        </span>
                        {tab.titleAfter}
                      </h3>
                      <div className="msa-scroll-story-line" />
                      <p className="msa-scroll-story-panel-body">{tab.body}</p>
                    </div>
                  );
                })}
              </div>

              <div className="msa-scroll-story-left-bottom">
                <Link
                  href={localeHref(locale, ROUTES.booking)}
                  className="msa-scroll-story-cta"
                >
                  <span className="text-black">{content.cta}</span>
                  <span className="msa-scroll-story-cta-icon text-black" aria-hidden>
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="msa-scroll-story-right">
            {SCROLL_STORY_TAB_MEDIA.map((media, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={`${media.src}-${index}`}
                  className={`msa-scroll-story-media${
                    isActive ? " is-active" : ""
                  }`}
                >
                  <Image
                    src={media.src}
                    alt={content.mediaAlt}
                    fill
                    className="msa-scroll-story-image object-cover"
                    sizes="(max-width: 900px) 100vw, 58vw"
                    priority={index === 0}
                  />
                  <span className="msa-scroll-story-media-dim" aria-hidden />
                </div>
              );
            })}

            <div className="msa-scroll-story-media-overlay">
              <div className="msa-scroll-story-overlay-inner">
                <h2 className="msa-scroll-story-overlay-title">
                  <span className="msa-scroll-story-highlight">
                    {content.intro.highlight}
                  </span>
                  {content.intro.headlineSuffix}
                </h2>
                <p className="msa-scroll-story-overlay-body">
                  {content.intro.body}
                </p>
                <p className="msa-scroll-story-overlay-footnote">
                  <sup>{content.intro.footnote}</sup>
                </p>
              </div>
            </div>

            <span className="msa-scroll-story-badge">{content.mediaBadge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
