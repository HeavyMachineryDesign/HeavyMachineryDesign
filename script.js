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

    // **Handle "Back to Top" button visibility and scrolling**
    if (backToTopButton) {
        // Show or hide the "Back to Top" button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });

        // Scroll back to the top when the button is clicked
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scrolling effect
            });
        });
    }
});
