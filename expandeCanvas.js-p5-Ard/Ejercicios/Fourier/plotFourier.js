let a = 50;
let r = 20;
let grafica;

function setup() {0
    let cnv =createCanvas(windowWidth,500);
    cnv.parent('sketch');
    let centroCirculo = createVector(a*3, height * 0.5);
    let inicioGrafica = createVector(a*6, height * 0.5);
    grafica = new PloterFourier(centroCirculo,inicioGrafica,a,r);
    frameRate(10);
}

function draw() {
    grafica.actualizar();
}
