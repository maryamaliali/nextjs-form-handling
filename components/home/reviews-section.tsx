import { SectionReveal } from "@/components/section-reveal";
import { TestimonialSlider } from "@/components/testimonial-slider";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ReviewsSectionProps = {
  home: Dictionary["home"];
  sliderLabels: {
    prev: string;
    next: string;
    dot: string;
    live: string;
  };
};

export function ReviewsSection({ home, sliderLabels }: ReviewsSectionProps) {
  return (
    <section className="border-y border-border bg-muted/15 py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {home.reviewsTitle}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            {home.customersSubtitle}
          </p>
        </SectionReveal>
        <SectionReveal className="mx-auto mt-10 max-w-3xl" variant="scale" delay={100}>
          <TestimonialSlider
            items={home.reviews}
            labels={sliderLabels}
            ariaLabel={home.reviewsTitle}
          />
        </SectionReveal>
      </div>
    </section>
  );
}
