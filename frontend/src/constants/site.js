/** External profiles and storefronts for Occasions Magnified. */
export const SITE_LINKS = {
  instagram:
    'https://www.instagram.com/occasions.magnified?igsh=MXZnMzRuZ2Ewczh2YQ%3D%3D&utm_source=qr',
  youtube: 'https://www.youtube.com/@OccasionsMagnified',
  etsy: 'https://occasionsmagnified.etsy.com',
  linkedin: 'https://www.linkedin.com/in/shristijhalani/',
  website: 'https://www.occasionsmagnified.com',
  email: 'mailto:occasionsmagnified@gmail.com',
  phone: 'tel:+919660011183',
  /** WhatsApp chat (same number as phone). */
  whatsapp: 'https://wa.me/919660011183',
}

export const SITE_EMAIL = 'occasionsmagnified@gmail.com'
export const SITE_PHONE_DISPLAY = '9660011183'

/** Public Instagram handle (display, bios, etc.). */
export const SITE_INSTAGRAM_HANDLE = '@occasions.magnified'

/** Prefill when visitors open WhatsApp from the site (e.g. footer “Contact Us”). They can edit before sending. */
const WHATSAPP_CONTACT_PREFILL = `Hi! I'm interested in a custom design.

Please share pricing, timeline, and next steps.

I'll share my requirements once we connect. Thank you!`

/**
 * WhatsApp deep link with the welcome + intake prompt (user can edit before sending).
 * @returns {string}
 */
export function getWhatsAppContactUrl() {
  return `${SITE_LINKS.whatsapp}?text=${encodeURIComponent(WHATSAPP_CONTACT_PREFILL)}`
}
