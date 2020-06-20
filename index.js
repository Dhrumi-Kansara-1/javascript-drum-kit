//Detecting button press
var btn = document.querySelectorAll(".drum");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimationAdd(buttonInnerHtml);
  });
}
//Detecting keypress
document.addEventListener("keypress", function(event) {
  playSound(event.key);
  buttonAnimationAdd(event.key);
});

function playSound(char) {
  switch (char) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    default:
      console.log(char);
  }
}

function buttonAnimationAdd(char) {
  var selectedClass = "." + char;
  var activeButton = document.querySelector(selectedClass);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
