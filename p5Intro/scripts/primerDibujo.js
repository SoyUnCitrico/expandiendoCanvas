// Variable para el color de fondo
let colorRojo;
let ancho = 20;
let alto = 10;


function setup() {
  // Crea un epacio de 400 x 400 px donde podras dibujar cosas
  // Este lienzo es asignado a la variable cnv
  let cnv = createCanvas(500, 500);
  //  Cnv se convierte en un objeto del DOM y puede ser asignado
  //  a un "id" en especifico que podrá ser indicado en el archivo css
  cnv.parent("sketch");
  //colorMode(HSB);
  // Elige el modo de ubicacion de los rectangulos,
  // en este caso se posicionan con respecto a su centro
  rectMode(CENTER);
  
  // Para declarar un color es necesario hacerlo
  // con la funcion "color()", los numeros entre
  // el parentesis indicaran los valores, RGB o HSB 
  // segun sea el caso
  colorRojo = color(255, 0, 0);
  background(colorRojo)
}


function draw() {
  //Dibuja un rectangulo en medio de la pantalla 
  rect(width/2, height/2, ancho, alto)
  //Dibuja un cuadrado a la mitad de lo ancho
  rect(width/2, 50, ancho, ancho)
  //Dibuja un cuadrado en la mitad de lo alto
  rect(50, height/2, alto, alto)
  
  // Si el mouse es presionado entonces:
  if(mouseIsPressed) {
    //  Configura la matrix para que las instrucciones
    //  de pintado solo afecten desde aquí push()
    //  hasta donde encuentren la instruccion de cierre pop()
    push();
    // 1 .-Cambia el relleno de las figuras 
    // al color(0,0,255) con transparencia 150 
    // y aplicalo al siguiete elemento a dibujar
    fill(0,0,255,150);
    // 2 .-Dibuja un circulo en la posicion del mouse,
    // el circulo será color azul
    ellipse(mouseX, mouseY, ancho, ancho);  
    // 3 .-Cambia el color del trazo ("stroke) al 
    //  color(0,255,0)
    stroke(0,255,0);
    // 4 .-Cambia el ancho del trazo a 5
    strokeWeight(5);
    // 5 .-Dibuja un punto en medio del circulo anterior 
    //  con el color y ancho del trazo configurando 
    // anteriormente
    point(mouseX, mouseY);
    //   Cierra las instruciciones de pintado
    pop();
  }
}