`use strict`

// Seleccionamos el botón y el elemento navegador que están dentro del encabezado
const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

// Añadimos un evento de clic al botón del encabezado que activa y desactiva la clase isActive
headerBtn.addEventListener('click', () => 
    headerNav.classList.toggle('isActive')
)

// Selecciona el elementos del background y del título
const excursionesBackGround = document.querySelector('.Excursiones-background')
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
