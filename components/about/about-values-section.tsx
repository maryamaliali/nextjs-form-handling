import { SectionReveal } from "@/components/section-reveal";
import { ValuesBackdrop } from "./about-backdrops";

type AboutValuesSectionProps = {
  beliefsTitle: string;
  beliefs: readonly string[];
  whyTitle: string;
  whyIntro: string;
  whyPoints: readonly string[];
};

function CheckIcon() {
  return (
    <svg
      className="msa-about-values-check"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.35" />
      <path
        d="M6 10.2 8.4 12.6 14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AboutValuesSection({
  beliefsTitle,
  beliefs,
  whyTitle,
  whyIntro,
  whyPoints,
}: AboutValuesSectionProps) {
  return (
    <SectionReveal className="mt-14" variant="up">
      <section className="msa-about-panel msa-about-panel--values">
        <ValuesBackdrop />
        <div className="msa-about-panel__inner msa-about-values-layout">
          <div className="msa-about-values-block">
            <header className="msa-about-section-head msa-about-section-head--compact">
              <h2 className="msa-about-section-title msa-about-section-title--sm">
                {beliefsTitle}
              </h2>
              <span className="msa-about-section-accent" aria-hidden />
            </header>
            <ul className="msa-about-beliefs-grid">
              {beliefs.map((item, index) => (
                <li key={item}>
                  <SectionReveal variant="up" delay={index * 60}>
                    <article className="msa-about-belief-card">
                      <CheckIcon />
                      <p>{item}</p>
                    </article>
                  </SectionReveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="msa-about-values-block msa-about-values-block--why">
            <header className="msa-about-section-head msa-about-section-head--compact">
              <h2 className="msa-about-section-title msa-about-section-title--sm">
                {whyTitle}
              </h2>
              <span className="msa-about-section-accent" aria-hidden />
            </header>
            <p className="msa-about-why-intro">{whyIntro}</p>
            <ul className="msa-about-why-list">
              {whyPoints.map((point, index) => (
                <li key={point}>
                  <SectionReveal variant="fade" delay={index * 50}>
                    <span className="msa-about-why-item">
                      <CheckIcon />
                      {point}
                    </span>
                  </SectionReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
