import Link from "next/link";
import {
  FooterEmailIcon,
  FooterLinkIcon,
  FooterLocationIcon,
  FooterPhoneIcon,
  FooterShieldIcon,
  FooterWhatsAppIcon,
} from "@/components/icons/footer-icons";
import { BrandMark } from "@/components/brand-mark";
import { CopyButton } from "@/components/copy-button";
import { SectionReveal } from "@/components/section-reveal";
import { SocialLinks } from "@/components/social-links";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/constants";
import { footerSocialHint } from "@/lib/i18n/ui-labels";
import { buildNavLinks, localeHref } from "@/lib/i18n/routing";
import { business, hasConfiguredSocialLinks, whatsappHref } from "@/lib/site";
import { HeroBookIcon } from "../icons/hero-icons";

type SiteFooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteFooter({ locale, dict }: SiteFooterProps) {
  const links = buildNavLinks(locale, dict);
  const year = new Date().getFullYear();

  const contactItems = [
    {
      href: `tel:${business.phoneTel}`,
      label: business.phoneDisplay,
      icon: FooterPhoneIcon,
      external: false,
      copyValue: undefined,
    },
    {
      href: `mailto:${business.email}`,
      label: business.email,
      icon: FooterEmailIcon,
      external: false,
      copyValue: business.email,
    },
    {
      href: whatsappHref(),
      label: "WhatsApp",
      icon: FooterWhatsAppIcon,
      external: true,
      copyValue: undefined,
    },
    {
      href: undefined,
      label: `${business.addressLocality}, UK`,
      icon: FooterLocationIcon,
      external: false,
      copyValue: undefined,
    },
  ] as const;

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border bg-gradient-to-b from-muted/40 via-muted/20 to-background">
      <div
        className="pointer-events-none absolute -left-20 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl msa-orb-drift"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-primary/8 blur-3xl msa-orb-drift-reverse"
        aria-hidden
      />

      <div className="relative msa-container py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <SectionReveal
            className="lg:col-span-4"
            variant="left"
            delay={0}
          >
            <div className="flex gap-4">
              <BrandMark sizePx={56} className="msa-float-slow" />
              <div className="min-w-0">
                <p className="text-base font-semibold text-foreground">
                  {dict.brand}
                </p>
                <p className="text-sm text-primary">{dict.city}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {dict.footer.tagline}
                </p>
                <Link
                  href={localeHref(locale, ROUTES.contact)}
                  className="group mt-4 inline-flex min-h-10 items-center  gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                > 
                  <HeroBookIcon className="h-5 w-5" />

                  {dict.nav.book}
                </Link>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal
            className="lg:col-span-2 lg:col-start-6"
            variant="up"
            delay={80}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="h-1 w-6 rounded-full bg-primary" aria-hidden />
              {dict.footer.quickLinks}
            </p>
            <ul className="mt-4 space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-muted-foreground transition hover:bg-primary/5 hover:text-foreground"
                  >
                    <FooterLinkIcon />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SectionReveal>

          <SectionReveal
            className="lg:col-span-3"
            variant="up"
            delay={160}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="h-1 w-6 rounded-full bg-primary" aria-hidden />
              {dict.footer.contact}
            </p>
            <ul className="mt-4 space-y-1">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-card text-primary ring-1 ring-border/80 transition group-hover:bg-primary/10 group-hover:ring-primary/30">
                      <Icon />
                    </span>
                    <span className="min-w-0 break-all pt-1.5">{item.label}</span>
                  </>
                );
                const row = item.href ? (
                  <a
                    href={item.href}
                    className="group flex flex-1 gap-3 rounded-lg px-1 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
                    {...(item.external
                      ? { rel: "noopener noreferrer", target: "_blank" }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group flex flex-1 gap-3 rounded-lg px-1 py-1.5 text-sm text-muted-foreground">
                    {inner}
                  </div>
                );
                return (
                  <li key={item.label} className="flex items-start gap-1">
                    {row}
                    {item.copyValue ? (
                      <CopyButton
                        value={item.copyValue}
                        label={dict.footer.copyEmail}
                        successLabel={dict.footer.copyEmailSuccess}
                        errorLabel={dict.footer.copyEmailError}
                        className="mt-1.5"
                      />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </SectionReveal>

          <SectionReveal
            className="lg:col-span-3"
            variant="right"
            delay={240}
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="h-1 w-6 rounded-full bg-primary" aria-hidden />
              {dict.footer.socialTitle}
            </p>
            {!hasConfiguredSocialLinks() ? (
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {footerSocialHint(locale)}
              </p>
            ) : null}
            <SocialLinks className="mt-4 [&_a]:transition [&_a]:hover:scale-105 [&_a]:hover:border-primary/50 [&_a]:hover:shadow-md" />
          </SectionReveal>
        </div>
      </div>

      <SectionReveal variant="fade" delay={320}>
        <div className="relative border-t border-border/80 bg-card/30 px-4 py-6 backdrop-blur-sm sm:px-6">
          <div className="mx-auto flex max-w-site flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:gap-4">
            <p>
              © {year} {dict.meta.siteName}. {dict.footer.rights}
            </p>
            <p className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/30 px-3 py-1 text-[11px] font-medium text-foreground sm:text-xs">
              <FooterShieldIcon className="h-3.5 w-3.5 text-primary" />
              {dict.footer.dvsa}
            </p>
          </div>
        </div>
      </SectionReveal>
    </footer>
  );
}
