class Flor {
    constructor(posicion, radioPetalos,anguloInicio, color, colorCentro, colorPistilos) {
        // this.posicion = posicion;
        this.posicion = createVector(posicion[0], posicion[1]);

        // Petalos
        this.numPetalos = 1;
        this.radioPetalos = radioPetalos;
        this.anguloInitPetalos = anguloInicio;
        this.anguloFinPetalos = (TWO_PI * 2) + anguloInicio;
        
        this.atomosPetalos = [];
        this.numAtomosPetalos = 360;
        this.separacionAtomosPetalos = (this.anguloFinPetalos - this.anguloInitPetalos) / this.numAtomosPetalos;
        // this.ruidoPetalos = 0.31;
        this.ruidoPetalos = 0.156;
        // this.ruidoPetalos = 0.21;
        // this.ruidoPetalos = 0.075;

        this.colorPetalos = color;
        this.colorPetalosTrazo = this.colorPetalos;
        this.petalosSw = 1.5;

        // Centro
        this.radioCentro = this.radioPetalos * 0.3
        this.anguloInitCentro = this.anguloInitPetalos;
        this.anguloFinCentro = this.anguloFinPetalos;
        
        this.atomosCentro = [];
        this.numAtomosCentro = 50;
        this.separacionAtomosCentro = (this.anguloFinCentro - this.anguloInitCentro) / this.numAtomosCentro;

        this.colorCentro = colorCentro;
        // this.colorCentroTrazo = color(50);
        this.centroSw = 2;
        
        // Pistilos
        this.numPistilos = 1;
        this.radPistilo = this.radioCentro * 0.450;
        this.radioPistilos = this.radioCentro * 1.4;
        this.anguloInitPistilos = this.anguloInitPetalos;
        this.anguloFinPistilos = this.anguloFinPetalos;
        
        this.atomosPistilos = [];
        this.numAtomosPistilos = 51;
        this.separacionAtomosPistilos = (this.anguloFinPistilos - this.anguloInitPistilos) / this.numAtomosPistilos;

        this.colorPistilos = colorPistilos
        this.colorPistilosTrazo;
        this.pistilosSw = 2; 

        this.centroRotando = false;
        this.pistilosRotando = true;
        this.petalosRotando = true;

        this.dibujarTrazoPetalos = false;
        this.dibujarTrazoPistilos = true;
        this.dibujarTrazoCentro = false;
        
        this.initPetalos();
        this.initCentro();
        this.initPistilos();  

    }
    
    initPetalos() {
            let noiseVal = random (10);
            let radVar, thisRad;

            beginShape();
            for(let ang = this.anguloInitPetalos; ang <= this.anguloFinPetalos; ang += this.separacionAtomosPetalos)   {
                // Cambio en la profundidad de los petalos
                radVar = random(20, 15) * this.customNoise(noiseVal);
                // radVar = random(10, 2) * this.customNoise(noiseVal);
                // radVar = 0;
                thisRad = this.radioPetalos + radVar;
                let x = this.posicion.x + (thisRad * Math.cos(ang));
                let y = this.posicion.y + (thisRad * Math.sin(ang));
                this.atomosPetalos.push(x,y);
                noiseVal += this.ruidoPetalos;
            }    
            
    }

    dibujaPetalos()  {
        for(let n = 0; n < this.numPetalos; n++) {
            // Dibuja los petalos
            push();

            if(this.dibujarTrazoPetalos)
                stroke(this.colorPetalosTrazo);
            else 
                noStroke();

            strokeWeight(this.petalosSw);
            fill(this.colorPetalos);
            beginShape();
            for(let i = 0; i < this.atomosPetalos.length; i+=2) {
                curveVertex(this.atomosPetalos[i],this.atomosPetalos[i+1])
            }   
            endShape(CLOSE);
            pop();
        }
    }

    setColorPetalos(color) {
        this.colorPetalos = color;
    }

    setNumPetalos(numero) {
        this.numPetalos = numero;
    }

    setSwPetalos(sW) {
        this.petalosSw = sW;
    }

    setColorTrazoPetalos(color) {
        this.colorPetalosTrazo = color;
    }

    changePetalosTrazo() {
        this.dibujarTrazoPetalos = !this.dibujarTrazoPetalos;
    }


    initPistilos() {
            for(let ang = this.anguloInitPistilos; ang <= this.anguloFinPistilos; ang += this.separacionAtomosPistilos){
                let x = this.posicion.x + (this.radioPistilos * cos(ang));
                let y = this.posicion.y + (this.radioPistilos * sin(ang));
                let w = this.radPistilo * Math.cos(ang);
                let z = this.radPistilo * Math.sin(ang);

                this.atomosPistilos.push(x,y,w,z);
                }
        }


    dibujaPistilos() {
        for(let n = 0; n < this.numPistilos; n++) {
            // Dibuja los pistilos
            push();

            strokeWeight(this.pistilosSw);
            // fill(this.colorPistilos);
            noFill();
            if(this.dibujarTrazoPistilos)
                stroke(this.colorPistilos);
            else
                noStroke();

            for(let i = 0; i < this.atomosPistilos.length; i+=4) {
                ellipse(this.atomosPistilos[i], this.atomosPistilos[i+1], this.atomosPistilos[i+2], this.atomosPistilos[i+3]);
            }
            pop();
        }
    }

    setNumPistilos(numero) {
        this.numPistilos = numero;
    }

    setSwPistilos(sW) {
        this.pistilosSw = sW;
    }

    setColorPistilos(color) {
        this.colorPistilos = color;
    }
    setColorTrazoPistilos(color) {
        this.colorPistilosTrazo = color;
    }

