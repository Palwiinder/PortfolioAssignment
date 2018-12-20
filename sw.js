const staticCache = 'my-cache-2';


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCache).then(function (cache) {
            return cache.addAll(
                ["images/heroimage.jpg",
                    "images/interior home lighting.jpg",
                    "images/living room.jpg",
                    "images/modren kitchen.jpg",
                    "images/background.jpg",
                    "images/logo.jpg",
                    "js/app.js",
                    "css/styles.css",
                    "./",
                    "index.html"
                ]
            )
        })
    );
})
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheNames) {
                    return cacheNames.startsWith('my-') && cacheNames !== staticCache
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            )
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    )
});