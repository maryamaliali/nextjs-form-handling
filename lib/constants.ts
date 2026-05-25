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
export const STATS_CAROUSEL_INTERVAL_MS = 5200;
/** Auto-advance interval for home stats carousel (4 slides). */
export const STATS_CAROUSEL_3D_STEP_MS = 5000;
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

/** Scroll-story images in /public. */
export const SCROLL_STORY_DRIVING_CAR_IMAGE =
  '/driving-car-view-drivers-seat-600nw-2479245119.webp';
export const SCROLL_STORY_SECONDARY_IMAGE = '/images.jpeg';

/** Auto-rotate interval for home scroll-story carousel. */
export const SCROLL_STORY_INTERVAL_MS = 1000;

/** Tab panel media for home scroll-story section (right card). */
export const SCROLL_STORY_TAB_MEDIA = [
  { src: SCROLL_STORY_DRIVING_CAR_IMAGE },
  { src: SCROLL_STORY_SECONDARY_IMAGE },
  { src: SCROLL_STORY_DRIVING_CAR_IMAGE },
] as const;

export const OPEN_GRAPH_LOCALE: Record<'en' | 'pl', string> = {
  en: 'en_GB',
  pl: 'pl_PL',
};

/** Pupil pass-photo gallery (files in /public/successStories). */
export const SUCCESS_STORY_IMAGES: readonly string[] = [
  '/successStories/472542812_578548968329762_2948290745568489526_n.jpg',
  '/successStories/474078699_587625930755399_9020341626700201838_n.jpg',
  '/successStories/474448000_588083630709629_5524491955062903473_n.jpg',
  '/successStories/474475388_586996104151715_2625133115600383331_n.jpg',
  '/successStories/474530951_589167060601286_4548634707958238411_n.jpg',
  '/successStories/474833544_590430833808242_6222161682977566738_n.jpg',
  '/successStories/474950490_592027166981942_2350393398867031172_n.jpg',
  '/successStories/475236242_593098506874808_4490168909118892841_n.jpg',
  '/successStories/475272137_593291776855481_4513560843677302991_n.jpg',
  '/successStories/475308484_593306903520635_2229416638398435929_n.jpg',
  '/successStories/475404765_593109186873740_2212368923005963815_n.jpg',
  '/successStories/475438538_593106973540628_8832040874610501491_n.jpg',
  '/successStories/475743903_596868139831178_3459273094291954951_n.jpg',
  '/successStories/475744764_593895800128412_8269434593198173728_n.jpg',
  '/successStories/480006906_605187935665865_2356593900839836813_n.jpg',
  '/successStories/480008474_605191218998870_4488387038693170606_n.jpg',
  '/successStories/480451583_605185288999463_2949417569431023476_n.jpg',
  '/successStories/481204698_616602524524406_5779356481077098924_n.jpg',
  '/successStories/508398084_693991243452200_1230961308861985824_n.jpg',
  '/successStories/523039699_723319497186041_3528733858819965830_n.jpg',
  '/successStories/528752370_733864866131504_5843291071165533746_n.jpg',
  '/successStories/548494218_762622673255723_5055943331642613133_n.jpg',
  '/successStories/560054144_790074370510553_6195274530621242384_n.jpg',
  '/successStories/572032864_802687752582548_6133371198366628424_n.jpg',
  '/successStories/574036208_801930729324917_8379821912058317919_n.jpg',
  '/successStories/579744392_812598611591462_7293910811088277612_n.jpg',
  '/successStories/583124493_817483084436348_8415681277120371978_n.jpg',
  '/successStories/587471445_820476910803632_5331826824417938118_n.jpg',
  '/successStories/589718414_823545790496744_8502039191915961454_n.jpg',
  '/successStories/604359181_843674135150576_6390775076561260855_n.jpg',
  '/successStories/607951563_851428267708496_1462172924825276734_n.jpg',
  '/successStories/612055247_853852874132702_1837633873223374025_n.jpg',
  '/successStories/618831135_863326229852033_6767876053357550019_n.jpg',
  '/successStories/622378812_869044565946866_6106371843961718043_n.jpg',
  '/successStories/638023500_886761017508554_8245332837739547347_n.jpg',
  '/successStories/643557445_895423066642349_7700361440483932278_n.jpg',
  '/successStories/646867368_900409449477044_3826362089669562986_n.jpg',
  '/successStories/649807622_904068152444507_4822385673012109261_n.jpg',
  '/successStories/654255098_914342041417118_8467681844794393071_n.jpg',
  '/successStories/656005637_914854878032501_116867517217593788_n.jpg',
  '/successStories/656157473_912746104910045_8222857303244762221_n.jpg',
  '/successStories/657625777_914332188084770_3530721371583377493_n.jpg',
  '/successStories/671225470_931483289702993_3211240293795723322_n.jpg',
  '/successStories/671831426_930698716448117_8449195672411750594_n.jpg',
  '/successStories/672464522_931601963024459_7360986970096149630_n.jpg',
  '/successStories/703335394_18076788497355089_789267190832975424_n.jpg',
] as const;
