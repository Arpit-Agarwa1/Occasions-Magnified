/**
 * Curated portfolio media — magazine spreads, motion invites, process, and service stills.
 * Files live under `frontend/public/work/`, `public/services/`, `public/how-it-works/`.
 */

/**
 * @typedef {Object} WorkMediaItem
 * @property {string} src Thumbnail — local path under `public/` or absolute URL (e.g. Heyzine CDN cover)
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

/**
 * O’Mag “Samples” — titles and cover thumbs match each Heyzine flipbook (metadata from heyzine.com).
 * Thumbnails use Heyzine CDN `og:image` so the card always matches what opens.
 */
export const omagSampleCarouselItems = [
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/a85318a2cd623217b6f67660dacaaa5b853741cb.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/a85318a2cd.html',
    title: "O'Mag — Kapil & Bhawana (16 pages)",
    badge: '16 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/07cdbd76ed069132e84773a3ff883941c8416b12.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/07cdbd76ed.html',
    title: "O'Mag — Sheetal & Rahul (20 pages)",
    badge: '20 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/38540cdbaa3cf47cc3fdbe9629c30bcc56ebb26f.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/38540cdbaa.html',
    title: "O'Mag — 20 pages (flip book)",
    badge: '20 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/ec694af2e0f965858b47f7e780058e4abf633c12.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/ec694af2e0.html',
    title: "O'Mag — Family magazine (16 pages)",
    badge: '16 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/068c607c1a27b8f337c08b50e295c2c99199ca79.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/068c607c1a.html',
    title: "O'Mag — Wedding magazine (16 pages)",
    badge: '16 pages',
  },
  // Repeats (you pasted 8 links total; adding them in the same order)
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/a85318a2cd623217b6f67660dacaaa5b853741cb.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/a85318a2cd.html',
    title: "O'Mag — Kapil & Bhawana (16 pages)",
    badge: '16 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/07cdbd76ed069132e84773a3ff883941c8416b12.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/07cdbd76ed.html',
    title: "O'Mag — Sheetal & Rahul (20 pages)",
    badge: '20 pages',
  },
  {
    src: 'https://cdnc.heyzine.com/files/uploaded/v3/38540cdbaa3cf47cc3fdbe9629c30bcc56ebb26f.pdf-thumb.jpg',
    href: 'https://heyzine.com/flip-book/38540cdbaa.html',
    title: "O'Mag — 20 pages (flip book)",
    badge: '20 pages',
  },
]

/** @type {InvitationFilmItem[]} */
export const invitationVideoItems = [
  {
    src: '/work/invitations/rupal.mp4',
    title: 'Customised magazine',
    poster: '/work/magazine/open-magazne-o-mag-aashi.jpg',
    tagline: 'Editorial layouts, storytelling, and print-ready spreads tailored to your occasion.',
  },
  {
    src: '/work/invitations/save-the-date-1.mp4',
    title: 'Save the Date Invite',
    poster: '/work/magazine/cover2.png',
    tagline: 'Cinematic save-the-date with custom typography, palette, and pacing for your guests.',
  },
  {
    src: '/work/invitations/whatsapp-video-2025-04-02-132019.mp4',
    title: 'Welcome Board Design',
    poster: '/work/magazine/back-cover.jpg',
    tagline: 'Statement welcome visuals with refined composition and cohesive styling for your venue.',
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
