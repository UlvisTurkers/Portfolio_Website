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

export const beats = [
  {
    id: 'stargazing',
    title: 'Stargazing',
    src: url('Stargazing(best_at_2_min_40).mpeg'),
    note: 'Best at 2 min 40',
  },
  { id: 'energy', title: 'Energy', src: url('Energy.mpeg') },
  { id: 'seaside', title: 'Seaside', src: url('Seaside.mpeg') },
  { id: 'bounce', title: 'Bounce', src: url('Bounce.mpeg') },
  { id: 'coldline', title: 'Coldline', src: url('Coldline.mpeg') },
  { id: 'dancing', title: 'Dancing With Stars', src: url('Dancing_with_stars.mpeg') },
  { id: 'dell', title: 'Dell Rythm', src: url('Dell_rythm.mpeg') },
  { id: 'extreme', title: 'Extreme Suspence', src: url('Extreme_suspence.mpeg') },
  { id: 'proof', title: 'Proof', src: url('Proof.mpeg') },
  { id: 'not_alike', title: 'Not Alike', src: url('not_alike.mpeg') },
]

export const FEATURED_COUNT = 3
