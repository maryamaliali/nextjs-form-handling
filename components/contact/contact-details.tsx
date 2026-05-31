import { OpeningHours, type OpeningHoursRow } from "@/components/contact/opening-hours";
import { business, whatsappHref } from "@/lib/site";

type ContactDetailsProps = {
  heading?: string;
  phoneLabel: string;
  emailLabel: string;
  locationLabel?: string;
  locationText?: string;
  whatsappLabel: string;
  whatsappCta: string;
  openingHoursTitle: string;
  openingHoursTodayLabel: string;
  openingHoursRows: OpeningHoursRow[];
  showWhatsapp?: boolean;
};

export function ContactDetails({
  heading,
  phoneLabel,
  emailLabel,
  locationLabel,
  locationText,
  whatsappLabel,
  whatsappCta,
  openingHoursTitle,
  openingHoursTodayLabel,
  openingHoursRows,
  showWhatsapp = true,
}: ContactDetailsProps) {
  return (
    <div className="msa-card-lift space-y-5 rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
      {heading ? (
        <h2 className="text-lg font-semibold text-foreground">{heading}</h2>
      ) : null}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {phoneLabel}
        </h2>
        <a
          className="mt-1 block text-lg font-semibold text-foreground hover:text-primary"
          href={`tel:${business.phoneTel}`}
        >
          {business.phoneDisplay}
        </a>
      </div>
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {emailLabel}
        </h2>
        <a
          className="mt-1 block break-all text-lg font-semibold text-foreground hover:text-primary"
          href={`mailto:${business.email}`}
        >
          {business.email}
        </a>
      </div>
      {locationLabel && locationText ? (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {locationLabel}
          </h2>
          <p className="mt-1 text-lg font-semibold text-foreground">{locationText}</p>
        </div>
      ) : null}
      {showWhatsapp ? (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {whatsappLabel}
          </h2>
          <a
            className="mt-3 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-black transition-colors hover:bg-primary/90"
            href={whatsappHref()}
            rel="noopener noreferrer"
            target="_blank"
          >
            {whatsappCta}
          </a>
        </div>
      ) : null}
      <OpeningHours
        title={openingHoursTitle}
        todayLabel={openingHoursTodayLabel}
        rows={openingHoursRows}
      />
    </div>
  );
}
