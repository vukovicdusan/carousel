const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel__photo");
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");

next.addEventListener("click", (e) => {
  let current = document.querySelector(".current");
  let next = current.nextElementSibling;
 

  if (slides[slides.length - 1].classList.contains("current")) {
    slides[0].classList.add("current");
    slides[slides.length - 1].classList.remove("current");
  } else {
    current.classList.remove("current");
    next.classList.add("current");
  }
  animate(next);
});

const animate = (element) => {
  element.animate([
    {transform: 'translate(100%)'},
    {transform: 'translate(0)'}
  ], {
    duration: 1000,
  });
}

prev.addEventListener("click", e => {
  let current = document.querySelector(".current");
  let prev = current.previousElementSibling;

  if(slides[0].classList.contains("current")){
    slides[slides.length-1].classList.add("current");
    slides[0].classList.remove("current");
  } else {
    current.classList.remove("current");
    prev.classList.add("current");
  }
});
