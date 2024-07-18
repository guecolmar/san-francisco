`use strict`

// HEADER 
const header = document.querySelector('.Header-excursiones')
const headerBtn = header.querySelector('.Header-btn')
const headerNav = header.querySelector('.Header-nav')

headerBtn.addEventListener('click', () => {
    headerNav.classList.toggle('isActive')
})

// Selecciona el elemento con la clase 'Excursiones-background'
const excursionesBackGround = document.querySelector('.Excursiones-background')

// Selecciona el elemento con la clase 'Excursiones-h1'
const excursionesH1 = document.querySelector('.Excursiones-h1')

// Función que aplica el efecto parallax
const parallax = () => {
    // Obtiene la posición de desplazamiento vertical de la ventana
    let scrollPosition = window.scrollY
    
    // Ajusta la posición de fondo del elemento 'Excursiones-background' para crear el efecto parallax
    excursionesBackGround.style.backgroundPosition = 'center ' + (-scrollPosition / 4) + 'px'
    
    // Ajusta el margen superior del elemento 'Excursiones-h1' para crear un efecto de desplazamiento
    excursionesH1.style.marginTop = (scrollPosition / 3) + 'px'
    
    // Ajusta la opacidad del elemento 'Excursiones-h1' para crear un efecto de desvanecimiento
    excursionesH1.style.opacity = 1 - (scrollPosition / 300)
};

// Agrega un evento de desplazamiento a la ventana que llama a la función parallax
window.addEventListener('scroll', () => {
    parallax()
})


const excursionesWrappers = document.querySelectorAll('.Excursiones-wrapper');

excursionesWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
        wrapper.querySelector('.Excursiones-span').classList.add('active');
    });

    wrapper.addEventListener('mouseleave', () => {
        wrapper.querySelector('.Excursiones-span').classList.remove('active');
    });
});