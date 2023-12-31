
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');

let currentIndex = 0;
const totalSlides = slideImages.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

//Optional: Automatic slideshow
// setInterval(() => {
//     showSlide(currentIndex + 1);
// }, 2000); // Change slide every 3 seconds