import Link from 'next/link';
import { Parallax } from '@/components/parallax';
import { SectionReveal } from '@/components/section-reveal';
import {
  HeroBackgroundPattern,
  HeroBookIcon,
  HeroDiagonalLine,
  HeroGearIcon,
  HeroMapIcon,
  HeroShieldIcon,
  HeroSteeringIcon,
  HeroWhatsAppIcon,
} from '@/components/icons/hero-icons';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import { localeHref } from '@/lib/i18n/routing';
import { HeroFeatureCarousel } from '@/components/home/hero-feature-carousel';
import { HeroVideo } from '@/components/home/hero-video';
import { ROUTES } from '@/lib/constants';
import { whatsappHref } from '@/lib/site';

type HeroSectionProps = {
  locale: Locale;
  dict: Dictionary;
};

const heroPills = [
  { icon: HeroShieldIcon, labelKey: 'dvsa' as const },
  { icon: HeroGearIcon, labelKey: 'manualAuto' as const },
  { icon: HeroMapIcon, labelKey: 'allAreas' as const },
];

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const h = dict.home;

  return (
    <section className="msa-hero-parallax relative min-h-[min(92vh,920px)] border-b border-border">
      {/* Looping background video */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/45 to-background/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/20 to-background/40" />
        <Parallax
          aria-hidden
          className="absolute inset-0 h-full w-full"
          strength={-60}
        >
          <HeroBackgroundPattern className="absolute inset-0 h-full w-full text-primary" />
        </Parallax>
        <Parallax
          aria-hidden
          className="absolute inset-0 h-full w-full"
          strength={40}
        >
          <HeroDiagonalLine className="absolute inset-0 h-full w-full" />
        </Parallax>
        <Parallax
          aria-hidden
          className="absolute -right-24 -top-24 h-96 w-96"
          strength={-80}
        >
          <div className="msa-hero-orb h-full w-full rounded-full bg-primary/20 blur-3xl md:right-0" />
        </Parallax>
        <Parallax
          aria-hidden
          className="absolute -bottom-32 -left-24 h-80 w-80"
          strength={80}
        >
          <div className="msa-hero-orb msa-hero-orb--alt h-full w-full rounded-full bg-primary/10 blur-3xl" />
        </Parallax>
      </div>

      <div className="msa-container relative z-10 flex min-h-[min(92vh,920px)] flex-col justify-center py-28 sm:py-32 md:py-36 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionReveal eager variant="fade" delay={0}>
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm sm:text-sm">
                <HeroSteeringIcon className="h-5 w-5 shrink-0" />
                {h.badge}
              </p>
            </SectionReveal>

            <SectionReveal eager variant="up" delay={80}>
              <h1 className="msa-hero-title mt-6 max-w-4xl text-5xl font-normal text-foreground sm:text-6xl lg:text-7xl">
                {h.titleLine1}
                <span className="mt-1 block text-primary">{h.titleLine2}</span>
              </h1>
            </SectionReveal>

            <SectionReveal eager variant="up" delay={160}>
              <p className="mt-6 max-w-2xl text-base font-extralight leading-relaxed text-muted-foreground sm:text-lg lg:max-w-3xl">
                {h.intro}
              </p>
            </SectionReveal>

            <SectionReveal eager variant="up" delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={localeHref(locale, ROUTES.booking)}
                  className="inline-flex min-h-12 justify-center gap-2 rounded-full items-start bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 sm:text-base"
                >
                  <HeroBookIcon className="h-5 w-5" />
                  {h.ctaBook}
                </Link>
                <a
                  href={whatsappHref()}
                  className="inline-flex min-h-12 justify-center gap-2 rounded-full border border-border/80 items-start bg-card/90 px-8 py-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition hover:bg-muted/60 sm:text-base"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <HeroWhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                  {h.ctaWhatsApp}
                </a>
              </div>
            </SectionReveal>

            <SectionReveal eager variant="fade" delay={320}>
              <ul className="mt-12 flex flex-wrap gap-3 text-sm sm:gap-4">
                {heroPills.map(({ icon: Icon, labelKey }) => (
                  <li
                    key={labelKey}
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/85 px-5 py-2.5 text-muted-foreground shadow-sm backdrop-blur-sm"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-primary" />
                    {labelKey === 'dvsa'
                      ? dict.footer.dvsa
                      : dict.common[labelKey]}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>

          <SectionReveal
            eager
            variant="scale"
            delay={120}
            className="relative hidden min-w-0 overflow-visible pr-2 lg:col-span-5 lg:block"
          >
            <HeroFeatureCarousel labels={h.heroCards} />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
