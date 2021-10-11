const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel__photo");
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");
//line slides up
// const slideWidth = slides[0].getBoundingClientRect().width;
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index + "px";
// });
// console.log(slideWidth);
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
});
