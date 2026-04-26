import { SITE_LINKS } from '../constants/site.js'

/**
 * Shop landing categories for `/shop` and the home services strip.
 * `id` is used in URLs as `/shop#${id}` (except O’Mag on home, which links to `/omag`).
 */
export const SHOP_CATEGORIES = [
  {
    id: 'wedding-invitations',
    title: 'Wedding Invitation Suite',
    description:
      'Elegant invitation designs crafted to reflect your story and set the tone for your big day.',
    ctaHref: SITE_LINKS.etsy,
    external: true,
  },
  {
    id: 'wedding-stationery',
    title: 'Wedding Stationery',
    description:
      'Beautifully coordinated stationery designed to bring elegance and harmony to your celebration.',
    ctaHref: SITE_LINKS.etsy,
    external: true,
  },
  {
    id: 'celebration',
    title: 'Celebration Suite',
    description: 'Creative designs for birthdays, anniversaries, and special moments worth celebrating.',
    ctaHref: SITE_LINKS.etsy,
    external: true,
  },
  {
    id: 'omag',
    title: "O'Mag (Magazine)",
    description:
      'A custom magazine that turns your memories into a timeless keepsake you can cherish forever.',
    ctaHref: '/omag',
    external: false,
  },
]
