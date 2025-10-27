let isDoll = true; // Track current state

function transform() {
  const img = document.getElementById("crochet");
  const overlay = document.getElementById("overlay");
  const sound = document.getElementById("transformSound");

  // Play sparkle sound
  sound.currentTime = 0;
  sound.play();

  // Zoom into current image
  img.classList.add("zoomed");

  // Fade in overlay
  setTimeout(() => {
    overlay.classList.add("fade-overlay");
  }, 500);

  // Switch image after overlay fades in
  setTimeout(() => {
    img.src = isDoll ? "bouquet.png" : "doll.png";
    isDoll = !isDoll;

    img.classList.remove("zoomed");
    overlay.classList.remove("fade-overlay");
  }, 1000);
}

