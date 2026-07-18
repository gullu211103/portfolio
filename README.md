# S. Perumal — Personal Portfolio

A responsive, single-page portfolio built with plain HTML, CSS, and JavaScript — no framework or build step required.

## Live sections

- **Hero** — name, role, and a face-recognition-inspired "detection frame" signature moment (a nod to the AI Smart Attendance System project)
- **About** — bio and core focus areas
- **Skills** — technology toolkit
- **Experience** — timeline of internship, personal, and academic projects
- **Projects** — four featured projects with source and live-demo links
- **Achievements** — academic recognition
- **Contact** — email, GitHub, LinkedIn

## Folder structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Running locally

No build tools needed — just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .
```

## Deployment

### GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repo settings, enable **Pages** and point it at the `main` branch (root).
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Netlify / Vercel
Drag and drop the folder into the Netlify dashboard, or run `vercel` / `netlify deploy` from inside the project directory — no build command is required since this is static HTML/CSS/JS.

## Notes

- Respects `prefers-reduced-motion` for all animations.
- Fully responsive from mobile through desktop.
- Fonts loaded from Google Fonts: Space Grotesk, IBM Plex Sans, IBM Plex Mono.
