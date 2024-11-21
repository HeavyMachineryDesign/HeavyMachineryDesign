document.addEventListener("DOMContentLoaded", () => {
    // Select elements for menu toggle and dropdowns
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const backToTopButton = document.getElementById("back-to-top");

    // **Toggle main menu for mobile view**
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // **Handle dropdown toggle clicks**
    if (dropdownToggles) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle("active");
            });
        });
    }

   // JavaScript to toggle the Back to Top button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Show button after 300px scroll
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }


// Scroll to top on click
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});
