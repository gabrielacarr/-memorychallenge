// CANVAS
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")


canvas.width = innerWidth //800
canvas.height = innerHeight //600


// ASTEROID STARS
// // CREATION

function Star (x,y,radius, color) { // creating speed of the asteroid
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity = {
        x: 0,
        y: 3
    }
}

Star.draw = function() { // creating how the asteroid look
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false) // center portion of circle
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

function update() {  // asteroid speed function
    

    // if (this.y + this.radius > canvas.height){
    // }

//     this.y += this.velocity.y // asetroid speed (velocity amount)
}
// // APPLICATION LOOP

let stars // loop for the how many attack and color // asetroid shape will be determined after logic completed 
function init() {
    stars = []
    for (let i = 0; i < 10; i++) {
        // stars.push(new Star(canvas.width/ 2, 30, 30, 'blue'))
        stars.push({
            x: Math.floor(Math.random() * (canvas.width - 30)), 
            y: 30, 
            width: 30, 
            height: 30,
            vx:5,
            vy:2,
            radius:15,
            color: 'black'})
    }
}

// // ANIMATION LOOP
let direction = 1
function animate() { // asetroid will fall but need to make sure it bounces back up and not continue through page
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height) // clearrs the asetroid 
    
    stars.forEach(star => { 
       // update()
       //if (star.y >= canvas.height){
          // star.y = 0  // 
          //direction =  -1
            star.x += star.vx;
            star.y += star.vy;
            console.log(star.y)
            
            // Reduce speed => acceleration due to gravity simulation
            star.vy *= .99;
            star.vy += .25;
            
            // Change direction within colision
            if (star.x + star.radius >= canvas.width || star.x - star.radius <= 0) {
            star.vx = -star.vx;
            }
            if (star.y + star.vy + star.radius >= canvas.height || star.y  + star.vy - star.radius <= 0) {
            star.vy = -star.vy;
            }
      // }

       c.fillRect(star.x, star.y, star.width, star.height) // made a rectangle instead of star... easier for example
    })

}

init()
animate()






// TO DO:
// next -  animate with buttons , method onkeyydown, onkeypress
// next - request animation frame 
// next - controls keypress up down left right 
// next - move the background when pressing left or right 
// make a square, make it move left and right 