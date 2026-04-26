// Hobby tiles. Drop media files into `public/assets/<id>/` and they will
// be served from the corresponding URL (e.g. `/assets/climbing/thumb.jpg`).
//
// Tile shapes:
//   Gallery tile:  { kind: 'gallery', id, label, description, thumb, media: [...] }
//   Music tile:    { kind: 'music',   id, label, description, spotify, mp3 }
//
// Media items:
//   { type: 'image' | 'video', src, alt }
export const hobbies = [
  {
    kind: 'gallery',
    id: 'climbing',
    label: 'Climbing',
    description: 'Focusing on bouldering and technical movement.',
    thumb: '/assets/climbing/thumb.jpg',
    media: [
      { type: 'image', src: '/assets/climbing/01.jpg', alt: 'Climbing route, side angle' },
      { type: 'image', src: '/assets/climbing/02.jpg', alt: 'Indoor bouldering session' },
      { type: 'image', src: '/assets/climbing/03.jpg', alt: 'Outdoor sport climb' },
      { type: 'video', src: '/assets/climbing/clip.mp4', alt: 'Top-out clip' },
    ],
  },
  {
    kind: 'gallery',
    id: 'basketball',
    label: 'Basketball',
    description:
      'Captain of the college team; transitioned from a weight loss journey to a lifelong passion for the game.',
    thumb: '/assets/basketball/thumb.jpg',
    media: [
      { type: 'image', src: '/assets/basketball/01.jpg', alt: 'Game day photo' },
      { type: 'image', src: '/assets/basketball/02.jpg', alt: 'Team huddle' },
      { type: 'image', src: '/assets/basketball/03.jpg', alt: 'Pre-game warmup' },
      { type: 'video', src: '/assets/basketball/highlight.mp4', alt: 'Game highlight clip' },
    ],
  },
  {
    kind: 'gallery',
    id: 'hiking',
    label: 'Hiking & Photography',
    description:
      'Capturing landscapes and exploring diverse terrains during my travels.',
    thumb: '/assets/hiking/thumb.jpg',
    media: [
      { type: 'image', src: '/assets/hiking/01.jpg', alt: 'Mountain ridge vista' },
      { type: 'image', src: '/assets/hiking/02.jpg', alt: 'Forest trail' },
      { type: 'image', src: '/assets/hiking/03.jpg', alt: 'Sunset over valley' },
      { type: 'image', src: '/assets/hiking/04.jpg', alt: 'Coastal path landscape' },
    ],
  },
  {
    kind: 'gallery',
    id: 'cars',
    label: 'Cool Cars',
    description: 'Photography of street-spotted builds and weekend meets.',
    thumb: '/assets/cars/thumb.jpg',
    media: [
      { type: 'image', src: '/assets/cars/01.jpg', alt: 'Spotted build, front three-quarter' },
      { type: 'image', src: '/assets/cars/02.jpg', alt: 'Detail shot of wheels' },
      { type: 'image', src: '/assets/cars/03.jpg', alt: 'Weekend meet, night ambience' },
    ],
  },
  {
    kind: 'music',
    id: 'music',
    label: 'Music Production',
    description: 'Producing hip-hop beats and curated Spotify playlists.',
    spotify: null, // TODO: paste a Spotify embed URL, e.g. 'https://open.spotify.com/embed/playlist/<id>'
    mp3: null, // TODO: paste an MP3 URL hosted in /public or elsewhere
  },
]
