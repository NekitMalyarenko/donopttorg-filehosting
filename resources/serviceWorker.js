const prefix = "[Service Worker]";
const CACHE_NAME = "resources";
const second = 1000;


self.addEventListener('install', (event) => {
    log("Install", self.registration.scope);

    setTimeout(updateResources, 60 * second);

    event.waitUntil(
        loadResources()
            .then(() => {
                log("resources are loaded");
            })
            .catch((error) => {
                console.error(error);
            })
    )
});


self.addEventListener('fetch', (event) => {
    //console.log({event});
    //return fetch(event.request);
    let url = event.request.url;

    const defaultFetch = () => {
        fetch(event.request)
            .then(result => {
                if (result.ok && !event.request.url.includes("/manifest.json") && event.request.method === 'GET') {
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, result);
                        })
                }
                return result.clone();
            })
    };

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                } else if (url.includes(self.registration.scope) && !url.includes(".")) {
                    return caches.match(new Request("/"))
                        .then((response) => {
                            if (response) {
                                return response;
                            } else {
                                log("might be in cache, but not found");
                                return defaultFetch();
                            }
                        })
                } else {
                   return defaultFetch();
                }
            })
    );
});


async function loadResources(manifest) {
    let res, cache = await caches.open(CACHE_NAME);

    if (manifest) {
        res = manifest;
    } else {
        res = await fetch("/manifest.json");
        cache.put(new Request("lastFetchedManifest.json"), res.clone());
    }

    let parsedRes =  await res.json();
    let resources = parsedRes.resources;

    resources.forEach((url) => {
        log(`adding to cache: ${url}`);
        const request = new Request(url);

        fetch(request, {method: 'GET'})
            .then((res) => {
                if (res.ok) {
                    cache.put(request, res.clone());
                } else {
                    log('not ok')
                }

                return res;
            })
    })

}


async function updateResources() {
    try {
        let res = await fetch("/manifest.json"),
            clone = res.clone(),
            cache = await caches.open(CACHE_NAME),
            prevManifest = await cache.match(new Request("lastFetchedManifest.json"));

        let parsedRes = await clone.json(),
            parsedPrevRes = await prevManifest.json();

        await cache.put(new Request("lastFetchedManifest.json"), res.clone());

        if (parsedRes.version > parsedPrevRes.version) {
            await caches.delete(CACHE_NAME);
            await loadResources(res);
        }

        setTimeout(updateResources, 10 * second);
    } catch (error) {
        console.error(error);
        setTimeout(updateResources, 10 * second);
    }
}


function log(text) {
    console.log(`${prefix}: ${text}`)
}