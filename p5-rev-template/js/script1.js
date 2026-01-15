"use strict";

let x = 50

function setup() {
    //console.log("potato")
    createCanvas(500,500)
    background("gray")
    //colormode(HSB)

    push()
    noStroke()
    fill(x,50,100)
    ellipse(x,x,x)
    x += 50
    pop()

    push()
    noStroke()
    fill(x,50,100)
    ellipse(x,x,x)
    x += 50
    pop()

    push()
    noStroke()
    fill(x,50,100)
    ellipse(x,x,x)
    x += 50
    pop()

}


//let y = 200
//let w = 0


function draw() {
    

    
    
}

function drawCircle() {
    
}