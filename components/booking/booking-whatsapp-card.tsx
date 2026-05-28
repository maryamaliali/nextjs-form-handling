import { whatsappHref } from "@/lib/site";

type BookingWhatsappCardProps = {
  title: string;
  body: string;
  cta: string;
};

export function BookingWhatsappCard({ title, body, cta }: BookingWhatsappCardProps) {
  return (
    <div className="msa-card-lift rounded-2xl border border-primary/25 bg-primary/5 p-6 shadow-sm backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      <a
        href={whatsappHref()}
        className="mt-4 inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        rel="noopener noreferrer"
        target="_blank"
      >
        {cta}
      </a>
    </div>
  );
}
