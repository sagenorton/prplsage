console.log('OK');


//FOLLOW CURSOR
document.addEventListener('mousemove', function(event) {
    movePupil(event, 'left-eye');
    movePupil(event, 'right-eye');
});

function movePupil(event, eyeId) {
    const eye = document.getElementById(eyeId);
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;
    
    // Determine the distance from the center to the mouse position
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Determine the maximum radius the pupil should move (eye radius - pupil radius)
    // This value is significantly smaller than before to restrain the movement
    const maxMove = eyeRect.width / 35; // Reduced movement range

    // Calculate the ratio of the pupil movement
    const moveRatio = Math.min(maxMove, distance) / distance;
    
    // Calculate the new position
    const pupilX = moveRatio * deltaX;
    const pupilY = moveRatio * deltaY;

    // Update the pupil's position
    eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
}


document.addEventListener('DOMContentLoaded', () => {
    // CAROUSEL
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

    showSlide(currentSlide);

    // LIGHTBOX
    let currentLightboxIndex = 0;

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const images = document.querySelectorAll('.carousel-item img');

    function openLightbox(index) {
        currentLightboxIndex = index;
        lightbox.style.display = 'flex';
        lightboxImg.src = images[currentLightboxIndex].src;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function nextLightboxImage() {
        currentLightboxIndex = (currentLightboxIndex + 1) % images.length;
        lightboxImg.src = images[currentLightboxIndex].src;
    }

    function prevLightboxImage() {
        currentLightboxIndex = (currentLightboxIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentLightboxIndex].src;
    }

    // Add click event to each carousel image to open lightbox
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    document.querySelector('.lightbox .close-lightbox').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-control-next').addEventListener('click', nextLightboxImage);
    document.querySelector('.lightbox-control-prev').addEventListener('click', prevLightboxImage);
});


// SKILLS-CONTAINER



