const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

/* show more */

var video = document.querySelectorAll(".video");
var btn = document.querySelector(".btn");
var currentvideo = 9;
btn.addEventListener("click", function () {
  for (var i = currentvideo; i < currentvideo + 3; i++) {
    if (video[i]) {
      video[i].style.display = "block";
    }
  }

  currentvideo += 3;
  if (currentvideo >= video.length) {
    event.target.style.display = "none";
  }
});
