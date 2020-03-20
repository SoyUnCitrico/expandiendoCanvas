let espiros = [];
let centCir;
let rad;
let step;

let resEspiro = 2;

function setup() {
    smooth();
    // let cnv = createCanvas(500,500);
    let cnv = createCanvas(windowWidth,500);
    cnv.parent('sketch');
    background(0);
    // background(100,100,20,50);
    rad = height/3;
    // step = Math.PI / 2880;
    step = Math.PI / 720;
    resetState();

}

function draw() {

  for(let i = 0; i < espiros.lenght; i++) {
    espiros[i].actualizar();
    espiros[i].rotaAngle(1);
    espiros[i].setLineStroke(random(1));
    // espiros[i].dibujarRadio();
  }
//   espiros[0].dibujarPInt();
//   espiros[1].dibujarPInt();
  espiros[0].dibujarPExt(); 
//   espiros[1].dibujarPExt(); 
  espiros[espiros.lenght-1].dibujarRadio();
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
    espiros.lenght = resEspiro;
    espiros[0] = new EspyroCentro(centCir, rad, step);
    espiros[0].setPointColor(color(random(170,255),random(50,100), random(10,255)));
    espiros[0].setPointStroke(1);
    // console.log("espiro creado: 0");
    let multFreq = createVector(int(random(1,2)),int(random(1,8)));
    espiros[0].setFreq(multFreq);

    for(let i = 1; i < espiros.lenght; i++) {
      espiros[i] = new EspyroCentro(espiros[i-1].getPuntoExt(), espiros[i-1].getRadio()/16, espiros[i-1].getStep()*4);
      espiros[i].setPointColor(color(random(200),random(230),0,80));
      espiros[i].setPointStroke(3);
      espiros[i].setLineColor(random(70,100),random(29,40));
    //   espiros[i].setLineStroke(random(1,2));
    }
}