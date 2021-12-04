const staticCacheName  = 'static-cache-v0';
const dynamicCacheName = 'dynamic-cache-v0';

self.addEventListener('install', function () {
    return caches.open(staticCacheName).then(c => c.addAll([
        '/',
        '/alcohol',
        '/contacts',
        '/cost',
        '/drink',
        '/drug',
        '/fizeo',
        '/game',
        '/main.css',
        '/s.js',
    ]));
});

self.addEventListener('activate', async () => {
    const cachesKeys = await caches.keys();
    const checkKeys = cachesKeys.map(async key => {
        if (![staticCacheName, dynamicCacheName].includes(key)) {
            await caches.delete(key);
        }
    });
    await Promise.all(checkKeys);
});

self.addEventListener('fetch', e => {
    if (e.request.method === 'GET') e.respondWith(checkCache(e.request));
});

async function checkCache(req) {
    return await caches.match(req) || await checkOnline(req);
}

async function checkOnline(request) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const res = await fetch(request);
        await cache.put(request, res.clone());
        return res;
    } catch {
        const cachedRes = await cache.match(request);
        if (cachedRes) return cachedRes;
        if (request.url.indexOf('.html') !== -1) return caches.match('./offline.html');
        return caches.match('./images/no-image.jpg');
    }
}