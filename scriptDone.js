const slides = document.querySelectorAll(".carousel__photo");
const slideWidth = slides[0].getBoundingClientRect().width;
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");
const carousel = document.querySelector(".carousel-track");
slides.forEach(
  (slide, index) => (slide.style.left = slideWidth * index + "px")
);

const moveToSlide = (currentSlide, targetSlide) => {
  carousel.style.transform = "translate(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
};

// const nextSlide = () => {
next.addEventListener("click", (e) => {
  let current = document.querySelector(".current");
  let nextSlide = current.nextElementSibling;
  //   let amountToMove = nextSlide.style.left;
  //   carousel.style.transform = "translate(-" + amountToMove + ")";
  //   current.classList.remove("current");
  //   nextSlide.classList.add("current");
  moveToSlide(current, nextSlide);
});
// };

// const prevSlide = () => {
prev.addEventListener("click", (e) => {
  let current = document.querySelector(".current");
  let prevSlide = current.previousElementSibling;
  //   let amountToMove = prevSlide.style.left;
  //   carousel.style.transform = "translate(-" + amountToMove + ")";
  //   current.classList.remove("current");
  //   prevSlide.classList.add("current");
  moveToSlide(current, prevSlide);
});
// };
