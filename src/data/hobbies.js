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
  'whatsapp image 2026-04-26 at 12.51.43 am.jpeg',
  'whatsapp image 2026-04-26 at 12.51.43 am (1).jpeg',
  'whatsapp image 2026-04-26 at 12.51.46 am.jpeg',
  'whatsapp image 2026-04-26 at 12.51.46 am (1).jpeg',
  'whatsapp image 2026-04-26 at 12.51.46 am (2).jpeg',
  'whatsapp image 2026-04-26 at 12.51.46 am (3).jpeg',
  'whatsapp image 2026-04-26 at 12.51.47 am.jpeg',
  'whatsapp image 2026-04-26 at 12.51.47 am (1).jpeg',
  'whatsapp image 2026-04-26 at 12.51.47 am (2).jpeg',
  'whatsapp image 2026-04-26 at 12.54.45 am.jpeg',
  'whatsapp image 2026-04-26 at 12.54.45 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.13.05 am.jpeg',
  'whatsapp video 2026-04-26 at 12.51.44 am.mp4',
  'whatsapp video 2026-04-26 at 12.51.45 am.mp4',
]

const basketballFiles = [
  'whatsapp image 2026-04-26 at 1.10.07 am.jpeg',
  'whatsapp image 2026-04-26 at 1.10.07 am2.jpeg',
  'whatsapp image 2026-04-26 at 1.10.08 am.jpeg',
  'whatsapp image 2026-04-26 at 1.13.04 am.jpeg',
  'whatsapp video 2026-04-26 at 1.10.08 am.mp4',
  'whatsapp video 2026-04-26 at 1.10.082 am.mp4',
]

const carsFiles = [
  'whatsapp image 2026-04-26 at 1.08.13 am.jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (2).jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (3).jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (4).jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (5).jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (6).jpeg',
  'whatsapp image 2026-04-26 at 1.08.13 am (7).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am.jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (2).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (3).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (4).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (5).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (6).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (7).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (8).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (9).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (10).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (11).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (12).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (13).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (14).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (15).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (16).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (18).jpeg',
  'whatsapp image 2026-04-26 at 1.08.14 am (19).jpeg',
  'whatsapp video 2026-04-26 at 1.08.14 am.mp4',
]

const photographyFiles = [
  'whatsapp image 2026-04-26 at 1.03.21 am.jpeg',
  'whatsapp image 2026-04-26 at 1.03.21 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.03.22 am.jpeg',
  'whatsapp image 2026-04-26 at 1.03.22 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.03.22 am (2).jpeg',
  'whatsapp image 2026-04-26 at 1.03.22 am (3).jpeg',
  'whatsapp image 2026-04-26 at 1.03.22 am (4).jpeg',
  'whatsapp image 2026-04-26 at 1.03.22 am (5).jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am.jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am (4).jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am (5).jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am (6).jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am (7).jpeg',
  'whatsapp image 2026-04-26 at 1.03.23 am (8).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am.jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (1).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (2).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (3).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (4).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (5).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (6).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (7).jpeg',
  'whatsapp image 2026-04-26 at 1.03.24 am (8).jpeg',
  'whatsapp image 2026-04-26 at 1.13.04 am.jpeg',
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
