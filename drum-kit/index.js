const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

// create button and audio element for each item on the array.
kits.forEach((kit) => {
  // create btnEl added class name, text and bg image
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.textContent = kit;
  btnEl.style.backgroundImage = `url("images/${kit}.png")`;
  // appended to container
  containerEl.appendChild(btnEl);

  // create audioEl adding path to src attrib
  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  // appended to container
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
