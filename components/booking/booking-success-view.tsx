import { FooterWhatsAppIcon } from "@/components/icons/footer-icons";
import { whatsappHref } from "@/lib/site";

type BookingSuccessViewProps = {
  title: string;
  message: string;
  note: string;
  whatsappCta: string;
};

function SuccessCheckIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="m7.5 12.2 2.8 2.8 6.2-6.4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookingSuccessView({
  title,
  message,
  note,
  whatsappCta,
}: BookingSuccessViewProps) {
  return (
    <div className="mx-auto flex min-h-[min(70vh,42rem)] max-w-xl flex-col items-center justify-center px-4 py-16 text-center sm:py-20">
      <div
        className="msa-card-lift w-full rounded-2xl border border-emerald-500/25 bg-card/95 p-8 shadow-sm backdrop-blur-sm sm:p-10"
        role="status"
      >
        <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
          <SuccessCheckIcon />
        </span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{message}</p>
        <p className="mt-4 rounded-xl border border-border/80 bg-muted/30 px-4 py-3 text-sm leading-relaxed text-foreground">
          {note}
        </p>
        <a
          href={whatsappHref()}
          className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:w-auto"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FooterWhatsAppIcon className="h-5 w-5" />
          {whatsappCta}
        </a>
      </div>
    </div>
  );
}
