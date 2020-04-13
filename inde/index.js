// CANVAS
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")


canvas.width = innerWidth //800
canvas.height = innerHeight //600


// FALLEN STARS
// // CREATION

function Star (x,y,radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
}

Star.prototype.draw = function() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
}

Star.prototype.update = function() {
    this.draw()
}
// // IMPLEMENTATION

let stars 
function init() {
    stars = []
    for (let i = 0; i < 1; i++) {
        stars.push(new Star(canvas.wdith/ 2, 30, 30, 'blue'))
    }
}

// // ANIMATION LOOP

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    stars.forEach(star => {
        star.update();
    });

}






// TO DO:
// next -  animate with buttons , method onkeyydown, onkeypress
// next - request animation frame 
// next - controls keypress up down left right 
// next - move the background when pressing left or right 
// make a square, make it move left and right 