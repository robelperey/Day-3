// grab elements from html
const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");

// will remove class name 'active' once clicked
btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

// will add class name 'active', pause video and set video current time to 0 once clicked
closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
