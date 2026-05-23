import { SectionReveal } from "@/components/section-reveal";
import { StatsCarousel } from "@/components/home/stats-carousel";
import { StatsSectionBackground } from "@/components/home/stats-section-background";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type StatsSectionProps = {
  stats: Dictionary["home"]["stats"];
  sliderLabels: {
    prev: string;
    next: string;
    dot: string;
    live: string;
  };
};

export function StatsSection({ stats, sliderLabels }: StatsSectionProps) {
  const { title, subtitle } = stats;

  return (
    <section className="relative mt-6 overflow-hidden border-b border-border bg-muted/15 py-12 sm:py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <StatsSectionBackground className="msa-stats-section-bg h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/25 to-background/65" />
      </div>

      <div className="relative z-10 msa-container">
        <SectionReveal className="mx-auto max-w-3xl text-center" variant="fade">
          <h2 className="msa-section-title">{title}</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </SectionReveal>

        <SectionReveal variant="scale">
          <StatsCarousel stats={stats} sliderLabels={sliderLabels} />
        </SectionReveal>
      </div>
    </section>
  );
}
