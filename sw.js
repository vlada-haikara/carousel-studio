// Network-first service worker for Carousel Studio.
// When online: always fetch the freshest version and refresh the cache (so the
// home-screen app auto-updates — no ?v= bumping ever needed).
// When offline: fall back to the last version you loaded, so it still works.
const CACHE = 'carousel-studio';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      const cache = await caches.open(CACHE);
      cache.put(req, fresh.clone());
      return fresh;
    } catch (err) {
      const cached = (await caches.match(req)) ||
                     (await caches.match('./index.html')) ||
                     (await caches.match('./'));
      return cached || Response.error();
    }
  })());
});
