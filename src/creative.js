const creative = options => {
    console.log('__CREATIVE__: ', options.paragraph)
    const newParagraph = `Creative Developer because I love to code some nerdy art on the web. Currently based in Milan, IT.`

    const alsoTpl = `<div class="also">
        <div class="also__content">Also</div>
    </div>`

    var a = document.createElement('div')
    a.innerHTML = alsoTpl

    const body = document.getElementsByTagName('body')[0]
    body.appendChild(a)

    setTimeout(() => {
        const also = document.getElementsByClassName('also')[0]
        also.classList.add('also--visible')

        also.addEventListener('click', () => {
            body.classList.toggle('body--creative')
            if (body.classList.contains('body--creative')) {
                options.paragraph.baffle.start().text(text => newParagraph).reveal(1000)
            } else {
                options.paragraph.baffle.start().text(text => options.paragraph.text).reveal(1000)
            }
        })

    }, 2000)
}

export default creative
