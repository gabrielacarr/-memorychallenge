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
  "/images/6.png",
  "/images/7.png",
  "/images/9.png",
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/9.png",
  "./images/scorpion.png",
  "./images/scorpion.png",
];
let start2 = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    "./images/scorpion.png",
    "/images/7.png",
    "/images/9.png",
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
    "./images/5.png",
    '/images/scorpion',
    "/images/7.png",
    "/images/9.png",
  ];
 

let arrayimage = document.getElementsByClassName("backFace");
console.log(arrayimage);
// sound
let mySound;


// GAME STARTS

function gameStarts() {
  document.querySelectorAll(".memoryCard").forEach((card) => {
    card.className += " turned";
  });
}
setTimeout(gameStarts, 3000); //too fast 3k

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
  console.log(typeof arrayimage[i]);
  let index = Math.floor(Math.random() * start.length);
  arrayimage[i].src = start[index];
    start.splice(index, 1); // msde all cards even
  //  } else {
  //     start.length -= 1
  //  } //random numbers

  // }
  // trying to get even amount of cards to match to complete board
  // not sure how to complete //////////////////////////////////////////////////////////////
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
  }

  // TIMER
  // time does not relfect  nor do the move counts increase //////////////////////////////////////////

  // TIMER COUNT SELECTION
  // function moveCount() {
  //   moves++;
  //   counter.innerHTML = `${moves} move(s)`;
  //   //start timer on first click
  //   if (moves == 1) {
  //     second = 0;
  //     minute = 0;
  //     hour = 0;
  //     startTimer();
  //   }
  //   // establish rating based on moves
  //   if (moves > 8 && moves < 12) {
  //     for (i = 0; i < 4; i++) {
  //       if (i > 1) {
  //         stars[i].style.visibility = "collapse";
  //       }
  //     }
  //   } else if (moves > 13) {
  //     for (i = 0; i < 3; i++) {
  //       if (i > 0) {
  //         stars[i].style.visibility = "collapse";
  //       }
  //     }
  //   }
  // }

  // BEGIN TIMER
  function startTimer() {
    interval = setInterval(function () {
      timer.innerHTML = `${minute} mins ${second} secs`;
      second++;
      if (second == 60) {
        minute++;
        second = 0;
      }
      if (minute == 60) {
        hour++;
        minute = 0;
      }
    }, 1000);
  }
}
function endGame() {
  clearInterval(interval);
  totalGameTime = timer.innerHTML;
  starRating = document.querySelector(".rating").innerHTML;

  //show modal on game end
  modalElement.classList.add("show-modal");

  //show totalGameTime, moves and finalStarRating in Modal
  totalGameTimeElement.innerHTML = totalGameTime;
  totalGameMovesElement.innerHTML = moves;
  finalStarRatingElement.innerHTML = starRating;

  matchedCards = [];
  closeModal();
}

function closeModal() {
  closeModalIcon.addEventListener("click", function () {
    modalElement.classList.remove("show-modal");
    startGame();
  });
}

function playAgain() {
  modalElement.classList.remove("show-modal");
  startGame();
}

// wait for some milliseconds before game starts
window.onload = function () {
  setTimeout(function () {
    startGame();
  }, 1200);
};




// commented out, due to not functioning
// let hasFlippedCard = false;
// let firstCard, secondCard;

// function flipCard() {
//   if (lockBoard) return;
//   if (this === firstCard) return;

//   this.classList.add("flip");

//   if (!hasFlippedCard) {
//     //first time player has selected card
//     hasFlippedCard = true;
//     firstCard = this;
//     return;
//     // second selection
//     hasFlippedCard = false;
//     secondCard = this;
//     lockBoard = true;

//     checkForMatch();
//   }

// SHUFFLE
// // enables ghat no two cards have identical card arrangement

//   function shuffle(arr) {
//     let index = arr.length,
//       temporaryValue,
//       randomIndex;

//     while (index !== 0) {
//       randomIndex = Math.floor(Math.random() * index);
//       index -= 1;
//       temporaryValue = arr[index];
//       arr[index] = arr[randomIndex];
//       arr[randomIndex] = temporaryValue;
//     }
//     return arr;
//   }

// COMPARISON
// function compare(arr) {
// let index = arr.length;
// frontFace = arr[0];
// backFace = arr[1];
// return arr[0].getAttribute('src') === arr[1].getAttribute('src') //yes or no

// }

// Array.from(document.getElementsByClassName("memoryCard")).forEach( card => {
//     card.addEventListener('click', e => {
//         //if(arr = 0; memoryCard.length )
//         console.log('Card Selected', card);
//     })
// })

//   // GAME BEGINS
//   // // enabbles game to initiate

//   function intit() {
//       // shuffle functions
//   }