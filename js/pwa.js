// const comunicationWithServiceWork = new BroadcastChannel('comunicationWithServiceWork')

export function pwa(pathOfServiceWorker) {

    if ('serviceWorker' in navigator) {

        // const domainUrl = window.location.origin
        // comunicationWithServiceWork.postMessage(domainUrl);

        navigator.serviceWorker
            .register(pathOfServiceWorker)
            .then(() => console.warn('service worker registered'))
            .catch((err) => console.warn('service worker not registered', err))

    }

}
