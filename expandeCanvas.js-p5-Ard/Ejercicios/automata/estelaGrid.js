let grid;
let cols = 6;          //Columnas Verticales
let fils = 144;        //Filas Horizontales

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent('sketch');
    
    let resolucion = createVector(20,height/fils);
    grid = new GridConway(cols, fils , 120, height, resolucion)
    // grid.setColor(color(150,130,0));
    //Agregar funcion que permita recolocar el grid de conway
    // en cualquier posicion del canvas
}

function draw() {
  background(0);
  grid.dibujarGrid();
  grid.jugar();
  frameRate(8);
  grid.texto();
}
