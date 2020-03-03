let numLad = 6;
let limFig = 5;

let numLad2 = 10;
let limFig2 = 6;
let nois = 0.7;

let center;
let flores = [];
let triad = []; 

function setup() {
	colorMode(HSB,360);
	let canvas = createCanvas(500,500);
	canvas.parent('sketch');
	// createCanvas(500,500);

	xInit = width/2;
	yInit = width/2;
	// Vector que indica la posicion del centro el canvas
	center = createVector(xInit, yInit);

	/// Creacion de hexagonoss
	for(var i = 0; i < limFig; i ++){
		let lad = noise(nois) * random(width/2 - width/15);
		flores[i] = new poligonoRegular(center.x, center.y, numLad, lad);
		nois += 0.1;
	}

	/// Creacion de triangulos
	yInit = 50;
	for(var i = 0; i < limFig2; i ++){
		let lad = noise(nois) * random(width/12);
		xInit = random(width);
		triad[i] = new poligonoRegular(xInit, yInit, numLad2, lad);
		triad[i].setAlpha(360);
		nois += 0.4;
	}


}

function draw() {
	background(15);
	for(var i = 0; i < limFig; i++) {
		flores[i].drawFigura();
		flores[i].setLado(center, random(height/2));
	}
	for(var i = 0; i < limFig2; i++){
		triad[i].drawVertice();
		triad[i].setLado(center, random(width/18));
	}

}	

function keyTyped() {
	console.log(keyCode);
	if(keyCode == 104) {
		for(var i = 0; i < limFig; i++) {
			flores[i].visible();
	  	}
	  }
	  
	if(keyCode == 116) {
		for(var i = 0; i < limFig2; i++) {
			triad[i].visible();
	  	}
  	}
}
