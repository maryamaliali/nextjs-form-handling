import Link from "next/link";
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
  variant?: "starter" | "testReady" | "intensive";
};

const bannerStyles: Record<NonNullable<PackageCardProps["variant"]>, string> = {
  starter: "from-primary/35 via-primary/55 to-primary/35",
  testReady: "from-primary/45 via-primary/70 to-primary/45",
  intensive: "from-primary/30 via-primary/50 to-primary/30",
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
  variant = "starter",
}: PackageCardProps) {
  const isPopular = Boolean(pkg.popular);
  const { prefix, amount } = parsePrice(pkg.price);
  const currency = amount.startsWith("£") ? "£" : amount.startsWith("zł") ? "zł" : "";
  const numeric = currency ? amount.slice(currency.length) : amount;

  return (
    <article
      className={`group msa-card-lift msa-package-card relative mx-auto flex h-full w-full max-w-[520px] flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-primary/15 to-card shadow-lg shadow-foreground/5 ${
        isPopular
          ? "min-h-[560px] ring-2 ring-primary/40 lg:min-h-[600px]"
          : "min-h-[500px] ring-1 ring-border/60"
      }`}
    >
      <div className="relative shrink-0">
        <div
          className={`msa-package-banner w-full bg-gradient-to-r ${bannerStyles[variant]} bg-[length:200%_100%] ${
            isPopular ? "h-10" : "h-8"
          }`}
          role="presentation"
        />
        {isPopular ? (
          <span className="absolute right-4 top-3 z-20 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-md ring-2 ring-primary-foreground/20">
            {popularLabel}
          </span>
        ) : null}
      </div>

      <div
        className={`flex flex-1 flex-col ${isPopular ? "gap-4 px-6 py-5 sm:px-7 sm:py-6" : "gap-3 px-6 py-4 sm:px-6 sm:py-5"}`}
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

        <div className="grid grid-cols-2 gap-2 rounded-[9px] bg-muted p-1">
          <div className="rounded-[7px] border border-border/40 bg-card px-3 py-2.5 text-center shadow-sm">
            <span className="block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {lessonsLabel}
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-foreground">
              {pkg.highlightLessons}
            </span>
          </div>
          <div className="rounded-[7px] border border-border/40 bg-card px-3 py-2.5 text-center shadow-sm">
            <span className="block text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {scheduleLabel}
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-foreground">
              {pkg.highlightSchedule}
            </span>
          </div>
        </div>
        <p className="text-center text-[11px] font-medium text-muted-foreground/90">{pkg.billing}</p>

        <div className={`flex flex-1 flex-col ${isPopular ? "gap-5" : "gap-4"}`}>
          <span className="text-base font-bold text-foreground sm:text-[15px]">
            {benefitsTitle}
          </span>
          <ul className={`flex flex-col ${isPopular ? "gap-3" : "gap-2.5"}`}>
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-start justify-start gap-2.5">
                <PackageCheckIcon />
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
              href={localeHref(locale, ROUTES.contact)}
              className="msa-package-cta inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {chooseLabel}
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
