import { SectionReveal } from "@/components/section-reveal";
import { OwnerHexBackdrop } from "./about-backdrops";

type OwnerProfileSectionProps = {
  heading: string;
  name: string;
  role: string;
  initials: string;
  blurb: string;
};

export function OwnerProfileSection({
  heading,
  name,
  role,
  initials,
  blurb,
}: OwnerProfileSectionProps) {
  return (
    <SectionReveal className="mt-10" variant="scale" delay={80}>
      <section
        className="msa-owner-profile-section"
        aria-labelledby="owner-profile-heading"
      >
        <OwnerHexBackdrop />
        <div className="msa-owner-profile-inner">
          <h2
            id="owner-profile-heading"
            className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"
          >
            {heading}
          </h2>
          <article className="msa-owner-magic-card">
            <div className="msa-owner-magic-card__img" aria-hidden>
              <span className="msa-owner-magic-card__initials">
                {initials.slice(0, 3)}
              </span>
            </div>
            <div className="msa-owner-magic-card__info">
              <p className="msa-owner-magic-card__body">{blurb}</p>
              <div className="msa-owner-magic-card__meta">
                <p className="msa-owner-magic-card__title">{name}</p>
                <p className="msa-owner-magic-card__role">{role}</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </SectionReveal>
  );
}
