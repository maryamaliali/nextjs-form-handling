import { SectionReveal } from "@/components/section-reveal";
import { IntroBackdrop } from "./about-backdrops";

type AboutIntroSectionProps = {
  paragraphs: readonly [string, string];
};

export function AboutIntroSection({ paragraphs }: AboutIntroSectionProps) {
  return (
    <SectionReveal className="mt-10" variant="fade">
      <section className="msa-about-panel msa-about-panel--intro">
        <IntroBackdrop />
        <div className="msa-about-panel__inner msa-about-intro">
          <span className="msa-about-intro__accent" aria-hidden />
          <div className="msa-about-intro__copy">
            <p className="msa-about-intro__lead">{paragraphs[0]}</p>
            <p className="msa-about-intro__body">{paragraphs[1]}</p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
