import { SectionReveal } from "@/components/section-reveal";
import { Avatar } from "@/components/ui/avatar";
import { SuccessStoryBackdrop } from "./about-backdrops";

type AboutSuccessSectionProps = {
  label: string;
  badge: string;
  name: string;
  tagline: string;
  initials: string;
  body: string;
  statLabel: string;
  statValue: string;
  highlight: string;
};

export function AboutSuccessSection({
  label,
  badge,
  name,
  tagline,
  initials,
  body,
  statLabel,
  statValue,
  highlight,
}: AboutSuccessSectionProps) {
  return (
    <SectionReveal className="mt-14" variant="up">
      <section
        className="msa-about-panel msa-about-panel--success"
        aria-labelledby="about-success-title"
      >
        <SuccessStoryBackdrop />
        <div className="msa-about-panel__inner">
          <header className="msa-about-section-head msa-about-section-head--compact">
            <p className="msa-section-label">{label}</p>
            <h2 id="about-success-title" className="sr-only">
              {label}
            </h2>
          </header>

          <article className="msa-about-success-card">
            <div className="msa-about-success-card__top">
              <Avatar initials={initials} size="lg" className="ring-2 ring-primary/20" />
              <div className="min-w-0">
                <p className="msa-about-success-badge">{badge}</p>
                <p className="msa-about-success-name">
                  {name}
                  <span className="text-muted-foreground"> · </span>
                  <span className="font-normal text-muted-foreground">{tagline}</span>
                </p>
              </div>
            </div>
            <blockquote className="msa-about-success-quote">{body}</blockquote>
            <dl className="msa-about-success-stat">
              <dt>{statLabel}</dt>
              <dd>{statValue}</dd>
            </dl>
            <p className="msa-about-success-highlight">{highlight}</p>
          </article>
        </div>
      </section>
    </SectionReveal>
  );
}
