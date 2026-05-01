/**
 * Curated portfolio media for the Work page masonry grid.
 * Category assets live under `public/work/gallery/{celebration,magazine,wedding-invitations,wedding-stationery}/`.
 * Legacy paths under `public/work/magazine/` remain for home/O’Mag hero and video posters where referenced.
 */

/** @typedef {'weddingInvitations' | 'weddingStationery' | 'omag' | 'celebrationDesigns'} WorkGalleryCategory */

/**
 * Tab ids for the work archive (`all` first). Order matches home “View Designs” / `SHOP_CATEGORIES` + `workArchiveTabId`.
 * @type {{ id: string; label: string }[]}
 */
export const workGalleryTabOptions = [
  { id: 'all', label: 'All' },
  { id: 'weddingInvitations', label: 'Wedding Invitation Suite' },
  { id: 'weddingStationery', label: 'Wedding Stationery' },
  { id: 'celebrationDesigns', label: 'Celebration Suite' },
  { id: 'omag', label: "O'Mag – Magazine Designs" },
]

/**
 * @typedef {Object} WorkMediaItem
 * @property {string} id Stable key for list rendering
 * @property {string} src Thumbnail — local path under `public/` or absolute URL (e.g. Heyzine CDN cover)
 * @property {string} title
 * @property {WorkGalleryCategory} category Archive tab filter
 * @property {string} [badge] Optional ribbon on shop grid cards
 * @property {string} [href] Optional external link (opens in new tab)
 */

/**
 * @typedef {Object} InvitationFilmItem
 * @property {string} src
 * @property {string} title
 * @property {string} poster
 * @property {string} tagline
 */

