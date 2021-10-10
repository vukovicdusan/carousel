let imgs = document.getElementsByClassName("carousel__photo");
let totalImgs = imgs.length;
let move = true;
let slide = 0;

imgs[totalImgs - 1].classList.add("prev");
imgs[0].classList.add("active");
imgs[1].classList.add("next");

function setEventListeners() {
  let next = document.getElementsByClassName("carousel__button--next");
  let prev = document.getElementsByClassName("carousel__button--prev");

  next.addEventListener("click", moveNext);
  prev.addEventListener("click", movePrev);
}
function moveNext() {
  if (!moving) {
    if (slide === totalImgs - 1) {
      slide = 0;
    } else {
      slide++;
    }
    moveCarouselTo(slide);
  }
}

function movePrev() {
  if (!moving) {
    if (slide === 0) {
      slide = totalImgs - 1;
    } else {
      slide--;
    }
    moveCarouselTo(slide);
  }
}

function disableInteraction() {
  moving = true;
  setTimeout(() => {
    moving = false;
  }, 500);
}

function moveCarouselTo(slide) {
  // Check if carousel is moving, if not, allow interaction
  if (!moving) {
    // temporarily disable interactivity
    disableInteraction();
    // Update the "old" adjacent slides with "new" ones
    var newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2;
    // Test if carousel has more than three items
    if (totalImgs - 1 > 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = totalImgs - 1;
      } else if (newNext >= totalImgs - 1) {
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = totalImgs - 1;
        oldPrevious = totalImgs - 2;
        oldNext = slide + 1;
      } else if (slide === totalImgs - 1) {
        newPrevious = slide - 1;
        newNext = 0;
        oldNext = 1;
      }
      // Now we've worked out where we are and where we're going,
      // by adding/removing classes we'll trigger the transitions.
      // Reset old next/prev elements to default classes
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;
      // Add new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}
function initCarousel() {
  setInitialClasses();
  setEventListeners();
  // Set moving to false so that the carousel becomes interactive
  moving = false;
}

initCarousel();
