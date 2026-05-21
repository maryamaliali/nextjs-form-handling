import { ServiceIcon, type ServiceSlug } from "@/components/icons/service-icon";

type ServiceCardProps = {
  slug: ServiceSlug;
  title: string;
  body: string;
};

export function ServiceCard({ slug, title, body }: ServiceCardProps) {
  return (
    <article className="msa-card-lift flex h-full flex-col rounded-2xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
        <ServiceIcon slug={slug} />
      </div>
      <h2 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
        {title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </article>
  );
}
