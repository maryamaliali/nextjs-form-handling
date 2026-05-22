import type { ServiceSlug } from '@/components/icons/service-icon';

/** App routes (without locale prefix). Empty string = home. */
export const ROUTES = {
  home: '',
  services: '/services',
  packages: '/packages',
  about: '/about',
  contact: '/contact',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

/** All localized pages for sitemap and alternates. */
export const SITEMAP_PATHS: readonly AppRoute[] = [
  ROUTES.home,
  ROUTES.services,
  ROUTES.packages,
  ROUTES.about,
  ROUTES.contact,
];

export const SERVICE_SLUG_ORDER: readonly ServiceSlug[] = [
  'beginner',
  'intensive',
  'refresher',
  'testPrep',
  'passPlus',
  'flexible',
];

/** Target for the home page total-passed count-up animation. */
export const TOTAL_PASSED_COUNT = 500;

export const COUNT_UP_DURATION_MS = 2200;

export const HOME_STAT_HIGHLIGHTS = [
  { key: 'pass' as const, value: '97%' },
  { key: 'years' as const, value: '10+' },
  { key: 'rating' as const, value: '5★' },
] as const;

export type HomeStatHighlightKey = (typeof HOME_STAT_HIGHLIGHTS)[number]['key'];

export const TESTIMONIAL_AUTO_MS = 5200;
export const TESTIMONIAL_SWIPE_THRESHOLD_PX = 48;

export const THEME_STORAGE_KEY = 'msa-theme';

/** Home hero background loop (file in /public). */
export const HERO_VIDEO_SRC = '/243-135867787_medium.mp4';

/** Playback speed for hero video (1 = normal; lower = slower). */
export const HERO_VIDEO_PLAYBACK_RATE = 0.75;

/** Hero feature card carousel (desktop). */
export const HERO_CAROUSEL_VISIBLE_COUNT = 3;
export const HERO_CAROUSEL_INTERVAL_MS = 4000;
export const HERO_CAROUSEL_TRANSITION_MS = 700;

export const OPEN_GRAPH_LOCALE: Record<'en' | 'pl', string> = {
  en: 'en_GB',
  pl: 'pl_PL',
};
