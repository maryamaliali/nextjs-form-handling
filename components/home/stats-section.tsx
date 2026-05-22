import { SectionReveal } from "@/components/section-reveal";
import { StatsIcon } from "@/components/icons/stats-icon";
import { CountUp } from "@/components/ui/count-up";
import { TOTAL_PASSED_COUNT } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type StatsSectionProps = {
  stats: Dictionary["home"]["stats"];
};

export function StatsSection({ stats }: StatsSectionProps) {
  const { title, subtitle, totalPassed } = stats;

  return (
    <section className="relative mt-6 overflow-hidden border-b border-border bg-muted/15 py-12 sm:py-14 md:py-16">
      <div className="msa-container">
        <SectionReveal className="mx-auto max-w-3xl text-center" variant="fade">
          <h2 className="msa-section-title">
            {title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </SectionReveal>

      <SectionReveal className="relative mx-auto mt-10 max-w-3xl text-center" variant="scale">
        <div className="mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-primary/10 to-transparent shadow-lg ring-1 ring-primary/25 msa-float sm:h-20 sm:w-20">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/30 to-transparent opacity-60 msa-shimmer" />
          <StatsIcon
            name="totalPassed"
            idPrefix="stat-total-passed"
            className="relative h-11 w-11 sm:h-12 sm:w-12"
          />
        </div>

        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          {totalPassed.label}
        </p>

        <div className="relative mx-auto mt-4 inline-flex items-center justify-center">
          <svg
            className="pointer-events-none absolute h-[7.5rem] w-[7.5rem] sm:h-32 sm:w-32 msa-ring-spin"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              stroke="url(#stat-ring-gradient)"
              strokeWidth="2"
              strokeDasharray="8 14"
              strokeLinecap="round"
              opacity="0.45"
            />
            <defs>
              <linearGradient id="stat-ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <CountUp
            target={TOTAL_PASSED_COUNT}
            className="relative block bg-gradient-to-br from-primary via-primary to-[color-mix(in_oklch,var(--primary)_70%,white)] bg-clip-text text-5xl font-bold tabular-nums tracking-tight text-transparent sm:text-6xl md:text-7xl"
          />
        </div>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {totalPassed.description}
        </p>
      </SectionReveal>
      </div>
    </section>
  );
}
