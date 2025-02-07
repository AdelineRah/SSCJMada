let index = 0;

function moveSlide(step) {
    const slides = document.querySelector(".slides");
    const totalImages = document.querySelectorAll(".slides img").length;
    
    index += step;

    if (index < 0) {
        index = totalImages - 1;
    } else if (index >= totalImages) {
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
}