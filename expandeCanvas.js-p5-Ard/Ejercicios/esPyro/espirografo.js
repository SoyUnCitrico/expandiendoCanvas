let espiros = [];
let espiros2 = [];
let espiros3 = [];
let espiros4 = [];

let centCir,centCir2,centCir3,centCir4;
let rad;
let step;

let resEspiro = 6;
let resEspiro2 = 5;
let resEspiro3 = 4;
let resEspiro4 = 3;

function setup() {
    smooth();
    // let cnv = createCanvas(500,500);
    let cnv = createCanvas(windowWidth,500);
    cnv.parent('sketch');
    background(0);
    // background(100,100,20,50);
    rad = height/6;
    // step = Math.PI / 2880;
    step = Math.PI / 720;
    resetState();

}

function draw() {

  for(let i = 0; i < espiros.lenght; i++) {
    espiros[i].actualizar();
    espiros2[i].actualizar();
    espiros3[i].actualizar();
    espiros4[i].actualizar();
    espiros2[i].rotaAngle(2);
    // espiros[i].dibujarRadio();
  }
  // espiros[0].dibujar();
  espiros[1].dibujarRadio();
  espiros[espiros.lenght-1].dibujarPExt();

  espiros2[1].dibujarRadio();
  espiros2[espiros.lenght-1].dibujarPExt();

  espiros3[1].dibujarRadio();
  espiros3[1].rotaAngle(PI/2);
  espiros3[espiros.lenght-1].dibujarPExt();

  espiros4[1].dibujarRadio();
  espiros4[espiros.lenght-1].dibujarPExt();
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
    centCir = createVector(width/4, height/4);
    centCir2 = createVector(width*3/4, height/4);
    centCir3 = createVector(width/4, height*3/4);
    centCir4 = createVector(width*3/4, height*3/4);

    espiros.lenght = resEspiro;
    espiros2.lenght = resEspiro2;
    espiros3.lenght = resEspiro3;
    espiros4.lenght = resEspiro4;

    espiros[0] = new EspyroCentro(centCir, rad, step);
    espiros2[0] = new EspyroCentro(centCir2, rad, step);
    espiros3[0] = new EspyroCentro(centCir3, rad, step);
    espiros4[0] = new EspyroCentro(centCir4, rad, step);

    // console.log("espiro creado: 0");
    // let multFreq = createVector(2,4);
    // espiros[0].setFreq(multFreq);

    for(let i = 1; i < espiros.lenght; i++) {
      espiros[i] = new EspyroCentro(espiros[i-1].getPuntoExt(), espiros[i-1].getRadio()/random(2,3), espiros[i-1].getStep()*random(3,4));
      espiros[i].setPointColor(color(random(200),random(230),0,80));
      espiros[i].setPointStroke(random(1,2));
      espiros[i].setLineColor(random(70,100),random(29,40));
      espiros[i].setLineStroke(0.1);

      espiros2[i] = new EspyroCentro(espiros2[i-1].getPuntoExt(), espiros2[i-1].getRadio()/random(2,3),espiros2[i-1].getStep()*random(2,4));
      espiros2[i].setPointColor(color(random(200),random(230),random(255),80));
      espiros2[i].setPointStroke(random(1,2));
      espiros2[i].setLineColor(random(70,120),random(20,30));
      espiros2[i].setLineStroke(0.1);

      espiros3[i] = new EspyroCentro(espiros3[i-1].getPuntoExt(), espiros3[i-1].getRadio()/random(3,4), espiros3[i-1].getStep()*random(5,7));
      espiros3[i].setPointColor(color(random(200),random(230),random(255),80));
      espiros3[i].setPointStroke(random(1,2));
      espiros3[i].setLineColor(random(70,100),random(20,30));
      espiros3[i].setLineStroke(0.1);

      espiros4[i] = new EspyroCentro(espiros4[i-1].getPuntoExt(), espiros4[i-1].getRadio()/random(8,9),espiros4[i-1].getStep()*random(6,8));
      espiros4[i].setPointColor(color(random(200),random(230),random(255),80));
      espiros4[i].setPointStroke(random(1,3));
      espiros4[i].setLineColor(random(70,100),random(20,30));
      espiros4[i].setLineStroke(0.1);
    }
}