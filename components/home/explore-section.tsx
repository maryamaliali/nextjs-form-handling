import Link from "next/link";
import { ExploreIcon, type ExploreIconName } from "@/components/icons/explore-icon";
import { SectionReveal } from "@/components/section-reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { localeBasePath } from "@/lib/i18n/routing";

type ExploreSectionProps = {
  locale: Locale;
  explore: Dictionary["home"]["explore"];
};

export function ExploreSection({ locale, explore }: ExploreSectionProps) {
  const base = localeBasePath(locale);

  return (
    <section className="py-14 md:py-20">
      <div className="msa-container">
        <SectionReveal className="mx-auto max-w-2xl text-center md:max-w-3xl">
          <h2 className="msa-section-title">
            {explore.title}
          </h2>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            {explore.subtitle}
          </p>
        </SectionReveal>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {explore.cards.map((card, index) => (
            <li key={card.path}>
              <SectionReveal variant="up" delay={index * 90}>
              <Link
                href={`${base}${card.path}`}
                className="group msa-card-lift flex h-full gap-4 rounded-2xl border border-border bg-card p-4 transition hover:border-primary/40 hover:shadow-sm sm:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ExploreIcon name={card.icon as ExploreIconName} />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block font-semibold text-foreground group-hover:text-primary">
                    {card.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {card.description}
                  </span>
                </span>
              </Link>
              </SectionReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
