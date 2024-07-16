`use strict`

// HEADER 
const header = document.querySelector('.Header')
const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('isActive')
})

// Efecto paralax
const excursionesBackGround = document.querySelector('.Excursiones-background')
const excursionesH1 = document.querySelector('.Excursiones-h1')
console.log(excursionesH1)

console.log(document.documentElement.scrollTop)
console.log(window.scrollY)

function parallax () {
    let scrollPosition = window.scrollY
    excursionesBackGround.style.marginTop = (scrollPosition / 1.3) + 'px';
    excursionesH1.style.bottom = (scrollPosition / 6) + 'px';
    excursionesH1.style.opacity = 1 - (scrollPosition / 1500);
}

window.addEventListener('scroll', () => {
    parallax()
})