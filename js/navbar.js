// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('nav ul.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
