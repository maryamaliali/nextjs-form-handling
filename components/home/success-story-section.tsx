import Link from "next/link";
import { SectionReveal } from "@/components/section-reveal";
import { Avatar } from "@/components/ui/avatar";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/routing";

type SuccessStorySectionProps = {
  locale: Locale;
  story: Dictionary["home"]["successStory"];
  aboutLabel: string;
};

export function SuccessStorySection({
  locale,
  story,
  aboutLabel,
}: SuccessStorySectionProps) {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="msa-container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <SectionReveal variant="fade">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {story.badge}
            </p>
            <h2 className="mt-2 msa-section-title">
              {story.title}
            </h2>
            <p className="mt-3 text-sm font-medium text-muted-foreground">
              {story.name} · {story.tagline}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {story.body}
            </p>
            <Link
              href={localeHref(locale, ROUTES.about)}
              className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              {aboutLabel}
            </Link>
          </SectionReveal>

          <SectionReveal variant="up" delay={100}>
            <div className="rounded-2xl border border-l-[3px] border-border border-l-primary bg-card/80 p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <Avatar initials={story.initials} size="lg" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {story.statLabel}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                    {story.statValue}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {story.highlight}
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
