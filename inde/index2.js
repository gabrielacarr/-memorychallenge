// CANVAS
const canvas = document.querySelector("canvas");
//const c = canvas.getContext("2d");
const cards = document.querySelectorAll(".memoryCard");
// dot score
const dots = document.querySelectorAll(".dot");
//set variables for timer
let second = 0;
let minute = 0;
let hour = 0;
let timer = document.querySelector(".timer");
let interval;
// global variables
let clicks = 0;
let picOne = "";
// array of images
// array hols all cards
let start = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/featherwings.png", 
  "/images/7.png",
  "/images/9.png",
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/featherwings.png", 
  "/images/7.png",
  "/images/9.png",
  "./images/scorpion.png",
  "./images/scorpion.png",
];
let start2 = [
    "./images/1.png", // ram side long
    "./images/2.png", // ram front
    "./images/3.png", // unicorn
    "./images/4.png", // black snake down
    "./images/5.png", // black snake up
    "./images/scorpNew.png",
    "./images/7.png", // bull white
    "./images/9.png", //snake with flowers
    "./images/1.png", // ram side long
    "./images/2.png", // ram front
    "./images/3.png", // unicorn
    "./images/4.png", // black snake down
    "./images/5.png", // black snake up
    './images/scorpNew.png',
    "./images/7.png", // bull white
    "./images/9.png", // snake with flowers
    "./images/goldbull.png", 
    "./images/goldbull.png", 
    "./images/goldfeather.png",
    "./images/goldfeather.png",
    "./images/golddeer.png",
    "./images/golddeer.png",
    "./images/uni2.png",
    "./images/uni2.png",
  

  ];
 console.log(start2.length)

let arrayimage = document.getElementsByClassName("backFace");
console.log(arrayimage);
// sound
let mySound;


// GAME STARTS
setTimeout(gameStarts, 2000)
function gameStarts() {
  document.querySelectorAll(".memoryCard").forEach((card) => {
    card.className += " turned";
  });
  startClock()
}
// setTimeout(gameStarts, 3000); //too fast 3k
function startClock(){
  let time = 140;
  setInterval(
    function(){
      if(time === 0){
      
        alert("Game has terminated")
        location.href = "/"
      }
      
      document.querySelector('#clock').innerHTML = time--
      if(time < 0){
          //stop the timer from counting down.  document.queryseleblah bah ("#clock") = time == 0 ??
          document.querySelector("#clock").innerHTML = 0 // timer stops 
      }
    } 
    ,1000
  )
}
document.querySelectorAll(".memoryCard").forEach((card) => {
  //Loop through all cards
  card.addEventListener("click", function (e) {
    clicks++;
    console.log(clicks, this);
    window.t = this;
    this.className = "memoryCard";
    checkWin(this);
  });
});

// SHUFFLE CRADS

for (let i = 0; i < arrayimage.length; i++) {
    let index = Math.floor(Math.random() * start2.length);
    console.log(start2[index], i);
  arrayimage[i].src = start2[index];
    start2.splice(index, 1); // made all cards even
 
  let score = 0;


  // score 
  function addScore(){
  // alert("Your selection matched!");
  score++;
  let dot = `<li class="dot"></li>`;
  document.querySelector(".dots").innerHTML += dot;
  }

  // CHECK WIN
  function checkWin(pic) {
    if (clicks % 2 !== 0) {
      //first turn
      picOne = pic;
    } else {
      //second turn
      if (picOne.children[1].src === pic.children[1].src) {
        // if they are matched cards
        // alert
        setTimeout(function () {
          
          addScore()
        }, 500);
      } else {
        // when cards do not match
        let dot = `<li class="wrong"></li>`;
        document.querySelector(".dots").innerHTML += dot;

        setTimeout(function () {
          picOne.className = "memoryCard turned";
          pic.className = "memoryCard turned";
        }, 1000);
      }
    }
  }

  // MEMORY CLASS
  // needs array of cards as param and set to this.cards property

  class memoryGame {
    constructor(cards) {
      this.cards = cards;
      this.pickedCards; // needs arra for card storage of cards selected
      this.pairsGuessed; // will add everytime players selects and guess
      this.pairsClicked; // will add everytime players selects and guess
      // add the rest of the class properties here
    }
    // SHUFFLE FOR NEW GAME
    shuffleCards() {}
    checkIfPair(card1, card2) {}
    isFinished() {}
  }}
