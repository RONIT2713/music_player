const STATIC_CACHE = "viridxi-static-v7";

const MEDIA_CACHE = "viridxi-media-v7";

const STATIC_ASSETS = [
  "/app/",
  "/app/index.html",
  "/app/music_player.css",
  "/app/music_player.js",
  "/app/data.js",
  "/app/manifest.json"
];


// INSTALL
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// ACTIVATE
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(k => {
          if (k !== STATIC_CACHE && k !== MEDIA_CACHE) {
            return caches.delete(k);
          }
        })
      );
    })
  );
});

// FETCH
self.addEventListener("fetch", e => {

  const url = e.request.url;

  // 🎵 AUDIO & COVERS → cache on demand
  if (
    url.includes(".mp3") ||
    url.includes("/covers/")
  ) {
    e.respondWith(cacheMedia(e.request));
    return;
  }

  // APP FILES
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

// MEDIA STRATEGY
async function cacheMedia(req) {

  const cache = await caches.open(MEDIA_CACHE);
  const cached = await cache.match(req);

  if (cached) return cached;

  const fresh = await fetch(req);
  cache.put(req, fresh.clone());

  limitCache(MEDIA_CACHE, 40); // max 40 files
  return fresh;
}

// LIMIT CACHE SIZE
async function limitCache(name, max) {
  const cache = await caches.open(name);
  const keys = await cache.keys();

  if (keys.length > max) {
    await cache.delete(keys[0]);
    limitCache(name, max);
  }
}
