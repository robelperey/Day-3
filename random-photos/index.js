const photoContainerEl = document.querySelector(".photo-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  imageNum = 10;
  addNewImages();
});

// create n number of imgs and adding src value
function addNewImages() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    photoContainerEl.appendChild(newImgEl);
  }
}
