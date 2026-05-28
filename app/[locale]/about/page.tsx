import type { Metadata } from "next";
import { AboutIntroSection } from "@/components/about/about-intro-section";
import { AboutMilestonesSection } from "@/components/about/about-milestones-section";
import { AboutSuccessSection } from "@/components/about/about-success-section";
import { AboutValuesSection } from "@/components/about/about-values-section";
import { OwnerProfileSection } from "@/components/about/owner-profile-section";
import { FaqSection } from "@/components/faq-section";
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
  const story = home.successStory;
  const achievements = home.achievements;

  return (
    <div className="border-b border-border bg-gradient-to-b from-muted/20 to-background">
      <div className="msa-container py-24 sm:py-16 md:py-20">
        <PageHeader title={page.title} subtitle={page.subtitle} className="md:max-w-4xl" />

        <OwnerProfileSection
          heading={page.ownerHeading}
          name={page.instructor.name}
          role={page.instructor.role}
          initials={page.instructor.initials}
          blurb={page.instructor.blurb}
        />

        <AboutIntroSection paragraphs={[page.p1, page.p2]} />

        <AboutSuccessSection
          label={page.successHeading}
          badge={story.badge}
          name={story.name}
          tagline={story.tagline}
          initials={story.initials}
          body={story.body}
          statLabel={story.statLabel}
          statValue={story.statValue}
          highlight={story.highlight}
        />

        <AboutMilestonesSection
          label={page.achievementsHeading}
          title={achievements.title}
          subtitle={achievements.subtitle}
          items={achievements.items}
        />

        <AboutValuesSection
          beliefsTitle={page.listTitle}
          beliefs={page.beliefs}
          whyTitle={home.whyTitle}
          whyIntro={home.whyIntro}
          whyPoints={home.whyPoints}
        />

        <FaqSection
          title={page.faq.title}
          subtitle={page.faq.subtitle}
          items={page.faq.items}
        />
      </div>
    </div>
  );
}
