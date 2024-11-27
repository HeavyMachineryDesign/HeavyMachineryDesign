document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle for Mobile View
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    }

    // Handle Dropdown Toggles
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    if (dropdownToggles.length > 0) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();
                toggle.parentElement.classList.toggle("active");
            });
        });
    }

    // Back to Top Button Logic
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Carousel Logic
    const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    carouselContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, carouselContainer.children.length - 1);
    carouselContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
});
