
/* Keep track of story and photos */
let current = "one";
let step = 0;

/* Find HTML elements */
let photo = document.getElementById("photo");
let caption = document.getElementById("caption");
let title = document.getElementById("title");
let stepText = document.getElementById("step");
let nextButton = document.getElementById("next");
let switchButton = document.getElementById("switch");

/* Show the photo and caption */
function show() {
  let photoSrc = "";
  let photoAlt = "";
  let captionText = "";

  /* Story 1 */
  if (current === "one") {
    title.innerHTML = "Story One: Study, Unwind, Rest";

    if (step === 0) {
      photoSrc = "images/library.jpeg";
      photoAlt = "Students studying in a library";
      captionText = "The day starts with a long study session, and everyone is focused.";
    } else if (step === 1) {
      photoSrc = "images/pool.jpeg";
      photoAlt = "Billiard balls on a pool table";
      captionText = "Break time. A game of pool to clear my head.";
    } else {
      photoSrc = "images/sunset-rise.jpeg";
      photoAlt = "Sunset over a neighbourhood";
      captionText = "The day ends with a beautiful sunset and a calm walk home.";
    }
  }

  /* Story 2 */
  else {
    title.innerHTML = "Story Two: The Plan That Slipped";

    if (step === 0) {
      photoSrc = "images/sunset-rise.jpeg";
      photoAlt = "Sunrise over a neighbourhood";
      captionText = "I wake up with a perfect plan to lock-in for midterms.";
    } else if (step === 1) {
      photoSrc = "images/pool.jpeg";
      photoAlt = "Billiard balls on a pool table";
      captionText = "Just one quick game first, and that's where the plan starts to slip.";
    } else {
      photoSrc = "images/library.jpeg";
      photoAlt = "Students studying in a library";
      captionText = "Now it's lock-in time, and everyone else has been here for hours.";
    }
  }

  /* Update photo and text */
  photo.style.opacity = "0";
  photo.src = photoSrc;
  photo.alt = photoAlt;
  caption.innerHTML = captionText;


  if (step === 0) {
    stepText.innerHTML = "Beginning (1 of 3)";
  } else if (step === 1) {
    stepText.innerHTML = "Middle (2 of 3)";
  } else {
    stepText.innerHTML = "End (3 of 3)";
  }

  /* Change button text */
  if (step === 2) {
    nextButton.innerHTML = "Start over";
  } else {
    nextButton.innerHTML = "Next photo →";
  }

  photo.style.opacity = "1";
}

/* Go to next photo */
function nextStep() {
  if (step < 2) {
    step = step + 1;
  } else {
    step = 0;
  }

  show();
}

/* Switch stories */
function switchStory() {
  if (current === "one") {
    current = "two";
  } else {
    current = "one";
  }

  step = 0;
  show();
}

/* Run functions when each buttons is clicked */
nextButton.onclick = nextStep;
photo.onclick = nextStep;
switchButton.onclick = switchStory;

/* Show the first photo */
show();
