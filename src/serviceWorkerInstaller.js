if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('serviceWorker.js?v1_7', { scope: './' })
}
