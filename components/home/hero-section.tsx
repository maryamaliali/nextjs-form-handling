import Link from "next/link";
import { SectionReveal } from "@/components/section-reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/routing";
import { ROUTES } from "@/lib/constants";
import { whatsappHref } from "@/lib/site";

type HeroSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const h = dict.home;

  return (
    <section className=" relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl sm:-right-16 sm:h-96 sm:w-96 md:right-0 md:top-0" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-24 md:py-26 lg:py-30">
        <SectionReveal eager variant="fade" delay={0}>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {h.badge}
          </p>
        </SectionReveal>
        <SectionReveal eager variant="up" delay={80}>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {h.titleLine1}
            <span className="block text-primary">{h.titleLine2}</span>
          </h1>
        </SectionReveal>
        <SectionReveal eager variant="up" delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {h.intro}
          </p>
        </SectionReveal>
        <SectionReveal eager variant="up" delay={240}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={localeHref(locale, ROUTES.contact)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            {h.ctaBook}
          </Link>
          <a
            href={whatsappHref()}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-muted/60"
            rel="noopener noreferrer"
            target="_blank"
          >
            {h.ctaWhatsApp}
          </a>
        </div>
        </SectionReveal>
        <SectionReveal eager variant="fade" delay={320}>
        <ul className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground sm:gap-4">
          <li className="rounded-full border border-border bg-card px-4 py-2">
            {dict.footer.dvsa}
          </li>
          <li className="rounded-full border border-border bg-card px-4 py-2">
            {dict.common.manualAuto}
          </li>
          <li className="rounded-full border border-border bg-card px-4 py-2">
            {dict.common.allAreas}
          </li>
        </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
