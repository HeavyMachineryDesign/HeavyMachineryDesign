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
                const parent = toggle.parentElement;
                parent.classList.toggle("active");
            });
        });
    }

    // Back to Top Button Logic
    const backToTopButton = document.querySelector(".back-to-top");
    if (backToTopButton) {
        // Show/Hide the button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) { // Adjust threshold as needed
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        });

        // Smooth Scroll to Top on Click
        backToTopButton.addEventListener("click", (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    }

    // Carousel Navigation
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.carousel-item');
    if (carouselContainer && prevButton && nextButton && items.length > 0) {
        const itemWidth = items[0].offsetWidth; // Width of one carousel item
        let currentIndex = 0;

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarouselPosition();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < items.length - 4) { // Adjust visible items count (e.g., 4 items)
                currentIndex++;
                updateCarouselPosition();
            }
        });

        function updateCarouselPosition() {
            const newTransform = -currentIndex * itemWidth;
            carouselContainer.style.transform = `translateX(${newTransform}px)`;
        }
    }

    // Carousel Drag/Swipe Functionality
    if (carouselContainer) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        carouselContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            carouselContainer.classList.add('dragging');
            startX = e.pageX - carouselContainer.offsetLeft;
            scrollLeft = carouselContainer.scrollLeft;
        });

        carouselContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            carouselContainer.classList.remove('dragging');
        });

        carouselContainer.addEventListener('mouseup', () => {
            isDragging = false;
            carouselContainer.classList.remove('dragging');
        });

        carouselContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            carouselContainer.scrollLeft = scrollLeft - walk;
        });

        // Touch support for swipe
        carouselContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - carouselContainer.offsetLeft;
            scrollLeft = carouselContainer.scrollLeft;
        });

        carouselContainer.addEventListener('touchend', () => {
            isDragging = false;
        });

        carouselContainer.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - carouselContainer.offsetLeft;
            const walk = (x - startX) * 2;
            carouselContainer.scrollLeft = scrollLeft - walk;
        });
    }
});
