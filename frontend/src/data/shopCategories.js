import { SITE_LINKS } from '../constants/site.js'

/**
 * Home services strip categories (titles, copy, Etsy CTAs) and Work deep-link targets.
 * `workArchiveTabId` matches `workGalleryTabOptions[].id` for `/work#${id}` from the home category cards.
 */
export const SHOP_CATEGORIES = [
  {
    id: 'wedding-invitations',
    workArchiveTabId: 'weddingInvitations',
    title: 'Wedding Invitation Suite',
    description:
      'Elegant invitation designs crafted to reflect your story and set the tone for your big day.',
    ctaHref: SITE_LINKS.etsy,
    external: true,
  },
  {
    id: 'wedding-stationery',
    workArchiveTabId: 'weddingStationery',
    title: 'Wedding Stationery',
    description:
      'Beautifully coordinated stationery designed to bring elegance and harmony to your celebration.',
    ctaHref: SITE_LINKS.etsy,
    external: true,
  },
  {
    id: 'celebration',
    workArchiveTabId: 'celebrationDesigns',
    title: 'Celebration Suite',
    description: 'Creative designs for birthdays, anniversaries, and special moments worth celebrating.',
    ctaHref: SITE_LINKS.etsy,
    external: true,
  },
  {
    id: 'omag',
    workArchiveTabId: 'omag',
    title: "O'Mag (Magazine)",
    description:
      'A custom magazine that turns your memories into a timeless keepsake you can cherish forever.',
    ctaHref: '/omag',
    external: false,
  },
]
