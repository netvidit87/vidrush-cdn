# VidRush

Free and simple video hosting (React + Vite + Cloudflare Pages).

## Setup

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name=vidrush
```

## Structure

- `src/pages/` — Home, VideoPlayer, Terms, Privacy, Report
- `functions/api/upload.js` — proxy upload ke Videy
- `public/favicon.ico`
