import { SectionReveal } from "@/components/section-reveal";
import { mapEmbedSrc } from "@/lib/site";

export function MapEmbed({
  title,
  subtitle,
  note,
  iframeTitle,
}: {
  title: string;
  subtitle: string;
  note: string;
  iframeTitle: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-5 lg:items-stretch lg:gap-10">
      <SectionReveal className="lg:col-span-2" variant="left">
        <h2 className="msa-section-title">
          {title}
        </h2>
        <p className="mt-3 text-base font-medium text-primary/90 sm:text-lg">
          {subtitle}
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {note}
        </p>
      </SectionReveal>
      <SectionReveal
        className="relative min-h-[220px] overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-inner sm:min-h-[280px] lg:col-span-3 lg:min-h-[320px]"
        variant="right"
        delay={100}
      >
        <iframe
          title={iframeTitle}
          src={mapEmbedSrc}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </SectionReveal>
    </div>
  );
}
