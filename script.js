// JavaScript to toggle the collapsible menu
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('expanded');
    navMenu.classList.toggle('collapsed');
});
