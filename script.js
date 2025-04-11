// Smooth scroll to top when clicking "More Information" button
document.addEventListener("DOMContentLoaded", function () {
    const infoButton = document.querySelector(".info-section button");

    if (infoButton) {
        infoButton.addEventListener("click", function () {
            // Redirect or scroll
            window.location.href = "Information.html"; // Change this to your actual page
        });
    }

    // Add hover effect via JS (optional enhancement)
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.03)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
});

// JavaScript for slideshow functionality
let slideIndex = 0;
showSlides(slideIndex);

// Function to show the current slide
function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    // Wrap around if index is out of bounds
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and deactivate all dots
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the current slide and activate the corresponding dot
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

// Function to go to the previous slide
function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

// Function to go to a specific slide
function currentSlide(index) {
    slideIndex = index;
    showSlides(slideIndex);
}
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you for contacting us! We will get back to you shortly.');
});