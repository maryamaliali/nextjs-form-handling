import Link from "next/link";
import { SectionReveal } from "@/components/section-reveal";
import { PackageCard } from "@/components/packages/package-card";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/routing";

type PackagesPreviewSectionProps = {
  locale: Locale;
  packages: Dictionary["home"]["packages"];
  learnMore: string;
};

export function PackagesPreviewSection({
  locale,
  packages,
  learnMore,
}: PackagesPreviewSectionProps) {
  return (
    <section className="border-y border-border bg-gradient-to-b from-muted/20 to-background py-14 sm:py-16 md:py-20">
      <div className="msa-container">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="msa-section-title">
            {packages.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {packages.subtitle}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">{packages.disclaimer}</p>
        </SectionReveal>

        <div className="mx-auto mt-10 grid min-w-0 max-w-site items-end gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {packages.items.map((pkg, index) => (
            <SectionReveal
              key={pkg.name}
              variant="up"
              delay={index * 90}
              className={`flex h-full min-w-0 ${pkg.popular ? "overflow-hidden sm:overflow-visible lg:-mt-6" : ""}`}
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

        <SectionReveal className="mt-10 text-center" variant="fade">
          <Link
            href={localeHref(locale, ROUTES.packages)}
            className="inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {learnMore}
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
