const version = 'v1.1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('game-cache-' + version)
            .then(cache => cache.addAll(RESOURCES))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                const fetched = fetch(event.request)
                    .then(response => {
                        const cacheCopy = response.clone();
                        caches.open('game-cache' + version)
                            .then(cache => {
                                cache.put(event.request, cacheCopy);
                            });
                        return response;
                    })
                    .catch(() => new Response('<h1>Service Unavailable</h1>', {
                            status: 503,
                            statusText: 'Service Unavailable',
                            headers: new Headers({
                                'Content-Type': 'text/html'
                            })
                        })
                    );
                return cached || fetched;
            })
            .catch(error => {
                console.error('Read from cache failed: ' + error)
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => !key.endsWith(version))
                    .map(key => caches.delete(key))
            ))
    );
});
