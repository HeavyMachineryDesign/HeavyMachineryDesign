<script>
    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menuToggle");
        const menu = document.getElementById("menu");
        const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

        // Toggle main menu for mobile view
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        // Handle dropdown toggle clicks
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle("active");
            });
        });
    });
</script>
