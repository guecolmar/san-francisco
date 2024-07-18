'use strict'

// Selecciona el elemento con la clase 'Header' y lo guarda en la variable 'header'
const header = document.querySelector('.Header');

// Selecciona el botón con la clase 'Header-btn' y lo guarda en la variable 'headerBtn'
const headerBtn = document.querySelector('.Header-btn');

// Selecciona el elemento de navegación con la clase 'Header-nav' y lo guarda en la variable 'headerNav'
const headerNav = document.querySelector('.Header-nav');

// Añade un evento de clic al botón 'headerBtn'
headerBtn.addEventListener('click', () => {
    // Al hacer clic, alterna la clase 'isActive' en el elemento 'headerNav'
    headerNav.classList.toggle('isActive');
});

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

// Evento para navegar a un elemento específico del carrusel
carrouselBtns.forEach((eachBtn, i) => {
    eachBtn.addEventListener('click', () => {
        posicion = i; // Cambia la posición al índice del botón clicado
        desplazamiento();
    });
});

// Desplazamiento automático del carrusel cada 20 segundos
setInterval(() => {
    posicion++;
    if (posicion >= numItems) {
        posicion = 0; // Reinicia la posición si llega al final
    }
    desplazamiento();
}, 20000);

