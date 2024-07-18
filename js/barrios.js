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