let currentIndex = 0; // Track the current image index
const slides = document.querySelectorAll('.slide'); // Get all slide images
const totalSlides = slides.length; // Total number of slides

// Function to update the slider's visible image
function updateSlider() {
    // Calculate the offset for the slider based on the current index
    const slider = document.querySelector('.slider');
    const offset = -currentIndex * 100; // Each slide takes 100% width
    slider.style.transform = `translateX(${offset}%)`;
}

// Event listener for the "next" button
document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
    updateSlider(); // Update the slider
});

// Event listener for the "prev" button
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
    updateSlider(); // Update the slider
});

// Optional: Automatic slide transition every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide automatically
    updateSlider(); // Update the slider
}, 5000);


// Open the pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Close the pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Toggle between login and register forms
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}
