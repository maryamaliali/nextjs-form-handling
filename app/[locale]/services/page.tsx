import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionReveal } from '@/components/section-reveal';
import { FaqSection } from '@/components/faq-section';
import { ServicesExplorer } from '@/components/services/services-explorer';
import { CheckList } from '@/components/ui/check-list';
import { PageHeader } from '@/components/ui/page-header';
import { ROUTES, SERVICE_SLUG_ORDER } from '@/lib/constants';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { localeHref } from '@/lib/i18n/routing';
import { buildPageMetadata, resolveLocale } from '@/lib/seo/page-metadata';

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
    path: ROUTES.services,
    title: dict.servicesPage.title,
    description: dict.servicesPage.subtitle,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) return null;

  const dict = await getDictionary(locale);
  const page = dict.servicesPage;

  const services = SERVICE_SLUG_ORDER.map((slug) => ({
    slug,
    ...dict.home.services[slug],
  }));

  return (
    <>
        <div className="msa-container py-24 pb-12 sm:py-16 sm:pb-14 md:py-20 md:pb-16">
          <PageHeader
            title={page.title}
            subtitle={page.subtitle}
            className="md:max-w-4xl"
          />
        </div>

      <ServicesExplorer
        items={services}
        bookLabel={dict.nav.book}
        bookHref={localeHref(locale, ROUTES.booking)}
        listLabel={page.listLabel}
        prevLabel={page.prevService}
        nextLabel={page.nextService}
      />

      <div className="msa-container border-b border-border py-14 sm:py-16 md:py-20">
        <SectionReveal
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-dashed border-primary/35 bg-primary/5 px-5 py-6 text-center sm:mt-14 sm:px-8"
          variant="fade"
        >
          <p className="text-base font-medium text-foreground">
            {page.packagesBanner}
          </p>
          <Link
            href={localeHref(locale, ROUTES.packages)}
            className="mt-3 inline-flex text-base font-semibold text-primary underline-offset-4 hover:underline"
          >
            {page.packagesLink}
          </Link>
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/80 bg-muted/20 px-5 py-6 sm:px-8"
          variant="up"
        >
          <h2 className="text-center text-base font-semibold text-foreground">
            {page.includedTitle}
          </h2>
          <CheckList
            items={page.included}
            className="mt-4 space-y-2.5 text-base text-muted-foreground"
            itemClassName="flex justify-center gap-2 sm:justify-start"
          />
        </SectionReveal>

        <FaqSection
          title={page.faq.title}
          subtitle={page.faq.subtitle}
          items={page.faq.items}
        />
      </div>
    </>
  );
}
