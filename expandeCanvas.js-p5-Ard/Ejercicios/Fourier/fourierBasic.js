let tiempo = 0;
let timeStep = 0.1;
// let velTime = -0.05;

let radio;
let radioFactor = 50;
let onda = [];
let espyro = [];
let resolucionOnda = 20;

let centroCirculo;
let inicioGrafica;

function setup() {
    let cnv =createCanvas(windowWidth,500);
    cnv.parent('sketch');
    radio = radioFactor * (4 / (1 * PI));
    centroCirculo = createVector(radio * 3, height/2);
    inicioGrafica = createVector(radio * 5.5, height/2);
    frameRate(10);
}

function draw() {
    background(0);

    // Calcula el punto exterior;
    let x = centroCirculo.x;
    let y = centroCirculo.y;

    for(let i = 0; i < resolucionOnda; i ++) {
        let prevX = x;
        let prevY = y;
        let n = i * 2 + 1;
        radio = radioFactor * (4 / (n * PI));
        x += (radio * cos(n*tiempo));
        y += (radio * sin(n*tiempo));

        if(i == resolucionOnda -1) {
            espyro.unshift(x,y);
        }

        if(espyro.length > 500) {
            espyro.pop();
        }
        
        push();
        
        // Dibuja circulo 
        stroke(255,100);
        noFill();
        strokeWeight(1);
        ellipse(prevX, prevY, radio * 2);
        // Dibuja el radio
        line(x,y,prevX,prevY);
        // Dibuja los puntos del centro y del exterior
        strokeWeight(3);
        point(centroCirculo.x,centroCirculo.y);
        point(x,y);
        pop();
        // Dubuja la forma de onda a traves del tiempo
    }
    // Dibuja una linea desde 'y' actual en grafica polar
    // hasta posicion actual en 'y' grafica del tiempo
    stroke(127);
    line(x,y,inicioGrafica.x, onda[0]);
    // Guarda el valor de 'y' del punto exterior
    // del circulo mas pequeño a traves del tiempo
    onda.unshift(y);
    // Limita el numero de valores del arreglo
    if(onda.length > 500) {
        onda.pop();
    }

    push();
    strokeWeight(2);
    stroke(200);
    beginShape();
    noFill();
    for(let i = 0; i < onda.length; i++) {
        vertex(i+inicioGrafica.x,onda[i]);
    }
    endShape();
    pop();

    push();
    strokeWeight(3);
    // beginShape();
    for(let i = 0; i < espyro.length; i+=2) {
        point(espyro[i],espyro[i+1]);
    }
    // endShape();
    pop();

    // Actualiza el tiempo en el canvas
    // tiempo += velTime;
    tiempo += timeStep;
    

}