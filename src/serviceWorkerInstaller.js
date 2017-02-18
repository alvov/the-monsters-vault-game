if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js?v1_12', { scope: './' })
}
