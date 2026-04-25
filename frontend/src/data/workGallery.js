/**
 * Curated portfolio media — magazine spreads, motion invites, process, and service stills.
 * Files live under `frontend/public/work/`, `public/services/`, `public/how-it-works/`.
 */

/**
 * @typedef {Object} WorkMediaItem
 * @property {string} src
 * @property {string} title
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

/**
 * @typedef {Object} ServiceStillItem
 * @property {string} src
 * @property {string} label
 * @property {string} [description]
 */

/** @type {WorkMediaItem[]} */
export const magazineGalleryItems = [
  { src: '/work/magazine/1.png', title: 'Spread — editorial layout' },
  { src: '/work/magazine/15.png', title: 'Feature spread' },
  { src: '/work/magazine/20.png', title: 'Celebration layout' },
  { src: '/work/magazine/4.png', title: 'Typography study' },
  { src: '/work/magazine/7.jpg', title: 'Print finish detail' },
  { src: '/work/magazine/8.jpg', title: 'Cover concept' },
  { src: '/work/magazine/aashi-back-cover.jpg', title: 'Aashi — back cover' },
  { src: '/work/magazine/back-cover.jpg', title: 'Back cover' },
  { src: '/work/magazine/cover.jpg', title: 'Cover — classic' },
  { src: '/work/magazine/cover2.png', title: 'Cover — alternate' },
  { src: '/work/magazine/mockup-ka-cover.jpg', title: 'Mockup — KA cover' },
  { src: '/work/magazine/mockup-magazine-chacha-chachi.jpg', title: 'Mockup — family issue' },
  { src: '/work/magazine/mockup.jpg', title: 'Desk mockup' },
  { src: '/work/magazine/mockup1.jpg', title: 'Flatlay mockup' },
  { src: '/work/magazine/mockup3.jpg', title: 'O’Mag in hand' },
  { src: '/work/magazine/mockup-magazine.jpg', title: 'Magazine stack' },
  { src: '/work/magazine/open-magazne-o-mag-aashi.jpg', title: 'Open spread — Aashi' },
]

/** Printed spreads & covers for O’Mag “Samples” (thumbs from real multi-page PDFs). */
export const omagSampleCarouselItems = [
  {
    src: '/work/magazine/samples/mag-aashi-12.jpg',
    href: 'https://heyzine.com/flip-book/a85318a2cd.html',
    title: "O'Mag — Aashi (12 pages)",
    badge: '12 pages',
  },
  {
    src: '/work/magazine/samples/mag-amit-manju-16.jpg',
    href: 'https://heyzine.com/flip-book/07cdbd76ed.html',
    title: "O'Mag — Amit & Manju (16 pages)",
    badge: '16 pages',
  },
  {
    src: '/work/magazine/samples/mag-anniversary-20.jpg',
    href: 'https://heyzine.com/flip-book/38540cdbaa.html',
    title: "O'Mag — Anniversary (20 pages)",
    badge: '20 pages',
  },
  {
    src: '/work/magazine/samples/mag-kavya-manjunath-24.jpg',
    href: 'https://heyzine.com/flip-book/ec694af2e0.html',
    title: "O'Mag — Kavya & Manjunath (24 pages)",
    badge: '24 pages',
  },
  {
    src: '/work/magazine/samples/mag-ayushi-12.jpg',
    href: 'https://heyzine.com/flip-book/068c607c1a.html',
    title: "O'Mag — Ayushi (12 pages)",
    badge: '12 pages',
  },
]

/** @type {InvitationFilmItem[]} */
export const invitationVideoItems = [
  {
    src: '/work/invitations/neha-sunny.mp4',
    title: 'Neha & Sunny — motion story',
    poster: '/work/magazine/open-magazne-o-mag-aashi.jpg',
    tagline: 'Save-the-date film with custom type and colour grade.',
  },
  {
    src: '/work/invitations/ritwik-anjana.mp4',
    title: 'Ritwik & Anjana — motion story',
    poster: '/work/magazine/cover2.png',
    tagline: 'Pacing and layout aligned to their celebration theme.',
  },
  {
    src: '/work/invitations/rishabh-sonam.mp4',
    title: 'Rishabh & Sonam — motion story',
    poster: '/work/magazine/back-cover.jpg',
    tagline: 'Warm tones and elegant transitions for family sharing.',
  },
]

/** Studio / process imagery for “how we work” sections */
export const processShowcaseItems = [
  {
    src: '/how-it-works/working-omag.jpg',
    title: 'In the studio',
    caption: 'Spreads are composed like editorial features — hierarchy, rhythm, and print-safe margins.',
  },
  {
    src: '/how-it-works/how-it-works.png',
    title: 'From brief to bound',
    caption: 'Milestones, imagery, and copy come together in a guided layout pass you can review.',
  },
]

/** @type {ServiceStillItem[]} */
export const serviceGalleryItems = [
  { src: '/services/e-invites.png', label: 'Digital & e-invites', description: 'Animated and static invites for every channel.' },
  { src: '/services/5.png', label: 'Print stationery', description: 'Cohesive suites for day-of and pre-wedding.' },
  { src: '/services/6.png', label: 'Wedding stationery', description: 'Menus, programs, and place settings.' },
  { src: '/services/7.png', label: 'Custom monograms', description: 'Marks that thread through every touchpoint.' },
  { src: '/services/8.png', label: 'Illustration & caricature', description: 'Hand-drawn personality for print and motion.' },
]

/** Brand loop — poster uses a real printed spread (not a device mockup). */
export const brandShowcaseLoop = {
  src: '/brand/omag-section-loop.mp4',
  poster: '/work/magazine/open-magazne-o-mag-aashi.jpg',
}
