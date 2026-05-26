import { FooterWhatsAppIcon } from "@/components/icons/footer-icons";
import { whatsappHref } from "@/lib/site";

type FloatingWhatsappProps = {
  label: string;
  tooltip: string;
  /** Prefilled WhatsApp message. */
  message?: string;
};

/**
 * Sticky bottom-right WhatsApp launcher. Rendered once per locale layout so it
 * appears on every page. Pure server component — no JS shipped beyond the
 * anchor element and a CSS-only pulse animation.
 */
export function FloatingWhatsapp({
  label,
  tooltip,
  message,
}: FloatingWhatsappProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="msa-fab-whatsapp group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-200 ease-out hover:scale-105 focus-visible:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 active:scale-95 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span aria-hidden className="msa-fab-whatsapp-ring" />
      <span aria-hidden className="msa-fab-whatsapp-bg" />
      <FooterWhatsAppIcon className="relative z-1 h-7 w-7 sm:h-8 sm:w-8" />
      <span
        aria-hidden
        className="pointer-events-none absolute right-[calc(100%+0.65rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-foreground/95 px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:inline-block"
      >
        {tooltip}
      </span>
    </a>
  );
}
