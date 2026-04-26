// Original beat catalogue. Files live in `public/assets/beats/` and are
// served at the site root by Vite. Filenames are URL-encoded so spaces,
// parens, and underscores survive deployment to Vercel.
//
// Order matters: the first FEATURED_COUNT entries render up-front; the
// remainder is hidden behind a "Show more" toggle. Re-order to re-curate.

const BASE = import.meta.env.BASE_URL // ends with "/"

function url(filename) {
  return `${BASE}assets/beats/${encodeURIComponent(filename)}`
}

// File paths use lowercase to match the case-sensitive Vercel filesystem.
// Display titles stay capitalized for the UI.
export const beats = [
  {
    id: 'stargazing',
    title: 'Stargazing',
    src: url('stargazing(best_at_2_min_40).mpeg'),
    note: 'Best at 2 min 40',
  },
  { id: 'energy', title: 'Energy', src: url('energy.mpeg') },
  { id: 'seaside', title: 'Seaside', src: url('seaside.mpeg') },
  { id: 'bounce', title: 'Bounce', src: url('bounce.mpeg') },
  { id: 'coldline', title: 'Coldline', src: url('coldline.mpeg') },
  { id: 'dancing', title: 'Dancing With Stars', src: url('dancing_with_stars.mpeg') },
  { id: 'dell', title: 'Dell Rythm', src: url('dell_rythm.mpeg') },
  { id: 'extreme', title: 'Extreme Suspence', src: url('extreme_suspence.mpeg') },
  { id: 'proof', title: 'Proof', src: url('proof.mpeg') },
  { id: 'not_alike', title: 'Not Alike', src: url('not_alike.mpeg') },
]

export const FEATURED_COUNT = 3
