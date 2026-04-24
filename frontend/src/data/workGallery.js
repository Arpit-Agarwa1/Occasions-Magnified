/**
 * Curated portfolio media — magazine spreads, motion invites, process, and service stills.
 * Files live under `frontend/public/work/`, `public/services/`, `public/how-it-works/`.
 */

/**
 * @typedef {Object} WorkMediaItem
 * @property {string} src
 * @property {string} title
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

/** @type {InvitationFilmItem[]} */
export const invitationVideoItems = [
  {
    src: '/work/invitations/neha-sunny.mp4',
    title: 'Neha & Sunny',
    poster: '/work/magazine/cover.jpg',
    tagline: 'Cinematic save-the-date motion piece.',
  },
  {
    src: '/work/invitations/ritwik-anjana.mp4',
    title: 'Ritwik & Anjana',
    poster: '/work/magazine/mockup-magazine.jpg',
    tagline: 'Story-led pacing and custom typography.',
  },
  {
    src: '/work/invitations/rishabh-sonam.mp4',
    title: 'Rishabh & Sonam',
    poster: '/work/magazine/mockup3.jpg',
    tagline: 'Warm palette and elegant transitions.',
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

/** Brand loop used on home O’MAG block — reusable for previews */
export const brandShowcaseLoop = {
  src: '/brand/omag-section-loop.mp4',
  poster: '/work/magazine/mockup-magazine.jpg',
}
