
import './sass/main.sass'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import baffle from 'baffle'

if ('serviceWorker' in navigator) {
    const registration = runtime.register()
}

const $paragraph = document.getElementById('paragraph')
const paragraph = `Frontend Engineer focused on components systems and automated tools. Currently based in Milan, IT.`
const s = ["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","/","+","-","•","~","!","=","*"]
const b = baffle($paragraph, {
    characters: s,
    speed: 75
})

const testAnimation = function () {
    b.start()
    .text(text => paragraph)
    .reveal(1500)
}

window.onload = () => {
    testAnimation()
    if (process.HAS_CREATIVE) {
        System.import('./creative.js').then(creative => {
            creative.default(({
                paragraph: {
                    element: $paragraph,
                    text: paragraph,
                    baffle: b
                }
            }))
        })
    }
}



