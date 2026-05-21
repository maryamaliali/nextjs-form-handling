"use server";

export type ContactFormState =
  | { ok: true }
  | { ok: false; message: string }
  | null;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (name.length < 2) {
    return { ok: false, message: "invalid" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "invalid" };
  }
  if (message.length < 10) {
    return { ok: false, message: "invalid" };
  }

  // Hook for email provider (Resend, SendGrid, etc.)
  if (process.env.NODE_ENV === "development") {
    console.info("[contact enquiry]", { name, email, phone, message });
  }

  return { ok: true };
}
