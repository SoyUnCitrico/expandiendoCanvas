let grid;
let cols;          //Vertical
let fils;          //Horizontal
let resolucion;
let cnt = 0;

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('sketch');
    resolucion = floor(random(5,21));
    cols = floor(width / resolucion);
    fils = floor(400 / resolucion);
    grid = new GridConway(cols, fils , 500, 400, resolucion)
}

function draw() {
  background(0);
    grid.dibujarGrid();
    grid.jugar();
    grid.texto();
}
