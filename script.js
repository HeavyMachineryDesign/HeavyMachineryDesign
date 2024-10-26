document.addEventListener("DOMContentLoaded", () => {
    const detailsButtons = document.querySelectorAll(".details-button");
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    detailsButtons.forEach(button => {
        button.addEventListener("click", function() {
            const projectId = this.getAttribute("data-project");
            const detailsDiv = document.getElementById(`${projectId}-details`);

            if (detailsDiv.innerHTML === "") {
                fetch(`https://jsonplaceholder.typicode.com/posts/${projectId === 'excavator' ? 1 : 2}`)
                    .then(response => response.json())
                    .then(data => {
                        detailsDiv.innerHTML = `<strong>${data.title}</strong><p>${data.body}</p>`;
                    })
                    .catch(error => console.error('Error fetching data:', error));
            } else {
                detailsDiv.innerHTML = ""; // Toggle visibility
            }
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate form submission
        if (name && email && message) {
            formMessage.textContent = "Thank you for your message, we will get back to you soon!";
            form.reset();
        } else {
            formMessage.textContent = "Please fill in all fields.";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image file names here
    let currentIndex = 0;

    const slideImage = document.getElementById("slideImage");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    function updateImage() {
        slideImage.src = images[currentIndex];
    }

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image file names here
    let currentIndex = 0;

    const slideImage = document.getElementById("slideImage");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    function updateImage() {
        slideImage.src = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    }

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextButton.addEventListener("click", nextImage);

    // Automatic slider
    setInterval(nextImage, 3000); // Change image every 3 seconds
});

let interval;

function startSlider() {
    interval = setInterval(nextImage, 3000); // Change image every 3 seconds
}

function stopSlider() {
    clearInterval(interval);
}

document.getElementById("image-slider").addEventListener("mouseover", stopSlider);
document.getElementById("image-slider").addEventListener("mouseout", startSlider);

// Start the automatic slider when the page loads
startSlider();