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
      <div className="msa-container">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="msa-section-title">{home.reviewsTitle}</h2>
          <p className="mt-2 text-base font-extralight text-muted-foreground sm:text-lg">
            {home.customersSubtitle}
          </p>
        </SectionReveal>
        <SectionReveal
          className="mx-auto mt-10 max-w-2xl"
          variant="scale"
          delay={100}
        >
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
