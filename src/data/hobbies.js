// Hobby tiles. Files live in `public/assets/<id>/` and are served from the
// site root (Vite). The first file in each `files` list is used as the
// thumbnail; the full list populates the gallery modal.
//
// File names are URL-encoded so that spaces and parentheses (common in
// WhatsApp exports) survive deployment to Vercel.

const BASE = import.meta.env.BASE_URL // ends with "/"

const VIDEO_EXT = /\.(mp4|mov)$/i

function buildMedia(folder, files) {
  return files.map((name, i) => {
    const isVideo = VIDEO_EXT.test(name)
    return {
      type: isVideo ? 'video' : 'image',
      src: `${BASE}assets/${folder}/${encodeURIComponent(name)}`,
      alt: `${folder} ${isVideo ? 'clip' : 'photo'} ${String(i + 1).padStart(2, '0')}`,
    }
  })
}

const hikingFiles = [
  'WhatsApp Image 2026-04-26 at 12.51.43 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.43 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.46 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.46 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.46 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.46 AM (3).jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.47 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.47 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 12.51.47 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 12.54.45 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 12.54.45 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.13.05 AM.jpeg',
  'WhatsApp Video 2026-04-26 at 12.51.44 AM.mp4',
  'WhatsApp Video 2026-04-26 at 12.51.45 AM.mp4',
]

const basketballFiles = [
  'WhatsApp Image 2026-04-26 at 1.10.07 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.10.07 AM2.jpeg',
  'WhatsApp Image 2026-04-26 at 1.10.08 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.13.04 AM.jpeg',
  'WhatsApp Video 2026-04-26 at 1.10.08 AM.mp4',
  'WhatsApp Video 2026-04-26 at 1.10.082 AM.mp4',
]

const carsFiles = [
  'WhatsApp Image 2026-04-26 at 1.08.13 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (3).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (4).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (5).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (6).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.13 AM (7).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (3).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (4).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (5).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (6).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (7).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (8).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (9).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (10).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (11).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (12).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (13).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (14).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (15).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (16).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (17).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (18).jpeg',
  'WhatsApp Image 2026-04-26 at 1.08.14 AM (19).jpeg',
  'WhatsApp Image 2026-04-26 at 1.10.07 AM.jpeg',
  'WhatsApp Video 2026-04-26 at 1.08.14 AM.mp4',
]

const photographyFiles = [
  'WhatsApp Image 2026-04-26 at 1.03.21 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.21 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.22 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.22 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.22 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.22 AM (3).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.22 AM (4).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.22 AM (5).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (3).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (4).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (5).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (6).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (7).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.23 AM (8).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (1).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (2).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (3).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (4).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (5).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (6).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (7).jpeg',
  'WhatsApp Image 2026-04-26 at 1.03.24 AM (8).jpeg',
  'WhatsApp Image 2026-04-26 at 1.13.04 AM.jpeg',
  'WhatsApp Image 2026-04-26 at 1.13.05 AM.jpeg',
]

export const hobbies = [
  {
    id: 'hiking',
    label: 'Hiking',
    description:
      'Exploring diverse terrains; a way to remain adaptive and connected to nature.',
    media: buildMedia('hiking', hikingFiles),
  },
  {
    id: 'basketball',
    label: 'Basketball',
    description:
      'Transitioned from a weight loss journey to becoming college team captain; a lifelong passion for competition and discipline.',
    media: buildMedia('basketball', basketballFiles),
  },
  {
    id: 'cars',
    label: 'Cars',
    description:
      'Appreciating engineering excellence and aesthetic design in automotive performance.',
    media: buildMedia('cars', carsFiles),
  },
  {
    id: 'photography',
    label: 'Photography',
    description:
      'Capturing the world through a lens: focusing on detail and perspective.',
    media: buildMedia('photography', photographyFiles),
  },
]
