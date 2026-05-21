import { SectionReveal } from "@/components/section-reveal";
import { CheckList } from "@/components/ui/check-list";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type WhyUsSectionProps = {
  title: string;
  intro: string;
  points: readonly string[];
};

export function WhyUsSection({ title, intro, points }: WhyUsSectionProps) {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
        <SectionReveal variant="fade">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {intro}
          </p>
        </SectionReveal>
        <SectionReveal variant="up" delay={120} className="mt-8 lg:mt-0">
          <div className="rounded-2xl border border-border/80 bg-card/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <CheckList items={points} />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
