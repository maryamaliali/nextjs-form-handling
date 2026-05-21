import type { Metadata } from "next";
import { ExploreSection } from "@/components/home/explore-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { ReviewsSection } from "@/components/home/reviews-section";
import { ServicesPreviewSection } from "@/components/home/services-preview-section";
import { StatsHighlightsSection } from "@/components/home/stats-highlights-section";
import { StatsSection } from "@/components/home/stats-section";
import { SuccessStorySection } from "@/components/home/success-story-section";
import { WhyUsSection } from "@/components/home/why-us-section";
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
    path: ROUTES.home,
    title: dict.meta.siteName,
    description: dict.meta.defaultDescription,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) return null;

  const dict = await getDictionary(locale);
  const home = dict.home;

  const sliderLabels = {
    prev: home.sliderPrev,
    next: home.sliderNext,
    dot: home.sliderDotLabel,
    live: home.sliderLive,
  };

  return (
    <div>
      <HeroSection locale={locale} dict={dict} />
      <StatsSection stats={home.stats} />
      <StatsHighlightsSection highlights={home.stats.highlights} />
      <ServicesPreviewSection
        locale={locale}
        title={home.offerTitle}
        services={home.services}
        learnMore={dict.common.learnMore}
      />
      <WhyUsSection
        title={home.whyTitle}
        intro={home.whyIntro}
        points={home.whyPoints}
      />
      <SuccessStorySection
        locale={locale}
        story={home.successStory}
        aboutLabel={dict.common.readAbout}
      />
      <ExploreSection locale={locale} explore={home.explore} />
      <ReviewsSection home={home} sliderLabels={sliderLabels} />
      <FinalCtaSection locale={locale} copy={home} />
    </div>
  );
}
