import type { Locale } from "./config";

export const LANG_LABELS: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
};

export function themeToggleLabels(locale: Locale) {
  return locale === "pl"
    ? { light: "Jasny", dark: "Ciemny" }
    : { light: "Light", dark: "Dark" };
}

export function langSwitchAriaLabel(locale: Locale) {
  return locale === "pl" ? "Język" : "Language";
}

export function mobileNavLabels(locale: Locale) {
  return locale === "pl"
    ? { open: "Otwórz menu", close: "Zamknij menu" }
    : { open: "Open menu", close: "Close menu" };
}

export function footerSocialHint(locale: Locale) {
  return locale === "pl"
    ? "Dodaj linki w zmiennych środowiskowych (patrz .env.example)."
    : "Add your profile URLs via environment variables (see .env.example).";
}
