
import './sass/main.sass'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'

if ('serviceWorker' in navigator) {
    const registration = runtime.register()
}

if (process.HAS_CREATIVE) {
    window.onload = () => {
        System.import('./creative.js')
    }
}