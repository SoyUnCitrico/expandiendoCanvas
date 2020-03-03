// Variable para el radio inicial de la figura
let radio = 100;
// Variable para indicar la velocidad del incremento del radio
let incrementoRadio = 1;
// Angulo inicial del punto
let angulo = 0;
// Incremento del angulo en cada ocasion
let pasoAngulo = Math.PI/180;
// Dirrecion de incremento del radio
// +1 Incrementa       -1 Disminuye
let direccion = 1;
//Variable para el cambio de color del punto en modo HSB
let h = 0;

let posCentro;

function setup() {
    let cnv = createCanvas(500,500);
    cnv.parent("sketch");

    // Vector que indica el centro del canvas
    posCentro = createVector(width/2, height/2);
    
    // Modificacion del fondo y del formato de color
    // colorMode(HSB);
    // background(0,100,0);
    
    // Color de fondo en modo RGB 
    background(127);
    
}

function draw() {

    // Ecuacion del circulo en coordenadas cartesianas
    let x = posCentro.x + (radio * cos(angulo));
    let y = posCentro.y + (radio * sin(angulo));
    // Ancho del punto
    strokeWeight(1);
    point(x,y);

    //  Aumenta el angulo del punto 
    angulo += pasoAngulo;

    // Varia el radio del circulo

    // radio += (incrementoRadio * direccion);

    // Si el radio del circulo ha llegado al limite 
    // de la pantalla, entonces cambia la direccion de 
    // crecimiento

    // if((radio < 0) || (radio > width/2)) {
    //     direccion *= -1;
    // }

    //Varaibles para cambio de color en modo HSB

    // stroke(h,360,360);
    // h++;
    // h %= 360;
    // console.log(h);
}