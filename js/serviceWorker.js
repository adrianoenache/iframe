// const comunicationWithServiceWork = new BroadcastChannel('comunicationWithServiceWork')
const cacheName = 'cache-deepo-assessment'
const assetsList = 'build/manifest.json'
const assetsFolderPath = '/build/'
const assetsToCache = []
// let domainUrl = ''

/*
comunicationWithServiceWork.onmessage = (event) => {

    domainUrl = event.data

}
*/

async function pullCacheFiles(path, name) {

    const cache = await caches.open(name)

    fetch(path)
        .then((response) => response.json())
        .then((json) => {

            const getFiles = Object.values(json)

            for (let i = 0; i < getFiles.length; i++) {

                assetsToCache.push(assetsFolderPath + getFiles[i].file)

            }

        })
        .then(() => {

            cache.addAll(assetsToCache)

        })

}

self.addEventListener('install', event => {

    event.waitUntil(pullCacheFiles(assetsList, cacheName))

})

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)
            .then(response => {

                return response || fetch(event.request)

            })

    )

})

/*
self.addEventListener('fetch', event => {

    async function returnCachedResource() {

        const cache = await caches.open(cacheName)
        const cachedResponse = await cache.match(event.request.url)

        if (cachedResponse) {

            return cachedResponse || fetch(event.request)

        } else {

            const fetchResponse = await fetch(event.request.url)
            if(fetchResponse.url.indexOf(domainUrl) === 0) cache.put(event.request.url, fetchResponse.clone())
            return fetchResponse || fetch(event.request)

        }

    }

    event.respondWith(returnCachedResource())

})
*/
