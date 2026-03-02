let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function mostrarSlide() {

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
}

setInterval(mostrarSlide, 4000);