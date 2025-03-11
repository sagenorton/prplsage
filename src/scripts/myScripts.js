console.log('OK');

if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
        const video = document.getElementById("heroVideo");
        const muteToggle = document.getElementById("muteToggle");
        let isPausedAtCheckpoint = false;
        let isPlayingFullAnimation = false; // Tracks if animation should continue fully
        const pauseTime = 6.9; // Time to pause at

        // Ensure video starts muted to avoid autoplay issues
        video.muted = true;
        video.autoplay = true;
        video.loop = false;
        video.play(); // Ensure autoplay

        // Once metadata is loaded, play the video
        video.addEventListener("loadedmetadata", function () {
            video.play();
        });

        // Pause at checkpoint (6.9s) if it's the first time playing
        video.addEventListener("timeupdate", function () {
            if (!isPausedAtCheckpoint && !isPlayingFullAnimation && video.currentTime >= pauseTime) {
                video.pause();
                isPausedAtCheckpoint = true;
            }
        });

        // Click to continue playing the full animation
        video.addEventListener("click", function () {
            if (isPausedAtCheckpoint) {
                video.play();
                isPausedAtCheckpoint = false;
                isPlayingFullAnimation = true; // Allow video to fully play
            }
        });

        // When the video fully finishes, restart from 0s and pause at 6.9s again
        video.addEventListener("ended", function () {
            video.currentTime = 0; // Restart from beginning
            video.play();
            isPausedAtCheckpoint = false;
            isPlayingFullAnimation = false; // Reset flag so it pauses at 6.9s again
        });

        // Mute/unmute toggle
        muteToggle.addEventListener("click", function () {
            video.muted = !video.muted;
            muteToggle.textContent = video.muted ? "🔇" : "🔊";
        });
    });
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

    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });

    document.querySelector('.lightbox .close-lightbox').addEventListener('click', closeLightbox);
    document.querySelector('.lightbox-control-next').addEventListener('click', nextLightboxImage);
    document.querySelector('.lightbox-control-prev').addEventListener('click', prevLightboxImage);
});


