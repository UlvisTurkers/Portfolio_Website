# Portfolio Website

Personal portfolio of **Ulvis Edijs Turkers** — BSc Artificial Intelligence student at King's College London.

A single-page React site showcasing applied AI projects (RAG, RL, computer vision), hobbies, and music curation. Designed with a two-toned glassmorphism aesthetic (deep black + vibrant orange).

## Stack

- **React 18** + **Vite** — fast dev server and lean production bundle
- **Tailwind CSS** — utility-first styling with a custom accent palette
- **Framer Motion** — scroll-reveal and entrance animations
- Mobile-first, fully responsive, semantic HTML5

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

### Production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

This repo includes [`vercel.json`](./vercel.json), so deployment is one-click:

1. Push to GitHub.
2. Import the repository on <https://vercel.com/new>.
3. Vercel auto-detects Vite, runs `npm run build`, and serves `dist/`.

No environment variables are required.

## Project structure

```
src/
├── App.jsx                  # Section orchestrator
├── main.jsx                 # React entry
├── index.css                # Tailwind + custom .glass utilities
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Section.jsx          # Shared section wrapper
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Hobbies.jsx
│   ├── Music.jsx
│   ├── ThankYou.jsx
│   └── Footer.jsx
└── data/
    ├── projects.js          # Featured project content
    └── hobbies.js           # Hobby tile content
```

## Adding content

- **New project** → append to [`src/data/projects.js`](src/data/projects.js).
- **Hobby media** → replace `placeholder` strings in [`src/data/hobbies.js`](src/data/hobbies.js) with real `<img>` / `<video>` tags inside [`src/components/Hobbies.jsx`](src/components/Hobbies.jsx).
- **Spotify embed** → swap the placeholder block in [`src/components/Music.jsx`](src/components/Music.jsx) for an `<iframe>` from open.spotify.com.
