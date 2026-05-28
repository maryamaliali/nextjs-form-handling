import { SectionReveal } from "@/components/section-reveal";

export type LearningJourneyStep = {
  number: string;
  title: string;
  body: string;
};

type LearningJourneySectionProps = {
  label: string;
  title: string;
  steps: readonly LearningJourneyStep[];
};

export function LearningJourneySection({ label, title, steps }: LearningJourneySectionProps) {
  return (
    <section
      className="msa-learning-journey relative overflow-hidden"
      aria-labelledby="learning-journey-title"
    >
      <div className="msa-learning-journey-bg" aria-hidden />

      <div className="msa-container relative z-10 py-16 sm:py-20 md:py-24">
        <SectionReveal className="msa-learning-journey-head" variant="fade">
          <p className="msa-section-label text-primary">{label}</p>
          <h2 id="learning-journey-title" className="msa-learning-journey-title">
            {title}
          </h2>
          <span className="msa-learning-journey-head-accent" aria-hidden />
        </SectionReveal>

        <ol className="msa-learning-journey-grid">
          {steps.map((step, index) => (
            <li key={step.number} className="msa-learning-journey-item">
              <SectionReveal variant="up" delay={index * 70} className="h-full">
                <article className="msa-learning-journey-step">
                  <span className="msa-learning-journey-step-num" aria-hidden>
                    {step.number}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="msa-learning-journey-step-title">{step.title}</h3>
                    <p className="msa-learning-journey-step-body">{step.body}</p>
                  </div>
                </article>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
