import { SectionReveal } from "@/components/section-reveal";
import { StatsIcon } from "@/components/icons/stats-icon";
import { HOME_STAT_HIGHLIGHTS } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type StatsHighlightsSectionProps = {
  highlights: Dictionary["home"]["stats"]["highlights"];
};

export function StatsHighlightsSection({
  highlights,
}: StatsHighlightsSectionProps) {
  return (
    <section className="border-b border-border bg-background py-12 sm:py-14 md:py-16">
      <div className="msa-container grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {HOME_STAT_HIGHLIGHTS.map((item, index) => {
          const copy = highlights[item.key];

          return (
            <SectionReveal key={item.key} variant="up" delay={index * 100}>
            <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm msa-card-lift sm:p-6">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition-opacity duration-500 group-hover:bg-primary/20"
                aria-hidden
              />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 via-primary/15 to-transparent ring-1 ring-primary/20 msa-float-slow">
                  <StatsIcon
                    name={item.key}
                    idPrefix={`stat-highlight-${item.key}`}
                    className="h-9 w-9"
                  />
                </div>
                <p className="bg-gradient-to-br from-primary to-[color-mix(in_oklch,var(--primary)_65%,white)] bg-clip-text text-3xl font-bold tabular-nums text-transparent sm:text-4xl">
                  {item.value}
                </p>
              </div>

              <h3 className="relative mt-4 text-base font-semibold text-foreground">
                {copy.label}
              </h3>
              <p className="relative mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                {copy.description}
              </p>

              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-[color-mix(in_oklch,var(--primary)_70%,white)] to-primary/40 transition-all duration-500 group-hover:w-full"
                aria-hidden
              />
            </article>
            </SectionReveal>
          );
        })}
      </div>
    </section>
  );
}
