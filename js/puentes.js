'use strict'

// Seleccionamos el elemento del encabezado
const header = document.querySelector('.Header')

// Seleccionamos el botón del encabezado
const headerBtn = document.querySelector('.Header-btn')

// Seleccionamos la navegación del encabezado
const headerNav = document.querySelector('.Header-nav')

// Añadimos un evento de clic al botón del encabezado
headerBtn.addEventListener('click', () => 
    // Alternamos la clase 'isActive' en la navegación del encabezado
    headerNav.classList.toggle('isActive')
)

// Seleccionamos todas las secciones con la clase 'Bridges'
document.querySelectorAll('.Bridges').forEach((section) => {
    // Seleccionamos todos los botones dentro de cada sección
    const bridgeBtns = section.querySelectorAll('.Bridge-button');
    
    // Seleccionamos todos los párrafos dentro de cada sección
    const bridgeParagraphs = section.querySelectorAll('.Bridge-p');

    // Añadimos un evento de clic a cada botón
    bridgeBtns.forEach((eachBtn, index) => {
        eachBtn.addEventListener('click', () => {
            // Removemos la clase 'isActive' de todos los botones y párrafos
            bridgeBtns.forEach((btn, i) => {
                btn.classList.remove('isActive');
                bridgeParagraphs[i].classList.remove('isActive');
            });
            // Añadimos la clase 'isActive' al botón y párrafo clicado
            eachBtn.classList.add('isActive');
            bridgeParagraphs[index].classList.add('isActive');
        });
    });
});