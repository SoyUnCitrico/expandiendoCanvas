class Celula {
  constructor(posX, posY, size, estado) {
    this.x = posX;
    this.y = posY;
    this.size = size;
    this.estado = estado;
    this.sigEstado = estado;
    this.color;
  }

  dibujar() {
    if(this.estado == 1) {
      stroke(0);
      fill(255);
      rect(this.x, this.y, this.size.x, this.size.y);
    }
  }

  actualiza() {
    this.estado = this.sigEstado;
  }
  cambiaSigGen(estado) {
    this.sigEstado = estado;
  }

  sigGen() {
    this.sigEstado = this.estado;
  }
}


class GridConway {
  constructor(columnas, filas, anchoGrid, altoGrid,resolucion) {
    this.cols = columnas;
    this.fils = filas;
    this.ancho = anchoGrid;
    this.alto = altoGrid;
    this.resolucion = resolucion;
    this.colorBackground = color(0,80,150);
    this.cnt = 0;

    this.cells = new Array(this.cols);
    for (let i = 0; i < this.cells.length; i++) {
        this.cells[i] = new Array(this.fils);
    }

    // Inicializa el grid de acurdo a los parametros
    // asignados durante la creacion del objeto GridConway
    for (let c = 0; c < this.cols; c++) {
        for(let f = 0; f < this.fils; f++) {
          let x = c * this.resolucion.x;
          let y = f * this.resolucion.y;
          this.cells[c][f] = new Celula(x,y,this.resolucion, floor(random(2)));
        }
    }
  }

  // Acualiza el estado actual de todas las celulas del
  // arreglo con el valor que este marcado en la propiedad 
  // de sigEstado
  actualizar() {
    for (let c = 0; c < this.cols; c++) {
        for(let f = 0; f < this.fils; f++) {
            this.cells[c][f].actualiza();
        }
    }
  }

  // Cuenta el numero de vecinos vivos de la
  // celula en la posicion [x][y] del grid actual
  cuentaVecinos(x,y) {
    let sum = 0;
      for(let i = -1; i < 2; i++) {
          for(let j = -1; j < 2; j++) {
              let c = (x + i + this.cols) % this.cols;
              let f = (y + j + this.fils) % this.fils;
              sum += this.cells[c][f].estado;
          }
      }
    sum -= this.cells[x][y].estado;
    return sum;
  }

  // Computa el siguiente generación de celulas
  // con base en el estado actual del grid
  jugar() {
    for(let c = 0; c < this.cols; c++) {
        for(let f = 0; f < this.fils; f++) {
           //Eres una celula de las orillas?
           if(c == 0 || c == this.cols-1 || f == 0 || f == this.fils-1) {
             this.cells[c][f].sigGen();
            }   else {
              // Cuenta los vecinos de cada Celula
              let vivos = this.cuentaVecinos(c,f);
              // Aplica las reglas

              // Si la celula esta muerta pero tiene
              // exactamente 3 vecinos vivos, la celula
              // revive en la siguiente generación
              if(this.cells[c][f].estado == 0 && vivos ==3) {
                  this.cells[c][f].cambiaSigGen(1);
                }   
              // Si la celula esta viva pero tiene menos de
              // 2 o mas de 3 vecinos vivos, entonces la 
              // celula morira la siguiente generación
              else if(this.cells[c][f].estado == 1 && (vivos < 2 || vivos > 3)) {
                  this.cells[c][f].cambiaSigGen(0);
                }  
              // En otro caso continua igual que el estado actual
              else {
                this.cells[c][f].sigGen();
                }
            } 
            // this.cells[c][f].actualiza();
        }
      }
      // Actualiza el estado actual con el calculado
      this.actualizar();
      // Aumenta el contador que lleva registro de las generaciones computadas
      this.cnt++;
    }

  // Dibuja el grid actual
  dibujarGrid() {
    // Pon un rectangulo de fondo
    push();
    fill(this.colorBackground);
    rect(0,0,this.ancho,this.alto);
    pop();
    for(let c = 0; c < this.cols; c++) {
        for(let f = 0; f < this.fils; f++) {
          // Si el estado actual de la celula es 1
          // la celula se dibujara
          this.cells[c][f].dibujar();
        }
      }
  }

  // Coloca un texto en la pantalla
  texto() {
    text("Frame Rate: ", 200, 50);
    text(floor(frameRate()), 280, 50);
    text("Generación: ", 200, this.alto - 250);
    text(this.cnt, 280, this.alto - 250);
    // text("Frame Rate: ", 20, this.alto + 50)
    // text(floor(frameRate()), 100, this.alto + 50)
    // text("Generación: ", 200, this.alto + 50)
    // text(this.cnt, 280, this.alto + 50)
  }

  setColor(clr) {
    this.colorBackground = color(clr);
  }


}
