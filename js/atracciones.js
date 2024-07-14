`use strict`

const AtraccionesBackGround = document.querySelector('.Atracciones-background')
const atraccionesH2 = document.querySelector('.Atracciones-h2')
console.log(atraccionesH2)

console.log(document.documentElement.scrollTop)
console.log(window.scrollY)

function parallax () {
    let scrollPosition = window.scrollY
    console.log(scrollPosition)
    section.style.backgroundPosition = 'center ' + (-scrollPosition / 4) + 'px'
    atraccionesH2.style.marginTop = (scrollPosition / 4) + 'px'
    atraccionesH2.style.opacity = 1 - (scrollPosition / 400)
}

window.addEventListener('scroll', () => {
    parallax()
})