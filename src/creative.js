console.log('CREATIVE')

const alsoTpl = `<div class="also">
    <div class="also__content">Also</div>
</div>`

const body = document.getElementsByTagName('body')[0]
body.innerHTML += alsoTpl

setTimeout(() => {
    const also = document.getElementsByClassName('also')[0]
    also.classList.add('also--visible')

    also.addEventListener('click', () => {
        body.classList.toggle('body--creative')
    })

}, 2000)