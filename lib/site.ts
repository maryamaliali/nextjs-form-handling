/** Used for canonical URLs, sitemap, and Open Graph. Override in production via env. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://msadrivingschoolnotts.com";

export const business = {
  name: "MSA Driving School Nottingham",
  phoneDisplay: "07926 254 262",
  phoneTel: "+447926254262",
  email: "MSA_DRIVINGSCHOOLNOTTINGHAM@HOTMAIL.COM",
  addressLocality: "Nottingham",
  addressCountry: "GB",
  /** WhatsApp click-to-chat uses international digits only */
  whatsappDigits: "447926254262",
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${business.whatsappDigits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/** Set in `.env` to show icons in the footer; leave unset to hide a network. */
export const socialLinks = {
  facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
  instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
  tiktok: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
  youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
  x: process.env.NEXT_PUBLIC_SOCIAL_X,
} as const;

export type SocialNetwork = keyof typeof socialLinks;

export function hasConfiguredSocialLinks(): boolean {
  return Object.values(socialLinks).some((u) => Boolean(u?.trim()));
}

/** Google Maps embed (no API key) — Nottingham city centre; adjust query if needed. */
export const mapEmbedSrc =
  "https://maps.google.com/maps?q=Nottingham%2C%20UK&z=12&ie=UTF8&iwloc=&output=embed";
