`use strict`

// HEADER 
const header = document.querySelector('.Header-excursiones')
const headerBtn = header.querySelector('.Header-btn')
const headerNav = header.querySelector('.Header-nav')

headerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('isActive')
})

// Efecto paralax

const excursionesBackGround = document.querySelector('.Excursiones-background')
const excursionesH1 = document.querySelector('.Excursiones-h1')

const parallax = () => {
    let scrollPosition = window.scrollY
    excursionesBackGround.style.backgroundPosition = 'center ' + (-scrollPosition / 4) + 'px'
    excursionesH1.style.marginTop = (scrollPosition / 3) + 'px'
    excursionesH1.style.opacity = 1 - (scrollPosition / 300)
};

window.addEventListener('scroll', () => {
    parallax()
})