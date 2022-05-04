//Rendering first number
var randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);


//Setting up the photo in accordance with number!
var photoGrabber1 = randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + photoGrabber1);


//Rendering second number(for difference from first!)
var randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);

//Setting up the photo in accordance with number!

var photoGrabber2 = randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + photoGrabber2);



//Setting h1 "Winner" in accordance with the random output

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
