let grid;
let cols = 6;          //Vertical
let fils = 144;          //Horizontal
let resolucion;
let cnt = 0;

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('sketch');
    resolucion = 5;
    grid = new GridConway(cols, fils , 500, 400, resolucion)
}

function draw() {
  background(0);
    grid.dibujarGrid();
    grid.jugar();
    grid.texto();
}
