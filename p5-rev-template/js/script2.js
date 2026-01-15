"use strict";

let x = 50

function setup() {
    //console.log("potato")
    createCanvas(500,500)
    background("gray")
    //colormode(HSB)

    drawEllipse(x,y,w,h,r,g,b)
    drawEllipse(x,y,w,h,r,g,b)
    drawEllipse(x,y,w,h,r,g,b)

}


let y = 200
let w = 0
let h = 0
let r = 0
let g = 0
let b = 0


function draw() {
    

    
    
}

function drawEllipse(P) {
    push()
    noStroke()
    fill(P,50,100)
    ellipse(P,P,P)
    x += 50
    pop()
    
}