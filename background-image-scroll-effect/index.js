const bgImageEl = document.querySelector("#bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

// decreases opacity and background size while scrolling down
function updateImage() {
  bgImageEl.style.opacity = 1 - window.scrollY / 800;
  bgImageEl.style.backgroundSize = 160 - window.scrollY / 18 + "%";
}
