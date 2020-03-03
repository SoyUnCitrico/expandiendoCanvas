class poligonoRegular {
  //////Constructor del objeto poligonoRegular
	constructor(posX, posY,numLados, lado) {
  // VARIABLES DE OBJETO - DECLARACION Y ASIGNACION
  this.pos = createVector(posX,posY);
  this.numeroLados = numLados;
	this.lado = lado;
  this.posInit = this.pos;
  this.centro;

  this.vertices = [];

  this.angulo = 0;
	
  this.hue = random(360);
  this.alpha = 100;

  this.isVisible = false;

  this.vel = createVector(0,0);
	this.acc = p5.Vector.fromAngle(random(TWO_PI));	 	
  this.acc.setMag(0.1);

  this.setLado(this.posInit, random(50));
  }

  // Dibuja la figura
  drawFigura() {
    if(this.isVisible) {
      push();
      stroke(this.hue,360,360)
      fill(this.hue,360,300,this.alpha);
      beginShape();
      for(let i = 0; i < this.numeroLados; i++) {
      vertex(this.vertices[i][0], this.vertices[i][1]);
      }
      endShape(CLOSE);
      pop();
    }    
  }

  // Dibuja los vertices de la figura
  drawVertice() {
    if(this.isVisible) {
      for(let i = 0; i < this.numeroLados; i++) {
      push();
      strokeWeight(8);
      stroke(this.hue,360,300,300);
      point(this.vertices[i][0], this.vertices[i][1]);
      pop();
      }
    }    
  }

  // Calcula la posicion del centro de la figura
  calculaCenter() {
    let p1 = this.vertices[0];
    let p2 = this.vertices[this.numeroLados/2];
    let center = createVector((p1[0] + p2[0])/2, (p1[1] + p2[1])/2);
    return center;
  }

  // Ajusta el tamaño de la figura de acuerdo a la longitud de su lado
  setLado(posicionInicial, lado) {
    let xp = posicionInicial.x;
    let yp = posicionInicial.y;
    this.vertices.length = 0;
    this.lado = lado;
    for(var i = 0; i < this.numeroLados; i++) {
      xp += ((cos(radians(this.angulo)) * this.lado));
      yp += ((sin(radians(this.angulo)) * this.lado));
      this.vertices.push([xp, yp]);
      this.angulo += 360 / this.numeroLados;
      }
    this.moverCentroSub(posicionInicial);
  }

  //Cambia de estado la variable visible
  visible() {
    this.isVisible = !this.isVisible;
  }

  // Cambia el alpha de la figura
  setAlpha(alpha) {
    this.alpha = alpha;
  }



  mover() {	
  this.vel.add(this.acc);
  for(var i = 0; i < this.numeroLados; i++) {
      // console.log("x",i," ",this.vertices[i][0]);
      // console.log("y",i," ",this.vertices[i][1]);
      this.vertices[i][0] += this.vel.x;
      this.vertices[i][1] -= this.vel.y; 
      this.bordes();
    }
    this.centro = this.calculaCenter();
  // this.vel.setMag(0);
	}

  moverCentroSub(posFinal) {   /*/---------moverCentroSub(Vector) ----/*/
    this.centro = this.calculaCenter();
    let offset = p5.Vector.sub(this.centro, posFinal)
    for(let i = 0; i < this.numeroLados; i++) {
      this.vertices[i][0] = this.vertices[i][0] - offset.x; 
      this.vertices[i][1] = this.vertices[i][1] - offset.y;
    }
  }

  bordes() {
      if(this.centro.y < 0 || this.centro.y > height)
       { this.vel.y *= -1;			}
      
      if(this.centro.x < 0 || this.centro.x > width)
			  {this.vel.x *= -1;	}
    }				
  

  rota(aumentoAng) {
  	this.angulo += aumentoAng;
  }

  setVel() {

  }

  setPos() {

  }

  acelerar() {
	 	
  }

}
