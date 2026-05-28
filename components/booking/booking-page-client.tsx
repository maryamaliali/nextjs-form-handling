"use client";

import { useActionState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  submitBooking,
  type BookingFormState,
} from "@/app/[locale]/booking/actions";
import { BookingForm } from "@/components/booking/booking-form";
import { BookingPageBackdrop } from "@/components/booking/booking-page-backdrop";
import { BookingSidebar } from "@/components/booking/booking-sidebar";
import { BookingSuccessView } from "@/components/booking/booking-success-view";
import { BookingWhatsappCard } from "@/components/booking/booking-whatsapp-card";
import { SectionReveal } from "@/components/section-reveal";
import { PageHeader } from "@/components/ui/page-header";

type BookingPageClientProps = {
  dict: Dictionary;
};

export function BookingPageClient({ dict }: BookingPageClientProps) {
  const [state, formAction, pending] = useActionState<
    BookingFormState,
    FormData
  >(submitBooking, null);

  const page = dict.bookingPage;
  const contact = dict.contactPage;

  return (
    <div className="msa-booking-page border-b border-border">
      <BookingPageBackdrop />
      <div className="relative z-1">
        {state?.ok ? (
          <BookingSuccessView
            title={page.successTitle}
            message={page.successMessage}
            note={page.successNote}
            whatsappCta={page.successWhatsappCta}
          />
        ) : (
          <div className="msa-container py-24 sm:py-16 md:py-24">
            <SectionReveal
              eager
              variant="up"
              className="mx-auto max-w-3xl text-center"
            >
              <p className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                {page.badge}
              </p>
              <PageHeader title={page.title} subtitle={page.subtitle} />
            </SectionReveal>

            <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
              <SectionReveal variant="left">
                <div className="space-y-6">
                  <div className="msa-card-lift rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-foreground">
                      {page.formTitle}
                    </h2>
                    <div className="mt-5">
                      <BookingForm
                        dict={dict}
                        formAction={formAction}
                        pending={pending}
                        showError={state?.ok === false}
                      />
                    </div>
                  </div>
                  <BookingWhatsappCard
                    title={page.whatsappTitle}
                    body={page.whatsappBody}
                    cta={page.whatsappCta}
                  />
                </div>
              </SectionReveal>

              <SectionReveal variant="right" delay={80}>
                <BookingSidebar
                  title={page.sidebarTitle}
                  phoneLabel={contact.phoneLabel}
                  emailLabel={contact.emailLabel}
                  locationLabel={page.locationLabel}
                  locationText={page.locationText}
                  hoursTitle={contact.openingHours.title}
                  hoursTodayLabel={contact.openingHours.todayLabel}
                  hoursRows={contact.openingHours.rows}
                />
              </SectionReveal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
