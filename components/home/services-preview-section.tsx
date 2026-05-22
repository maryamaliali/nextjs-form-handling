import Link from "next/link";
import { ServiceIcon } from "@/components/icons/service-icon";
import { SectionReveal } from "@/components/section-reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { SERVICE_SLUG_ORDER, ROUTES } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/routing";

type ServicesPreviewSectionProps = {
  locale: Locale;
  title: string;
  services: Dictionary["home"]["services"];
  learnMore: string;
};

export function ServicesPreviewSection({
  locale,
  title,
  services,
  learnMore,
}: ServicesPreviewSectionProps) {
  const cards = SERVICE_SLUG_ORDER.map((slug) => ({
    slug,
    ...services[slug],
  }));

  return (
    <section className="border-y border-border bg-muted/10 py-14 sm:py-16 md:py-20">
      <div className="msa-container">
        <SectionReveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="msa-section-title">
              {title}
            </h2>
          </div>
          <Link
            href={localeHref(locale, ROUTES.services)}
            className="inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {learnMore}
          </Link>
        </SectionReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <SectionReveal key={card.slug} variant="up" delay={index * 70}>
              <article className="msa-card-lift flex h-full flex-col rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <ServiceIcon slug={card.slug} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
