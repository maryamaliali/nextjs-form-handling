import { SectionReveal } from "@/components/section-reveal";
import { MilestonesBackdrop } from "./about-backdrops";

export type MilestoneItem = { title: string; body: string };

type AboutMilestonesSectionProps = {
  label: string;
  title: string;
  subtitle: string;
  items: readonly MilestoneItem[];
};

function extractStat(title: string, index: number): string {
  const match = title.match(/^(\d+[%★]?|\d+\+)/);
  if (match) return match[1];
  return String(index + 1).padStart(2, "0");
}

export function AboutMilestonesSection({
  label,
  title,
  subtitle,
  items,
}: AboutMilestonesSectionProps) {
  return (
    <SectionReveal className="mt-14" variant="fade">
      <section
        className="msa-about-panel msa-about-panel--milestones"
        aria-labelledby="about-milestones-title"
      >
        <MilestonesBackdrop />
        <div className="msa-about-panel__inner">
          <header className="msa-about-section-head">
            <p className="msa-section-label">{label}</p>
            <h2 id="about-milestones-title" className="msa-about-section-title">
              {title}
            </h2>
            <p className="msa-about-section-subtitle">{subtitle}</p>
            <span className="msa-about-section-accent" aria-hidden />
          </header>

          <ul className="msa-about-milestones-grid">
            {items.map((item, index) => (
              <li key={item.title} className="msa-about-milestones-item">
                <SectionReveal variant="up" delay={index * 70} className="h-full">
                  <article className="msa-about-milestone-card">
                    <span className="msa-about-milestone-stat" aria-hidden>
                      {extractStat(item.title, index)}
                    </span>
                    <div className="min-w-0">
                      <h3 className="msa-about-milestone-title">{item.title}</h3>
                      <p className="msa-about-milestone-body">{item.body}</p>
                    </div>
                  </article>
                </SectionReveal>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SectionReveal>
  );
}
