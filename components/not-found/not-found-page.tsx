import { SectionReveal } from "@/components/section-reveal";
import { NotFoundActions } from "@/components/not-found/not-found-actions";
import { ROUTES } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/routing";

type NotFoundPageProps = {
  locale: Locale;
  labels: Dictionary["notFoundPage"];
};

export function NotFoundPage({ locale, labels }: NotFoundPageProps) {
  const digits = labels.code.split("");

  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/10 via-background to-background">
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/15 blur-3xl msa-orb-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl msa-orb-drift-reverse"
        aria-hidden
      />

      <div className="msa-hero-top-spacing relative mx-auto flex min-h-[min(72vh,680px)] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
        <SectionReveal eager variant="scale" delay={0}>
          <div className="relative inline-block">
            <span
              className="msa-404-pulse-ring pointer-events-none absolute -inset-6 rounded-full border-2 border-primary/25 sm:-inset-8"
              aria-hidden
            />
            <p
              className="inline-flex items-baseline gap-0.5 text-[clamp(4.5rem,20vw,7.5rem)] font-black leading-none tracking-tighter sm:gap-1"
              aria-label={labels.code}
            >
              {digits.map((digit, index) => (
                <span
                  key={`${digit}-${index}`}
                  className={`msa-404-digit inline-block ${
                    index === 1
                      ? "msa-404-digit-delay-1"
                      : index === 2
                        ? "msa-404-digit-delay-2"
                        : ""
                  }`}
                >
                  <span className="msa-404-shimmer-text">{digit}</span>
                </span>
              ))}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal eager variant="up" delay={120}>
          <h1 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {labels.title}
          </h1>
        </SectionReveal>

        <SectionReveal eager variant="fade" delay={200}>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {labels.subtitle}
          </p>
        </SectionReveal>

        <NotFoundActions
          backLabel={labels.back}
          homeHref={localeHref(locale, ROUTES.home)}
          homeLabel={labels.home}
        />
      </div>
    </section>
  );
}
