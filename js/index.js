'use strict'

// Seleccionamos el botón y el elemento navegador que están dentro del encabezado
const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

// Añadimos un evento de clic al botón del encabezado que activa y desactiva la clase isActive
headerBtn.addEventListener('click', () => 
    headerNav.classList.toggle('isActive')
)

// CARROUSEL
let posicion = 0; // Posición actual del carrusel
const siguiente = document.querySelector('.Carrousel-arrow--next'); // Botón para avanzar
const carrouselContainer = document.querySelector('.Carrousel-container'); // Contenedor del carrusel
const anterior = document.querySelector('.Carrousel-arrow--prev'); // Botón para retroceder
const carrouselBtns = document.querySelectorAll('.Carrousel-btn'); // Botones de navegación del carrusel
const numItems = carrouselBtns.length; // Número de elementos en el carrusel

// Función para desplazar el carrusel
let desplazamiento = () => 
    carrouselContainer.style.transform = `translateX(-${posicion * (100 / numItems)}%)`;

// Evento para avanzar en el carrusel
siguiente.addEventListener('click', () => {
    posicion++;
    if (posicion >= numItems) {
        posicion = 0; // Reinicia la posición si llega al final
    }
    desplazamiento();
});

// Evento para retroceder en el carrusel
anterior.addEventListener('click', () => {
    posicion--;
    if (posicion < 0) {
        posicion = numItems - 1; // Va al último elemento si está en el primero
    }
    desplazamiento();
});

// Evento para navegar a un elemento específico del carrusel sugun la posicion
carrouselBtns.forEach((eachBtn, i) => {
    eachBtn.addEventListener('click', () => {
        posicion = i;
        desplazamiento();
    });
});

// Desplazamiento del carrusel cada 20 segundos
setInterval(() => {
    posicion++;
    if (posicion >= numItems) {
        posicion = 0; 
    }
    desplazamiento();
}, 20000);