/** @type {WorkMediaItem[]} */
export const magazineGalleryItems = [
  // Celebration Suite
  {
    id: 'work-cel-baby-shower-board',
    src: '/work/gallery/celebration/baby-shower-board.jpg',
    title: 'Baby shower board',
    category: 'celebrationDesigns',
  },
  {
    id: 'work-cel-baby-shower-welcome',
    src: '/work/gallery/celebration/baby-shower-welcome-board.jpg',
    title: 'Baby shower welcome board',
    category: 'celebrationDesigns',
  },
  {
    id: 'work-cel-baby-announcement-news',
    src: '/work/gallery/celebration/baby-announcement-newspaper.png',
    title: 'Baby announcement — newspaper style',
    category: 'celebrationDesigns',
  },
  {
    id: 'work-cel-newspaper-baby',
    src: '/work/gallery/celebration/newspaper-baby.png',
    title: 'Newspaper — baby feature',
    category: 'celebrationDesigns',
  },
  {
    id: 'work-cel-newspaper-announcement',
    src: '/work/gallery/celebration/newspaper-baby-announcement.png',
    title: 'Newspaper — baby announcement',
    category: 'celebrationDesigns',
  },
  {
    id: 'work-cel-grand-opening',
    src: '/work/gallery/celebration/grand-opening-invitation.png',
    title: 'Grand opening ceremony invitation',
    category: 'celebrationDesigns',
  },
  // O'Mag (Magazine) — grid captions use one line under the tab name
  {
    id: 'work-omag-spread-01',
    src: '/work/gallery/magazine/spread-01.png',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-spread-19',
    src: '/work/gallery/magazine/spread-19.png',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-artboard',
    src: '/work/gallery/magazine/artboard-01.jpg',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-cover-flat',
    src: '/work/gallery/magazine/magazine-omag.jpg',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-mockup-3',
    src: '/work/gallery/magazine/mockup-3.jpg',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-mockup-1',
    src: '/work/gallery/magazine/mockup-1.jpg',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-anniversary-spread',
    src: '/work/gallery/magazine/anniversary-photo-book-spread.png',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  {
    id: 'work-omag-mehendi-magazine-spread',
    src: '/work/gallery/magazine/mehendi-booklet-spread.png',
    title: "O'Mag – Magazine Designs",
    category: 'omag',
  },
  // Wedding Invitation Suite
  {
    id: 'work-win-couple-monogram',
    src: '/work/gallery/wedding-invitations/couple-monogram.jpg',
    title: 'Wedding — couple monogram',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-mehendi-2',
    src: '/work/gallery/wedding-invitations/mehendi-2.jpg',
    title: 'Mehendi invitation — variant',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-roopesh-neha-suite',
    src: '/work/gallery/wedding-invitations/roopesh-neha-wedding-suite.png',
    title: 'Wedding invitation suite — Roopesh & Neha',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-sangeet-haldi-suite',
    src: '/work/gallery/wedding-invitations/sangeet-haldi-invitation-suite.png',
    title: 'Sangeet & Haldi invitation suite',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-simrat-gurpreet-suite',
    src: '/work/gallery/wedding-invitations/simrat-gurpreet-wedding-suite.png',
    title: 'Punjabi wedding invitation suite — Simrat & Gurpreet',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-monogram-couple',
    src: '/work/gallery/wedding-invitations/monogram-couple.png',
    title: 'Monogram — couple mark',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-monogram',
    src: '/work/gallery/wedding-invitations/monogram.jpg',
    title: 'Monogram — wedding mark',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-countdown',
    src: '/work/gallery/wedding-invitations/wedding-countdown.png',
    title: 'Wedding countdown',
    category: 'weddingInvitations',
  },
  {
    id: 'work-win-invite',
    src: '/work/gallery/wedding-invitations/wedding-invite.jpg',
    title: 'Wedding invitation',
    category: 'weddingInvitations',
  },
  // Wedding Stationery
  {
    id: 'work-wst-newspaper-std',
    src: '/work/gallery/wedding-stationery/newspaper-save-the-date.jpg',
    title: 'Save the date — newspaper style',
    category: 'weddingStationery',
  },
  {
    id: 'work-wst-thank-you',
    src: '/work/gallery/wedding-stationery/thank-you-note.png',
    title: 'Thank you note',
    category: 'weddingStationery',
  },
  {
    id: 'work-wst-welcome-mehendi',
    src: '/work/gallery/wedding-stationery/welcome-board-mehendi.jpg',
    title: 'Welcome board — Mehendi',
    category: 'weddingStationery',
  },
  {
    id: 'work-wst-welcome-wedding',
    src: '/work/gallery/wedding-stationery/welcome-board-wedding.png',
    title: 'Welcome board — wedding',
    category: 'weddingStationery',
  },
]

/**
 * O’Mag “Samples” — Heyzine flipbooks; `src` is each book’s `og:image` thumb so covers match the live flipbook.
 * Order: samples strip (Kids → Family → Wedding → Anniversary ×2 → Wedding); page count in `badge`.
 * @see https://heyzine.com/
 */
export const omagSampleCarouselItems = [
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/38dd89e4a4974fb3259e9c18ec5e4ba32ee80c1c.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/38dd89e4a4.html',
    title: "O'Mag — Kids Magazine",
    badge: '12 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/ec694af2e0f965858b47f7e780058e4abf633c12.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/ec694af2e0.html',
    title: "O'Mag — Family Magazine",
    badge: '16 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/068c607c1a27b8f337c08b50e295c2c99199ca79.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/068c607c1a.html',
    title: "O'Mag — Wedding Magazine",
    badge: '16 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/38540cdbaa3cf47cc3fdbe9629c30bcc56ebb26f.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/38540cdbaa.html',
    title: "O'Mag — Anniversary Magazine",
    badge: '20 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/07cdbd76ed069132e84773a3ff883941c8416b12.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/07cdbd76ed.html',
    title: "O'Mag — Anniversary Magazine",
    badge: '20 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/c50ed68b42709976114ea325aebfac62f2e53152.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/c50ed68b42.html',
    title: "O'Mag — Wedding Magazine",
    badge: '24 pages',
  },
]

/** @type {InvitationFilmItem[]} */
export const invitationVideoItems = [
  {
    src: '/work/invitations/rupal.mp4',
    title: 'Customised Magazine',
    poster: '/work/magazine/open-magazne-o-mag-aashi.jpg',
    tagline: "Designed to turn your memories into a timeless keepsake you'll cherish forever.",
  },
  {
    src: '/work/invitations/save-the-date-1.mp4',
    title: 'Save the Date',
    poster: '/work/magazine/cover2.png',
    tagline: 'A beautifully crafted invite to announce your special day with elegance and charm.',
  },
  {
    src: '/work/invitations/whatsapp-video-2025-04-02-132019.mp4',
    title: 'Welcome Board',
    poster: '/work/magazine/back-cover.jpg',
    tagline: 'Statement designs that welcome your guests with elegance and style.',
  },
]
