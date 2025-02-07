let index = 0;

function moveSlide(step) {
    console.log("ok");
    
    const slides = document.querySelector(".slides");
    console.log(slides);
    
    const totalImages = document.querySelectorAll(".slides img").length;
    console.log(totalImages);
    
    index += step;

    if (index < 0) {
        index = totalImages - 1;
    } else if (index >= totalImages) {
        index = 0;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
}