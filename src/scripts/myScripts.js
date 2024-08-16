console.log('OK');

document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        }
    });
});


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
