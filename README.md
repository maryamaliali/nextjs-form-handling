# MSA Driving School — web

Next.js site with **English** and **Polish** locales, **light/dark** theme, and SEO metadata (sitemap, robots, JSON-LD).

The home page is **responsive** (mobile → tablet → desktop), includes **scroll-in section animations** (respects `prefers-reduced-motion`), an **auto-advancing testimonial carousel** (pause on hover/focus, swipe on touch, prev/next + dots), **success story**, **achievements**, **lesson packages**, a **Google Maps embed** for Nottingham, and **social icons** in the footer when env URLs are set.

## Environment

Set the public site URL for canonical links and `sitemap.xml`:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Defaults to `https://msadrivingschoolnotts.com` for local previews.

## Scripts

```bash
npm run dev
npm run build
npm start
```

## Contact form

The enquiry form uses a server action. In development, submissions are logged to the server console. Wire your email provider (e.g. Resend) inside `app/[locale]/contact/actions.ts` for production delivery.
