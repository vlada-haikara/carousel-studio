# Carousel Studio

A local, offline tool for making Instagram carousels and photo collages — built to run entirely on an iPad (or any device) in the browser. No accounts, no uploads, no internet required. Your photos never leave your device.

## Features
- **Collage layouts** — 8 arrangements for 1–4 photos
- **Reposition & zoom** each photo inside its frame (drag + zoom slider)
- **Brand controls** — background color/image, brand accent color, font
- **Fine details** — gap, corner rounding, outer margin, photo frames
- **Text** — captions with size, color, bold, and alignment; drag to place
- **Carousel slides** — build many slides, export each as a 1080×1350 PNG

## Run it locally
It's a single file. Two ways:

**Easiest (iPad):** put `index.html` in the Files app, open it in Safari, then **Share → Add to Home Screen** to use it like an app — fully offline.

**On a computer:** open `index.html` in any browser, or run the tiny bundled server:
```
node server.js
```
then visit http://localhost:4321

## Tech
Plain HTML + JavaScript + Canvas. No build step, no dependencies. That's the whole point — it's portable and it lasts.
