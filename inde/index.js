// CANVAS
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// let backgroundImg = new Image()
// backgroundImg.src="/scM15f.jpg"

let background = {
    x:0,
    y:0
}


// CANVAS BACKGROUND 

function drawBackground(){

    ctx.drawImage(backgroundImg, background.x, background.y)

}

// SQUARE ANIMATION

let squareX = canvas.width/2;  //placed outside because its creating the variable squareX as a axis

function animate(){ // requestAnimationFrame is a loop that callback a function to go over and over again
    window.requestAnimationFrame(animate)
    // drawBackground()
    ctx.clearRect(0,0,canvas.width,canvas.height)  // why i opace, what its doing  // earase what i did previous loop
    ctx.fillRect(squareX++,canvas.height-20,20,20) // fills retangle with x,y, width, and height 
    console.log(squareX)

}
animate()


// KEY EVENT LISTENER 
//let only exist within scope of the page and wont leave outside function

var leftButton = false;
var rightButton = false;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// KEY DOWN

function keyDownHandler(event) {
    if(event.key == "Left") {
        leftButton = true;
    }
    if(event.key == "Right"){
        rightButton = true;
    }
}



// KEY UP

// next step, animate with buttons , method onkeyydown, onkeypress

//zStep 1  - request animation frame 

//Step 2 - controls keypress up down left right 

//Step 3 move the background when pressing left or right 
//make a square, make it move left and right 