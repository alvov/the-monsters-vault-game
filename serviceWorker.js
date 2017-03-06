const version = 'v1_13';
const cacheKey = 'game-cache-' + version;

importScripts('./preloadAssetsList.js?' + version);

const DEFAULT_RESOURCES = [
    './',
    './index.html',
    './dist/vendor.js',
    './dist/bundle.js',
    './dist/bundle.css'
];

const EXCLUDE_RESOURCES = [
    './src/serviceWorkerInstaller.js',
    './serviceWorker.js',
    './preloadAssetsList.js'
];

RESOURCES = DEFAULT_RESOURCES.concat(
    RESOURCES.map(([assetPath]) => './' + assetPath)
);

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheKey)
            .then(cache => cache.addAll(RESOURCES))
            // .then(() => { console.log('INSTALL COMPLETE') })
    );
});

self.addEventListener('fetch', event => {
    // console.log('FETCH ' + event.request.url);
    if (
        EXCLUDE_RESOURCES.some(resource => {
            resource = resource.replace(/^\.\//, '');
            return event.request.url.includes(resource);
        })
    ) {
        // console.log('NOT A RESOURCE, LET BROWSER FETCH IT');
        return;
    }
    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (!response.ok) {
                    // console.log('CONTENT UNAVAILABLE ' + event.request.url);
                    throw 'Content unavailable';
                }
                const responseCopy = response.clone();
                caches.open(cacheKey)
                    .then(cache => {
                        // console.log('RECACHE ' + event.request.url);
                        cache.put(event.request, responseCopy);
                    });
                return response;
            })
            .catch(() => caches.match(event.request)
                .then(cached => {
                    if (!cached) {
                        throw 'Service Unavailable';
                    }
                    // console.log('TAKE FROM CACHE ' + cached.url);
                    return cached;
                })
                .catch(error => {
                    console.error('Read from cache failed: ' + error);
                    return new Response('<h1>Service Unavailable</h1>', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: new Headers({
                            'Content-Type': 'text/html'
                        })
                    });
                })
            )
    );
});

self.addEventListener('activate', event => {
    // console.log('ACTIVATE');
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => !key.endsWith(version))
                    // .map(key => { console.log('DELETE CACHE' + key);return key; })
                    .map(key => caches.delete(key))
            ))
    );
});
