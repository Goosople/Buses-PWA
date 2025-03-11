const CACHE_NAME = 'shuttle-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/buses.json',
    '/styles.css'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(res => res || fetch(e.request))
    );
});