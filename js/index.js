'use strict'

// HEADER 
const header = document.querySelector('.Header')
const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

headerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('isActive')
})

// CARROUSEL
let posicion = 0
const siguiente = document.querySelector('.Carrousel-arrow--next')
const carrouselContainer = document.querySelector('.Carrousel-container')
const anterior = document.querySelector('.Carrousel-arrow--prev')
const carrouselBtns = document.querySelectorAll('.Carrousel-btn')

let desplazamiento = () => 
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / 4)}%)`


siguiente.addEventListener('click', () => {
    posicion++
    if (posicion >= 4) {
        posicion = 0
    }
    desplazamiento ()
})

anterior.addEventListener('click',() => {
    posicion--
    if (posicion < 0) {
        posicion = 3
    }
    desplazamiento();
})

carrouselBtns.forEach((eachBtn, i) => {
    carrouselBtns[i].addEventListener('click', () => {
        posicion = i
        desplazamiento();
    })
})

setInterval(() => {
    posicion++
    if (posicion >= 4) {
        posicion = 0
    }
    desplazamiento();
} , 20000)

