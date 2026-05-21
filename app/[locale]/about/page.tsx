import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { SectionReveal } from "@/components/section-reveal";
import { CheckList } from "@/components/ui/check-list";
import { Avatar } from "@/components/ui/avatar";
import { PageHeader } from "@/components/ui/page-header";
import { ROUTES } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata, resolveLocale } from "@/lib/seo/page-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = await resolveLocale(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);

  return buildPageMetadata({
    localeParam: raw,
    path: ROUTES.about,
    title: dict.aboutPage.title,
    description: dict.aboutPage.subtitle,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) return null;

  const dict = await getDictionary(locale);
  const page = dict.aboutPage;
  const home = dict.home;

  return (
    <div className="border-b border-border bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
        <PageHeader title={page.title} subtitle={page.subtitle} className="md:max-w-3xl" />

        <SectionReveal className="mt-10" variant="scale" delay={80}>
          <div className="flex gap-4 rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm backdrop-blur-sm msa-card-lift sm:p-6">
            <Avatar
              initials={page.instructor.initials}
              size="lg"
              className="ring-background"
            />
            <div className="min-w-0">
              <p className="font-semibold text-foreground">
                {page.instructor.name}
              </p>
              <p className="text-sm text-primary">{page.instructor.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {page.instructor.blurb}
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-10 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base" variant="fade">
          <p>{page.p1}</p>
          <p>{page.p2}</p>
        </SectionReveal>

        <SectionReveal className="mt-14" variant="up">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {page.successHeading}
          </h2>
          <div className="mt-4 rounded-2xl border border-l-[3px] border-border border-l-primary bg-card/90 p-5 shadow-sm msa-card-lift sm:p-6">
            <div className="flex gap-4">
              <Avatar initials={home.successStory.initials} size="md" />
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {home.successStory.badge}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {home.successStory.name} · {home.successStory.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {home.successStory.body}
                </p>
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-border/60 pt-4 text-sm">
                  <div>
                    <dt className="text-xs text-muted-foreground">
                      {home.successStory.statLabel}
                    </dt>
                    <dd className="font-semibold text-primary">
                      {home.successStory.statValue}
                    </dd>
                  </div>
                </dl>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {home.successStory.highlight}
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-14" variant="fade">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {page.achievementsHeading}
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {home.achievements.items.map((item, index) => (
              <li key={item.title}>
                <SectionReveal variant="up" delay={index * 70}>
                  <div className="rounded-2xl border border-border/70 bg-card/60 px-4 py-4 text-sm backdrop-blur-sm msa-card-lift">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.body}
                    </p>
                  </div>
                </SectionReveal>
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal className="mt-14" variant="up">
          <h2 className="text-lg font-semibold text-foreground">
            {page.listTitle}
          </h2>
          <CheckList items={page.beliefs} className="mt-4" />
        </SectionReveal>

        <SectionReveal className="mt-14" variant="up" delay={60}>
          <h2 className="text-lg font-semibold text-foreground">
            {home.whyTitle}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {home.whyIntro}
          </p>
          <CheckList
            items={home.whyPoints}
            className="mt-4 space-y-2.5"
            iconClassName="mt-0.5 h-4 w-4 shrink-0 text-primary/80"
          />
        </SectionReveal>

        <FaqSection
          title={page.faq.title}
          subtitle={page.faq.subtitle}
          items={page.faq.items}
        />
      </div>
    </div>
  );
}
