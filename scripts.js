document.addEventListener("DOMContentLoaded", function() {
    var fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        fadeInElements.forEach(function(element) {
            var rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

const slideshow = document.querySelector('.slideshow');
const slides = document.querySelectorAll('.slide');

slides[0].classList.add('active');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 5000); /* Change slide every 5 seconds */