var audio = new Audio("./spiderman-spiderman.mp3");

function call() {
  audio.play();
  document.querySelector("img").classList.add("show");
}
function send() {
  document.querySelector("img").classList.remove("show");
  audio.pause();
}