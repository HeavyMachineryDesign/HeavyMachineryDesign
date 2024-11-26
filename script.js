document.addEventListener("DOMContentLoaded", () => {
    // Select elements for menu toggle and dropdowns
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    const backToTopButton = document.querySelector(".back-to-top");

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

  // Back to Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top");

    // Show/Hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Adjust as needed
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Smooth Scroll to Top on Click
    backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.carousel-item');
    
    const itemWidth = items[0].offsetWidth; // Width of one carousel item
    let currentIndex = 0;

    // Event listeners for navigation
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 4) { // 4 is the number of visible items
            currentIndex++;
            updateCarouselPosition();
        }
    });

    function updateCarouselPosition() {
        const newTransform = -currentIndex * itemWidth;
        carouselContainer.style.transform = `translateX(${newTransform}px)`;
    }
});
