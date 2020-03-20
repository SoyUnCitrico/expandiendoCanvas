let espiro;
let centCir;
let rad;
let step;

function setup() {
    smooth();
    let cnv = createCanvas(windowWidth,500);
    cnv.parent('sketch');
    background(255);
    rad = height/2.7;
    step = Math.PI / 360;
    resetState();

}

function draw() {
  espiro.actualizar();
  espiro.dibujarPuntoEspyro();
  espiro.dibujarRadioEspyro();
}

function keyPressed() {
  console.log(key);
  if(key == 'r')
    resetState();
  if(key == 'c')
    background(0);
  if(key == 's')
    saveCanvas('esPyro', 'jpg');
}


function resetState() {
    centCir = createVector(width/2, height/2);
    let angulo = random(Math.PI*2);
    espiro = new Espyro(centCir, rad, step,angulo);
    espiro.setFreq(createVector(1,3));
    espiro.setFreqEspyro(createVector(1,1))
    espiro.setLineColor(255);
    // espiro.setPointColor(255);
    espiro.dibujarCirculo();
    espiro.setPointColor(color(random(200,255),random(200,255),random(200,100)));
    espiro.setLineColor(random(60,100), random(25,50));

}