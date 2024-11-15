document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", () => {
            menu.classList.toggle("collapsed");
        });
    }

    // Details Buttons
    const detailsButtons = document.querySelectorAll(".details-button");

    detailsButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectId = this.getAttribute("data-project");
            const detailsDiv = document.getElementById(`${projectId}-details`);

            if (detailsDiv) {
                if (detailsDiv.innerHTML === "") {
                    fetch(
                        `https://jsonplaceholder.typicode.com/posts/${
                            projectId === "excavator" ? 1 : 2
                        }`
                    )
                        .then(response => {
                            if (!response.ok) {
                                throw new Error("Network response was not ok");
                            }
                            return response.json();
                        })
                        .then(data => {
                            detailsDiv.innerHTML = `<strong>${data.title}</strong><p>${data.body}</p>`;
                        })
                        .catch(error =>
                            console.error("Error fetching data:", error)
                        );
                } else {
                    detailsDiv.innerHTML = ""; // Toggle visibility
                }
            }
        });
    });

    // Form Submission
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const message = document.getElementById("message")?.value.trim();

            if (name && email && message) {
                formMessage.textContent =
                    "Thank you for your message, we will get back to you soon!";
                form.reset();
            } else {
                formMessage.textContent = "Please fill in all fields.";
            }
        });
    }

    // Image Slider
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image file names here
    let currentIndex = 0;
    const slideImage = document.getElementById("slideImage");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const slider = document.getElementById("image-slider");
    let interval;

    function updateImage() {
        if (slideImage) {
            slideImage.src = images[currentIndex];
        }
    }

    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    }

    if (prevButton) {
        prevButton.addEventListener("click", prevImage);
    }

    if (nextButton) {
        nextButton.addEventListener("click", nextImage);
    }

    function startSlider() {
        interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    }

    function stopSlider() {
        clearInterval(interval);
    }

    if (slider) {
        slider.addEventListener("mouseover", stopSlider);
        slider.addEventListener("mouseout", startSlider);
    }

    // Start the automatic slider when the page loads
    startSlider();
});
