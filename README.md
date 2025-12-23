# Vriddhion & Udaanex — React shell (Vite)

This repo adds a minimal React (Vite) shell that loads the existing HTML files into a SPA via a `PageLoader` component. This lets you build with Vite and deploy to platforms like Vercel while keeping your original page content.

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Notes:
- The React shell fetches `/home.html`, `/whatwedo.html`, etc. Make sure these files remain at repository root so the loader can fetch them.
- Vercel will deploy both the built SPA and the static HTML files; routes like `/whatwedo` map to SPA routes which fetch `/whatwedo.html`.
