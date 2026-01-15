"use strict";



function setup() {
    //console.log("potato")
    createCanvas(500,500)
    background("gray")
    //colormode(HSB)


}

let x = 50
let y = 50
let w = 50
let h = 0
let r = 0
//let g = 0
//let b = 0


function draw() {
    background("gray")
    h += 1

    if (h > 501){
        h = -w
    }

    drawRect(x,x,r)
    drawRect(y,y,r)
    drawRect(w,h,r)

    
}

function drawRect(P,O,I) {
    push()
    noStroke()
    fill(I,50,100)
    rect(P,O,P)
    //x += 50
    pop()
    
}

function mouseClicked() {
    x += 1
}

function keyPressed() {
    if (keyCode === 32){
        y += 1
    }
}

function mouseMoved() {
    r = (sin(frameCount * 0.05) * 100) + 100
}