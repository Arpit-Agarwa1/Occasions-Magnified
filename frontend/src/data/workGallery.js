/**
 * Curated portfolio media — magazine spreads, motion invites, O’Mag samples.
 * Files live under `frontend/public/work/`, `public/services/`.
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
  { id: 'omag', label: "O'Mag (Magazine)" },
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
  { id: 'work-omag-hero-spread', src: '/work/magazine/omag-home-spread.png', title: 'O’Mag — hero spread', category: 'omag' },
  { id: 'work-open-aashi', src: '/work/magazine/open-magazne-o-mag-aashi.jpg', title: 'Open spread — Aashi', category: 'omag' },
  { id: 'work-mockup-hand', src: '/work/magazine/mockup3.jpg', title: 'O’Mag in hand', category: 'omag' },
  { id: 'work-stack', src: '/work/magazine/mockup-magazine.jpg', title: 'Magazine stack', category: 'omag' },
  { id: 'work-flatlay', src: '/work/magazine/mockup1.jpg', title: 'Flatlay mockup', category: 'weddingStationery' },
  { id: 'work-ka-cover', src: '/work/magazine/mockup-ka-cover.jpg', title: 'Mockup — KA cover', category: 'weddingInvitations' },
  { id: 'work-family-issue', src: '/work/magazine/mockup-magazine-chacha-chachi.jpg', title: 'Mockup — family issue', category: 'celebrationDesigns' },
  { id: 'work-editorial', src: '/work/magazine/1.png', title: 'Spread — editorial layout', category: 'omag' },
  { id: 'work-feature', src: '/work/magazine/15.png', title: 'Feature spread', category: 'celebrationDesigns' },
  { id: 'work-celebration', src: '/work/magazine/20.png', title: 'Celebration layout', category: 'celebrationDesigns' },
  { id: 'work-typography', src: '/work/magazine/4.png', title: 'Typography study', category: 'omag' },
  { id: 'work-cover-alt', src: '/work/magazine/cover2.png', title: 'Cover — alternate', category: 'weddingInvitations' },
  { id: 'work-cover-classic', src: '/work/magazine/cover.jpg', title: 'Cover — classic', category: 'weddingInvitations' },
  { id: 'work-print-detail', src: '/work/magazine/7.jpg', title: 'Print finish detail', category: 'weddingStationery' },
  { id: 'work-cover-concept', src: '/work/magazine/8.jpg', title: 'Cover concept', category: 'weddingStationery' },
  { id: 'work-aashi-back', src: '/work/magazine/aashi-back-cover.jpg', title: 'Aashi — back cover', category: 'omag' },
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
