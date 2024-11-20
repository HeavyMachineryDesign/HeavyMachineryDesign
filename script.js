
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
document.querySelector('.nav-button').addEventListener('click', function() {
  const dropdown = document.querySelector('.dropdown-menu');
  dropdown.classList.toggle('active'); // Toggle visibility
});

// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // Show when scrolled 300px down
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll back to top when the button is clicked
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
});
