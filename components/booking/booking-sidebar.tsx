import {
  FooterEmailIcon,
  FooterLocationIcon,
  FooterPhoneIcon,
} from "@/components/icons/footer-icons";
import type { OpeningHoursRow } from "@/components/contact/opening-hours";
import { BookingHoursGrid } from "@/components/booking/booking-hours-grid";
import { business } from "@/lib/site";

type BookingSidebarProps = {
  title: string;
  phoneLabel: string;
  emailLabel: string;
  locationLabel: string;
  locationText: string;
  hoursTitle: string;
  hoursTodayLabel: string;
  hoursRows: OpeningHoursRow[];
};

export function BookingSidebar({
  title,
  phoneLabel,
  emailLabel,
  locationLabel,
  locationText,
  hoursTitle,
  hoursTodayLabel,
  hoursRows,
}: BookingSidebarProps) {
  const contactCards = [
    {
      key: "phone",
      label: phoneLabel,
      value: business.phoneDisplay,
      href: `tel:${business.phoneTel}`,
      icon: FooterPhoneIcon,
    },
    {
      key: "email",
      label: emailLabel,
      value: business.email,
      href: `mailto:${business.email}`,
      icon: FooterEmailIcon,
    },
    {
      key: "location",
      label: locationLabel,
      value: locationText,
      href: undefined,
      icon: FooterLocationIcon,
    },
  ] as const;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {contactCards.map((card) => {
          const Icon = card.icon;
          const inner = (
            <>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {card.label}
                </span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-foreground break-words">
                  {card.value}
                </span>
              </span>
            </>
          );

          if (card.href) {
            return (
              <a
                key={card.key}
                href={card.href}
                className="msa-card-lift flex gap-3 rounded-2xl border border-border/80 bg-card/90 p-4 shadow-sm backdrop-blur-sm transition hover:border-primary/30 hover:bg-card"
              >
                {inner}
              </a>
            );
          }

          return (
            <div
              key={card.key}
              className="msa-card-lift flex gap-3 rounded-2xl border border-border/80 bg-card/90 p-4 shadow-sm backdrop-blur-sm sm:col-span-2"
            >
              {inner}
            </div>
          );
        })}
      </div>
      <BookingHoursGrid
        title={hoursTitle}
        todayLabel={hoursTodayLabel}
        rows={hoursRows}
      />
    </div>
  );
}
