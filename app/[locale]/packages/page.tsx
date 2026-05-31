import type { Metadata } from "next";
import { SectionReveal } from "@/components/section-reveal";
import { FaqSection } from "@/components/faq-section";
import { PackageCard } from "@/components/packages/package-card";
import { LearningJourneySection } from "@/components/packages/learning-journey-section";
import { PackagesComparison } from "@/components/packages/packages-comparison";
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
    path: ROUTES.packages,
    title: dict.packagesPage.title,
    description: dict.packagesPage.subtitle,
  });
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) return null;

  const dict = await getDictionary(locale);
  const page = dict.packagesPage;
  const packages = dict.home.packages;
  return (
    <div className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
      <div className="msa-container py-24 sm:py-16 md:py-20">
        <PageHeader
          title={page.title}
          subtitle={page.subtitle}
          note={packages.disclaimer}
        />

        <div className="mx-auto mt-12 grid max-w-site items-end gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {packages.items.map((pkg, index) => (
            <SectionReveal
              key={pkg.name}
              variant="up"
              delay={index * 90}
              className={`flex h-full ${pkg.popular ? "overflow-visible lg:-mt-6" : ""}`}
            >
              <PackageCard
                locale={locale}
                pkg={pkg}
                popularLabel={packages.popular}
                chooseLabel={packages.choose}
                benefitsTitle={packages.benefitsTitle}
                lessonsLabel={packages.lessonsLabel}
                scheduleLabel={packages.scheduleLabel}
                manualLabel={packages.transmissionManual}
                automaticLabel={packages.transmissionAutomatic}
              />
            </SectionReveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground sm:mt-10">
          {packages.pricingNote}
        </p>

        <PackagesComparison
          title={page.comparison.title}
          subtitle={page.comparison.subtitle}
          columnFeature={page.comparison.columnFeature}
          columns={page.comparison.columns}
          rows={page.comparison.rows}
          includedLabel={page.comparison.included}
          notIncludedLabel={page.comparison.notIncluded}
        />
      </div>

      <LearningJourneySection
        label={page.learningJourney.label}
        title={page.learningJourney.title}
        steps={page.learningJourney.steps}
      />

      <div className="msa-container pb-14 sm:pb-16 md:pb-20 pt-12 sm:pt-14">
        <FaqSection
          title={page.faq.title}
          subtitle={page.faq.subtitle}
          items={page.faq.items}
        />
      </div>
    </div>
  );
}
