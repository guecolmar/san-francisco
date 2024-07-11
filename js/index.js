'use strict'

const header = document.querySelector(".Header");
const navBtn = header.querySelectorAll(".Nav-btn");
const submenu = header.querySelectorAll(".Nav-ul--sub")

const headerBtn = header.querySelector(".Nav-hamburguerBtn")
const menu = header.querySelector(".Nav-ul")

/* Esta función solo funciona cuando el boton hamburguesa es visible debido a las @media
Tiene un evento que al hacer click, activa o desactiva la clase isActive del menú principal */
headerBtn.addEventListener('click', () => {
    menu.classList.toggle('isActive')
    navBtn.forEach((eachNavBtn, i) => {
        submenu[i].classList.remove('isActive')
    })
})

/*Esta función indica que cada vez que hagamos click en qualquier elemento de lista del menu de navegacion,
primero borrara la clase isActive de todos los <ul> del menú secundario y luego activará la clase is active del correspondiente <ul> */

navBtn.forEach((eachBtn, i) => {

    navBtn[i].addEventListener('click', () => {
        navBtn.forEach((eachNavBtn, i) => {
            submenu[i].classList.remove('isActive')
        })
        submenu[i].classList.toggle('isActive')
    })
})

// CARROUSEL

let posicion = 0
const siguiente = document.querySelector('.Carrousel-arrow--next')
const carrouselContainer = document.querySelector('.Carrousel-container')
const anterior = document.querySelector('.Carrousel-arrow--prev')
const carrouselBtns = document.querySelectorAll('.Carrousel-btn')

let desplazamiento = function () {
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / 4)}%)`
}

siguiente.addEventListener('click', function() {
    posicion++
    if (posicion >= 4) {
        posicion = 0
    }
    desplazamiento ()
})

anterior.addEventListener('click',function(){
    posicion--
    if (posicion < 0) {
        posicion = 3
    }
    desplazamiento ()
})

carrouselBtns.forEach((eachBtn, i) => {
    carrouselBtns[i].addEventListener('click', () => {
        posicion = i
        desplazamiento();
        // carrouselBtns.forEach ((eachBtn, i) => {
        //     carrouselBtns[i].classList.remove('isActive')
        // })
        // carrouselBtns[i].classList.add('isActive')
    })
})

setInterval(function(){
    posicion++
    if (posicion >= 4) {
        posicion = 0
    }
    desplazamiento ()
} , 10000)




