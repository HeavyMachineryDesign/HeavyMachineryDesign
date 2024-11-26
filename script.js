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

    // Carousel Navigation
    const carouselContainer = document.querySelector('.carousel-container');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.carousel-item');
    if (carouselContainer && prevButton && nextButton && items.length > 0) {
        const itemWidth = items[0].offsetWidth;
        let currentIndex = 0;
        const visibleItems = Math.floor(carouselContainer.offsetWidth / itemWidth);

        function updateCarouselPosition() {
            const newTransform = -currentIndex * itemWidth;
            carouselContainer.style.transform = `translateX(${newTransform}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarouselPosition();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < items.length - visibleItems) {
                currentIndex++;
                updateCarouselPosition();
            }
        });
    }

    // Carousel Drag/Swipe Functionality
    if (carouselContainer) {
        let isDragging = false;
        let startX;
        let scrollLeft;

        const startDrag = (e) => {
            isDragging = true;
            startX = (e.pageX || e.touches[0].pageX) - carouselContainer.offsetLeft;
            scrollLeft = carouselContainer.scrollLeft;
        };

        const stopDrag = () => {
            isDragging = false;
            carouselContainer.classList.remove('dragging');
        };

        const doDrag = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = (e.pageX || e.touches[0].pageX) - carouselContainer.offsetLeft;
            const walk = (x - startX) * 2; // Adjust scroll speed
            carouselContainer.scrollLeft = scrollLeft - walk;
        };

        carouselContainer.addEventListener('mousedown', startDrag);
        carouselContainer.addEventListener('touchstart', startDrag);

        carouselContainer.addEventListener('mouseleave', stopDrag);
        carouselContainer.addEventListener('mouseup', stopDrag);
        carouselContainer.addEventListener('touchend', stopDrag);

        carouselContainer.addEventListener('mousemove', doDrag);
        carouselContainer.addEventListener('touchmove', doDrag);
    }
});
