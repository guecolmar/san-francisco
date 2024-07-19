'use strict'

// Seleccionamos el elemento del encabezado 
const header = document.querySelector('.Header')
// Seleccionamos el botón y el elemento navegador que están dentro del encabezado
const headerBtn = header.querySelector('.Header-btn')
const headerNav = header.querySelector('.Header-nav')

// Añadimos un evento de clic al botón del encabezado que activa y desactiva la clase isActive
headerBtn.addEventListener('click', () => 
    headerNav.classList.toggle('isActive')
)

// Tabs 
// Seleccionamos todas las secciones con la clase 'Bridges'
document.querySelectorAll('.Bridges').forEach((section) => {
    // Seleccionamos todos los botones y los parrafos dentro de cada sección
    const bridgeBtns = section.querySelectorAll('.Bridge-button');
    const bridgeParagraphs = section.querySelectorAll('.Bridge-div');

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