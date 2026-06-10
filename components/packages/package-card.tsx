import Link from "next/link";
import {
  AutomaticTransmissionIcon,
  ManualTransmissionIcon,
} from "@/components/icons/transmission-icons";
import { PackageCheckIcon } from "@/components/packages/package-check-icon";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/routing";
import { ROUTES } from "@/lib/constants";

export type PackageItem = {
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  billing: string;
  highlightLessons: string;
  highlightSchedule: string;
  popular?: boolean;
  features: readonly string[];
};

type PackageCardProps = {
  locale: Locale;
  pkg: PackageItem;
  chooseLabel: string;
  benefitsTitle: string;
  lessonsLabel: string;
  scheduleLabel: string;
  popularLabel: string;
  manualLabel: string;
  automaticLabel: string;
};

function parsePrice(price: string): { prefix: string; amount: string } {
  const match = price.match(/^(From|Od)\s+(.+)$/i);
  if (match) return { prefix: match[1], amount: match[2] };
  return { prefix: "", amount: price };
}

export function PackageCard({
  locale,
  pkg,
  chooseLabel,
  benefitsTitle,
  lessonsLabel,
  scheduleLabel,
  popularLabel,
  manualLabel,
  automaticLabel,
}: PackageCardProps) {
  const isPopular = Boolean(pkg.popular);
  const { prefix, amount } = parsePrice(pkg.price);
  const currency = amount.startsWith("£") ? "£" : amount.startsWith("zł") ? "zł" : "";
  const numeric = currency ? amount.slice(currency.length) : amount;

  return (
    <article
      className={`group msa-card-lift msa-package-card relative mx-auto flex h-full w-full max-w-[520px] flex-col rounded-2xl bg-gradient-to-b from-primary/15 to-card shadow-lg shadow-foreground/5 ${
        isPopular
          ? "msa-package-card--featured overflow-hidden ring-2 ring-primary/40 sm:min-h-[620px] sm:overflow-visible lg:min-h-[760px]"
          : "overflow-hidden ring-1 ring-border/60 sm:min-h-[480px]"
      }`}
    >
      {isPopular ? (
        <span
          className="msa-package-corner-badge"
          data-label={popularLabel}
          role="img"
          aria-label={popularLabel}
        />
      ) : null}

      <div
        className={`flex flex-1 flex-col overflow-hidden rounded-2xl ${isPopular ? "gap-4 px-6 pb-6 pt-8 sm:px-7 sm:pb-7 sm:pt-9" : "gap-3 px-6 py-5 sm:px-6 sm:py-5"}`}
      >
        <header className="space-y-2 text-center">
          <h2
            className={`font-bold text-foreground ${isPopular ? "text-xl sm:text-[22px]" : "text-lg sm:text-[19px]"}`}
          >
            {pkg.name}
          </h2>
          <p
            className={`mx-auto max-w-[85%] font-semibold leading-snug text-muted-foreground ${
              isPopular ? "text-sm" : "text-xs sm:text-[13px]"
            }`}
          >
            {pkg.description}
          </p>
        </header>

        <div className="msa-package-stats grid grid-cols-2 gap-2 rounded-[9px] bg-muted p-1">
          <div className="msa-package-stat rounded-[7px] border border-border/40 bg-card px-3 py-2.5 text-center shadow-sm">
            <span className="block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {lessonsLabel}
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-foreground">
              {pkg.highlightLessons}
            </span>
          </div>
          <div className="msa-package-stat rounded-[7px] border border-border/40 bg-card px-3 py-2.5 text-center shadow-sm">
            <span className="block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {scheduleLabel}
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-foreground">
              {pkg.highlightSchedule}
            </span>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-2"
          aria-label={`${manualLabel}, ${automaticLabel}`}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm">
            <ManualTransmissionIcon className="h-3.5 w-3.5 shrink-0 text-primary" />
            {manualLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card px-2.5 py-1 text-[11px] font-semibold text-foreground shadow-sm">
            <AutomaticTransmissionIcon className="h-3.5 w-3.5 shrink-0 text-primary" />
            {automaticLabel}
          </span>
        </div>

        <p className="text-center text-[11px] font-medium text-muted-foreground/90">{pkg.billing}</p>

        <div className={`flex flex-1 flex-col ${isPopular ? "gap-5" : "gap-4"}`}>
          <span className="text-base font-bold text-foreground sm:text-[15px]">
            {benefitsTitle}
          </span>
          <ul className={`flex flex-col ${isPopular ? "gap-3" : "gap-2.5"}`}>
            {pkg.features.map((feature) => (
              <li key={feature} className="msa-package-feature flex items-start justify-start gap-2.5">
                <PackageCheckIcon className="msa-package-feature-icon shrink-0 text-primary" />
                <span className="text-xs font-semibold leading-relaxed text-muted-foreground sm:text-[13px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-auto shrink-0 border-t border-border pt-5">
          <div className="flex flex-col gap-4">
            <div className="min-w-0">
              <p className="flex flex-wrap items-end gap-x-1 gap-y-0 font-black tabular-nums leading-none text-foreground">
                {prefix ? (
                  <span className="pb-1 text-sm font-bold text-muted-foreground">{prefix}</span>
                ) : null}
                <span className={`${isPopular ? "text-4xl" : "text-[32px]"}`}>
                  {currency ? (
                    <sup className="mr-0.5 text-base font-bold">{currency}</sup>
                  ) : null}
                  {numeric}
                </span>
                <span className="pb-1 text-xs font-semibold text-muted-foreground">
                  {pkg.priceUnit}
                </span>
              </p>
            </div>
            <Link
              href={localeHref(locale, ROUTES.booking)}
              className="msa-package-cta inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {chooseLabel}
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
