if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js?v1_5', { scope: './' })
}
