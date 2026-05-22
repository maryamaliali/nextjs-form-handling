import { business, whatsappHref } from "@/lib/site";

type ContactDetailsProps = {
  phoneLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  whatsappCta: string;
};

export function ContactDetails({
  phoneLabel,
  emailLabel,
  whatsappLabel,
  whatsappCta,
}: ContactDetailsProps) {
  return (
    <div className="msa-card-lift space-y-5 rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
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
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {whatsappLabel}
        </h2>
        <a
          className="mt-3 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          href={whatsappHref()}
          rel="noopener noreferrer"
          target="_blank"
        >
          {whatsappCta}
        </a>
      </div>
    </div>
  );
}
