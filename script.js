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

  
document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0; // Track the current index
    const totalItems = document.querySelectorAll(".carousel-item").length;

    const updateCarouselPosition = () => {
        const itemWidth = document.querySelector(".carousel-item").offsetWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
        updateCarouselPosition();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarouselPosition();
    });

    // Ensure responsive behavior when resizing
    window.addEventListener("resize", updateCarouselPosition);
});


    
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
