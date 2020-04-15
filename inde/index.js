// CANVAS
const canvas = document.querySelector("canvas");
//const c = canvas.getContext("2d");

const cards = document.querySelectorAll(".memoryCard");

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
let clicks = 0;
let picOne = ''

function gameStarts() {
  document.querySelectorAll(".memoryCard").forEach((card) => {
    card.className += " turned";
  });
}
setTimeout(gameStarts, 3000); //too fast 3k

document.querySelectorAll(".memoryCard").forEach((card) => {
    //Loop through all cards
    card.addEventListener('click',function(e){

        clicks++
        console.log(clicks, this)
        window.t = this
        this.className = "memoryCard";
        checkWin(this)
    })
});

function checkWin(pic){
    if(clicks % 2 !== 0){ //first turn
        picOne = pic
    } else { //second turn
        if(picOne.children[1].src === pic.children[1].src){ 
            // if they are the same 
            // alert 
            setTimeout(function(){
              alert("Your selection matched!")  
            }, 500)
            
        } else {
            setTimeout(function(){
                picOne.className = "memoryCard turned"
            pic.className = "memoryCard turned" 

            },1000)
           
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
