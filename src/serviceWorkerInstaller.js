if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js?v1_10', { scope: './' })
}
