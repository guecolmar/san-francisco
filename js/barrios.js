
// Seleccionamos el botón y el elemento navegador que están dentro del encabezado
const headerBtn = document.querySelector('.Header-btn')
const headerNav = document.querySelector('.Header-nav')

// Añadimos un evento de clic al botón del encabezado que activa y desactiva la clase isActive
headerBtn.addEventListener('click', () => 
    headerNav.classList.toggle('isActive')
)