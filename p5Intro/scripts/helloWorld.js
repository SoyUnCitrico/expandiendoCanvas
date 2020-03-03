// Inicializacion de la variable "contador"
let contador = 0;

// Funcion que corre solo la primera vez, al inciar el programa.
function setup() {
  let c = createCanvas(500,500);
  c.parent('sketch');
  background(120); 
}

//  Funcion que se repite constantemente 
//  durante la ejecución de un programa
function draw() {
  //  Dibuja un rectangulo
  //  (Posicion en X: 100px, posicion Y: 100px, 
  //  ancho: 50px, alto: 70px)
  rect(100,100,50,70)
  //  Deja un mensaje en la consola del browser
  console.log("Hola Mundo: " + contador);
  //  Actualiza el contador cada que finaliza el código
  //  dentro de draw()
  contador = contador + 1;
} 