    changePistilosTrazo() {
        this.dibujarTrazoPistilos = !this.dibujarTrazoPistilos;
    }

    initCentro() {
        let x, y;
        for(let ang = this.anguloInitCentro; ang <= this.anguloFinCentro; ang += this.separacionAtomosCentro)   {
            x = this.posicion.x + (this.radioCentro * Math.cos(ang));
            y = this.posicion.y + (this.radioCentro * Math.sin(ang));
            this.atomosCentro.push(x,y);
        }    
    }

    dibujaCentro() {
            // Dibuja el centro de la flor
            push();

            strokeWeight(this.centroSw);       
            if(this.dibujarTrazoCentro) 
                stroke(this.colorCentroTrazo);
            else
                noStroke();
            
            fill(this.colorCentro);
            beginShape();
            // beginShape(POINTS);
            // beginShape(TRIANGLES);
            // beginShape(TRIANGLE_FAN);
            // beginShape(QUAD_STRIP);
            for(let i = 0; i < this.atomosCentro.length; i+=2) {
                vertex(this.atomosCentro[i],this.atomosCentro[i+1]);
            }
            endShape(CLOSE);
            // endShape();

            pop();

    }

    setSwCentro(sW) {
        this.centroSw = sW;
    }
    setColorCentro(color) {
        this.colorCentro = color;
    }
    setColorTrazoCentro(color) {
        this.colorCentroTrazo = color;
    }

    changeCentroTrazo() {
        this.dibujarTrazoCentro = !this.dibujarTrazoCentro;
    }


    // setGiroTodo() {
    //     this.
    // }

    dibujaTodo() {
        this.dibujaPetalos();
        this.dibujaCentro();
        this.dibujaPistilos();

    }

    rotarFlor(paso) {
        this.rotarPetalos(paso);
        this.rotarPistilos(-paso);
    }

    rotarPetalos(paso) {
        this.anguloInitPetalos += paso;
        let ang = this.anguloInitPetalos;
        for(let i = 0; i <= this.atomosPetalos.length - 2; i+=2) {
            let seno = Math.sin(ang);
            let coseno = Math.cos(ang);
            
            let xO = this.atomosPetalos[i] - this.posicion.x;
            let yO = this.atomosPetalos[i+1] - this.posicion.y;

            let xN = xO * coseno - yO * seno;
            let yN = xO * seno + yO * coseno;

            xN += this.posicion.x;
            yN += this.posicion.y; 

            this.atomosPetalos[i] = xN;
            this.atomosPetalos[i + 1] = yN;
        }
    }

    rotarPistilos(paso) {
        this.anguloInitPistilos += paso;
        let ang = this.anguloInitPistilos;
        for(let i = 0; i <= this.atomosPistilos.length - 4; i+=4) {
            let seno = Math.sin(ang);
            let coseno = Math.cos(ang);
            
            let xO = this.atomosPistilos[i] - this.posicion.x;
            let yO = this.atomosPistilos[i+1] - this.posicion.y;

            let xN = xO * coseno - yO * seno;
            let yN = xO * seno + yO * coseno;

            xN += this.posicion.x;
            yN += this.posicion.y; 
            
            this.atomosPistilos[i] = xN;
            this.atomosPistilos[i + 1] = yN;
        }
    }

    changeRotacionPetalos() {
        this.petalosRotando = !this.petalosRotando;
    }

    changeRotacionPistilos() {
        this.pistilosRotando = !this.pistilosRotando;
    }

    changeRotacionCentro() {
        this.centroRotando = !this.centroRotando;
    }

    customNoise(val) {
        // let count = int(val % 12);
        let retVal = pow(sin(val), 3);
        return retVal;
      }
    
      reportaData() {
          return {
              "Posicion": this.posicion.toString(),
              
              "Numero de Petalos": this.numPetalos,
              "Radio de los Petalos" : this.radioPetalos,
              "Angulo Inicio de Petalos": this.anguloInitPetalos,
              "Angulo Fin Petalos": this.anguloFinPetalos,
              "Numero de Atomos Petalos": this.numAtomosPetalos,
              "Separacion Atomos Petalos" : this.separacionAtomosPetalos,
              "Ruido de los Petalos": this.ruidoPetalos,
              "Color Petalos": this.colorPetalos.toString(),
              "Color Trazo Petalos": this.colorPetalosTrazo.toString(),
              "Ancho del Trazo Petalos": this.petalosSw,
              
              "Radio del Centro": this.radioCentro,
              "Angulo Init Centro": this.anguloInitCentro,
              "Angulo FIn Centro": this.anguloFinCentro,
              "Numero Atomos Centro": this.numAtomosCentro,
              "Separacion Atomos Centro": this.separacionAtomosCentro,
              "Color del Centro": this.colorCentro.toString(),
              "Color Trazo Centro": this.colorCentroTrazo.toString(),
              "Ancho del Trazo Centro": this.centroSw,
              
              "Numero de Pistilos": this.numPistilos,
              "Radio de Pistilo": this.radPistilo,
              "Radio de todos los Pistilos": this.radioPistilos,
              "Angulo Init Pistilos": this.anguloInitPistilos,
              "Angulo Fin Pistilos": this.anguloFinPistilos,
              "Numero de atomos Pistilos": this.numAtomosPistilos,
              "Separacion de atomos Pistilos": this.separacionAtomosPistilos,
              "Color de los Pistilos": this.colorPistilos.toString(),
              "Color de Trazo Pistilos": this.colorPistilosTrazo.toString(),
              "Ancho del Trazo Pistilos": this.pistilosSw
        }
    }
    
}

