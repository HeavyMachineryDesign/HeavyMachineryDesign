<script type="text/javascript">
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
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener("click", (e) => {
                e.preventDefault();
                toggle.parentElement.classList.toggle("active");
            });
        });

        // Back to Top Button Logic
        const backToTopButton = document.querySelector(".back-to-top");
        if (backToTopButton) {
            window.addEventListener("scroll", () => {
                backToTopButton.classList.toggle("show", window.scrollY > 300);
            });

            backToTopButton.addEventListener("click", (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        // Carousel logic
        const prevButton = document.querySelector('.carousel-control-prev');
        const nextButton = document.querySelector('.carousel-control-next');
        const carouselInner = document.querySelector('.carousel-inner');
        let currentIndex = 0;

        function updateCarousel() {
            const items = carouselInner.children;
            const itemWidth = items[0].offsetWidth;
            carouselInner.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextButton.addEventListener('click', () => {
            const items = carouselInner.children;
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        function autoSlide() {
            const items = carouselInner.children;
            if (currentIndex < items.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Reset to the first item
            }
            updateCarousel();
        }

        // Set an interval to automatically move to the next slide every 3 seconds
        setInterval(autoSlide, 3000);

        updateCarousel(); // Initialize the carousel position

        // Disable cut, copy, paste, and right-click
        $('body').on('cut copy paste', function(e) { 
            e.preventDefault(); 
        });
        
        $("body").on("contextmenu", function(e){ 
            return false; 
        });

        $('#id').on('cut copy paste', function (e) { 
            e.preventDefault(); 
        });
        $("#id").on("contextmenu", function(e){ 
            return false; 
        });
    });

    // Image Slider Logic
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }    
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

    function plusSlides(n) {
        showSlidesManual(slideIndex += n);
    }

    function currentSlide(n) {
        showSlidesManual(slideIndex = n);
    }

    function showSlidesManual(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1; }    
        if (n < 1) { slideIndex = slides.length; }    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].className += " active";
    }
</script>

<script src="jquery.min.js"></script>
