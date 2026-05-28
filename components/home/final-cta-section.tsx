import Link from 'next/link';
import { SectionReveal } from '@/components/section-reveal';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { localeHref } from '@/lib/i18n/routing';
import { ROUTES } from '@/lib/constants';
import { business } from '@/lib/site';

type FinalCtaSectionProps = {
  locale: Locale;
  copy: Pick<
    Dictionary['home'],
    'finalCtaTitle' | 'finalCtaBody' | 'finalCtaOnline' | 'finalCtaCall'
  >;
};

export function FinalCtaSection({ locale, copy }: FinalCtaSectionProps) {
  return (
    <section className="msa-cta-road bg-primary py-14 text-primary-foreground sm:py-16 md:py-20">
      <div className="msa-container text-center">
        <SectionReveal variant="fade">
          <h2 className="msa-section-title text-primary-foreground">
            {copy.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-4 pb-4 max-w-3xl text-base text-primary-foreground/90 sm:text-lg">
            {copy.finalCtaBody}
          </p>
        </SectionReveal>
        <SectionReveal variant="up" delay={120} className="mt-8">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={localeHref(locale, ROUTES.booking)}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-background/90"
            >
              {copy.finalCtaOnline}
            </Link>
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition hover:bg-primary-foreground/10"
            >
              {copy.finalCtaCall}
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
