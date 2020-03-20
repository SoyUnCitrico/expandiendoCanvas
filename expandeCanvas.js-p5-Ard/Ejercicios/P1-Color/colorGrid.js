'use strict';
let stepX;
let stepY;

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('sketch');
    noStroke();
    colorMode(HSB, width, height, 100);
}

function draw() {
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    if(stepX <= 0) stepX = 2;
    if(stepY <= 0) stepY = 2;
     
    console.log(stepY);
    for(let gridY = 0; gridY < height; gridY += stepY) {
        for(let gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX, height-gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}