const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

/* gallery */

document.querySelectorAll(".video-container video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-video").style.display = "block";
    document.querySelector(".popup-video video").src = vid.getAttribute("src");
  };
});

var video = document.querySelectorAll("video");

video.forEach((play) =>
  play.addEventListener("click", () => {
    play.classList.toggle("active");

    if (play.paused) {
      play.play();
    } else {
      play.pause();
    }
  })
);

document.querySelector(".popup-video span").onclick = () => {
  document.querySelector(".popup-video").style.display = "none";
};

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
