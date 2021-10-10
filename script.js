const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel__photo");
const next = document.querySelector(".carousel__button--next");
const prev = document.querySelector(".carousel__button--prev");
//line slides up
const slideWidth = slides[0].getBoundingClientRect().width;
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});

// function slideMover(currentSlide, targetSlide) {
//   let amountToMove = targetSlide.style.left;
//   track.style.transform = "translate(-" + amountToMove + ")";
//   currentSlide.classList.remove("current");
//   targetSlide.classList.add("current");

//   if (slides[0].classList.contains("current")) {
//     prev.classList.add("no-see");
//   } else if (slides[slides.length - 1].classList.contains("current")) {
//     next.classList.add("no-see");
//   } else {
//     prev.classList.remove("no-see");
//     next.classList.remove("no-see");
//   }
// }

//asign the clicks
next.addEventListener("click", (e) => {
  let current = document.querySelector(".current");
  let next = current.nextElementSibling;
  let nextMove = next.style.left;
  // let currentMove = slideWidth * (slides.length - 1);
  next.style.transform = "translate(-" + nextMove + ")";
  current.classList.add("previous-current");
  current.classList.remove("current");
  let previousCurrent = document.querySelector(".previous-current");
  //call new function for add/remove and move
  addRemoveAndMove(previousCurrent);

  // previousCurrent.style.transform = "translate(" + currentMove + ")";
  next.classList.add("current");
  console.log(nextMove);
  // previousCurrent.classList.remove(".previous-current");
});

function addRemoveAndMove(element) {
  let amountToMove = slideWidth * (slides.length - 1);
  element.style.transform = "translate(" + amountToMove + "px)";
  element.classList.remove("previous-current");
  console.log(amountToMove);
}

prev.addEventListener("click", (e) => {
  let current = document.querySelector(".current");
  let prev = current.previousElementSibling;
  // slideMover(current, prev);
});
