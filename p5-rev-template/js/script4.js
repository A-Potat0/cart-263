"use strict";

let q = 500

function setup() {
    //console.log("potato")
    createCanvas(q,q)
    background("gray")
    //colormode(HSB)


}

let x = 0;
let y = q/3;
let w = (q/3)*2;
let h = 0;
let r = 70;
let g = 50;
let b = 10;
// add MORE


function draw() {
    background("gray")
    h += 1

    if (h > 501){
        h = -w
    }

    drawRect(x,x,r,g)
    drawRect(y,y,r,g,b)
    drawRect(w,h,r,g,b)
    
}

function drawRect(P,O,I,U,Y) {
    push()
    noStroke()
    fill(Y,U,I+(P/2))
    rect(P,0,width/3,height)
    overlap()
    pop()
    
}

function overlap() {
    if(mouseX > 0 && mouseX < q/3){
        
    }
    else if(mouseX > q/3 && mouseX < (q/3)*2){
        
    }
    else if(mouseX > (q/3)*2 && mouseX < (q/3)*3){
        
    }

}