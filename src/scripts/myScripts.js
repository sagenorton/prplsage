console.log('OK');


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

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    document.querySelector('.lightbox .close-lightbox').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-control-next').addEventListener('click', nextLightboxImage);
    document.querySelector('.lightbox-control-prev').addEventListener('click', prevLightboxImage);
});


