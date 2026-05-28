"use server";

export const BOOKING_LESSON_TYPES = [
  "beginner",
  "intensive",
  "refresher",
  "testPrep",
  "passPlus",
] as const;

export const BOOKING_TRANSMISSIONS = ["manual", "automatic"] as const;

export const BOOKING_PREFERRED_DAYS = [
  "any",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const BOOKING_PREFERRED_TIMES = [
  "any",
  "morning",
  "afternoon",
  "evening",
] as const;

export const BOOKING_EXPERIENCE_LEVELS = [
  "complete-beginner",
  "some-experience",
  "test-date",
  "licence-refresher",
] as const;

export type BookingFormState =
  | { ok: true }
  | { ok: false; message: string }
  | null;

function includes<T extends string>(
  allowed: readonly T[],
  value: string,
): value is T {
  return (allowed as readonly string[]).includes(value);
}

export async function submitBooking(
  _prev: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const lessonType = String(formData.get("lessonType") ?? "").trim();
  const transmission = String(formData.get("transmission") ?? "").trim();
  const preferredDay = String(formData.get("preferredDay") ?? "any").trim();
  const preferredTime = String(formData.get("preferredTime") ?? "any").trim();
  const experience = String(formData.get("experience") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (name.length < 2) {
    return { ok: false, message: "invalid" };
  }
  if (phone.length < 7) {
    return { ok: false, message: "invalid" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "invalid" };
  }
  if (!includes(BOOKING_LESSON_TYPES, lessonType)) {
    return { ok: false, message: "invalid" };
  }
  if (!includes(BOOKING_TRANSMISSIONS, transmission)) {
    return { ok: false, message: "invalid" };
  }
  if (!includes(BOOKING_PREFERRED_DAYS, preferredDay || "any")) {
    return { ok: false, message: "invalid" };
  }
  if (!includes(BOOKING_PREFERRED_TIMES, preferredTime || "any")) {
    return { ok: false, message: "invalid" };
  }
  if (experience && !includes(BOOKING_EXPERIENCE_LEVELS, experience)) {
    return { ok: false, message: "invalid" };
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[booking request]", {
      name,
      phone,
      email,
      lessonType,
      transmission,
      preferredDay,
      preferredTime,
      experience,
      notes,
    });
  }

  return { ok: true };
}
