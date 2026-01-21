"use strict";

let map = 500

function setup() {
    //console.log("potato")
    createCanvas(map, map)
    background("gray")
    //colormode(HSB)


}

let counter = 1
// let container = constrain(counter, 0, 10)
let button = [];
let light = [];

button = [{
    x: 20, y: 20, size: { x: 40, y: 40 }, r: 255, g: 85, b: 0, number: 1,
},
{
    x: 70, y: 20, size: { x: 40, y: 40 }, r: 255, g: 0, b: 0, number: 2,
}];

function CreateLightOrb() {
    // Create a skyball object with appropriate properties
    const lightOrb = {
        // Position and dimensions
        x: map / 2,
        y: map / 2,
        size: counter * 40,
        a: counter * 10
    };
    return lightOrb;
}

// {
//     x: map / 2, y: map / 2, size: 80, a: 20, number: 2,
// },
// {
//     x: map / 2, y: map / 2, size: 120, a: 30, number: 3,
// },
// {
//     x: map / 2, y: map / 2, size: 160, a: 40, number: 4,
// },
// {
//     x: map / 2, y: map / 2, size: 200, a: 50, number: 5,
// },
// {
//     x: map / 2, y: map / 2, size: 240, a: 60, number: 6,
// },
// {
//     x: map / 2, y: map / 2, size: 280, a: 70, number: 7,
// },
// {
//     x: map / 2, y: map / 2, size: 320, a: 80, number: 8,
// },
// {
//     x: map / 2, y: map / 2, size: 360, a: 90, number: 9,
// },
// {
//     x: map / 2, y: map / 2, size: 400, a: 100, number: 10,
// }

function draw() {
    background("gray")

    for (let instanceRect of button) {
        if (mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60) {
            if (instanceRect.number == 1) {
                displaySquareWhite(instanceRect)
            }
        }
        else if (mouseX > 70 && mouseX < 110 && mouseY > 20 && mouseY < 60) {
            if (instanceRect.number == 2) {
                displaySquareBlack(instanceRect)
            }
        }
        else {
            displaySquare(instanceRect)
        }

    }

    for (let instanceLight of light) {
        displayLight(instanceLight)
    }

    // while (counter <= 2) {
    //     displaySquare(button)
    //     counter += 1
    // }

}

function displaySquare(instanceRect) {
    push()
    noStroke()
    fill(instanceRect.r, instanceRect.g, instanceRect.b)
    rect(instanceRect.x, instanceRect.y, instanceRect.y * 2)
    pop()

}

function displaySquareWhite(instanceRect) {
    push()
    noStroke()
    fill(255, 130, 70)
    rect(instanceRect.x, instanceRect.y, instanceRect.y * 2)
    pop()

}

function displaySquareBlack(instanceRect) {
    push()
    noStroke()
    fill(255, 50, 50)
    rect(instanceRect.x, instanceRect.y, instanceRect.y * 2)
    pop()

}

function displayLight(instanceLight) {
    push()
    // noStroke()
    fill(255, 255, 255, instanceLight.a)
    circle(instanceLight.x, instanceLight.y, instanceLight.size,)
    pop()
}

function checkCollisionWithSquare() {

}

function mouseClicked() {

    if (mouseX > 20 && mouseX < 60 && mouseY > 20 && mouseY < 60) {
        if (counter <= 12) {
            light.push(CreateLightOrb())
            counter += 1.2
        }

        button.r === 255,
            button.g === 255,
            button.b === 255
    }
    else if (mouseX > 70 && mouseX < 110 && mouseY > 20 && mouseY < 60) {
        if (counter >= 1.2) {
            light.pop()
            counter -= 1.2
        }
    }



}