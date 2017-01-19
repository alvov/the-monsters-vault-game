/* This script is auto-generated with `npm run build-sw` */

const RESOURCES = ["./","./dist/vendor.js","./dist/bundle.js","./dist/bundle.css","./dist/0e58b004362d2cecaf96358cf5fa9f50.png","./dist/12d4067df2155b204defac46c41c89d3.png","./dist/151b6411d53b17de82d882485fcbaaf5.jpg","./dist/3628ed55158b5a413097584e7fd8a725.jpg","./dist/4db9414e7ca808670cbc9b15dc0eaa74.jpg","./dist/6d73a1850ac64474712210aa8f34f818.png","./dist/83f558afad0f8b176e361b3f574ccb42.jpg","./dist/8b3a4e276e0a424265cc0c55fa95360d.svg","./dist/a0a62fe89c1eb6ec77f414a77fdb4a92.jpg","./dist/abcc39d175e2f5f6ad0df4cc14457193.jpg","./dist/bad58d3de10ed478b28908a2380b31f8.png","./dist/c161dc30a1bcbfb0ea16c3740f6189c3.jpg","./dist/c3e2941f8e7e3eb4fa9f378466ad0a0b.jpg","./dist/dc4aaa700984f97ca90dea2ec61957fc.png","./dist/e2128edeeefcfd54119c659e1313a548.png","./src/components/door/mixdown.m4a","./src/components/screens/start/theme.m4a","./src/containers/player/steps-running.m4a","./src/containers/player/steps-walking.m4a"];
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
