"use client";

import { useState } from "react";
import { SectionReveal } from "@/components/section-reveal";

export type FaqItem = { question: string; answer: string };

export function FaqSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle?: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border/60 pt-12 md:pt-14">
      <SectionReveal className="mx-auto max-w-2xl text-center" variant="fade">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        ) : null}
      </SectionReveal>
      <ul className="mx-auto mt-8 max-w-2xl divide-y divide-border/80 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.question}>
            <SectionReveal variant="up" delay={i * 60}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-sm font-medium text-foreground sm:text-base">
                  {item.question}
                </span>
                <span
                  className={`mt-0.5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen ? (
                <p className="msa-faq-answer border-t border-border/50 px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5 sm:pb-5">
                  {item.answer}
                </p>
              ) : null}
            </SectionReveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
