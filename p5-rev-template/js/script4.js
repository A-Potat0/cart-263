"use strict";

let q = 500

function setup() {
    //console.log("potato")
    createCanvas(q, q)
    background("gray")
    //colormode(HSB)


}

let x = 0;
let y = q / 3;
let w = (q / 3) * 2;
let h = 0;
let r1 = 70;
let g1 = 50;
let b1 = 10;
let r2 = 70;
let g2 = 50;
let b2 = 10;
let r3 = 70;
let g3 = 50;
let b3 = 10;
// add MORE


function draw() {
    background("gray")
    h += 1

    if (h > 501) {
        h = -w
    }

    drawRect(x, x, r1, g1, b1)
    drawRect(y, y, r2, g2, b2)
    drawRect(w, h, r3, g3, b3)

}

function drawRect(P, O, I, U, Y) {
    push()
    noStroke()
    fill(Y, U, I + (P / 2))
    rect(P, 0, width / 3, height)
    overlap()
    pop()

}

function overlap() {
    if (mouseX > 0 && mouseX < q / 3) {
        r1 = 255;
        g1 = 255;
        b1 = 255;
        r2 = 70;
        g2 = 50;
        b2 = 10;
        r3 = 70;
        g3 = 50;
        b3 = 10;
    }
    else if (mouseX > q / 3 && mouseX < (q / 3) * 2) {
        r2 = 255;
        g2 = 255;
        b2 = 255;
        r1 = 70;
        g1 = 50;
        b1 = 10;
        r3 = 70;
        g3 = 50;
        b3 = 10;
    }
    else if (mouseX > (q / 3) * 2 && mouseX < (q / 3) * 3) {
        r3 = 255;
        g3 = 255;
        b3 = 255;
        r1 = 70;
        g1 = 50;
        b1 = 10;
        r2 = 70;
        g2 = 50;
        b2 = 10;
    }

}