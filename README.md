# Carousel Studio

A local, offline tool for making Instagram carousels and photo collages — built to run entirely on an iPad (or any device) in the browser. No accounts, no uploads, no internet required. Your photos never leave your device.

## Features
- **Collage layouts** — 18 arrangements, from a single photo up to a 9-photo grid
- **Reposition & zoom** each photo inside its frame (drag + zoom slider)
- **Brand controls** — background color/image, brand accent color, font
- **Fine details** — gap, corner rounding, outer margin, photo frames
- **Text** — captions with your own fonts, size, color, alignment, curve, and a backdrop (solid / blur / tint); tap on the canvas to type
- **Stickers** — Instagram-style location, caption, mention, and hashtag pills with editable colors
- **Video** — add a video to a slide and export that slide as a video
- **Carousel slides** — build many slides, export each as a crisp 2× PNG

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
