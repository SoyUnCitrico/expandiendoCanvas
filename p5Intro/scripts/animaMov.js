//  VARIABLES
let posicion;
let size;
let velocidad;
let aceleracion;1
let esRoja = false;  

//  FUNCIONES BASICAS
function setup() {
    let canvas = createCanvas(500,500);
    canvas.parent("sketch");
    background(127);

    posicion = createVector(width/2,  height/2);
    size = createVector(20,20);
    velocidad = createVector(0,2);
    aceleracion = createVector(0,0.1);    

}

function draw() {
    background(127);
    dibujar();
    actualizar();
    checarBorde();
}

// Funcion porpia de p5, si el mouse es presionado 
// cambia el color del criculo
function mousePressed() {
    esRoja =! esRoja;
    console.log(esRoja);
}

// Funcion porpia de p5, se encarga de reportar las
// teclas que se presionan
function keyPressed() {
    if(key == 1) {
        size.set(20,20);
    }
    if(key == 2) {
        size.set(50,50);
    }
    if(key == 3) {
        size.set(80,80);
    }
    if(key == 4) {
        size.set(100,100);
    }
    if(key == 5) {
        size.set(150,150);
    }
    if(key == 6) {
        size.set(200,200);
    }
    // console.log(key);
}


//  FUNCIONES PROPIAS

// Dibuja los circulos en la pantalla
function dibujar() {
    if(esRoja) {
        push();
        fill(255,0,0);
        stroke(255,255,255);
        strokeWeight(2);
        ellipse(posicion.x, posicion.y, size.x, size.y);
        point(posicion.x, posicion.y);
        pop();

    } else {
        push();
        fill(0,130,220);
        stroke(255,0,255);
        strokeWeight(2);
        ellipse(posicion.x, posicion.y, size.x, size.y);
        point(posicion.x, posicion.y);
        pop();
    }

}

// Actualiza la posicion actual del circulo en la pantalla 
function actualizar() {
    // console.log(posicion.x);
    // velocidad.add(aceleracion);
    posicion.add(velocidad);
    // size.add(aceleracion);
}

// Revisa si el circulo se encuentra cerca de algun borde del canvas
function checarBorde() {
    if(posicion.x < 0) {
        posicion.x = width;
    }
    if(posicion.x > width) {
        posicion.x = 0;
    }
    if(posicion.y < 0) {
        posicion.y = height;
    }
    if(posicion.y > height) {
        posicion.y = 0;
    }
}